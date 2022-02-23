import React, { ReactElement } from "react";
import "./buttonLoginSocial.scss";

interface Props {
  data: {
    name: string;
    color: string;
    colorIcon: string;
    icon: ReactElement;
  };
}

export const ButtonLoginSocial = (props: Props) => {
  const { color, colorIcon, icon, name } = props.data;
  return (
    <div className="button-login">
      <div className="button-login-container" style={{ background: color }}>
        <div
          className="button-login-container-icon"
          style={{ background: colorIcon }}
        >
          {icon}
        </div>
        <div className="button-login-container-name">{name.toUpperCase()}</div>
      </div>
    </div>
  );
};
