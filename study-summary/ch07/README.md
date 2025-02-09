# 라이프사이클 메서드

모든 리액트 컴포넌트에는 라이프사이클이 존재한다.

라이프사이클 메서드는 컴포넌트를 처음으로 렌더링할 때 어떤 작업을 처리하거나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리하거나 불필요한 업데이트를 방지해야할 경우 등등 많은 경우에 사용된다.

### 라이프 사이클 메서드

- 총 세 가지로 분류할 수 있다.
  - 마운트(Mount)
    - DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 한다.
    - 호출 순서는 다음과 같다.
      - constructor
      - getDerivedStateFromProps
        - props에 있는 값을 state에 넣을 때 사용하는 메서드
      - render
        - 렌더링을 준비하기 위한 메서드.
      - componentDidMount
        - 컴포넌트가 브라우저상에 나타난 후 호출되는 메서드.
  - 업데이트(Update)
    - 컴포넌트가 업데이트 될 경우는 다음과 같다.
      - props가 변경.
      - state가 변경.
      - 부모 컴포넌트가 리렌더링될 때
      - this.forceUpdate로 강제로 렌더링을 트리거할 때
    - 호출 메서드는 다음과 같다.
      - 업데이트 발생할 경우.
      - getDerivedStateFromProps
      - shouldComponentUpdate
      - render
      - getSnapshotBeforeUpdate
      - componentDidUpdate
  - 언마운트(UnMount)
    - 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다.
    - componetWillUnmount

#### render 함수

- 컴포넌트를 정의하는 중요한 함수.
- props, state에 접근 가능하며, 리액트 요소를 반환한다.
- 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용해선 안된다.
  - 변경을 원한다면 componentDidMount에서 처리해야한다.

#### constructor

- 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음 실행된다.

#### getDerivedStateFromProps

- props로 받아 온 값을 state에 동기화시키는 용도로 사용한다.
- 컴포넌트가 마운트, 업데이트될 때 호출된다.

#### componentDidMount

- 컴포넌트가 첫 렌더링을 다 마친 후 실행하는 메서드.
- 다른 라이브러리, 프레임워크의 함수를 호출하거나 각종 비동기 작업을 처리하고 싶을 때 사용.

#### shouldComponentUpdate

- props, state를 변경했을 때, 리렌더링을 시작할지 여부를 지정한다.
- 컴포넌트 최적화 시 사용할 수 있는 메서드

#### getShanpshotBeforeUpdate

- render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출된다.
- 해당 메서드에서 반환하는 값은 componentDidUpdate에서 확인 가능.
- 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다.

#### componentDidUpdate

- prevProps, prevState를 사용하여 이전 컴포넌트가 가졌던 데이터에 접근 가능하다.

#### componentWillUnmount

- DOM에서 컴포넌트를 제거할 때 실행한다.

#### componentDidCatch

- 컴포넌트렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통되지 않고 오류 UI를 보여 줄 수 있게 해준다.
