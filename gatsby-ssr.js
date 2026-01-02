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
    ])
  }
