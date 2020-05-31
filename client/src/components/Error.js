import React from 'react';

const Error = ({message}) => {
    if(!message){
        return null;
    }
    return(
        <div className="alert alert-primary" role="alert">
                {message}
            <button className="btn" >
                X
            </button>
        </div>
    );
}

export default Error;