import { atom, selector } from "recoil";

// ekhane ja ja korlam taar review niche:
// protita state/atom alada korlam prothome
// separately state gulake atom akaare shajalam
// prothome todosState, descState & then hocche titleState and filterText as input use kora jaabe
// erpor todo add korar logic ta state e niye ashsi
// todo filter korar logic tao pore state e niye ashlam, cause ei page ei already shob info ashbe / ei page er through data gula pass hobe

// next time ei type project e atom family type kichu use korar try korbe

// to create the todos
export const todosState = atom({
  key: "todosState",
  default: [{ title: "Title", desc: "Description" }],
});

// to take title as input
export const titleState = atom({
  key: "titleState",
  default: "",
});

// to take description as input
export const descState = atom({
  key: "descState",
  default: "",
});

export const addTodoSelector = selector({
  key: "addTodo",
  get: ({ get }) => {
    return get(todosState);
  },
  set: ({ set, get }) => {
    let todo = {
      title: get(titleState),
      desc: get(descState),
    };
    let updatedTodos = [...get(todosState), todo];
    set(todosState, updatedTodos);
  },
});

export const filterTextState = atom({
  key: "filterText",
  default: "",
});

export const filterTodoSelector = selector({
  key: "filterTodo",
  get: ({ get }) => {
    let todos = get(todosState);
    let filterText = get(filterTextState);

    if (!filterText) {
      return todos;
    }

    let filteredList = todos.filter((value) => {
      return (
        value.title.toLowerCase().includes(filterText) ||
        value.desc.toLowerCase().includes(filterText)
      );
    });

    return filteredList;
  },
});
