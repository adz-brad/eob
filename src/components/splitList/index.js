import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../button'

const SplitList = ({ _key, heading, caption, image, anchor, listTitle, listItems, button }) => {

    return(
        <div id={anchor} key={_key} className="flex flex-col lg:flex-row py-20 px-8">
            <div className="flex flex-col lg:w-3/5 lg:pl-8 lg:pr-12 grow">
                <h2 className="text-2xl md:text-4xl lg:text-5xl lg:mt-4">{heading}</h2>
                <p className="lg:text-lg my-4">{caption}</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl mt-2 lg:mt-8">{listTitle}</h3>
                <ul className="list-disc ml-2 lg:m-4">
                    {listItems?.map((item, i) => {
                        return(
                            <li key={i} className="text-sm lg:text-base leading-tight mt-1 mb-2">
                                {item}
                            </li>
                        )
                    })} 
                </ul>
                {button ? <Button data={button} className="buttonLight my-8
                lg:my-auto"/> : null }
            </div>
            {image ?
            <div className="lg:w-2/5 mt-8 -mx-8 md:m-0">
            <GatsbyImage loading="lazy" image={image.props.__imageData} alt={image.props.alt || ""} className="h-full w-full md:shadow-lg" />
            </div>  
            : null }    
        </div>
    )
}

export default SplitList