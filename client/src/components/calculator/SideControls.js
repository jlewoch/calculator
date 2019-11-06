import React from 'react';
import { Button } from 'antd';
const SideControls = ({ controlPress, equals }) => {
  return (
    <div className="container operators">
      <Button value="/" onClick={controlPress} className="btn">
        &#x00F7;
      </Button>
      <Button value="*" onClick={controlPress} className="btn">
        &#215;
      </Button>
      <Button value="-" onClick={controlPress} className="btn">
        &#x02212;
      </Button>
      <Button value="+" onClick={controlPress} className="btn">
        &#x0002B;
      </Button>
      <Button value="=" onClick={controlPress} className="btn">
        &#x0003D;
      </Button>
    </div>
  );
};

export default SideControls;
