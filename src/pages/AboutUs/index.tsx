import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
const Index: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <span>about</span>
      <Button size="small" type="link" onClick={() => history.goBack()}>
        返回
      </Button>
    </div>
  );
};

export default Index;
