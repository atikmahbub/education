import React from 'react'

const THCard = ({title,description, icon}) => {
    return (
        <div className="thcard">
            <div className="thcard-icon">
                {icon}
            </div>
            <div className="h4 text-center thtitle">{title}</div>
            <div className="text-center thdesc">{description}</div>
        </div>
    )
}

export default THCard
