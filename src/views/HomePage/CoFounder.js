import React from 'react'
import AddTitle from '../../components/AddTitle'
import  {coFoundersData} from  '../../utils/data/data'
import CoFounderCard from '../../components/CoFounderCard'
import Card1 from '../../utils/assets/images/card1.jpg'
import Card2 from '../../utils/assets/images/card2.jpg'


const CoFounder = () => {
    const images =  [Card1,Card2]
    return (
        <>
        <div className="mt-5 mb-5">
        <div className="row justify-content-center p-4">
            <div className="col-md-4 col-sm-8">
                <AddTitle title={coFoundersData.header}/>
            </div>
        </div>
        <div className="row justify-content-center p-3">
                {
                    [0,1].map((item,i)=>(
                        <div className="col-md-5 col-sm-8 ">
                            <CoFounderCard image={images[i]} name={coFoundersData.card[i].name} description={coFoundersData.card[i].desc}/>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default CoFounder
