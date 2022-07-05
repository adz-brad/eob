import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const AgingAndDehydratedSkin = () => {
    return(
        <>
            <Banner
                text="Aging & Dehydrated Skin"
                image={<StaticImage src="../assets/images/facialAgingHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default AgingAndDehydratedSkin