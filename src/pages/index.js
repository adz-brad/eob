import React from "react"
import { data } from '../data/pages/home'
import Hero from "../components/hero"
import SplitList from '../components/splitList'
import Features from '../components/features'
import MeetEva from '../components/meetEva'
import Testimonials from "../components/testimonials"

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