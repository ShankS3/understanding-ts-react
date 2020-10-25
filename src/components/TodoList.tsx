import React from 'react';

interface Props {
  list: { id: string, text: string}[];
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
