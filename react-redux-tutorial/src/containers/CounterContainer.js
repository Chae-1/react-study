// Hook 사용 시, 필요 없음
// import { connect } from "react-redux";
// import Counter from "../components/Counter";
// import { increase, decrease } from "../modules/counter";
// import { bindActionCreators } from "redux";
// // redux와 연동을 통해 상태를 변경을 담당하는 컨테이너 컴포넌트
// // 연동된 Container는
// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };
// // 리덕스와 연동된 컨테이너 컴포넌트를 만들기 위해서 connect 함수를 사용한다.
// const mapStateToProps = ({ counter }) => {
//   return {
//     number: counter.number,
//   };
// };

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ increase, decrease }, dispatch);

// // mapToStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수,
// // mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수.
// // 반환되는 함수에 컴포넌트를 파라미터로 전달하면 리덕스와 연동된 컴포넌트가 만들어진다.

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect 없이 store의 state 조회 가능
// 1. useSelector Hook을 통해 store의 상태 조회 가능.
// 2. useDispatch Hook을 통해 컴포넌트 내부에서 store의 dispatch 호출 가능
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector(({ counter }) => counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
