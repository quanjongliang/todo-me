import React from "react";
import "./loading.scss";

export const LoadingScreen = () => {
  return (
    <div className="loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
