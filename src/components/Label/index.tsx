import React from "react";
import Label from "../../types/Label";
import "./Label.css";

// Styling labels with the background color as the supplied color works great
// for light colors, but doesn't look very good with darker colors. It would be
// best to test the lightness of the color and use a white foreground color if
// the label color is darker.
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
