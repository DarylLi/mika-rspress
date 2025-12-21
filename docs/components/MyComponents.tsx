import React from 'react';
import { Button } from 'antd';

export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>计数器组件</h3>
      <p>当前计数: {count}</p>
      <Button type='primary' onClick={() => setCount(count + 1)}>
        增加
      </Button>
    </div>
  );
}