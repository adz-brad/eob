import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const AcneScars = () => {
    return(
        <>
            <Banner
                text="Acne Scars"
                image={<StaticImage src="../assets/images/acneScarsHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default AcneScars