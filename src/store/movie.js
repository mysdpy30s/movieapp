import { Store } from "../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {}, // 영화의 상세정보 가져오기
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true; // 로딩 애니메이션 실행
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Search, totalResults, Response, Error } = await res.json(); // json메소드로 서버에서 가져온 정보 분석
    if (Response === "True") {
      store.state.movies = [
        ...store.state.movies,
        ...Search, //위의 1페이지 검색결과에 이어서 그 다음도 이어서 출력됨(계속 누적+병합되어)
      ];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10); // 매 페이지마다 10개씩을 출력할 수 있다는걸 가정했을 때, 총 검색결과 수 대비 몇 개의 페이지가 있는지를 출력해주는 코드임.
    } else {
      store.state.message = Error;
      store.state.pageMax = 1;
    }
  } catch (error) {
    console.log("searchMovies error:", error);
  } finally {
    store.state.loading = false;
  }
  // 혹시나 사용자의 인터넷이 갑자기 끊겼거나 하는 등의 문제가 생겼을 때 (자바스크립트의 fetch 선에서 문제가 생겼을 경우) 자바스크립트에 에러가 발생하게 되고, 이후의 자바스크립트의 모든 코드의 동작이 멈춰버리기 때문에, 이를 방지해 줄 수 있음. 따라서 fetch함수처럼 네트워크의 요청을 처리하는 코드에서는 언제든지 의도치 않게 문제가 발생할 수 있으므로, try&catch 구문을 통해 예외처리를 할 수 있음. 그래서 만약 문제가 생겼을 때는 try 구문의 내용은 동작하지 않을 것이고, catch부분 & finally 구문이 실행될 것임.
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`
    );
    // omdbapi 사이트에 명시된 Parameter중 i(각 영화별 고유 id)와 plot(영화 줄거리) parameter를 사용하여 해당하는 영화의 상세 줄거리를 출력하도록 함.
    store.state.movie = await res.json();
  } catch (error) {
    console.log("getMovieDetails error:", error);
  }
}; // 내부에서 fetch 함수를 써서 가져올 것이기 때문에 async를 붙여줌.
