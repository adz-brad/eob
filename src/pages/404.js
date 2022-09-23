import React from 'react'
import Seo from '../components/seo'

const NotFoundPage = () => {
    return(
        <div>404 Page Not Found</div>  
    )
}

export default NotFoundPage

  export const Head = () => {
    return(
        <Seo
        pageTitle="Page Not Found"
        pageDescription="404 Page Not Found"
        pageKeywords="Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/404"
        pageImage=""
        />
    )
  } 