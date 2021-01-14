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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
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
    'gatsby-plugin-offline',
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
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY || 'none',
          databaseURL: process.env.FIREBASE_DATABASE_URL || 'none',
          projectId: process.env.FIREBASE_PROJECT_ID || 'none',
          appId: process.env.FIREBASE_APPID || 'none',
        },
      },
    },
    {
      resolve: `gatsby-plugin-tinacms`,
      options: {
        plugins: [
          {
            resolve: `gatsby-tinacms-git`,
            options: {
              enabled: process.env.NODE_ENV !== 'production',
              sidebar: true,
              defaultCommitMessage: `Custom Commit Message`, // Change this!
              pushOnCommit: false,
            },
          },
          `gatsby-tinacms-remark`,
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      },
    },
  ],
};
