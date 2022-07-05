import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const TamaMicrocurrent = () => {
    return(
        <>
            <Banner
                text="Tama The Magic of Micro-Current"
                image={<StaticImage src="../assets/images/tamaHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default TamaMicrocurrent