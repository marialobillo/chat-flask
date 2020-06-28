import React, { useContext, useState, useEffect } from 'react';
// import projectContext from '../../context/projects/projectContext';
// import taskContext from '../../context/tasks/taskContext';

const FormMessage = () => {

    // const projectsContext = useContext(projectContext);
    // const { project } = projectsContext;

    // const tasksContext = useContext(taskContext);
    // const { selectedtask, errortask, addTask, 
    //     taskValidation, getTasks, updateTask, cleanTask } = tasksContext;

    

    // state del form 
    const [message, setMessage] = useState({
        content: '',

    })

    // extraer el nombre del projecto
    const { content } = message;

    // if(!channel) return null;

    // const [currentChannel] = channel;

    // Read the values of the form
    const handleChange = event => {
        setMessage({
            ...message, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        // event.preventDefault();

        // // Validar
        // if(name.trim() === ''){
        //     taskValidation();
        //     return;
        // }

        // // check if edition of adding a new task
        // if(selectedtask === null){
        //     // new task
        //     task.project_id = currentProject.id;
        //     task.state = false;
        //     addTask(task);
        // } else {
        //     // update task
        //     updateTask(task);
        //     // clean the task input
        //     cleanTask();
        // }

        

        // // get the tasks and filter by current project
        // getTasks(currentProject.id)

        // // reiniciar el form
        // setTask({
        //     name: ''
        // })
    }

    return (
        <div className="col-md-12">
            <form 
                className="form" 
                onSubmit={handleSubmit} 
            >
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Message Name..."
                        name="content"
                        value={content}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Add Message"
                    />
                </div>
            </form>
            {/* {errortask ? 
            (<p className="alert alert-danger">
                Maybe, you forgot typing your message?...Try again
            </p>) 
            : null} */}
        </div>
    );
}

export default FormMessage;