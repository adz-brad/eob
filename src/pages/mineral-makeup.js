import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const OsmosisMakeup = () => {
    return(
        <>
            <Banner
                heading="Osmosis + Colour Mineral Makeup"
                caption=""
                image={<StaticImage src="../assets/images/makeupOsmosisHeader.jpg"/>}
            />
        </>
    )
}

export default OsmosisMakeup