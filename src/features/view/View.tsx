import React from "react";
import { NavbarView } from "../../components";
import "./view.scss";

export const View = () => {
  return (
    <div className="view">
      <NavbarView />
      <div className="view-container">View</div>
    </div>
  );
};
