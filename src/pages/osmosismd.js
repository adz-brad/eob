import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const OsmosisMd = () => {
    return(
        <>
            <Banner
                heading="Osmosis + Beauty MD"
                caption=""
                image={<StaticImage src="../assets/images/osmosisMdHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default OsmosisMd