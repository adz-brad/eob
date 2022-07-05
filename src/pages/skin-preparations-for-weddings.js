import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SkinPrep = () => {
    return(
        <>
            <Banner
                text="Skin Preparations for Weddings"
                image={<StaticImage src="../assets/images/skinPrepHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SkinPrep