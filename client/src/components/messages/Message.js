import React, { useContext } from 'react';
// import projectContext from '../../context/projects/projectContext';
// import taskContext from '../../context/tasks/taskContext';

const Message = ({message}) => {

    // const projectsContext = useContext(projectContext);
    // const { project } = projectsContext; 

    // const tasksContext = useContext(taskContext);
    // const { deleteTask, getTasks, changeTaskState, saveCurrentTask } = tasksContext;

    // Extraer el projecto
    // const [currentChannel] = channel;

    // Function que modifica la tarea
    // const editStateTask = task => {
    //     task.state ? task.state = false : task.state = true;
    //     changeTaskState(task);
    // }

    // function que se ejecuta cuando presionamos boton de eliminar task
    // const handleDelete = id => {
    //     deleteTask(id)
    //     getTasks(currentProject.id);
    // }

    // const selectTask = task => {
    //     saveCurrentTask(task);
    // }

    return (
        <li className="message">
            <span>{message.content}</span>
        </li>
    );
}

export default Message;