import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { treatmentMenu } from '../data/pages/facialTreatments'
import Banner from '../components/banner'
import PageWrapper from '../components/pageWrapper'
import Button from '../components/button'
import Card from '../components/card'

const FacialTreatments = () => {

    return(
        <>
            <Banner
                heading="Facial Treatments"
                caption="As the first organic and chemical free Holistic Anti-Aging Skincare Clinic in Ottawa, Essence of Beauty integrates the health of your body in the treatment equation for immediately noticeable and long-lasting results."
                image={<StaticImage src="../assets/images/holisticAcneClinic.jpg"/>}
            />
            <PageWrapper>
                <div className="flex flex-col lg:flex-row lg:items-center my-8 md:py-8">
                    <div className="flex flex-col lg:w-1/2 lg:mx-auto md:mr-8">
                        <h1 className="my-2">Facial Treatments Designed For You!</h1>
                        <h4 className="mb-1">Essence of Beauty is the FIRST <strong>organic and chemical free</strong> Holistic Anti-Aging Skincare Clinic in Ottawa.</h4>
                        <p className="my-1">
                        Calling on her deep knowledge of the most effective non-invasive techniques and products, Eva creates customized facials that address your skin’s unique needs and your dreams and goals for your complexion. The Essence of Beauty approach integrates the health of your body in the treatment equation for immediately noticeable and long-lasting results.
                        </p>
                        <p className="my-1">
                        All of her skin care product formulations have the ability to penetrate below the surface in achieving the deepest therapeutic effects. Their bioenergetic properties are totally unique. All treatments incorporate specialized nutrient rich serums, masques and moisturizers that leave your skin radiant and glowing. Essence of Beauty treatments are unique in that every facial can be customized for any individual, regardless of skin type, conditions, and age. Let  her take care of you and your skin and discover the benefits of her result-oriented treatments with every detail.
                        </p>
                        <Button
                            data={{text: "View Treatment Menu", anchor: "facial-treatment-options"}}
                            className="buttonLight mt-8 mx-auto lg:mx-0"
                        />
                    </div>
                    <div className="lg:w-1/3 lg:mx-auto my-8 lg:my-0">
                        <iframe 
                            className="my-8 md:my-0 h-[485px] md:h-[340px] w-full"
                            src="https://www.youtube.com/embed/ZCLPUWGVBis" 
                            title="Advance Deep Pore Cleansing Facial Treatment with Extractions" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true" 
                            allowfullscreen
                        />
                    </div>
                    </div>
                    <div id="facial-treatment-options" className="my-8 md:mx-8 md:py-8" >
                        <h1 className="mt-4 text-center">Special Skin Care Treatments</h1>
                        <p className="text-center mb-8">Browse our facial menu to find the right treatment for you!</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-8">
                            {treatmentMenu.map((treatment, i) => {
                                return(
                                    <Card 
                                        _key={i} 
                                        cardBodyClass="flex flex-col p-4 md:p-8 h-full" 
                                        cardWrapperClass={treatment.className}
                                    >
                                        <h1 className="md:text-2xl pb-2 mb-4 border-b border-darkGreen">
                                            {treatment.name}
                                        </h1>
                                        <div className="my-2">
                                            {treatment.content}
                                        </div>
                                        {treatment.pricing ?
                                            treatment.pricing.map((option) => {
                                                return(
                                                    <span className="lg:mb-8">
                                                        <strong className="mr-2">
                                                        {option.description} 
                                                        </strong>
                                                        {option.cost}
                                                    </span>
                                                )
                                            })
                                        : null }
                                        {treatment.link ?
                                            <Button 
                                                data={{
                                                    text: "Learn More",
                                                    link: treatment.link
                                                }}
                                                className="buttonLight mt-4 lg:mt-auto"
                                            />
                                        : null }
                                    </Card>
                                )
                            })}
                        </div>
                </div>
                <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
            </PageWrapper>
        </>
    )
}

export default FacialTreatments