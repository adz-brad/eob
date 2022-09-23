import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
 
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

        {/* Twitter Meta Tags */}

        <meta name="twitter:title" content={pageTitle}/>
        <meta name="twitter:description" content={pageDescription}/>
        <meta name="twitter:image" content={pageImage}/>
        <meta name="twitter:card" content="summary_large_image"/>
         
    </>

  );
}

export default Seo ;
