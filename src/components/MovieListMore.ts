import { Component } from "../core/heropy";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      const { page, pageMax } = movieStore.state; // page와 pageMax를 꺼낼건데, 그것은 movieStore에 있는 state 부분에서 꺼내겠다는 의미.
      pageMax > page
        ? this.el.classList.remove("hide")
        : this.el.classList.add("hide"); //아직 더 가져올 검색결과 페이지가 있다면 hide 클래스를 제거해서 내용을 출력해줄 수 있도록 하고, 없다면 hide 클래스를 적용시켜 내용을 숨김처리 한다.
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more..";

    this.el.addEventListener("click", async () => {
      this.el.classList.add("hide"); // 이 코드를 넣어줌으로써 검색결과가 없는 상황에서도 View more 버튼이 나오는 것을 방지해줄 수 있음
      await searchMovies(movieStore.state.page + 1); //항상 1페이지 이후의 다음 페이지들이 출력될 수 있도록. 만약에 이게 2가 되면 movie.js 파일의 10행에 있는 async page <<- 이 매개변수에 2가 들어가게 되면서 그 다음 코드들이 실행되고, 2페이지에 해당하는 영화 정보들이 출력될 것임
    });
  }
}
