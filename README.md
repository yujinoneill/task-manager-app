# My-Little-Task-Manager

## About

> 2022.05.19 - 2022.06.27 <br> [태스크 매니저 역할을 하는 대시 보드](https://github.com/yujinoneill/Task-Manager-Dashboard) React로 리팩터링<br> [React로 Task Manager 만들기](https://velog.io/@yujinoneill/series/React-Task-Manager) 👈 블로그 포스팅 바로가기 <br> [My Little Task Manager](https://my-little-task-manager.web.app/) 👈 배포한 페이지 바로가기

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">

![](https://velog.velcdn.com/images/yujinoneill/post/67492d80-51c5-40ac-a983-be93de4e5d44/image.png)

## Features from Original

- 전체 디자인 컨셉
- SideBar, Header, Home, Diary, Profile 구성
- 미디어 쿼리를 이용한 반응형 디자인

## Features from New

- Bootstrap 대신 **Styled-components**로 CSS 디자인
- jQuery 대신 **ES6** 문법 사용 후, **TypeScript**로 변환
- TodoList, WishList, Weather(OpenWeatherMap API), Clock 기능 추가
- **React**를 이용한 Single Page Application
- **Redux-toolkit**과 **Redux-persist** 통해 localStorage에 유저의 데이터 저장
- CSS만으로 구현한 모달창
- useState와 React Router를 이용한 조건부 라우팅
- Firebase 배포

## Details of Project

### Log In / Out

![](https://velog.velcdn.com/images/yujinoneill/post/cfb87f83-dece-48ec-8b4d-923f3b28258c/image.gif)

- 이름을 입력하면 localStorage에 저장되고, 해당 데이터가 존재하면 isLoggedIn이라는 state가 true로 변경되면서 Home을 라우팅
- 로그아웃 버튼을 누르면 localStorage가 비워지고, isLoggedIn이 false로 바뀌며, navigate를 통해 Login 페이지로 보내짐

### 404 Not Found

![](https://velog.velcdn.com/images/yujinoneill/post/b4e4f923-c153-4f5e-8238-65fe83a783c3/image.png)

### Home

![](https://velog.velcdn.com/images/yujinoneill/post/0743aa32-db42-4743-a3a6-edeacbac0e2c/image.gif)

- TodoList와 Progress Bar를 연동하여 할 일의 달성률 표시
- OpenWeatherMap API에서 받아온 날짜, 요일, 날씨 정보와 그에 상응하는 날씨 아이콘
- Date 객체에서 받아온 시간 정보와 CSS 디자인을 통해 구현된 아날로그 시계

### Diary

![](https://velog.velcdn.com/images/yujinoneill/post/03f1b97a-718c-41ac-8f49-09389325e633/image.gif)

- 작성 시간순 정렬, 감정별 정렬 구현
- 일기 상세 페이지는 모달창으로 구현
- 목록 페이지의 필터 컴포넌트는 WishList에서 재사용, 새로운 일기 작성 에디터는 일기 수정 페이지에서 재사용

### WishList

![](https://velog.velcdn.com/images/yujinoneill/post/bf5966d5-372c-4bf0-9403-a6c402799dd9/image.gif)

- 추가 및 상세, 수정 페이지 모달창으로 구현
- GET 버튼을 통해 수정 페이지에 들어가지 않고도 구매 여부 변경 가능

### Developer

![](https://velog.velcdn.com/images/yujinoneill/post/62df0b7f-1692-4a38-82b5-39dc10c7a1a3/image.png)

- DB에 연결해서 회원가입 기능을 구현했다면 유저의 프로필로 사용되었을 페이지
- 만든 게 아깝기도 하고 나중에 기능을 추가하면 쓸 수 있도록 개발자 정보가 담긴 정적 페이지로 활용
