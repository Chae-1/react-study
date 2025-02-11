const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.checked}
        readOnly={true}
        onClick={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input, // 인풋에 있는 텍스트
  todos, // todo lists
  onChangeInput, // ?
  onInsert, // ?
  onToggle, // ?
  onRemove, // ?
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };

  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
