module.exports = {
  siteMetadata: {
    title: `Essence of Beauty`,
    description:
      "Essence of Beauty is Ottawa’s premier holistic skin rejuvenation clinic, specializing in natural, organic skincare treatments for acne and other common skin issues. Book your consultation today!",
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.essenceofbeauty.ca',
        sitemap: 'https://www.essenceofbeauty.ca/sitemap.xml',
        policy: [
          { 
            userAgent: '*', 
            allow: '/' 
          }
        ]
      },
    },
    'gatsby-plugin-sitemap',
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
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 100,
          breakpoints: [600, 768, 992, 1280, 1536],
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-preact'
  ],
}