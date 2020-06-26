import React from 'react';
import Axios from 'axios';

const NewMessageForm = () => {


  

    const handleChange = event => {

        setMessage(event.target.value);
    }

    const handleMessage = async (event) => {
        event.preventDefault()
     
        createNewMessage(user.id, currentChannel.id, message);
        

    }

    const createNewMessage = async (user_id, channel_id, content) => {

        const url = 'http://localhost:5000/api/messages';
        const { data } = await Axios.post(url, {user_id, channel_id, content});

    }


    return (
        <form 
            className="form-row col-md-12 ml-3"
        >
            <div className="col-auto ">
                <input 
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={message}
                ></input>
            </div>
            <div className="col-auto ">
                <button 
                    type="submit"
                    className="btn btn-block btn-primary"
                    onClick={handleMessage}
                >Send New Message
                </button>
            </div>
        </form>
    );
}

export default NewMessageForm;