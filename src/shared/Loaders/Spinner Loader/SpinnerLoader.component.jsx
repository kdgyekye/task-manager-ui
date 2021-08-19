import React from 'react'

import {BounceLoader} from "react-spinners";


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
            <BounceLoader size={15} color={"#643df1"}/>
        </div>
    )
}

export default SpinnerLoader