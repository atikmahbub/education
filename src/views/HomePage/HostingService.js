import React from 'react'
import AddTitle from '../../components/AddTitle'
import {hostingData} from '../../utils/data/data'
import THCard from '../../components/THCard'
import {FiAperture} from 'react-icons/fi'
import {Button} from 'react-bootstrap'

const HostingService = () => {
    return (
        <div className="hosting-service">
            <AddTitle color="#F9F9F9" descColor="#F9F9F9" title={hostingData.header} description={hostingData.description}/>

            <div className="row justify-content-center">
                {
                    [0,1,2].map((item,i)=>(
                        <div className="col-md-4 col-sm-8 p-5">
                            <THCard
                                icon={<FiAperture fontSize="30px"/>} 
                                title={hostingData.card[i].title} 
                                description={hostingData.card[i].desc}
                            />
                        </div>
                    ))
                }
                

            </div>

            <Button className="green-button">learn more</Button>
        </div>
    )
}

export default HostingService
