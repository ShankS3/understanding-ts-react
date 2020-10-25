import React from 'react';
import TodoList from './components/TodoList';

const todos = [{id: 't1', text: 'Finish the course'}];

const App: React.FC = () => {
  return (
    <div className="App">
      {/* A component that adds todos */}
      <TodoList list={todos} />
    </div>
  );
}

export default App;
