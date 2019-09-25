import React from 'react'
import './Button.scss'

const Button = ({ onClick, children, block, primary }) => {
    return (
        <button
            className={`button ${block && 'btn-block py-2'} ${primary && 'button--primary'}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
