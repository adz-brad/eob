import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Banner = ({ image, text, noFade }) => {

    return(
        <div className="banner relative w-full h-[300px] md:h-[420px] xl:h-[500px] text-white">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 md:text-4xl lg:text-5xl filter drop-shadow-lg">{text}</h1>
            {noFade ? null : 
            <div className="absolute top-0 left-0 bg-black/30 w-full h-full z-20"/> 
            }
            {image?
            <GatsbyImage image={image.props.__imageData} className="absolute top-0 left-0 h-full w-full z-10" />
            : null }
        </div>
    )
}

export default Banner