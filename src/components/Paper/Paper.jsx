import React from 'react'
import './Paper.scss'

const Paper = ({noPadding, maxWidth, children}) => {
    return (
        <div 
        className={`paper ${noPadding && 'p-0'}`}
        style={{maxWidth: maxWidth}}>
            {children}
        </div>
    )
}

export default Paper
