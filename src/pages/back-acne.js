import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const BackAcne = () => {
    return(
        <>
            <Banner
                text="Holistic Acne Program"
                image={<StaticImage src="../assets/images/backAcneHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default BackAcne