import React, {Fragment, useState, useContext} from 'react';
import channelContext from '../../context/channels/channelContext';

const NewChannel = () => {

    // get the state of form
    const channelsContext = useContext(channelContext);
    const { channelForm, showForm, showError, addChannel } = channelsContext;


    const [channel, setChannel] = useState({
        name: ''
    });

    const { name } = channel;

    const handleOnChange = event => {
        setChannel({
            ...channel, 
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        // Validate
        if(name === '') { 
            showError();
            return;
        }

        // add to the state
        addChannel(channel);
        // setChannel(channel)

        // Restart the form
        setChannel({
            name: ''
        })
    }

    const onClickForm = () => {
        showForm();
    }


    
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-secondary"
                onClick={onClickForm}
            >
                New Channel
            </button>

           {
               channelForm 
               ?
               (
                <form
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Channel Name"
                            name="name"
                            onChange={handleOnChange}
                            value={name}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btn btn-block btn-secondary"
                            value="Add Channel"
                        />
                    </div>
                </form>
               )
               :
               null
           }
            
           
        </Fragment>
    );
}

export default NewChannel;