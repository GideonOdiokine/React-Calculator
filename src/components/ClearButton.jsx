import React from 'react'
import './ClearButton.css'

const ClearButton = ({children}) => {
    return (
        <div className="clear-btn">
            {children}
        </div>
    )
}

export default ClearButton
