import React from 'react';
import { Flex, Space, Table, TableProps, Tag } from 'mika-design';
import './table.scss';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    children?: React.ReactNode;
}
export interface TableListProps {
    columns?: TableProps<DataType>['columns'];
    data?: DataType[];
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const defaultColumns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_: unknown, { tags }: DataType) => (
            <Flex gap="small" align="center" wrap>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </Flex>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: unknown, record: DataType) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const defaultData: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const App: React.FC<TableListProps> = ({ columns = defaultColumns, data = defaultData, style, children }) => { return <>{children}<Table<DataType> columns={columns} dataSource={data} style={style} /></> };

export default App;