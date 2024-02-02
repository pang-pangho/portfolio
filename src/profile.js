import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import insta from "./instagram.png";
import github from "./git-hub.png";
import kakaotalk from "./kakao-talk.png";
import "./App.css";
function Profile() {
  return (
    <div
      className="animate__animated animate__fadeInDown"
      style={{ animationDelay: "2.5s" }}
    >
      <div className="aboutme-package">
        <div className="name">
          <FontAwesomeIcon icon={faUser} /> 　이름
          <div className="value">김광호</div>
        </div>
      </div>
      <div className="aboutme-package">
        <div className="birth">
          <FontAwesomeIcon icon={faCalendar} /> 　생년월일
          <div className="value">2000.04.23</div>
        </div>
      </div>
      <div className="aboutme-package">
        <div className="address">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 　주소지
          <div className="value">강원특별자치도 춘천시</div>
        </div>
      </div>
      <div className="aboutme-package">
        <div className="contact">
          <FontAwesomeIcon icon={faPhone} />　 연락처
          <div className="value">010-7335-8035</div>
        </div>
      </div>
      <div className="aboutme-package">
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />　 이메일
          <div className="value">day_adm@naver.com</div>
        </div>
      </div>
      <div className="aboutme-package">
        <div className="education">
          <FontAwesomeIcon icon={faGraduationCap} /> 　학력
          <div className="value">한림대학교(재학중)</div>
        </div>
      </div>
      <div className="contact_container">
        <img
          src={insta}
          className="contact_img"
          onClick={() => {
            window.open("https://www.instagram.com/pangho.a/", "_blank");
          }}
          alt="Instagram"
        />
        <img
          src={kakaotalk}
          className="contact_img"
          onClick={() => {
            window.open("https://open.kakao.com/o/szm5Uv4f", "_blank");
          }}
          alt="KakaoTalk"
        />
        <img
          src={github}
          className="contact_img"
          onClick={() => {
            window.open("https://github.com/pang-pangho", "_blank");
          }}
          alt="GitHub"
        />
      </div>
    </div>
  );
}

export default Profile;
