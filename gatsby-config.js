module.exports = {
  siteMetadata: {
    title: `Essence of Beauty`,
    description:
      "Essence of Beauty is Ottawa’s Premier Holistic Skin Rejuvenation Clinic. Book your consultation today!",
    keywords:
      "Facial, Facials, Peel, Peels, Holistic, Acne, Natural, Organic, Treatment, Microneedling, Facials, Spa, Ottawa, Beauty, Esthetics, Esthetician, Professional, Clean",
    siteUrl: "https://www.essenceofbeauty.ca",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
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