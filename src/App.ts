import { Component } from "./core/heropy";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view"); //html에 존재하지 않는 요소 이름을 만들어낼 때는 반드시 이렇게 두 개 이상의 단어를 조합할 것.
    this.el.append(theHeader, routerView, theFooter);
  }
}

// 각 컴포넌트가 아닌, 어느 경우에서도 항상 출력되게 하고 싶은 컨텐츠는 바로 이 App.js 파일에 다 추가하면 됨. (최상위 파일이기 때문)
