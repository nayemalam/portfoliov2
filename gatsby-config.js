module.exports = {
  siteMetadata: {
    title: `Nayem Alam`,
    email: `nayem.alam@mail.mcgill.ca`,
    description: `Personal portfolio to document my life, goals, objectives and learning experiences.`,
    keywords: `full stack, electrical engineer, portfolio, developer, slam poet, designer`,
    author: `@nayemalam`,
    social: [
      {
        name: `GitHub`,
        url: `http://github.com/nayemalam/`
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/nayemalam/`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/nayem_wizdom/`
      },
      {
        name: `Medium`,
        url: `https://medium.com/@nayemalam`
      }
    ]
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
        name: `nayem-dev-personal-site`,
        short_name: `nayem-dev-site`,
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
