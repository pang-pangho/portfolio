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
import Current from "./SKILLS.png";
import Upcoming from "./Upcoming.png";
import SimpleSlider from "./SimpleSlider";
import TypingAnimation3 from "./TypingAnimation3";
import insta from "./instagram.png";
import github from "./git-hub.png";
import kakaotalk from "./kakao-talk.png";
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
        <img src={Current} className="skill"></img>
        <div className="skillTitle">Current Skills</div>
      </div>
      <div className="skillBox2">
        <img src={Upcoming} className="skill2"></img>
        <div className="skillTitle2">Upcoming Skills</div>
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
