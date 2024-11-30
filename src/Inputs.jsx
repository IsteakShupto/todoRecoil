import { useSetRecoilState } from "recoil";
import { addTodoSelector, descState, titleState } from "./store/atoms/TodoAtom";

function Inputs() {
  const setTitle = useSetRecoilState(titleState);
  const setDesc = useSetRecoilState(descState);
  const addTodo = useSetRecoilState(addTodoSelector);

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="title"
        />
      </div>

      <div>
        <input
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
          placeholder="description"
        />
      </div>

      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Inputs;
