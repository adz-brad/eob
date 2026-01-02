require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Essence of Beauty`,
    description:
      "Essence of Beauty is Ottawa's premier holistic skin rejuvenation clinic, specializing in natural, organic skincare treatments for acne and other common skin issues. Book your consultation today!",
    keywords:
      "Facial, Facials, Peel, Peels, Holistic, Acne, Natural, Organic, Treatment, Microneedling, Facials, Spa, Ottawa, Beauty, Esthetics, Esthetician, Professional, Clean, Safe, Skincare, Anti Aging, Dry Skin, Glow",
    siteUrl: "https://www.essenceofbeauty.ca",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Essence of Beauty",
        short_name: `Essence of Beauty`,
        background_color: `#e6eed7`,
        lang: `en`,
        theme_color: `#7cc16c`,
        start_url: `/`,
        display: `standalone`,
        cache_busting_mode: "none",
        icon: `src/assets/icons/favicon.png`,
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    //'gatsby-plugin-offline',
    `gatsby-plugin-csp-nonce`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com",
          "script-src": "'unsafe-inline' https://www.googletagmanager.com",
          "img-src": "www.googletagmanager.com",
          "script-src":  "https://*.googletagmanager.com",
          "img-src": "https://*.google-analytics.com https://*.googletagmanager.com",
          "connect-src": "https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
          "frame-src": "https://*.youtube.com https://*.youtube-nocookie.com",
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.essenceofbeauty.ca/',
        sitemap: 'https://www.essenceofbeauty.ca/sitemap.xml',
        policy: [
          { 
            userAgent: '*', 
            allow: '/',
            disallow: ['/dev-404-page/', '/404.html']
          }
        ],
        output: '/robots.txt'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/data/pages`
      },
      __key: "pages"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/src/blog`
      },
      __key: "blog"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images`
      },
      __key: "images"
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Marcellus`,
          `Roboto:400,700`
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
          rel: 'preload',
          as: 'style',
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          breakpoints: [480, 992, 1280, 1536],
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-pnpm`,
    {
      resolve: `gatsby-plugin-gtag`, 
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        head: false
      },
    },
    'gatsby-plugin-preact'
  ],
}