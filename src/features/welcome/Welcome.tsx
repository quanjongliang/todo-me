import React, { useEffect, useState } from "react";
import {
  ButtonLoginSocial,
  WaveBackground,
  WelcomeCarousel,
} from "../../components";
import "./welcome.scss";
import { MdNavigateNext } from "react-icons/md";
import { ImFacebook, ImGoogle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setLoading } from "../loading/loadingSlice";

const socialButton = [
  {
    name: "Facebook",
    color: "#6969ff",
    colorIcon: "#3069ff",
    icon: <ImFacebook />,
  },
  {
    name: "Google",
    color: "rgb(227, 108, 98)",
    colorIcon: "#ea4335",
    icon: <ImGoogle />,
  },
];

export const Welcome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [next, setNext] = useState<{ active: boolean }[]>([
    { active: true },
    { active: true },
    { active: true },
  ]);

  const pushToMainView = () => {
    dispatch(setLoading());
    setTimeout(() => {
      dispatch(setLoading());
      navigate("/view");
    }, 1000);
  };

  const handleNextAnimation = () => {
    const currentCount = [...next].reduce(
      (count, current) => (current.active ? count + 1 : count),
      0
    );
    const newCount = currentCount === next.length ? 0 : currentCount + 1;
    setNext(
      [...next].map((item, index) => ({
        ...item,
        active: index < newCount ? true : false,
      }))
    );
  };
  setTimeout(() => handleNextAnimation(), 1000);

  const renderNextSkip = [...next].map((e, i) => (
    <span key={i} className={`next-icon ${e.active ? "active" : ""}`}>
      <MdNavigateNext size="20px" color="white" />
    </span>
  ));

  const renderButtonSocial = [...socialButton].map((b, index) => (
    <ButtonLoginSocial data={b} key={index} />
  ));
  return (
    <div className="welcome">
      <WaveBackground />
      <div className="welcome-container">
        <p className="welcome-container-skip" onClick={pushToMainView}>
          <span className="skip-text">Skip</span>
          {renderNextSkip}
        </p>
        <div className="welcome-container-title">
          <div className="welcome-title">
            <p>Hi there! Welcome to</p>
          </div>
          <div className="welcome-logo">
            <h1>TTD</h1>
          </div>
        </div>
        <WelcomeCarousel />
        <div className="welcome-container-button">
          <div className="welcome-container-button-wrapper">
            {renderButtonSocial}
          </div>
        </div>
      </div>
    </div>
  );
};
