import "./App.css";
import { useCallback, useRef, useState } from "react";
import { produce } from "immer";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      setForm({
        name: "",
        username: "",
      });

      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => {
            return (
              <li key={info.id} onClick={() => onRemove(info.id)}>
                {info.username} ({info.name})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
