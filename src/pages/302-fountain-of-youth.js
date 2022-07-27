import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const FountainOfYouth = () => {
    return(
        <>
            <Banner
                heading="302 Fountain of Youth"
                caption=""
                image={<StaticImage src="../assets/images/302fountainHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default FountainOfYouth