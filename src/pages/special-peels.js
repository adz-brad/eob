import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const SpecialPeels = () => {
    return(
        <>
            <Banner
                text="No-Acid Natural Grade Facial Peels"
                image={<StaticImage src="../assets/images/specialPeelsHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default SpecialPeels