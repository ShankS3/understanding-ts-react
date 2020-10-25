import React, { useRef } from 'react';

type Props = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmit}>
      <div>
        <label htmlFor="todo-text">Todo item</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo;
