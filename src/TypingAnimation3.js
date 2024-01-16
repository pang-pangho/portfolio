import React, { useState, useEffect } from "react";
import "./App.css";
const TypingAnimation3 = () => {
  const [content, setContent] = useState("PROJECTS");
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (currentIndex < content.length) {
        let currentChar = content[currentIndex];

        // 줄 바꿈 처리
        if (currentChar === "\n") {
          setDisplayText((prevText) => prevText + "<br/>");
        } else {
          setDisplayText((prevText) => prevText + currentChar);
        }

        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // 모든 텍스트가 타이핑되면 clearTimeout을 통해 타이머 정리
        clearTimeout(typingTimeout);
      }
    }, 200);

    return () => clearTimeout(typingTimeout);
  }, [content, currentIndex]);

  return (
    <div
      className="text custom-font"
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};

export default TypingAnimation3;
