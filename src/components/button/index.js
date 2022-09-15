import React from 'react'
import { animateScroll as scroll } from "react-scroll"
import { Link } from 'gatsby'

const Button = ({ data: button, className }) => {
    if(button.anchor){
      const scrollTo = () => {
        scroll.scrollTo(document.getElementById(button.anchor.toLowerCase()).offsetTop + 50, {
          duration: 500,
          smooth: true,
        })
      }
      return(  
        <button 
          onClick={() => scrollTo()}
          onKeyDown={() => scrollTo()}
          className={className}
        >
          {button.icon ? button.icon : null}
          {button.text}
        </button>
      )
    }
    else if(button.link){
      return <Link className={className} to={button.link}>{button.icon ? button.icon : null}{button.text}<text className="hidden">{button.accessibleText}</text></Link>
    }
    else{
      return(
        <button 
          disabled
          className={className}
        >
          {button.icon ? button.icon : null}
          {button.text}
        </button>
      )
    }
  }

  export default Button