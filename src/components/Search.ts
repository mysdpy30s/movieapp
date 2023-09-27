import { Component } from "../core/heropy";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
           <input 
           value="${movieStore.state.searchText}"
           placeholder="Enter the movie title to search!">
           <button class="btn btn-primary">
            Search!
           </button>
        `;
    // 위의 input value에 ${movieStore.state.searchText} 를 넣어줌으로써, 검색 후에 원하는 영화 상세페이지를 들어갔다가 다시 뒤로가기 했을 때, 여전히 검색창에 내가 입력했던 검색어가 남아있을 수 있도록 만들어주는것임.

    const inputEl = this.el.querySelector("input");
    inputEl?.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        //사용자가 Enter를 누르고, SearchText에 검색할 영화명이 들어가 있는 경우에만 아래 searchMovies(1)을 실행함. 여기서 trim 메소드는 해당 문자열 사이의 공백을 다 제거해줌.
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector(".btn");
    btnEl?.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1); //버튼을 클릭했을 때, searchText에 검색할 영화명이 들어가 있으면 searchMovies(1)을 실행.
      }
    });
  }
}
