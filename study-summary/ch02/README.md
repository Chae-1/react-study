# JSX

```javascript
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

- react를 사용하면 외부 모듈을 import문을 통해 사용할 수 있다.
- 원래 브라우저에서는 지원하지 않는 기능이지만, Node.js가 지원해주는 기능.(번들러(bundler))
  - 모든 모듈을 합쳐 하나의 파일을 생성하는 기능.
- JSX 라는 문법을 사용해서 마치 HTML을 작성하는 것 처럼 컴포넌트를 작성할 수 있다.

#### JSX

- **장점**
  - 보기 쉽고 익숙하다.
  - 높은 활용도.
- **문법 규칙**
  - 컴포넌트에 여러 개의 요소가 있다면, 부모 요소로 감싸줘야 한다.
  - div, Fragment 를 사용할 수 있는 데 div를 사용하고 싶지 않을 경우 Fragment를 사용한다.
  - html 요소에 class 어트리뷰트가 아닌 className으로 지정해야한다.
  - 반드시 닫아야하는 태그가 존재한다. ex) input
  - 주석은 {/\*\*/} 문법을 사용한다.
