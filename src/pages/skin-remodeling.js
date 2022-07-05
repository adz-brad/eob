import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SkinRemodeling = () => {
    return(
        <>
            <Banner
                text="Skin Remodeling"
                image={<StaticImage src="../assets/images/skinRemodelingHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SkinRemodeling