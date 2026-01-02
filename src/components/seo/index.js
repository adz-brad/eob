import React from "react"
import { graphql, useStaticQuery, Script } from "gatsby"

const Seo = ({
  pageDescription,
  pageTitle,
  pageImage,
  pageUrl,
  pageKeywords,
  pageType = "website",
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  additionalSchema,
}) => {

  // Properties passed from the SEO component in each file are programmatically injected into the tags contained in this file.
  // Structured JSON data must be passed inside the <Script> tag

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keywords
        }
      }
    }
  `)

  const siteData = data.site.siteMetadata

  // Site Title
  // Data from properties passed through the SEO component on each page
  // If page has no title property, title fallback is the site title passed from /gatsby-config.js siteMetadata object

  const title = pageTitle ? pageTitle : siteData.title

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={`${pageKeywords}, ${siteData.keywords}`} />

      {/* FB Meta Tags */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={pageType} />
      <meta property="og:locale" content="en_CA" />
      <meta
        property="og:site_name"
        content="Essence of Beauty Ottawa Acne Clinic"
      />

      {/* Article Meta Tags */}
      {pageType === "article" && articleAuthor && (
        <>
          <meta property="article:author" content={articleAuthor} />
          {articlePublishedTime && (
            <meta property="article:published_time" content={articlePublishedTime} />
          )}
          {articleModifiedTime && (
            <meta property="article:modified_time" content={articleModifiedTime} />
          )}
        </>
      )}

      {/* Twitter Meta Tags */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="robots" content="index, follow" />

      <Script type="application/ld+json">
        {`{
          "@context":"https://schema.org",
          "@graph":[
            {
              "@type":"WebPage",
              "@id":"${pageUrl}",
              "url":"${pageUrl}",
              "name":"Essence of Beauty Ottawa | ${pageTitle}",
              "isPartOf":{
                "@id":"https://www.essenceofbeauty.ca/"
              },
              "primaryImageOfPage":{
                "@id": "${pageImage}"
              },
              "image":{
                "@id": "${pageImage}"
              },
              "thumbnailUrl": "${pageImage}",
              "description": "${pageDescription}",
              "breadcrumb":{
                "@id": "${pageUrl}#breadcrumb"
              },
                "inLanguage":"en-US",
                "potentialAction":[
                  {
                    "@type":"ReadAction",
                    "target":["${pageUrl}"]
                  }
                ]
              },
              {
                "@type":"ImageObject",
                "inLanguage":"en-US",
                "@id":"${pageImage}",
                "url":"${pageImage}",
                "contentUrl":"${pageImage}",
                "width":1920,
                "height":700,
                "caption": "${pageTitle}"
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
                    "name": "${pageTitle}"
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
                  "telephone":"+1 (613) 220-2101",
                  "address":{
                    "@type":"PostalAddress",
                    "streetAddress":"3626 Downpatrick Rd",
                    "addressLocality":"Gloucester",
                    "addressRegion":"ON",
                    "postalCode":"K1V 8Y9",
                    "addressCountry":"CA"
                  },
                  "sameAs":[
                    "https://www.facebook.com/essenceofbeautyottawa",
                    "https://www.instagram.com/essenceofbeauty.ottawa/",
                    "https://www.pinterest.ca/essenceofbeautyottawa/",
                    "https://www.linkedin.com/company/essence-of-beauty-ottawa/"
                  ],
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
      {additionalSchema && (
        <>
          {Array.isArray(additionalSchema) ? (
            additionalSchema.map((schema, index) => (
              <Script key={index} type="application/ld+json">
                {JSON.stringify(schema)}
              </Script>
            ))
          ) : (
            <Script type="application/ld+json">
              {JSON.stringify(additionalSchema)}
            </Script>
          )}
        </>
      )}
    </>
  )
}

export default Seo
