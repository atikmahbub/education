import React from 'react'
import ContainedButton from './Button/ContainedButton'

const LeftTitle = ({header, description,buttonText}) => {
    return (
        <>
            <div className="h1 mb-4 font-weight-bold">{header}</div>
            <div className="text-justify">
                {
                    description.map((item,i)=>(
                        <>
                        <span className="d-block mb-4">
                            {item}
                        </span>
                        </>
                    ))
                }
            </div>
            <div className="w-50">
                <ContainedButton  size="lg" text={buttonText}/>
            </div>
        </>
    )
}

export default LeftTitle
