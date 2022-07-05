import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { document } from 'browser-monads'
import { useWindowWidth } from '../../hooks'

const Testimonials = ({ _key, testimonials }) => {

const length = testimonials.length

const [ active, setActive ] = useState(0)

const width = useWindowWidth()

const [ wrapperWidth, setWrapperWidth ] = useState(null)

useEffect(() => {
  if(width > 768){
    setWrapperWidth(document.getElementById('testimonialWrapper').offsetWidth)
  }
  else{
    setWrapperWidth(width)
  }
}, [ width ])

const onClick = (props) => {
  if(props === 'back' && active !== 0){
      setActive(active - 1)
  }
  else if(props === 'back' && active === 0){
    setActive(length - 1)
  }
  else if(props === 'forward' && active !== length - 1){
    setActive(active + 1)
  }
  else if(props === 'forward' && active === length - 1){
    setActive(0)
  }
}

  return(
    <div key={_key} className="relative md:mt-20 pt-24 bg-white" style={{height: 494}}>
      <div id="testimonialBG" className="testimonialBG">
        <div className="flex flex-col h-full absolute -top-24 left-1/2 -translate-x-1/2 bg-white h-full max-w-screen-lg rounded-md drop-shadow-xl border border-black/10" style={{width: width - 30}}>
          <h1 className="mt-10 text-center">Testimonials</h1>

          { testimonials ?
          
            <>
              <div id="testimonialWrapper" className="relative flex flex-grow items-center justify-center overflow-hidden">

                { testimonials.map((testimonial, i) => {   

                  const style = 
                    width > 768 ?
                      active < i  ? {width: wrapperWidth - 150, transform: `translate(-${wrapperWidth * 2}px, -50%)`} :
                      active > i  ?  {width: wrapperWidth - 150, transform: `translate(${wrapperWidth * 2}px, -50%)`} :
                      active === i ? {width: wrapperWidth - 150, transform: `translate(-50%, -50%)`} :
                      null
                    :
                      active < i  ? {width: wrapperWidth - 60, transform: `translate(-${wrapperWidth * 2}px, -50%)`} :
                      active > i  ?  {width: wrapperWidth - 60, transform: `translate(${wrapperWidth * 2}px, -50%)`} :
                      active === i ? {width: wrapperWidth - 60, transform: `translate(-50%, -50%)`} :
                      null


                  return(
                    <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 transition-all p-2 md:p-0" style={style}>
                        <p className="text-sm md:text-base">{testimonial.text}</p>
                        <p className="text-lg font-semibold mt-5">- {testimonial.name}</p>
                    </div>
                  )

                })}

              </div>
              <MdArrowBackIos 
                className="text-3xl absolute bottom-2 md:top-1/2 left-2 md:left-3 cursor-pointer hover:text-green transform hover:scale-110" 
                onClick={() => onClick('back')} 
                onKeyDown={() => onClick('back')}
                role="button"
                aria-label="View Previous Testimonial"
                tabIndex={0}
              />
              <MdArrowForwardIos 
                className="text-3xl absolute bottom-2 md:top-1/2 right-2 md:right-3 cursor-pointer hover:text-green transform hover:scale-110" 
                onClick={() => onClick('forward')} 
                onKeyDown={() => onClick('forward')} 
                role="button"
                aria-label="View Next Testimonial"
                tabIndex={0}
              />
              <div className="flex flex-row items-center absolute bottom-1 left-1/2 transform -translate-x-1/2">
                { testimonials.map((testimonial, i) => {
                  return(
                    <div 
                      onClick={() => setActive(i)} 
                      onKeyDown={() => setActive(i)} 
                      role="button"
                      aria-label="View Specific Testimonial"
                      tabIndex={0}
                      className={`h-2 w-2 m-1 rounded-full cursor-pointer transform hover:bg-green ${active === i ? 'scale-105 outline outline-2 outline-brown/30 outline-offset-1 shadow-xl bg-darkGreen' : 'bg-black/70'}`} 
                    />
                  )
                })}
              </div>
            </>
          : null }
        </div>
      </div>
    </div>
  )
}

export default Testimonials