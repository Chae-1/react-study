// import { connect } from "react-redux";
// import Todos from "../components/Todos";
// import { changeInput, toggle, insert, remove } from "../modules/todos";

// const TodosContainer = ({
//   input,
//   todos,
//   changeInput, // 액션 변경 함수
//   insert, // 액션 변경 함수
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//       onChangeInput={changeInput}
//     />
//   );
// };

// // input, // 인풋에 있는 텍스트
// // todos, // todo lists
// // onChangeInput, // ?
// // onInsert, // ?
// // onToggle, // ?
// // onRemove, // ?
// // redux에서 관리하고 있는 상태 (Action 생성 함수 -> 새로운 state를 생성하기 위함)
// export default connect(
//   ({ todos }) => {
//     console.log(todos);
//     return {
//       input: todos.input,
//       todos: todos.todos,
//     };
//   },
//   { changeInput, insert, remove, toggle }
// )(TodosContainer);

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch]
  );
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <Todos
      todos={todos}
      input={input}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
