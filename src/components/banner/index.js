import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../button'
import { IoCalendarOutline } from 'react-icons/io5'

const Banner = ({ image, heading, caption }) => {

    return(
        <div className="banner relative w-full h-screen md:h-[420px] xl:h-[500px] text-white rounded-b-lg shadow-lg">
            {image?
                <GatsbyImage image={image.props.__imageData} className="absolute top-0 left-0 w-full h-full z-10" />
            : null }
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center bg-gradient-to-r from-black/30 to-black/10 py-8 md:py-0 h-full w-full z-20 ">
                <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-screen-xl">
                <h1 className="font-bold md:text-3xl lg:text-4xl xl:text-5xl filter drop-shadow-lg mt-auto mx-4 md:mx-8">{heading}</h1>
                <p className="md:text-lg text-xl filter drop-shadow-md m-8">{caption}</p>
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