import React, { Fragment, useContext } from 'react';
import Message from './Message';
// import projectContext from '../../context/projects/projectContext';
// import taskContext from '../../context/tasks/taskContext';

const MessageList = () => {

    const messagesChannel = [
        {content: 'Hi, everyone!'},
        {content: 'This is a great channel!'},
        {content: 'The 4th message'},
        {content: 'How are you today?'},

    ]

    // const projectsContext = useContext(projectContext);
    // const { project, deleteProject } = projectsContext;

    // get the tasks de cada projecto
    // const tasksContext = useContext(taskContext);
    // const { tasksproject } = tasksContext;

    // if not current project
    // if(!channel) return <h3>Select a Channel from the sidebar</h3>;

    // const [currentChannel] = channel;

    const handleDeleteChannel = () => {
        // deleteProject(currentChannel.id);
    }

    return (
        <Fragment >
            <div className="col-md-12">
                {/* <h3 className="text-center">Project : {currentChannel.name} </h3> */}
            </div>
            <ul className="panel">
                {messagesChannel.length === 0 ? 
                    (<li className="message"><p>There is no messages</p></li>)
                    : 
                        <div >{messagesChannel.map(message => (
                               <Message
                                    key={message.id}
                                    message={message}
                                    timeout={200}
                                    className="message"
                                /> 
                        
                            ))}
                    </div>
                }
            </ul>
            
        </Fragment>
    );
} 


export default MessageList;