import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import planetPoint from "./planetPoint.mp4";
import StarbucksVideo from "./Starbucks.mp4";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // 이 부분을 적절한 파일 경로로 변경하세요

// 새로운 컴포넌트 추가
const ProjectSlide = ({ videoSource, title, description, githubLink }) => {
  const [isVideoExpanded, setVideoExpanded] = useState(false);

  const handleVideoClick = () => {
    setVideoExpanded(!isVideoExpanded);
  };

  return (
    <div className={`project_Title ${isVideoExpanded ? "expanded" : ""}`}>
      <video
        muted
        autoPlay
        loop
        className={`project_img ${isVideoExpanded ? "expanded" : ""}`}
        onClick={handleVideoClick}
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      <div
        className={`project_description_title ${
          isVideoExpanded ? "hidden" : ""
        }`}
      >
        <b>{title}</b>
        <div className="project_description">
          {description}
          <div className="project_Btn">
            <Button
              className="project_Btn_Size"
              variant="dark"
              onClick={() => {
                window.location.href = githubLink;
              }}
            >
              자세히 보기 ▼ README
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <ProjectSlide
          videoSource={planetPoint}
          title="플래닛포인트[캡스톤디자인]"
          description={`지구온난화의 심각성을 알리는 환경 보호 비영리 사이트로 캡스톤 디자인 강의로 진행한 프로젝트입니다.
          팀장 및 프론트엔드 역할로 참여했으며 저의 첫 팀 프로젝트라는 점에서 애정이 많은 프로젝트입니다.
           HTML, CSS, JS 등 바닐라로 진행하였으며 BOOTSTRAP, JQUERY, SWIPER 등의 라이브러리 활용으로 다양한 경험을 해보자는 목적이 있었습니다.`}
          githubLink="https://github.com/pang-pangho/project"
        />

        <ProjectSlide
          videoSource={StarbucksVideo}
          title="스타벅스 클론코딩"
          description={`프론트엔드를 공부하며 시작한 첫 프로젝트입니다. 
          HTML, CSS, JS 등 바닐라로 진행하였으며, GSAP,Lodash,Swiper,ScrollMagic 등의 여러 라이브러리를 활용하여 시각적인 효과를 적용하였습니다.`}
          githubLink="https://github.com/pang-pangho/starbucks"
        />

        {/* 추가적인 슬라이드도 필요에 따라 ProjectSlide 컴포넌트를 활용하여 추가할 수 있습니다. */}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
