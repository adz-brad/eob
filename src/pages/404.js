import React from 'react'
import Seo from '../components/seo'

const NotFoundPage = () => {
    return(
        <section className="flex flex-col items-center justify-center min-h-[60vh] p-8" aria-labelledby="not-found-heading">
            <h1 id="not-found-heading" className="text-3xl md:text-4xl font-bold mb-4">404 Page Not Found</h1>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        </section>  
    )
}

export default NotFoundPage

  export const Head = () => {
    return(
        <Seo
        pageTitle="Essence of Beauty - Page Not Found"
        pageDescription="404 Page Not Found"
        pageKeywords="Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/404/"
        pageImage=""
        />
    )
  } 