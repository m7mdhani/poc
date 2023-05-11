import React from "react";
import classNames from "classnames";

import "./SidebarItem.css";

const SidebarItem = ({ icon, name, dark }) => {
  const sideItemClasses = classNames("sidebarItem", {
    "sidebarItem-dark": dark,
  });

  const sideTitleClasses = classNames("sidebarItem-title");

  return (
    <div className={sideItemClasses}>
      <img src={icon} alt="icon" />
      <span className={sideTitleClasses}>{name}</span>
    </div>
  );
};

export default SidebarItem;
