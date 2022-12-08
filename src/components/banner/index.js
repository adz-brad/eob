import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../button'
import { IoCalendarOutline } from 'react-icons/io5'

const Banner = ({ image, heading, gradient }) => {

    return(
        <div className="banner relative w-full h-[300px] lg:h-[450px] text-white rounded-b-lg shadow-lg">
            {image?
                <GatsbyImage loading='eager' image={image.props.__imageData} className="absolute top-0 left-0 w-full h-full z-10" alt={image.props.alt}/>
            : null }
            <div className={`absolute top-0 left-0 flex flex-col items-center justify-center bg-gradient-to-r ${gradient} py-8 md:py-0 h-full w-full z-20`}>
                <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-screen-xl">
                <span className="text-center text-3xl lg:text-4xl xl:text-5xl filter drop-shadow-lg mt-auto mb-8 mx-4 md:mx-8 font-headers">{heading}</span>
                <Button 
                    data={{text: "Book Now", anchor: "contact", icon: <IoCalendarOutline className="mr-4"/>}}
                    className="buttonLight flex flex-row items-center bg-white border-transparent text-black mt-4 md:mt-0 mb-auto"
                />
                </div>
            </div>
        </div>
    )
}

export default Banner