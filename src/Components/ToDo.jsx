import React, { useState } from 'react';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if (input.trim()) {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput('');
        }
    };

    const handleToggleTask = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>ToDo App</h2>
            <div style={{ display: 'flex', marginBottom: 16 }}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a new task"
                    style={{ flex: 1, padding: 8 }}
                />
                <button onClick={handleAddTask} style={{ marginLeft: 8, padding: '8px 16px' }}>Add</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                        <span
                            onClick={() => handleToggleTask(index)}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                flex: 1,
                                cursor: 'pointer'
                            }}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => handleDeleteTask(index)} style={{ marginLeft: 8 }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;