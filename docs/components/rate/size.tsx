import React from 'react';
import { Flex, Rate } from 'mika-design';

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Rate size="large" />
    <Rate />
    <Rate size="small" />
  </Flex>
);

export default App;