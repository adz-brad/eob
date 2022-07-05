import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const Rosacea = () => {
    return(
        <>
            <Banner
                text="Rosacea and Sensitive Skin"
                image={<StaticImage src="../assets/images/rosaceaHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default Rosacea