import React from 'react';
import './form-input.style.scss'

const FormIn = ({label, handleChange, ...otherProps}) => {
    return ( <div className='group'>
        <input 
        className="form-input"
        onChange={handleChange}
        {...otherProps}
        />
        {
            label?
            (
                <label className={`${otherProps.value.lenght? 'shrink' : ''} form-input-label`}>{label}</label>
            )
            :null
        }

    </div> );
}

export default FormIn;