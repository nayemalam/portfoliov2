// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(
//     `
//       {
//         articles: allStrapiArticle(
//           sort: { order: DESC, fields: [publishedAt] }
//         ) {
//           edges {
//             node {
//               title
//               strapiId
//               slug
//             }
//           }
//         }
//         categories: allStrapiCategory {
//           edges {
//             node {
//               strapiId
//               slug
//             }
//           }
//         }
//       }
//     `,
//   );

//   if (result.errors) {
//     throw result.errors;
//   }

//   // Create blog articles pages.
//   const articles = result.data.articles.edges;
//   const categories = result.data.categories.edges;

//   const ArticleTemplate = require.resolve('./src/components/blog/Post.jsx');

//   articles.forEach((article, index) => {
//     createPage({
//       path: `/blog/post/${article.node.slug}`,
//       component: ArticleTemplate,
//       context: {
//         slug: article.node.slug,
//         prev: index === 0 ? null : articles[index - 1].node,
//         next: index === articles.length - 1 ? null : articles[index + 1].node,
//       },
//     });
//   });

//   const CategoryTemplate = require.resolve(
//     './src/components/blog/Category.jsx',
//   );

//   categories.forEach((category, index) => {
//     createPage({
//       path: `/blog/category/${category.node.slug}`,
//       component: CategoryTemplate,
//       context: {
//         slug: category.node.slug,
//       },
//     });
//   });
// };

// module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
//   const crypto = require(`crypto`);

//   if (node.internal.type === 'StrapiArticle') {
//     const newNode = {
//       id: createNodeId(`StrapiArticleContent-${node.id}`),
//       parent: node.id,
//       children: [],
//       internal: {
//         content: node.content || ' ',
//         type: 'StrapiArticleContent',
//         mediaType: 'text/markdown',
//         contentDigest: crypto
//           .createHash('md5')
//           .update(node.content || ' ')
//           .digest('hex'),
//       },
//     };
//     actions.createNode(newNode);
//     actions.createParentChildLink({
//       parent: node,
//       child: newNode,
//     });
//   }
// };
