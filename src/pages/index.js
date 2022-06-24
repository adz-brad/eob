import React from "react"
import { data } from '../data/pages/home'
import Hero from "../components/hero"
import Info from "../components/info"
import Grid from "../components/grid"

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
        if(component.type === 'info'){
          return(
            <Info
              _key={i}
              heading={component.heading}
              content={component.content}
              anchor={component.anchor}
            />
          )
        }
        if(component.type === 'grid'){
          return(
            <Grid
              maxColumns={component.maxColumns}
              split={component.split}
              splitWidth={component.splitWidth}
              splitTitle={component.splitTitle}
              splitImage={component.splitImage}
              showItemNumbers={component.showItemNumbers}
              items={component.items}
            />
          )
        }
        else{
          return null
        }
      })}
    </>
  )
}

export default Home