import React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: "en-CA" })
    
    // Resource hints for performance
    setHeadComponents([
      React.createElement('link', { key: 'preconnect-google-fonts', rel: 'preconnect', href: 'https://fonts.googleapis.com' }),
      React.createElement('link', { key: 'preconnect-google-fonts-static', rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }),
      React.createElement('link', { key: 'preconnect-google-analytics', rel: 'preconnect', href: 'https://www.googletagmanager.com' }),
      React.createElement('link', { key: 'dns-prefetch-youtube', rel: 'dns-prefetch', href: 'https://www.youtube.com' }),
      React.createElement('link', { key: 'dns-prefetch-youtube-nocookie', rel: 'dns-prefetch', href: 'https://www.youtube-nocookie.com' }),
      React.createElement('script', {
        key: 'beautysalon-schema',
        type: 'application/ld+json',
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Essence of Beauty",
            "image": "https://www.essenceofbeauty.ca/images/meet-eva.png",
            "@id": "https://www.essenceofbeauty.ca/contact/",
            "url": "https://www.essenceofbeauty.ca/",
            "telephone": "+1 (613) 220-2101",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3626 Downpatrick Rd",
              "addressLocality": "Gloucester",
              "addressRegion": "ON",
              "postalCode": "K1V 8Y9",
              "addressCountry": "CA"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:30"
              }
            ],
            "priceRange": "$$",
            "paymentAccepted": "Cash, Debit, E-transfer",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "82",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }
      })
    ])
  }
