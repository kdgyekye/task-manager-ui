import React from 'react'

import {PropagateLoader} from "react-spinners";


const SpinnerLoader = () => {

    const spinnerStyles = {
        height: '60vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={spinnerStyles}>
            <PropagateLoader size={25} color={"rebeccapurple"}/>
        </div>
    )
}

export default SpinnerLoader