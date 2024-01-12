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
        <Section>page 2</Section>
        <Section>Page 3</Section>
      </SectionsContainer>
    </div>
  );
}
function Page1() {
  return (
    <div className="container">
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

export default App;
