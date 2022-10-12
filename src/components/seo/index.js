import React from 'react';
import { graphql, useStaticQuery, Script } from 'gatsby';
 
const Seo = ({ pageDescription, pageTitle, pageTitleDescription, pageImage, pageUrl, pageKeywords }) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keywords
        }
      }
    }
  `);

  const siteData = data.site.siteMetadata;
  const title = pageTitleDescription ? `${siteData.title} - ${pageTitle} - ${pageTitleDescription}` : `${siteData.title} - ${pageTitle}`

  return (

    <>

        <title>{title}</title>

        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${pageKeywords}, ${siteData.keywords}`} />

        {/* FB Meta Tags */}

        <meta property="og:title" content={pageTitle}/>
        <meta property="og:description" content={pageDescription}/>
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Essence of Beauty Ottawa Acne Clinic"/>

        {/* Twitter Meta Tags */}

        <meta name="twitter:title" content={pageTitle}/>
        <meta name="twitter:description" content={pageDescription}/>
        <meta name="twitter:image" content={pageImage}/>
        <meta name="twitter:card" content="summary_large_image"/>

        <meta name="robots" content="index, follow"/>
        
        <Script type="application/ld+json">
                  {`{
          "@context":"https://schema.org",
          "@graph":[
            {
              "@type":"WebPage",
              "@id":${pageUrl},
              "url":${pageUrl},
              "name":"Essence of Beauty Ottawa | ${pageTitle}",
              "isPartOf":{
                "@id":"https://www.essenceofbeauty.ca/"
              },
              "primaryImageOfPage":{
                "@id": ${pageImage}
              },
              "image":{
                "@id": ${pageImage}
              },
              "thumbnailUrl": ${pageImage},
              "description": ${pageDescription},
              "breadcrumb":{
                "@id": "${pageUrl}#breadcrumb"
              },
                "inLanguage":"en-US",
                "potentialAction":[
                  {
                    "@type":"ReadAction",
                    "target":[${pageUrl}]
                  }
                ]
              },
              {
                "@type":"ImageObject",
                "inLanguage":"en-US",
                "@id":${pageImage},
                "url":${pageImage},
                "contentUrl":${pageImage},
                "width":1920,
                "height":700,
                "caption": ${pageTitle}
              },
              {
                "@type":"BreadcrumbList",
                "@id":"${pageUrl}#breadcrumb",
                "itemListElement":[
                  {
                    "@type":"ListItem",
                    "position":1,
                    "name":"Home",
                    "item":"https://www.essenceofbeauty.ca/"
                  },
                  {
                    "@type":"ListItem",
                    "position":2,
                    "name": ${pageTitle}
                  }
                ]
              },
              {
                "@type":"WebSite",
                "@id":"https://www.essenceofbeauty.ca/#website",
                "url":"https://www.essenceofbeauty.ca/",
                "name":"Essence of Beauty Ottawa Acne & Skin Clinic",
                "description":"Medical Aesthetic Clinic | Ottawa Skin Clinic",
                "publisher":{
                  "@id":"https://www.essenceofbeauty.ca/#organization"
                },
                "inLanguage":"en-US"
                },
                {
                  "@type":"Organization",
                  "@id":"https://www.essenceofbeauty.ca/#organization",
                  "name":"Essence of Beauty Ottawa Acne & Skin Clinic",
                  "url":"https://www.essenceofbeauty.ca/",
                  "sameAs":[],
                  "logo":
                  {
                    "@type":"ImageObject",
                    "inLanguage":"en-US",
                    "@id":"https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/Eob-logo.png?raw=true",
                    "url":"https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/Eob-logo.png?raw=true",
                    "contentUrl":"https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/Eob-logo.png?raw=true",
                    "width":286,"height":111,"caption":"Essence of Beauty Acne & Skin Clinic"
                  },
                  "image":{
                    "@id":"https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/Eob-logo.png?raw=true"
                  }
                }
              ]
            }`}
        </Script>
    </>

  );
}

export default Seo ;
