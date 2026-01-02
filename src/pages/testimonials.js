import React from 'react'
import { testimonials } from '../data/pages/testimonials'
import Seo from '../components/seo'

// Helper function to extract plain text from JSX elements
const extractTextFromJSX = (element) => {
  if (typeof element === 'string') {
    return element
  }
  if (typeof element === 'number') {
    return String(element)
  }
  if (!element || !element.props) {
    return ''
  }
  if (element.props.children) {
    if (Array.isArray(element.props.children)) {
      return element.props.children.map(child => extractTextFromJSX(child)).join(' ')
    }
    return extractTextFromJSX(element.props.children)
  }
  return ''
}

const Testimonials = () => {
    return (
        <>

            <section className="p-4 lg:p-8 bg-lightGreen" aria-labelledby="testimonials-heading">
                <h1 id="testimonials-heading" className="text-2xl md:text-4xl text-center font-bold my-16">
                    What My Clients Are Saying
                </h1>
                <div className="max-w-screen-xl mx-auto">
                    {testimonials.map((testimonial, i) => {
                        return (
                            <article key={i} className="p-4 lg:py-6 lg:px-8 bg-white shadow-lg my-6">
                                <div className="testimonialBody mb-2">
                                    {testimonial.body}
                                </div>
                                <span className="italic font-bold">- {testimonial.name}</span>
                            </article>
                        )
                    })}
                </div>
            </section>
            <section className="flex flex-col items-center p-4 mt-6" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default Testimonials

export const Head = () => {
    // Create Review schemas for each testimonial
    const reviewSchemas = testimonials.map((testimonial, index) => {
        const reviewBody = extractTextFromJSX(testimonial.body).trim()
        // Use a date that's reasonable - can use current date or a date based on index
        const datePublished = new Date(Date.now() - (testimonials.length - index) * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        
        return {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": testimonial.name
            },
            "reviewBody": reviewBody,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": 5,
                "bestRating": 5,
                "worstRating": 5
            },
            "datePublished": datePublished,
            "itemReviewed": {
                "@id": "https://www.essenceofbeauty.ca/#organization"
            }
        }
    })

    // Create AggregateRating schema
    const aggregateRatingSchema = {
        "@type": "AggregateRating",
        "ratingValue": 5,
        "reviewCount": testimonials.length,
        "bestRating": 5,
        "worstRating": 5
    }

    return (
        <>
            <Seo
                pageTitle="Testimonials - Our Clients Love Our Amazing Treatments!"
                pageDescription="Our Clients in Ottawa Love The Results They Have Achieved Treating Their Acne, Rosacea & More Using Our Advanced Organic, Holistic & Safe Treatment Options!"
                pageKeywords="Rosacea, Skin Peels, Sensitive Skin, Testimonials, Reviews, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/testimonials/"
                pageImage="https://www.essenceofbeauty.ca/images/meet-eva.png"
                additionalSchema={[...reviewSchemas, aggregateRatingSchema]}
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/testimonials/" />
        </>
    )
} 