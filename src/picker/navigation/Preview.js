import React from "react";
import { Card, Inline, Button } from "@sanity/ui";

const Preview = ({ onClick, selected, renderIcon }) => {
  return <Card onClick={onClick}>{renderIcon(selected)}</Card>;
};

export default Preview;
