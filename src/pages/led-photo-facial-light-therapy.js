import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const LEDPhotoFacial = () => {
    return(
        <>
            <Banner
                heading="LED Photo Facial"
                caption=""
                image={<StaticImage src="../assets/images/makeupOsmosisHeader.jpg"/>}
            />
        </>
    )
}

export default LEDPhotoFacial