import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SpecialPeels = () => {
    return(
        <>
            <Banner
                heading="No-Acid Natural Grade Facial Peels"
                caption=""
                image={<StaticImage src="../assets/images/specialPeelsHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SpecialPeels