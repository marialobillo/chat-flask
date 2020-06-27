import React, { useContext } from 'react';
// import projectContext from '../../context/projects/projectContext';
// import taskContext from '../../context/tasks/taskContext';

const Channel = ({channel}) => {

    // const projectsContext = useContext(projectContext);
    // const { currentProject } = projectsContext;

    // // get the function of context task
    // const tasksContext = useContext(taskContext);
    // const { getTasks } = tasksContext;

    // function for add current project
    const selectChannel = id => {
        // currentProject(id); // Set the current project
        // getTasks(id); // Filter tasks when on Click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-light"
                // onClick={ () => selectChannel(channel.id) }
            >
                {channel.name}
            </button>
        </li>

    );
}

export default Channel;