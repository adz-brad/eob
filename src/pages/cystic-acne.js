import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const CysticAcne = () => {
    return(
        <>
            <Banner
                text="Cystic Acne"
                image={<StaticImage src="../assets/images/cysticAcneHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default CysticAcne