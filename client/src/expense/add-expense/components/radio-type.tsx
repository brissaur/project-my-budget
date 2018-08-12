import * as React from "react";
import "./radio-type.css";

interface IProps {
  icon: any; // @robin
  onClick: () => any;
  selected: boolean;
}

const RadioType: React.SFC<IProps> = ({ icon: Icon, onClick, selected }) => {
  const classes = ["radio-type", selected ? "active-radio-type" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <Icon onClick={onClick} className={classes} />
    </div>
  );
};

export default RadioType;
