import { createRouter } from "../core/heropy";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home }, //다양한 페이지를 만들것이기 때문에 배열 데이터로 만들어주고 그 안에 객체 데이터를 넣어주기. 그리고 이 줄에 있는 코드는 Home이라는 페이지를 만드는 코드임. 이 Home이라는 컴포넌트는 주소에 #/ 와 같이 해시가 들어있을 때 출력하게 될 것.
  { path: "#/movie", component: Movie },
  // MovieItem.js 에서 보면, this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`) 여기에 명시된것처럼 #/movie 라는 페이지로 이동하게 만들고, 그것의 상세페이지를 관리할 것이기때문에 그거에 맞춰 path에 #/movie라고 같이 동일하게 맞춰줌.
  { path: "#/about", component: About },
  { path: ".*", component: NotFound },
]);

// 우리 프로젝트에서 관리하는 페이지들을 정리해놓은 파일이 바로 이 index.js임.
// 그리고 여기에 쓰여진 { path } 부분은 heropy.js에서 2) 현재 라우트 정보를 찾아서 렌더링! 이라는 부분에 쓰여진 코드의 .find 메소드를 통해 현재 페이지 위치와 위에 쓰여진 path가 서로 동일한지 체크 후 맞는 페이지를 렌더링 해줌. 근데 만약에 첫번째부터 세번째까지 다 돌았는데 맞는게 없으면 NotFound로 넘어오는 것임. 그리고 여기 Path에 쓰인 정규 표현식 .*은 . = 모든 문자와 일치하는 조건인데 한 글자만 기준이 되면 안되니까 뒤에 *까지 붙여줘서 모든 문자를 일치 기준으로 본 것.
