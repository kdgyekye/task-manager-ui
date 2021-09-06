import React, {Fragment} from 'react'

const CustomButton = (props) => {
    return (
        <Fragment>
            <div>
                <button id="payment-button" type="submit" className={`btn btn-lg btn-block`} style={{backgroundColor: `${props.color}`, color: 'whitesmoke'}}>
                    <i className={`fa ${props.icon}`}/>&nbsp;
                    <span>{props.action}</span>
                    {/*<span id="payment-button-sending" style="display:none;">Sending…</span>*/}
                </button>
            </div>
        </Fragment>
    )
}

export default CustomButton