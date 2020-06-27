import React from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';


const Channels = () => {
    return (
        <div className="">
            <Navbar />
            <div className="row">
                <Sidebar />

                <div className="col-7">
                    Content
                </div>

            </div>
        </div>
    );
}

export default Channels;