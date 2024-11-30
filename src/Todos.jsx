import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterTextState, filterTodoSelector } from "./store/atoms/TodoAtom";

function Todos() {
  const setFilterText = useSetRecoilState(filterTextState);
  // generate the filtered list here
  // todos = useRecoilValue(filterTodo);

  const filterTodos = useRecoilValue(filterTodoSelector);

  return (
    <div>
      <input
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginTop: "40px" }}
        type="text"
        placeholder="Search for todos"
      />

      {filterTodos &&
        filterTodos.map((todo, index) => (
          <div key={index}>
            <p>{todo.title}</p>
            <p>{todo.desc}</p>
          </div>
        ))}
    </div>
  );
}

export default Todos;
