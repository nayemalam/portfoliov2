module.exports = {
  siteMetadata: {
    title: `Nayem Alam`,
    description: `Personal portfolio to document my goals, objectives and learning experiences.`,
    author: `@nayemalam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`, // This plugin adds the following component across all pages
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
  ],
}