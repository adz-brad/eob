import React from 'react'
import { animateScroll as scroll } from "react-scroll"
import { Link } from 'gatsby'

const Button = ({ data: button, className }) => {
    if(button.anchor){
      const scrollTo = () => {
        const element = document.getElementById(button.anchor.toLowerCase())
        if (element) {
          scroll.scrollTo(element.offsetTop + 50, {
            duration: 500,
            smooth: true,
          })
        } else {
          console.warn(`Anchor element with id "${button.anchor.toLowerCase()}" not found`)
        }
      }
      return(  
        <button 
          onClick={() => scrollTo()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              scrollTo()
            }
          }}
          className={className}
          aria-label={button.accessibleText || button.text || "Scroll to section"}
        >
          {button.icon ? button.icon : null}
          {button.text}
        </button>
      )
    }
    else if(button.link){
      return <Link aria-label={button.accessibleText || button.text || "Navigate to page"} className={className} to={button.link}>{button.icon ? button.icon : null}{button.text}</Link>
    }
    else{
      return(
        <button 
          disabled
          className={className}
          aria-disabled="true"
          aria-label={button.accessibleText || button.text || "Disabled button"}
        >
          {button.icon ? button.icon : null}
          {button.text}
        </button>
      )
    }
  }

  export default Button