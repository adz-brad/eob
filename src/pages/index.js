import React from "react"
import { data } from '../data/pages/home'
import Hero from "../components/hero"
import SplitList from '../components/splitList'
import Features from '../components/features'
import MeetEva from '../components/meetEva'
import Testimonials from "../components/testimonials"
import Seo from "../components/seo"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {

  return (
    <>
      {data.components?.map((component, i) => {
        if (component.type === 'hero') {
          return (
            <Hero
              _key={i}
              title={component.heading}
              caption={component.caption}
              bgType="video"
              bgSrc={component.video}
              button={component.button}
            />
          )
        }
        if (component.type === 'splitList') {
          return (
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
          )
        }
        if (component.type === 'features') {
          return (
            <>
            <Features
              _key={i}
              title={component.title}
              caption={component.caption}
              description={component.description}
              items={component.items}
            />
                    <div className="flex flex-col py-8 lg:py-20 px-8 bg-[url('/white-bg.jpg')]">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-16 xl:space-x-32 items-center max-w-screen-xl mx-auto py-4 lg:py-16">
            <div className="flex flex-col space-y-8 lg:w-3/5 grow">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">
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
            <div className="lg:-0 lg:w-2/5 h-[400px]">
            <StaticImage loading="lazy" src="https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full md:shadow-lg" />
            </div>    
            </div>
        </div>
            </>
          )
        }
        if (component.type === 'meetEva') {
          return <MeetEva key={i} />
        }
        if (component.type === 'testimonials') {
          return <Testimonials _key={i} testimonials={component.testimonials} />
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
  return (
    <>
      <Seo
        pageTitle="Acne, Scarring & Rosacea Treaments, Peels & Facials Ottawa"
        pageDescription="Essence of Beauty specializes in highly effective skin treatments, natural facials & peels that are safe and gentle enough for the most sensitive skin types!"
        pageKeywords="Essence of Beauty, Chemical Peel, Acid-Free Peel, Sensitive Skin, Scars, Rosacea, Acne Scars, Rejuvenation, Renew, Therapy, Aging, Anti Aging, Safe, Skincare, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
      />
      <link rel="canonical" href="https://www.essenceofbeauty.ca" />
    </>
  )
}