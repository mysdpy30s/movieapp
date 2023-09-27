import { Component } from "../core/heropy";
import movieStore, { getMovieDetails } from "../store/movie";

export default class Movie extends Component {
  async render() {
    this.el.classList.add("container", "the-movie");
    this.el.innerHTML = /* html */ `
        <div class="poster skeleton"></div>
        <div class="specs">
            <div class="title skeleton"></div>
            <div class="labels skeleton"></div>
            <div class="plot skeleton"></div>
        </div>
    `;
    await getMovieDetails(history.state.id);
    // history의 id 속성을 받아서 movie.js의 getMovieDetails 함수를 실행하고 그 값을 store.state.movie 로 받아 콘솔에 출력.
    const { movie } = movieStore.state;
    const bigPoster = movie.Poster.replace("SX300", "SX700"); // 이미지 주소를 복사해서 주소창에 붙여넣으면 맨 끝에 SX300 이라는 부분이 나오는데, 여기서 300을 다른 숫자로 바꾸면 그 이미지를 원하는 크기로 리사이징 할 수 있음. 이 개념을 '실시간 이미지 리사이징' 이라고 함. 그래서 우리는 그 기능을 이용해서 지금 보여지는 너비 300 크기의 이미지를 700으로 조절하여 더 높은 해상도로 보일 수 있게 하려는 것.

    this.el.innerHTML = /* html */ `
      <div 
      style="background-image: url(${bigPoster})"
      class="poster"></div>
      <div class="specs">
        <div class="title">
            ${movie.Title}
        </div>
        <div class="labels">
            <span>${movie.Released}</span>
            &nbsp;/&nbsp;
            <span>${movie.Runtime}</span>
            &nbsp;/&nbsp;
            <span>${movie.Country}</span>
        </div>
        <div class="plot">
            ${movie.Plot}
        </div>
        <div>
            <h3>Ratings</h3>
            ${movie.Ratings.map((rating) => {
              return `<p>${rating.Source} - ${rating.Value}</p>`;
            }).join("")}
        </div>
        <div>
            <h3>Actors</h3>
            <p>${movie.Actors}</p>
        </div>
        <div>
            <h3>Director</h3>
            <p>${movie.Director}</p>
        </div>
        <div>
            <h3>Production</h3>
            <p>${movie.Production}</p>
        </div>
        <div>
            <h3>Genre</h3>
            <p>${movie.Genre}</p>
        </div>
      </div>
    `;
  }
}
