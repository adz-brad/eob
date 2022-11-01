import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../button'

const Features = ({ _key, title, caption, description, items }) => {

    const FeatureCard = ({ _key, item }) => {

        return(
            <div key={_key} className="flex flex-col shadow-lg bg-white">
                {item.image ?
                <div className="h-96">
                    <GatsbyImage loading="lazy" image={item.image.props.__imageData} className="h-full w-full shadow-lg" alt={item.image.props.alt} />
                </div>  
                : null }  
                <div className="flex flex-col grow p-4 md:p-8">
                    <h4 className="font-bold text-2xl py-2 border-green border-b-2">{item.name}</h4>
                    <p className="mt-4 mb-8">{item.description}</p>
                    {item.link ?
                        <Button 
                            data={{ text: "Learn More", link: item.link, accessibleText: `Learn More About ${item.name} at Essence of Beauty` }}
                            className="buttonLight mt-auto bg-white" 
                        />
                    : null }
                </div>       
            </div>
        )
    }
    return(
        <div key={_key} className="flex flex-col px-4 md:p-8 bg-lightGreen">
            <h2 className="text-3xl md:text-5xl m-4">{title}</h2>
            <h3 className="font-bold text-brown ml-4 text-base md:text-xl">{caption}</h3>
            <p className="mt-4 mb-8 mx-4">{description}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-4">
                {items ?
                    items.map((item, i) => {
                        return <FeatureCard _key={i} item={item} />
                    })
                : null }
            </div>
            {/*<Button
                data={{ text: "View All Treatments", link: "/treatments"}}
                className="buttonLight mt-12 mb-8 mx-auto bg-white"
                />*/}
        </div>
    )
}

export default Features