import React from 'react'
import './src/styles/global.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import Layout from './src/components/layout'
import { Helmet } from 'react-helmet'

const wrapPageElement = ({ element }) => {
    return(
        <Layout>
            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "BeautySalon",
                        "name": "Essence of Beauty",
                        "image": "https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true",
                        "@id": "https://www.essenceofbeauty.ca/contact",
                        "url": "https://www.essenceofbeauty.ca",
                        "telephone": "+1 (613) 220-2101",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "2197 Riverside Drive Suite #200",
                            "addressLocality": "Ottawa",
                            "addressRegion": "ON",
                            "postalCode": "K1H 7X3",
                            "addressCountry": "CA"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                            "Wednesday",
                            "Thursday",
                            "Friday"
                            ],
                            "opens": "10:00",
                            "closes": "18:00"
                        } 
                    }`}
                </script>
            </Helmet>
            {element}
        </Layout>
    )
}

const wrapRootElement = ({ element }) => {
    return(
        <SimpleReactLightbox>
            {element}
        </SimpleReactLightbox>
    )
}

export { wrapPageElement, wrapRootElement }