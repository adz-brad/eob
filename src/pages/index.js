import React from "react"
import { data } from '../data/pages/home'
import { testimonials } from '../data/pages/testimonials'
import Hero from "../components/hero"
import SplitList from '../components/splitList'
import Features from '../components/features'
import MeetEva from '../components/meetEva'
import Testimonials from "../components/testimonials"
import Seo from "../components/seo"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"

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

const Home = () => {

  return (
    <>
      {data.components?.map((component, i) => {
        if (component.type === 'hero') {
          return (
            <section key={i} aria-labelledby="hero-heading">
              <Hero
                _key={i}
                title={component.heading}
                caption={component.caption}
                bgType="video"
                bgSrc={component.video}
                button={component.button}
              />
            </section>
          )
        }
        if (component.type === 'splitList') {
          return (
            <section key={i} aria-labelledby={`splitlist-heading-${i}`}>
              <SplitList
                _key={i}
                heading={component.heading}
                caption={component.caption}
                image={component.image}
                anchor={component.anchor}
                listTitle={component.listTitle}
                listItems={component.listItems}
                button={component.button}
              />
            </section>
          )
        }
        if (component.type === 'features') {
          return (
            <>
            <section key={i} aria-labelledby={`features-heading-${i}`}>
              <Features
                _key={i}
                title={component.title}
                caption={component.caption}
                description={component.description}
                items={component.items}
              />
            </section>
                    <section className="flex flex-col p-4 bg-[url('../assets/images/white-bg.jpg')] bg-cover bg-top lg:bg-left" aria-labelledby="consultations-heading">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-16 xl:space-x-32 items-center lg:max-w-[calc(100vw*0.8)] mx-auto py-4 lg:py-16">
            <div className="flex flex-col space-y-8 lg:w-3/5 grow">
                <h2 id="consultations-heading" className="text-3xl md:text-4xl lg:text-5xl">
                  Consultations
                </h2>
                <p className="lg:text-lg">
                  Your skin is unique, and a consultation helps identify its specific needs. I will analyze your skin, address any concerns, and create a professional treatment plan with expert care and tailored recommendations.
                </p>
                <span>
                  Initial in-clinic consultation: <strong>30 minutes $50</strong>
                </span>
                <Button data={{text: 'Book Your Consultation Today', anchor: 'contact'}} className="buttonLight my-8
                lg:my-auto"/>
            </div>
            <div className="lg:-0 lg:w-2/5 h-[360px]">
            <StaticImage loading="lazy" src="https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Essence of Beauty Ottawa - Skin Consultation" className="h-full w-full md:shadow-lg" />
            </div>    
            </div>
        </section>
            </>
          )
        }
        if (component.type === 'meetEva') {
          return <section key={i} aria-labelledby="meet-eva-heading"><MeetEva key={i} /></section>
        }
        if (component.type === 'testimonials') {
          return <section key={i} aria-labelledby="testimonials-heading"><Testimonials _key={i} testimonials={component.testimonials} /></section>
        }
        else {
          return null
        }
      })}

    </>
  )
}

export default Home

export const Head = () => {
  const pageUrl = "https://www.essenceofbeauty.ca"
  
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.essenceofbeauty.ca/#website",
    "url": pageUrl,
    "name": "Essence of Beauty Ottawa Acne & Skin Clinic",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${pageUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
  
  // Select top 5 testimonials (most detailed/longest ones)
  const topTestimonials = [...testimonials]
    .sort((a, b) => {
      const aText = extractTextFromJSX(a.body).length
      const bText = extractTextFromJSX(b.body).length
      return bText - aText
    })
    .slice(0, 5)
  
  // Create Review schemas for top testimonials
  const topReviews = topTestimonials.map((testimonial, index) => {
    const reviewBody = extractTextFromJSX(testimonial.body).trim()
    const datePublished = new Date(Date.now() - (topTestimonials.length - index) * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    
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
      "datePublished": datePublished
    }
  })
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://www.essenceofbeauty.ca/#localbusiness",
    "name": "Essence of Beauty",
    "image": "https://www.essenceofbeauty.ca/images/meet-eva.png",
    "url": pageUrl,
    "telephone": "+1 (613) 220-2101",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3626 Downpatrick Rd",
      "addressLocality": "Gloucester",
      "addressRegion": "ON",
      "postalCode": "K1V 8Y9",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:30"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Debit, E-transfer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "reviewCount": testimonials.length,
      "bestRating": 5,
      "worstRating": 5
    },
    "review": topReviews
  }
  
  return (
    <>
      <Seo
        pageTitle="Acne, Scarring & Rosacea Treaments, Peels & Facials Ottawa"
        pageDescription="Essence of Beauty specializes in highly effective skin treatments, natural facials & peels that are safe and gentle enough for the most sensitive skin types!"
        pageKeywords="Essence of Beauty, Chemical Peel, Acid-Free Peel, Sensitive Skin, Scars, Rosacea, Acne Scars, Rejuvenation, Renew, Therapy, Aging, Anti Aging, Safe, Skincare, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl={pageUrl}
        pageImage="https://www.essenceofbeauty.ca/images/meet-eva.png"
        additionalSchema={[searchActionSchema, localBusinessSchema]}
      />
      <link rel="canonical" href={pageUrl} />
    </>
  )
}