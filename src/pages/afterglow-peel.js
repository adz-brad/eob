import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const AfterglowPeel = () => {
    return(
        <>
            <Banner
                heading="AfterGlow Peel"
                caption=""
                image={<StaticImage src="../assets/images/makeupOsmosisHeader.jpg"/>}
            />
        </>
    )
}

export default AfterglowPeel