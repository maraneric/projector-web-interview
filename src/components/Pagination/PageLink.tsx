import React from "react";
import "./PageLink.css";

const PageLink = ({
  page,
  disabled,
  onSelectPage,
}: {
  page: number;
  disabled: boolean;
  onSelectPage: (page: number) => void;
}) => (
  <button
    className="PageLink"
    onClick={() => onSelectPage(page)}
    disabled={disabled}
  >
    {page}
  </button>
);

export default PageLink;
