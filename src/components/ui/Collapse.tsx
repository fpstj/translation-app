import React from "react";

export interface CollapseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  isExpanded: boolean;
}

const Collapse: React.FC<CollapseProps> = (props: CollapseProps) => {
  return (
    <div
      className={
        "collapse" +
        (props.isExpanded ? " show " : " ") +
        (props.className ?? "")
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Collapse;
