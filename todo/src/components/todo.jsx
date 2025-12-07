import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
export default function Todo() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        console.log(id);
        dispatch(deleteTodo(id));
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