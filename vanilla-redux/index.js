import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// redux 에서 사용할 액션 타입
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});

const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const ininitalState = {
  toggle: false,
  counter: 0,
};

// 리듀서 만들기 : 액션 발생 시, 현재 상태와 전달받은 액션 객체를 통해 새로운 상태를 반환
function reducer(state = ininitalState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// reducer를 넘긴다.
const store = createStore(reducer);

// 스토어의 상태가 바뀔 때마다 호출되는 render 함수
//
const render = () => {
  const state = store.getState();
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();

store.subscribe(render);

// 액션을 발생시키는 것을 디스패치라고한다.
// 액션을 발생시키기 위해 액션 발생 함수를 호출한다.
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

// 1. 변화하는 상태를 액션이라고 정의한다.
// 2. 액션을 생성하는 액션 생성 함수를 만들어 놓는다.
// 3. 현재 발생한 액션과, 이전 상태를 비교하여 새로운 상태를 만드는 리듀서 함수를 정의한다.
// 4. 리덕스의 스토어에 정의한 리듀서 함수를 넣는다.
// 5. 이제 상태가 업데이트될 때 호출되는 함수를 구독한다.
// 6. 상태가 변경되면(dispatch) 구독한 함수가 호출된다.
