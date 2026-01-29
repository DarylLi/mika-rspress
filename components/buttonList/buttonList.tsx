import React from 'react';
import { Button, Flex } from 'mika-design';

export interface ButtonListProps {
    className?: string;
    style?: React.CSSProperties;
    type?: 'primary' | 'snow' | 'default' | 'dashed' | 'text' | 'link';
    children?: React.ReactNode;
}

const ButtonList: React.FC<ButtonListProps> = (props) => {
    const { children, className, style, type } = props;
    return (
        <Flex gap="small" wrap className={className} style={style}>
            <div>
                <span>This is Button List{type ? ` [${type}]` : ''}~!!</span>
                {children}
                <Button type="primary">Primary Button</Button>
                <Button type="snow">Snow Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        </Flex>
    );
};

export default ButtonList;