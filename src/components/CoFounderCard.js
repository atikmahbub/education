import React from 'react'
import ContainedButton from './Button/ContainedButton'
import {Button} from 'react-bootstrap'


const CoFounderCard = ({name,description,image}) => {
    return (
        <div className="card">
            <div className="card-upper">
                <div className="card-image"><img src={image}/></div>
                <div>
                    <div className="font-weight-bold h3 mb-3">{name}</div>
                    <div className="card-desc">{description}</div>
                </div>
            </div>
            <div className="card-buttons">
                <ContainedButton text="learn more"/>
                <Button variant="outline-secondary" style={{width : "100%"}}>Website</Button>
            </div>
        </div>
    )
}

export default CoFounderCard
