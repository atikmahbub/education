import React from 'react'

const AddTitle = ({title,description, color, descColor}) => {
    return (
        <div className="add-title">
            <div 
                className="h1 text-center font-weight-bold display-4"
                style={{color: color}}
            >
                {title}
            </div>
            {
            description && 
                <div 
                    className="text-center p-4 title-desc"
                    style={{color : descColor}}
                >
                    {description}
                </div>
            }
        </div>
    )
}

export default AddTitle
