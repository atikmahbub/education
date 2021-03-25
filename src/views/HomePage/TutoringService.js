import React from 'react'
import AddTitle from '../../components/AddTitle'
import {tutoringData} from '../../utils/data/data'
import THCard from '../../components/THCard'
import {FiAperture} from 'react-icons/fi'
import {Button} from 'react-bootstrap'

const TutoringService = () => {
    return (
        <div className="hosting-service">
            <AddTitle color="#F9F9F9" descColor="#F9F9F9" title={tutoringData.header} description={tutoringData.description}/>
            <div className="row justify-content-center">
                {
                    [0,1,2].map((item,i)=>(
                        <div className="col-md-4 col-sm-8 p-5">
                            <THCard
                                icon={<FiAperture fontSize="30px"/>} 
                                title={tutoringData.card[i].title} 
                                description={tutoringData.card[i].desc}
                            />
                        </div>
                    ))
                }
                

            </div>

            <Button className="green-button">learn more</Button>
        </div>
    )
}

export default TutoringService
