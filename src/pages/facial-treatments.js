import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { treatmentMenu } from '../data/pages/facialTreatments'
import Banner from '../components/banner'
import PageWrapper from '../components/pageWrapper'
import Button from '../components/button'
import Seo from '../components/seo'

const FacialTreatments = () => {

    return(
        <>
 
            <Banner
                heading="Facials For Women & Men"
                gradient="from-black/40 via-black/20 to-black/10"
                caption="As the first organic and chemical free Holistic Anti-Aging Skincare Clinic in Ottawa, Essence of Beauty integrates the health of your body in the treatment equation for immediately noticeable and long-lasting results."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/facialTreatmentHeader.png?raw=true"/>}
            />
            <PageWrapper>
                <div className="flex flex-col lg:flex-row lg:items-center my-8 md:py-8">
                    <div className="flex flex-col lg:w-1/2 lg:mx-auto">
                        <h1 className="my-3 font-bold">Facial Treatments Designed For You!</h1>
                        <h4 className="mt-1 mb-2">Essence of Beauty is the FIRST <strong>organic and chemical free</strong> Holistic Anti-Aging Skincare Clinic in Ottawa.</h4>
                        <p className="my-1">
                        Calling on her deep knowledge of the most effective non-invasive techniques and products, Eva creates customized facials that address your skin’s unique needs and your dreams and goals for your complexion. The Essence of Beauty approach integrates the health of your body in the treatment equation for immediately noticeable and long-lasting results.
                        </p>
                        <p className="my-1">
                        All of her skin care product formulations have the ability to penetrate below the surface in achieving the deepest therapeutic effects. Their bioenergetic properties are totally unique. All treatments incorporate specialized nutrient rich serums, masques and moisturizers that leave your skin radiant and glowing. Essence of Beauty treatments are unique in that every facial can be customized for any individual, regardless of skin type, conditions, and age. Let  her take care of you and your skin and discover the benefits of her result-oriented treatments with every detail.
                        </p>
                        <Button
                            data={{text: "View Treatment Menu", anchor: "facial-treatment-options"}}
                            className="buttonLight my-8 lg:mt-8 mx-auto lg:mx-0"
                        />
                    </div>

                        <iframe 
                            width="582" height="328"
                            loading="lazy"
                            className="my-8 md:my-0 mx-auto"
                            src="https://www.youtube.com/embed/ZCLPUWGVBis" 
                            title="Advance Deep Pore Cleansing Facial Treatment with Extractions" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true" 
                            allowfullscreen
                        />
                    
                    </div>
                    <div id="facial-treatment-options" className="my-8 md:mx-8 md:py-8" >
                        <div className="ml-8">
                        <h1 className="mt-4">Special Skin Care Treatments</h1>
                        <p className="mb-8">Browse our facial menu to find the right treatment for you!</p>
                        </div>
                        <div className="flex flex-col py-4 md:py-8">
                            {treatmentMenu.map((treatment, i) => {
                                const even = i % 2 === 0
                                return(
                                    <div 
                                        _key={i} 
                                        class={`flex flex-col md:flex-row rounded-md shadow-lg my-4 ${even ? 'bg-lightGreen' : 'bg-white'}`} 
                                    >

                                        {treatment.imagePosition === 'left' && treatment.image ?
                                            <div className="md:w-1/3">
                                                {treatment.image?
                                                    treatment.image
                                                : null}
                                            </div>
                                        : null }
                                        <div className={`flex flex-col ${treatment.image ? 'md:w-2/3' : 'w-full'} p-4 md:p-8`}>
                                        <h1 className="pb-2 mb-2">
                                            {treatment.name}
                                        </h1>
                                        <div className="my-2">
                                            {treatment.content}
                                        </div>
                                        {treatment.pricing ?
                                            treatment.pricing.map((option) => {
                                                return(
                                                    <span className="lg:mb-8">
                                                        <strong className="mr-2 text-brown">
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
                                                className="buttonLight bg-white mt-4 lg:mt-auto"
                                            />
                                        : null }
                                        </div>
                                        {treatment.imagePosition === 'right'  && treatment.image ?
                                            <div className="md:w-1/3">
                                                {treatment.image?
                                                    treatment.image
                                                : null}
                                            </div>
                                        : null }
                                    </div>
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

export const Head = () => {
    return(
        <Seo
        pageTitle="Facials For Women & Men"
        pageTitleDescription="Ottawa's First Holistic Acne & Skincare Clinic Uses Organic, Chemical-Free Treatments To Provide Lasting Results For All Skin Types!"
        pageDescription="As the first organic and chemical free Holistic Anti-Aging Skincare Clinic in Ottawa, Essence of Beauty integrates the health of your body in the treatment equation for immediately noticeable and long-lasting results."
        pageKeywords="Skincare, Checmical-free, No-Acid, Acid free, No Chemicals, Sensitive SkinFacials, Facial Treatment, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/facial-treatments"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/facialTreatmentHeader.png?raw=true"
        />
    )
  } 