import React from "react";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`SidebarOption ${active && "SidebarOption--active"}`}>
      <Icon></Icon>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
