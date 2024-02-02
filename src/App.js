// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import { SectionsContainer, Section } from "react-fullpage";
import TypingAnimation from "./typing";
import UseStackComponent from "./useStack";
import Profile from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import TypingAnimation2 from "./typing2";
import SimpleSlider from "./SimpleSlider";
import TypingAnimation3 from "./TypingAnimation3";
import insta from "./instagram.png";
import kakaotalk from "./kakao-talk.png";
import html5 from "./html5.png";
import css from "./css.png";
import js from "./js.png";
import git from "./git.png";
import github from "./git-hub.png";
import jquery from "./jquery.png";
import bootstrap from "./bootstrap.png";
import netlify from "./Netlify-Logo.wine.png";
import react from "./react.png";
import typescript from "./typescript.png";
import nextJS from "./next.jpg";
import figma from "./figma.png";
let options = {
  anchors: ["sectionOne", "sectionTwo", "sectionThree"],
};

function App() {
  return (
    <div className="App">
      <SectionsContainer {...options}>
        <Section>
          <Page1 />
        </Section>
        <Section>
          <Page2 />
        </Section>
        <Section>
          <Page3 />
        </Section>
      </SectionsContainer>
    </div>
  );
}
function Page1() {
  return (
    <div className="container1">
      <div className={`content`}>
        <div className="spread-underline">
          <TypingAnimation />
        </div>
        <div className="profile-container">
          <div className="profile">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="container2">
      <div className={`content`}>
        <div className="spread-underline">
          <TypingAnimation2 />
        </div>
      </div>
      <div className="skillBox1">
        <div className="skillTitle">Current Skills</div>
        <div className="skillcontainer">
          <div className="skillIcon GreyBox">
            <img src={html5} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={css} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={js} className="stackIcon" />
          </div>
        </div>

        <div className="skillcontainer line">
          <div className="skillIcon GreyBox">
            <img src={git} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={github} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={jquery} className="stackIcon" />
          </div>
        </div>

        <div className="skillcontainer line third">
          <div className="skillIcon GreyBox">
            <img src={react} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={netlify} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={bootstrap} className="stackIcon" />
          </div>
        </div>
      </div>

      <div className="skillBox2">
        <div className="skillTitle2">Upcoming Skills</div>
        <div className="skillcontainer">
          <div className="skillIcon GreyBox">
            <img src={typescript} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={nextJS} className="stackIcon" />
          </div>
          <div className="skillIcon GreyBox">
            <img src={figma} className="stackIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <div className="container3">
        <div className="spread-underline">
          <TypingAnimation3 />
        </div>
        <SimpleSlider />
      </div>
    </div>
  );
}
export default App;
