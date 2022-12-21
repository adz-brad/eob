import React from "react"
import { Script } from "gatsby"
import Footer from "../footer"
import Navbar from "../nav"

const Layout = ({ children }) => {
  return (
    <>
      <Script type="application/ld+json">
        {`{
                "@context": "https://schema.org",
                "@type": "BeautySalon",
                "name": "Essence of Beauty",
                "image": "https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true",
                "@id": "https://www.essenceofbeauty.ca/contact/",
                "url": "https://www.essenceofbeauty.ca/",
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
      </Script>
      <Navbar />
      <main>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
