import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAdd = (text:string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id:Math.random().toString(), text }
    ]);
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAdd} />
      <TodoList list={todos} />
    </div>
  );
}

export default App;
