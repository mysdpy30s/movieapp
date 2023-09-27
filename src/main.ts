import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root?.append(new App().el); // 이렇게 생성자 함수로 실행해줘야 컴포넌트 내용이 만들어 짐. 그리고 .el을 붙여줌으로써 실제 요소 정보를 갖고 있는 속성 이름을 작성해서 append로 밀어 넣는다.
// root에 ?(선택적 체이닝)을 붙임으로써, root이 있으면 작동을 하고, 없으면 작동하지 않게 함.

router();

// main.js는 index.html에서 <script> 태그를 통해 로딩이 되어 있는 상태. 그리고 main.js는 App.js를 사용해서 화면의 내용을 출력하고(.append(new App().el), 그렇게 내용을 출력하게 되면 'router-view' 라는 요소가 생길 것이고, 그렇게 요소가 생겨야지만 페이지를 구분해주는 routes/index.js가 제대로 동작이 되니까 결국 main.js의 .append 메소드 다음 부분에서야 router()라는 함수를 실행할 수 있다. 그리고 router()라는 함수가 실행이 되면 index.js에서와 같이 어떤 '#/'같은 주소에 따라서 Component: Home이 실행되고, 그 Home이라는 컴포넌트는 this.el.innerHTML에 작성된 내용을 화면에 출력하게 되는 것이다.
