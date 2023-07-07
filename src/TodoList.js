import './TodoList.css';

function TodoList({children}) {
    return (
      <ul className='Vertical'>
        {children}
      </ul>
    );
  }
  
  export { TodoList };
  