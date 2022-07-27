import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const UltrasonicFacial = () => {
    return(
        <>
            <Banner
                heading="Ultrasonic Regenerative Facial"
                caption=""
                image={<StaticImage src="../assets/images/ultrasonicFacialHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default UltrasonicFacial