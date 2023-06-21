import React, { useState } from 'react'

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title: '',
        content: ''
    })

    function detectChange(event) {
        const { name, value } = event.target;
        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,

            };
        });
    }
    
    function submitTask(event) {
        props.onAdd(task)
        setTask({
            title: '',
            content: ''
        })
        event.preventDefault();
    }
    return (
        
        <div className='todoDivArea'>
            <form className='todoDiv'>
                <input type="text"
                    onChange={detectChange}
                    className='form-control todotext mb-3'
                    name='title'
                    value={task.title}
                    placeholder='Görev İsmi'
                />
                <textarea
                    name="content"
                    value={task.content}
                    onChange={detectChange}
                    className='form-control todotext mb-3'
                    rows={3}
                    placeholder='Görevinizi Yazınız'
                ></textarea>
                <button className='btn btn-primary todoButton' onClick={submitTask}>Gorevi Ekle</button>
            </form>
        </div>
        
    )
}
