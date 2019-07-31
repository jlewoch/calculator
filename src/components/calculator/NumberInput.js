import React from 'react';
import { Input } from 'antd';
const NumberInput = ({ onChange, value, disp }) => {
  return (
    <Input
      ref={disp}
      className="inp"
      onChange={onChange}
      value={value}
      placeholder="0"
    />
  );
};

export default NumberInput;
