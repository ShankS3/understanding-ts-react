import React from 'react';
import { Todo } from "../models/todo.model";
interface Props {
  list: Todo[];
}

const TodoList: React.FC<Props> = (props) => {

  return (
    <ul>
      {props.list.map(todo => 
        <li key={todo.id}>{todo.text}</li>
      )}
    </ul>
  );
};

export default TodoList;
