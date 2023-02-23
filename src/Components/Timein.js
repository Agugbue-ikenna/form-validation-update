import React from 'react'
import './Timein.css';

const Timein = (props) => {

    return (props.trigger) ? (
        <div className='timein'>
            <div className='timein-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Timein;