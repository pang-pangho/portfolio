# 프로젝트 제목: REACT를 활용한 포트폴리오 사이트

## 주요 라이브러리

1. **`react-fullpage`**: 페이지 섹션을 구성하기 위한 라이브러리로 사용.
   - [GitHub Repo](https://github.com/subtirelum/react-fullpage)

2. **`react-slick`**: 이미지 및 비디오 슬라이드를 쉽게 구현하기 위해 사용.
   - [GitHub Repo](https://github.com/akiran/react-slick)

3. **`react-bootstrap`**: 프로젝트 슬라이드에서 사용된 버튼 컴포넌트를 스타일링하기 위한 Bootstrap 컴포넌트 라이브러리.
   - [GitHub Repo](https://github.com/react-bootstrap/react-bootstrap)

4. **`FontAwesome`**: 아이콘을 삽입하기 위한 라이브러리로 Free Regular 및 Solid 아이콘을 사용.
   - [GitHub Repo](https://github.com/FortAwesome/react-fontawesome)

5. **`animate.css`**: 프로필 부분의 애니메이션 효과를 추가하기 위해 사용.
   - [GitHub Repo](https://github.com/animate-css/animate.css)

## 프로젝트 소개

이 프로젝트는 React를 사용하여 제작한 개인 포트폴리오 웹 사이트입니다. 주요 기능으로는 페이지 섹션별로 나뉜 컴포넌트들을 효과적으로 표현하는 것이 있습니다.

### 페이지 구성

1. **첫 번째 페이지 (Page1)**
   - 사용자 이름, 생년월일, 주소, 연락처, 이메일, 학력 등의 정보를 보여주는 프로필 섹션.

2. **두 번째 페이지 (Page2)**
   - 사용자의 스킬셋을 시각적으로 표현하는 섹션으로 현재 보유한 기술과 향후 습득할 기술을 구분하여 나타냅니다.

3. **세 번째 페이지 (Page3)**
   - 프로젝트 슬라이드로, React를 사용하여 제작한 프로젝트들을 간략하게 소개하는 부분입니다. 각 프로젝트는 비디오 또는 이미지로 표현되며, 제목과 간단한 설명이 함께 제공됩니다.

## 주요 기능 및 구현 내용

1. **타이핑 애니메이션 (`TypingAnimation`)**
   - 페이지 로딩 시 ABOUT ME 텍스트를 타이핑하는 효과를 구현하여 사용자에게 시각적인 흥미를 유발합니다.

2. **프로필 컴포넌트 (`Profile`)**
   - FontAwesome 아이콘 및 연락처 이미지를 통해 사용자의 정보를 시각적으로 제공합니다. 또한, 각 아이콘을 클릭하면 해당 SNS나 이메일로 바로 이동할 수 있도록 구현되어 있습니다.

3. **프로젝트 슬라이드 (`SimpleSlider`)**
   - `react-slick` 라이브러리를 활용하여 프로젝트를 슬라이드로 표현하며, 사용자가 각 프로젝트를 클릭하면 상세 정보를 확인할 수 있는 버튼이 제공됩니다.

4. **프로젝트 슬라이드 컴포넌트 (`ProjectSlide`)**
   - 각각의 프로젝트를 나타내는 컴포넌트로, 제목, 설명, GitHub 링크, 그리고 비디오(또는 이미지)가 포함되어 있습니다. 비디오는 클릭 시 확대/축소되는 기능이 제공됩니다.

## 프로젝트 실행 방법

https://pangtfolio.netlify.app/
