import { Component } from "../core/heropy";
import { SimpleMovie } from "../store/movie";

interface Props {
  [key: string]: unknown; // 인덱싱 가능한 타입으로 이렇게 설정해줌
  movie: SimpleMovie;
}

export default class MovieItem extends Component {
  public props!: Props;
  constructor(props: Props) {
    //MovieItem이 생성자 함수로 호출될 때, props로 부모 컴포넌트->자식 컴포넌트로 정보를 받아올거고 그 정보를 상속하는 Component 클래스로 super 함수를 통해서 props와 tagName을 전달
    super({
      props,
      tagName: "a",
    });
  }
  render() {
    const { movie } = this.props; // 객체 구조 분해 할당

    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    // 'a' 태그로 만든 this.el 요소에다가 setAttribute라는 이름의 메소드를 추가해서 'href'속성의 값을 지정. & 여기서 MovieItem으로 만든 컴포넌트는 a 태그로 만들어져있고 그 태그로 만들어진 this.el 요소는 href 속성(어떤 페이지로 이동할 것인지에 대한 경로를 명시)을 setAttribute 메소드를 이용해서 추가하겠다는 의미.
    this.el.classList.add("movie");
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /* html */ `
        <div class="info">
            <div class="year">
                ${movie.Year}
            </div>
            <div class="title">
                ${movie.Title}
            </div>


  </div>
    `;
  }
}
