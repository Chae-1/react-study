import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE"; // action type

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE); // action crete function

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state) => {
      console.log(state);
      return {
        ...state,
        number: state.number + 1,
      };
    },
    [DECREASE]: (state) => ({
      ...state,
      number: state.number - 1,
    }),
  },
  initialState
);

export default counter;
