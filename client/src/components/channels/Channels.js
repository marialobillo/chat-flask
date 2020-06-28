import React from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import FormMessage from '../messages/FormMessage';


const Channels = () => {
    return (
        <div className="">
            <Navbar />
            <div className="row">
                <Sidebar />

                <div className="col-8">

                    <div className="row">
                        Space for Messages
                    </div>

                    <div className="row">
                        <FormMessage />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Channels;