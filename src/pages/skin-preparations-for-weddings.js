import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SkinPrep = () => {
    return(
        <>
            <Banner
                heading="Skin Preparations for Weddings"
                caption=""
                image={<StaticImage src="../assets/images/skinPrepHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SkinPrep