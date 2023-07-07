import { TodoCounter } from './TodoCounter';
import React from 'react';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'absoluta', completed: false},
  {text: 'mente', completed: false},
  {text: 'nada', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.
  useState('');

  const completedTodos=todos.filter(
    todo =>!!todo.completed).length;
  const totalTodos=todos.length;console.log('Los usuarios buscan todos de '+searchValue);
  


  return (
    <div className='AppContainer'>
      <TodoCounter 
      completed={completedTodos}
       total={totalTodos}
       />


      <div className='Container'>
        <div className='Organize'> 
         
          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
          <CreateTodoButton />
        </div>
        <TodoList>
      
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
         />
        
          ))}
        </TodoList>
  
        </div>
   
   
    </div>
    
  );
}

export default App;