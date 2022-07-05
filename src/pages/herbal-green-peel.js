import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const HerbalGreenPeel = () => {
    return(
        <>
            <Banner
                text="Skin Rejuvenation with Herbal Green Peel®"
                image={<StaticImage src="../assets/images/greenPeelHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default HerbalGreenPeel