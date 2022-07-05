import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const AcneTreatment = () => {
    return(
        <>
            <Banner
                text="Acne Treatment"
                image={<StaticImage src="../assets/images/acneTreatmentHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default AcneTreatment