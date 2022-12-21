import React from 'react'
import { testimonials } from '../data/pages/testimonials'
import Seo from '../components/seo'

const Testimonials = () => {
    return (
        <>

            <div className="p-4 lg:p-8 bg-lightGreen">
                <h1 className="text-2xl md:text-4xl text-center font-bold my-16">
                    What My Clients Are Saying
                </h1>
                <div className="max-w-screen-xl mx-auto">
                    {testimonials.map((testimonial, i) => {
                        return (
                            <div key={i} className="p-4 lg:py-6 lg:px-8 bg-white shadow-lg my-6">
                                <div className="testimonialBody mb-2">
                                    {testimonial.body}
                                </div>
                                <span className="italic font-bold">- {testimonial.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col items-center p-4 mt-6">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default Testimonials

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Testimonials - Our Clients Love Our Amazing Treatments!"
                pageDescription="Our Clients in Ottawa Love The Results They Have Achieved Treating Their Acne, Rosacea & More Using Our Advanced Organic, Holistic & Safe Treatment Options!"
                pageKeywords="Rosacea, Skin Peels, Sensitive Skin, Testimonials, Reviews, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/testimonials/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/testimonials/" />
        </>
    )
} 