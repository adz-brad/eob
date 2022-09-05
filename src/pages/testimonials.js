import React from 'react'
import { testimonials } from '../data/pages/testimonials'

const Testimonials = () => {
    return(
        <>
            <div className="p-4 lg:p-8 bg-lightGreen">
                <h1 className="text-center font-bold my-16">
                    What My Clients Are Saying
                </h1>
                <div className="max-w-screen-xl mx-auto">
                    {testimonials.map((testimonial, i) => {
                        return(
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
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default Testimonials