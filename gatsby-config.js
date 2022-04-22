require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `About Me`,
    siteTitleAlt: `Darren Snell - About Me`,
    siteHeadline: `Darren Snell - About Me`,
    siteUrl: `https://darrensnell.engineer`,
    siteDescription: `A Website to introduce myself to the world`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Darren Snell`,
  },
  plugins: [
    
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        showFooter: false,
      },
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          dark: true,
          mailto: true,
          tel: true,
          showFooter:false,
        },
      },
    },
    
  ].filter(Boolean),
}
