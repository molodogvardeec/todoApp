import { Badge } from "@mantine/core";
import React from "react";


const PriorityBadge = ({ option }) => {
  return <Badge color={option.color}>{option.label}</Badge>;
};

export default PriorityBadge;
