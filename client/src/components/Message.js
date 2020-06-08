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
    
            console.log(data.data.username);
            // setUsername(data.data.username);
            
        }

        getUsername(user_id)


    }, [])
    
    

    return (

        <div className="row message">
            <div className="row">
                <span className="username">{user_id}</span>
                <span className="created_at">
                    <Moment fromNow>{created_at}</Moment>
                </span>
            </div>
            <div className="row">
                {content}
            </div>
        </div>
    );
}

export default Message;