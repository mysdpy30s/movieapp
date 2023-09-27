import { Store } from "../core/heropy";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://abcd.png",
  name: "KKK",
  email: "abcd@gmail.com",
  blog: "https://abcd.tistory.com/",
  github: "https://github.com/abcd",
  repository: "https://github.com/abcd/app",
});
