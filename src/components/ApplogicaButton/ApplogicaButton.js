import React from "react";
import classNames from "classnames";

import "./ApplogicaButton.css";

const ApplogicaButton = ({ children, dark }) => {
  const classes = classNames("applogica-btn", { "applogica-btn-dark": dark });

  return <button className={classes}>{children}</button>;
};

export default ApplogicaButton;
