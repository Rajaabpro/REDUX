import { useState } from 'react';
export default function AddForm() {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        console.log(task);
    }
    return (
        <>
            <form>
                <input type="text" placeholder="Add a new todo" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit" onClick={handleAddTask}> Add Task</button>
            </form>
        </>
    )
}