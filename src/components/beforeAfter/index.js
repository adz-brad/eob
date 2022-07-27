import React from 'react'
import { ReactCompareSlider  } from 'react-compare-slider'
import { GatsbyImage } from 'gatsby-plugin-image'

const BeforeAfter = ({ beforeImage, afterImage, className }) => {
    return(
        <ReactCompareSlider
            className={className}
            position={75}
            itemOne={<GatsbyImage image={beforeImage.props.__imageData} className="w-full h-full" />}
            itemTwo={<GatsbyImage image={afterImage.props.__imageData} className="w-full h-full" />}
        />
    )
}

export default BeforeAfter