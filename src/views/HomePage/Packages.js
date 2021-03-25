import React from 'react'
import AddTitle from '../../components/AddTitle'
import {packageData} from '../../utils/data/data'
import PackageCard from '../../components/PackageCard'

const Packages = () => {
    return (
        <div className="container packages">
            <AddTitle title={packageData.header} color="#F9F9F9" />
            <div className="row justify-content-center">
                {
                packageData.card.map((item,i)=> (
                    <div className="col-md-5 col-sm-8 p-5">
                        <PackageCard title={item.title} description={item.desc} price={item.price}/>
                    </div>
                ))
                }            
            </div>
        </div>
    )
}

export default Packages
