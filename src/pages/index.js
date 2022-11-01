import React from "react"
import { data } from '../data/pages/home'
import Hero from "../components/hero"
import SplitList from '../components/splitList'
import Features from '../components/features'
import MeetEva from '../components/meetEva'
import Testimonials from "../components/testimonials"
import Seo from "../components/seo"

const Home = () => {

  return(
    <>
      {data.components?.map((component, i) => {
        if(component.type === 'hero'){
          return(
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
        if(component.type === 'splitList'){
          return(
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
        if(component.type === 'features'){
          return(
            <Features
              _key={i}
              title={component.title}
              caption={component.caption}
              description={component.description}
              items={component.items}
            />
          )
        }
        if(component.type === 'meetEva'){
          return <MeetEva key={i} />
        }
        if(component.type === 'testimonials'){
          return <Testimonials _key={i} testimonials={component.testimonials} />
        }
        else{
          return null
        }
      })}
    </>
  )
}

export default Home

export const Head = () => {
  return(
    <>
    <Seo
        pageTitle="Acne, Scarring & Rosacea Treaments, Peels & Facials"
        pageTitleDescription="Ottawa"
        pageDescription="Essence of Beauty specializes in highly effective skin treatments, natural facials & peels that are safe and gentle enough for the most sensitive skin types!"
        pageKeywords="Essence of Beauty, Chemical Peel, Acid-Free Peel, Sensitive Skin, Scars, Rosacea, Acne Scars, Rejuvenation, Renew, Therapy, Aging, Anti Aging, Safe, Skincare, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
      />
      <link rel="canonical" href="https://www.essenceofbeauty.ca" />
      </>
  )
}