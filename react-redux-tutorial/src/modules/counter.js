import { createAction, handleActions } from "redux-actions";

// 1. 액션 타입을 정의한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 2. 액션 생성 함수 만든다.
export const increase = createAction(INCREASE); // () => ({type: INCREASE}) type이 arg인 action 생성 함수를 만든다.
export const decrease = createAction(DECREASE);

// 3. 초기 상태 정의 및 리듀서 함수 정의
const initialState = {
  number: 0,
};
// redux-actions 사용 이전, reducer
// function counter(state = initialState, action) {
//   console.log(action);

//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// redux-actions 사용 이후, reducer
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
