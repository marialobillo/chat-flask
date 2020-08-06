import React from 'react';
// import axiosClient from '../../config/axios';

const Message = ({message}) => {

    // const user_id = message.user_id;

    // const getUserName = async user_id => {
        
    //     try {
    //         const response = await axiosClient.get(`/api/users/${user_id}`)
    //         console.log(response.data.data);
    //         return response.data.data.username;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const username = getUserName(user_id);
    return (
        <li key={message.id}>
           <div className="message">
                <span>{message.user_id}</span>
                <span>{message.created_at}</span>
                <div>{message.content}</div>
            </div>
        </li>
    );
}

export default Message;