import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const NewClientAcneConsultation = () => {
    return(
        <>
            <Banner
                text="New Client Acne Consultation"
                image={<StaticImage src="../assets/images/newClientConsultHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default NewClientAcneConsultation