import { Component } from "../core/heropy";

interface State {
  [key: string]: unknown;
  menus: {
    name: string;
    href: string;
  }[];
}

export default class TheHeader extends Component {
  public state!: State; // !(할당 단언)을 통해 이미 초기값이 있는것처럼 역할 가능. 이렇게 안쓰고 public state = {} as State 로 하게되면, 최초 1회 렌더링은 잘 되지만, 이후에는 constructor 부분의 함수가 아닌 public state 부분부터 실행이 되게 되고, 그렇게 되면 그냥 {} 이렇게 빈 값만 출력되기 때문임.
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
            <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
            <nav>
                <ul>
                    ${this.state.menus
                      .map((menu) => {
                        const href = menu.href.split("?")[0]; //이렇게 쓰면, 주소에서 #/movie?id=tt4520988 이런식으로 querystring이 각 영화마다 다르게 생성이 될건데, split 메소드로 ? 기준으로 요소를 나눈 뒤, 해당 배열의 0번째 요소는 #/movie , 1번째 요소는 id=tt4520988 이 될 것임. 마찬가지로 위의 menus에서 첫번째 href는 "#/", 세번째 href는 "#/about" 으로 되어있는데, 요소 갯수 기준으로 보면 다 0번째 요소이므로, 아무튼 이렇게 split('?')[0]을 하게되면 다 각각 기본 주소 개념으로 사용할 수 있음.
                        const hash = location.hash.split("?")[0];
                        const isActive = href === hash;
                        //각 메뉴별 url과, 현재 내 페이지 위치의 hash를 비교하여 같은 위치에 있을 경우 isActive에 true값을 할당하여, <a>태그에 class를 'active'로 만들어 해당 버튼이 노란색으로 계속 표시되어 있도록 할 수 있는 것임.
                        return /* html */ `
                        <li>
                            <a class="${isActive ? "active" : ""}" href="${
                          menu.href
                        }">
                              ${menu.name}
                            </a>
                        </li>
                        `;
                      })
                      .join("")}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="https://heropy.blog/css/images/logo.png" alt="User">
            </a>
        `;
  }
}
