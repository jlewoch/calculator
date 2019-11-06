import React from 'react';
import { Button } from 'antd';

const Numpad = ({ onClick, del, clear, clearmem }) => {
  const buttons = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="container buttons">
      <Button className="btn" onClick={clear}>
        C
      </Button>
      <Button className="btn" onClick={clearmem}>
        CE
      </Button>
      <Button className="btn" onClick={del}>
        Del
      </Button>
      {buttons.map(i => (
        <Button value={i} className="btn" onClick={onClick}>
          {i}
        </Button>
      ))}
      <Button value={0} id="zero" className="btn" onClick={onClick}>
        0
      </Button>
      <Button value="." id="dec" className="btn" onClick={onClick}>
        .
      </Button>
    </div>
  );
};

export default Numpad;
