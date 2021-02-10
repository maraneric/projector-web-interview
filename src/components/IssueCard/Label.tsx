import React from "react";
import Label from "../../types/Label";
import "./Label.css";

const LabelComponent = ({ label }: { label: Label }) => (
  <div
    className="Label"
    title={label.name}
    style={{ backgroundColor: `#${label.color}` }}
  >
    {label.name}
  </div>
);

export default LabelComponent;
