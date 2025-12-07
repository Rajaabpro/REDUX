import { useSelector } from 'react-redux';
export default function Todo() {
    const todos = useSelector((state) => state.todo.todos);
    const clickHandler = (id) => {
        console.log(id);
    }
    return (
      <>
        <h3>Todos List</h3>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}
                <button onClick={() => clickHandler(todo.id)}>Delete Task</button>
                </li>
                
            ))}
        </ul>
      </>
    );
}