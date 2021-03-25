import React from 'react'
import ContainedButton from './Button/ContainedButton'

const PackageCard = ({title,description,price}) => {
    return (
        <div className="package-card">
            <div className="font-weight-bold h3">{title}</div>
            <div className="text-center">{description}</div>
            <div className="text-center">
                From <span className="price h2 font-weight-bold">{price}</span>  /hour    
            </div>
            <div>
                <ContainedButton text="Select"/>
            </div>
        </div>
    )        
}

export default PackageCard 
