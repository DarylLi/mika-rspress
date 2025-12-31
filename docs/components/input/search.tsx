import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, GetProps } from 'mika-design';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = <AudioOutlined style={{ fontSize: 16, color: '#ffc6e6' }} />;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const App: React.FC = () => (
  <Space vertical>
    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    <Space.Compact>
      <Space.Addon>https://</Space.Addon>
      <Search placeholder="input search text" allowClear onSearch={onSearch} />
    </Space.Compact>

    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);

export default App;