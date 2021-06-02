import { useContext, FC, useState } from 'react';
import { TodoList } from './components/TodoList';
import { Context } from './Store';

export const App: FC = () => {
  const [state, dispatch] = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const getValue = (target: string) => {
    setInputValue(target);
  };

  const addTodo = () => {
    dispatch({ type: "addTodo", payload: inputValue });
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => getValue(e.target.value)} />
      <button onClick={addTodo}>
        Add Todo
      </button>
      <TodoList />
    </>
  );
};
