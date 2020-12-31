require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Nayem Alam`,
    description: `Official personal portfolio to document my journey, goals, objectives and learning experiences.`,
    author: `@nayemalam`,
    keywords: [
      'full stack',
      'electrical engineer',
      'portfolio',
      'developer',
      'slam poet',
      'designer',
    ],
    social: [
      {
        name: `GitHub`,
        url: `http://github.com/nayemalam/`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/nayemalam/`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/nayem_wizdom/`,
      },
      {
        name: `Medium`,
        url: `https://medium.com/@nayemalam`,
      },
      {
        name: `email`,
        url: `nayem.alam@mail.mcgill.ca`,
      },
    ],
    siteUrl: `https://nayemalam.com`,
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
        name: `Nayem Alam Official Website`,
        short_name: `NayemAlam`,
        start_url: `/`,
        background_color: `#43C6AC`,
        theme_color: `#43C6AC`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-165824010-2`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`], // not implemented yet
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: ['article', 'category', 'writer'],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `gatsby-source-cloudinary/`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
