# Context API

Context API는 전역적으로 사용할 데이터가 있을 때 유용한 기능이다.

리액트 관련 라이브러리인 Redux, React-router, styled-components 등의 라이브러리가 Context API를 기반으로 구현되어 있다.

## Context API를 통한 전역 상태 관리

- 리액트는 컴포넌트 간 데이터를 props로 전달한다.
  - 여러 컴포넌트에서 공통적으로 사용하는 데이터는 최상위 컴포넌트인 App.js의 state로 관리한다.
- 깊이가 깊은 컴포넌트에 전달하기 위해서는 굉장이 많은 컴포넌트를 거쳐야할 경우가 존재하고 이렇게 되면 유지보수성이 굉장히 떨어진다.
