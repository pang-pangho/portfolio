import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import planetPoint from "./planet-point.png";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const SimpleSlider = () => {
  // 옵션
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
        <div className="project_Title">
          <img src={planetPoint} className="project_img"></img>
          <div className="project_description_title">
            <b>플래닛포인트[캡스톤디자인]</b>
            <div className="project_description">
              <br></br> 지구온난화의 심각성을 알리는 환경 보호 비영리 사이트로
              캡스톤　디자인 강의로 진행한 프로젝트입니다.<br></br>
              <br></br>
              팀장 및 프론트엔드 역할로 참여했으며 저의 첫 팀 프로젝트라는
              점에서 애정이 많은 프로젝트입니다.<br></br>
              <br></br>
              <br></br>
              HTML,CSS,JS 등 바닐라로 진행하였으며
              <span className="red"> BOOTSTRAP, JQUERY, SWIPER</span>
              등의 라이브러리 활용으로 다양한 경험을 해보자는 목적이 있었습니다.
              <br></br>
              <br></br>
              <br></br>{" "}
              <Button
                variant="dark"
                onClick={() => {
                  window.location.href =
                    "https://github.com/pang-pangho/project";
                }}
              >
                자세히 보기 ▶ README
              </Button>
            </div>
          </div>
        </div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
