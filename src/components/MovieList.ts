import { Component } from "../core/heropy";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render(); // "movies"를 subscribe로 감시하여 "movies"라는 상태가 서버에서 영화정보를 가져와서 갱신될때마다 콜백 함수가 실행되는 구조. 그래서 아래 render() 부분의 함수가 다시 동작. 그리고 그렇게 해서 반환된 내용은 아래의 div "movies"에 출력됨.
    });
    movieStore.subscribe("loading", () => {
      this.render();
    });
    movieStore.subscribe("message", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
          ${
            movieStore.state.message
              ? `<div class="message">${movieStore.state.message}</div>`
              : '<div class="movies"></div>'
          }
          <div class="the-loader hide"></div>
        `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl?.append(
      //만약에 해당하는 검색 결과가 없을 경우, 이 append 메소드가 제대로 실행되지 않는다. 따라서 오류를 막기위해 '선택적 체이닝' 기법. 즉 ? 를 해당하는 요소이름 뒤에 붙여서, moviesEl이 있을땐 append를 진행하도록 함.
      ...movieStore.state.movies.map(
        (movie) =>
          new MovieItem({
            movie, // 원래는 movie: movie인데 이름이 같을 경우 :부터 뒤 이름 생략 가능. 그래서 movie만 남음
          }).el
      )
    );
    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loaderEl?.classList.remove("hide")
      : loaderEl?.classList.add("hide");
  }
}
