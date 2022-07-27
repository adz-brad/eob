import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SkinTags = () => {
    return(
        <>
            <Banner
                heading="Skin Tags, Red Dots & Milia"
                caption=""
                image={<StaticImage src="../assets/images/holisticAcneClinic.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SkinTags