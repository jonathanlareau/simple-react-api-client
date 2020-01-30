// src/components/msgs.js

import React from 'react'

const Msgs = ({ msgs }) => {
    return (
        <div>
            <center><h1>Received Msg</h1></center>
         
            <center><h1>{ msgs }</h1></center>

        </div>
    )
};

export default Msgs