import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const OsmosisMakeup = () => {
    return(
        <>
            <Banner
                text="Osmosis + Colour Mineral Makeup"
                image={<StaticImage src="../assets/images/makeupOsmosisHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default OsmosisMakeup