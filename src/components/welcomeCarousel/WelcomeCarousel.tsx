import React, { useState } from "react";
import "./welcomeCarousel.scss";
import { HelpItem } from "../../interfaces";
import { GoPrimitiveDot } from "react-icons/go";

export const WelcomeCarousel = () => {
  const [listHelp, setListHelp] = useState<HelpItem[]>([
    {
      active: true,
      title:
        "1Very simple Things To-Do List.  Helps you to manage yourdaily life, without any hassle! ",
    },
    {
      active: false,
      title:
        "2Very simple Things To-Do List.  Helps you to manage yourdaily life, without any hassle! ",
    },
    {
      active: false,
      title:
        "3Very simple Things To-Do List.  Helps you to manage yourdaily life, without any hassle! ",
    },
  ]);

  const changeActiveListHelp = (index: number) => {
    setListHelp((helps) =>
      [...helps].map((h, i) => ({
        ...h,
        active: i === index ? true : false,
      }))
    );
  };

  const autoChangeTitleHelp = () => {
    const currentIndex = listHelp.findIndex((help) => help.active);
    const newIndex = currentIndex === 2 ? 0 : currentIndex + 1;
    changeActiveListHelp(newIndex);
  };

  setTimeout(() => autoChangeTitleHelp(), 3000);
  const renderHelpItem = listHelp.map((h, index) => (
    <div className={`help-item ${h.active ? "active" : ""}`} key={index}>
      {h.title}
    </div>
  ));

  const renderDotItem = listHelp.map((h, index) => (
    <div
      className={`help-dot ${h.active ? "active" : ""}`}
      key={index}
      onClick={() => changeActiveListHelp(index)}
    >
      <GoPrimitiveDot />
    </div>
  ));

  return (
    <div className="welcome-carousel">
      <div className="welcome-carousel-container">
        <div className="welcome-carousel-container-help">{renderHelpItem}</div>
        <div className="welcome-carousel-container-dot">{renderDotItem}</div>
      </div>
    </div>
  );
};
