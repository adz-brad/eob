import React from "react";
import { Link } from "gatsby";
import { animateScroll as scroll } from "react-scroll"

const Hero = ({ bgType, bgSrc, _key, title, caption, button }) => {

  const Button = () => {
    if(button.anchorLink){
      const scrollTo = () => {
        scroll.scrollTo(document.getElementById(button.anchorLink.toLowerCase()).offsetTop - 30, {
          duration: 300,
          smooth: true,
        })
      }
      return(  
        <button 
          onClick={() => scrollTo()}
          onKeyDown={() => scrollTo()}
          className="px-5 py-2 my-8 border-2 border-white rounded-sm shadow-md text-2xl text-white hover:bg-white/20 transition-all"
          aria-label={button.accessibleText}
        >
          {button.text}
        </button>
      )
    }
    else if(button.pageLink){
      <Link aria-label={button.accessibleText} to={`/${button.pageLink}/`}>{button.text}<span className="hidden">{button.accessibleText}</span></Link>
    }
    else{
      return(
        <button 
          disabled
          className="px-5 py-2 my-8 border-2 border-white rounded-sm shadow-md text-2xl text-white hover:bg-white/20 transition-all"
        >
          {button.text}
        </button>
      )
    }
  }

    return(
        <div key={_key} className="relative w-full" style={{height:'70vh'}}>     
        { bgType === 'video' ?
            <video repeat="true" loop autoPlay muted playsInline id="EOB-Bg-video" className="absolute top-0 left-0 w-full object-cover" style={{height:'70vh'}}>
                <source src={bgSrc} type="video/mp4" alt="Essence of Beauty Hero Video"/>
            </video>
        : null}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semiboldtext-center filter drop-shadow-lg">{title}</h1>
          <h2 className="text-content text-white text-lg md:text-xl my-4 text-center leading-tight filter drop-shadow-lg font-medium">{caption}</h2>
          { button ? <Button/> : null }
        </div>   

      </div>
    )
}

export default Hero