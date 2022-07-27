import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../button'

const Features = ({ _key, title, description, items }) => {

    const FeatureCard = ({ _key, item }) => {
        return(
            <div key={_key} className="flex flex-col shadow-lg bg-lightGreen">
                {item.image ?
                <div className="h-1/2">
                    <GatsbyImage image={item.image.props.__imageData} className="h-full w-full shadow-lg" />
                </div>  
                : null }  
                <div className="flex flex-col grow p-4">
                    <h1 className="text-2xl py-2 border-green border-b-2">{item.name}</h1>
                    <p className="my-4">{item.description}</p>
                    {item.link ?
                        <Button 
                            data={{ text: "Learn More", link: item.link }}
                            className="buttonLight mt-auto md:ml-2 md:mb-2 bg-white" 
                        />
                    : null }
                </div>       
            </div>
        )
    }
    return(
        <div key={_key} className="flex flex-col px-4 md:p-8">
            <h1 className="text-3xl md:text-5xl m-4">{title}</h1>
            <p className="my-8 mx-4">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-4">
                {items ?
                    items.map((item, i) => {
                        return <FeatureCard _key={i} item={item} />
                    })
                : null }
            </div>
            <Button
                data={{ text: "View All Treatments", link: "/treatments"}}
                className="buttonLight mt-20 mb-8 mx-auto"
            />
        </div>
    )
}

export default Features