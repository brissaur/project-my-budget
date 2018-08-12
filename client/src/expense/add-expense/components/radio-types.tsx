import * as React from "react";
import "./radio-types.css";

import RadioType from "./radio-type";
import { TYPES } from "../../expense-types";

interface IProps<T = string> {
  onChange: (value: T) => any;
  value: T | undefined;
}

const RadioTypes: React.SFC<IProps> = ({ onChange, value }) => {
  global.console.log("value", value);
  return (
    <div className="radio-types">
      {TYPES.map(type => (
        <RadioType
          selected={value === type.value}
          icon={type.icon}
          onClick={() => onChange(type.value)}
        />
      ))}
    </div>
  );
};

export default RadioTypes;
