import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SkinTightening = () => {
    return(
        <>
            <Banner
                heading="Radiofrequency Skin Tightening"
                caption=""
                image={<StaticImage src="../assets/images/holisticAcneClinic.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SkinTightening