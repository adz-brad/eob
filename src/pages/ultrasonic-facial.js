import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const UltrasonicFacial = () => {
    return(
        <>
            <Banner
                text="Ultrasonic Regenerative Facial"
                image={<StaticImage src="../assets/images/ultrasonicFacialHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default UltrasonicFacial