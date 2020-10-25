import React from 'react';
import { Todo } from "../models/todo.model";
interface Props {
  list: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = (props) => {

  return (
    <ul>
      {props.list.map(todo => 
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
