import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const VirtualAcneProgram = () => {
    return(
        <>
            <Banner
                text="Virtual Acne Program"
                image={<StaticImage src="../assets/images/virtualAcneHeader.png"/>}
                noFade
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default VirtualAcneProgram