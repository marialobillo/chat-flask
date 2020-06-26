import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';
import Axios from 'axios';

const Message = ({message}) => {
    
    const {user_id, created_at, content} = message;
    const [username, setUsername] = useState('');

    useEffect(() => {
        const getUsername = async (user_id) => {
            const url = 'http://localhost:5000/api/users/' + user_id;
            const { data } = await Axios.get(url);
    
            setUsername(data.data.username);   
        }

        getUsername(user_id)


    }, [])
    
    

    return (

        <div className="message">
            <div className="row">
                <div className="username col align-self-start font-weight-bold">{username}</div>
                <div className="created_at align-self-end">
                    <Moment fromNow>{created_at}</Moment>
                </div>
            </div>
            
            <div className="row">
                <div className="col align-self-start">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Message;