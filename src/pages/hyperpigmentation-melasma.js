import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const Hyperpigmentation = () => {
    return(
        <>
            <Banner
                text="Hyperpigmentation & Melasma"
                image={<StaticImage src="../assets/images/hyperpigmentationHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default Hyperpigmentation