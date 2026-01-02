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
  articleTags,
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

      <meta id="meta-description" name="description" content={pageDescription} />
      <meta id="meta-keywords" name="keywords" content={`${pageKeywords}, ${siteData.keywords}`} />

      {/* Author Meta Tag */}
      {articleAuthor && (
        <meta id="meta-author" name="author" content={articleAuthor} />
      )}

      {/* Geo Meta Tags for Local SEO */}
      <meta id="geo-region" name="geo.region" content="CA-ON" />
      <meta id="geo-placename" name="geo.placename" content="Ottawa" />

      {/* FB Meta Tags */}
      <meta id="og-title" property="og:title" content={title} />
      <meta id="og-description" property="og:description" content={pageDescription} />
      <meta id="og-image" property="og:image" content={pageImage} />
      <meta id="og-image-width" property="og:image:width" content="1200" />
      <meta id="og-image-height" property="og:image:height" content="630" />
      <meta id="og-image-alt" property="og:image:alt" content={pageTitle || title} />
      <meta id="og-url" property="og:url" content={pageUrl} />
      <meta id="og-type" property="og:type" content={pageType} />
      <meta id="og-locale" property="og:locale" content="en_CA" />
      <meta
        id="og-site-name"
        property="og:site_name"
        content="Essence of Beauty Ottawa Acne Clinic"
      />

      {/* Article Meta Tags */}
      {pageType === "article" && articleAuthor && (
        <>
          <meta id="article-author" property="article:author" content={articleAuthor} />
          {articlePublishedTime && (
            <meta id="article-published-time" property="article:published_time" content={articlePublishedTime} />
          )}
          {articleModifiedTime && (
            <meta id="article-modified-time" property="article:modified_time" content={articleModifiedTime} />
          )}
          {articleTags && Array.isArray(articleTags) && articleTags.map((tag, index) => (
            <meta key={index} id={`article-tag-${index}`} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Meta Tags */}
      <meta id="twitter-title" name="twitter:title" content={title} />
      <meta id="twitter-description" name="twitter:description" content={pageDescription} />
      <meta id="twitter-image" name="twitter:image" content={pageImage} />
      <meta id="twitter-card" name="twitter:card" content="summary_large_image" />

      <meta id="robots" name="robots" content="index, follow" />

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
                    "@id":"https://www.essenceofbeauty.ca/images/Eob-logo.png",
                    "url":"https://www.essenceofbeauty.ca/images/Eob-logo.png",
                    "contentUrl":"https://www.essenceofbeauty.ca/images/Eob-logo.png",
                    "width":286,"height":111,"caption":"Essence of Beauty Acne & Skin Clinic"
                  },
                  "image":{
                    "@id":"https://www.essenceofbeauty.ca/images/Eob-logo.png"
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
