import React from 'react'
import './TextField.scss'

const TextField = ({ labelText, type }) => {
    return (
        <div className='text-field'>
            <label className='text-field__label'>{labelText}</label>
            {type === 'textarea'
                ? <textarea
                    className='text-field__input'
                    rows={5}
                    style={{ resize: 'none' }} />
                : <input type={type} className='text-field__input' />
            }
        </div>
    )
}

export default TextField
