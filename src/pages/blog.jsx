import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MetaTags from '../components/metatags/MetaTags';
import Categories from '../components/blog/Categories';
import Articles from '../components/blog/Articles';
import Header from '../components/Header';
import Post from '../components/Post';
import PostPreview from '../components/PostPreview';
import Img from 'gatsby-image';

const Blog = () => {
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));
  const data = useStaticQuery(query);

  console.log({ data });

  return (
    <div className="blog container">
      <MetaTags title="Blog | Nayem Alam" />
      {data?.allMarkdownRemark?.nodes?.map(post => {
        let featuredImgFluid =
          post?.frontmatter?.featuredImage?.childImageSharp?.fluid;
        return (
          <Img
            style={{
              width: '125px',
              height: '125px',
            }}
            fluid={featuredImgFluid}
            imgStyle={{
              width: '125px',
              height: '125px',
            }}
          />
        );
      })}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div> */}
      {/* <h1>{data.strapiGlobal.siteName}</h1>
      <div className="top-bar">
        <h2>
          Latest <ArrowDownwardIcon className="icon" />
        </h2>
        <Categories />
      </div>
      <Articles articles={data.allStrapiArticle.edges} /> */}
    </div>
  );
};

const query = graphql`
  query Query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          date
          category
          timeToRead
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

// const query = graphql`
//   query {
//     strapiGlobal {
//       siteName
//       defaultSeo {
//         metaTitle
//         metaDescription
//       }
//     }
//     strapiHomepage {
//       hero {
//         title
//       }
//       seo {
//         metaTitle
//         metaDescription
//         shareImage {
//           publicURL
//         }
//       }
//     }
//     allStrapiArticle(
//       filter: { status: { eq: "published" } }
//       sort: { order: DESC, fields: [publishedAt] }
//     ) {
//       edges {
//         node {
//           strapiId
//           slug
//           title
//           description
//           publishedAt
//           readTime
//           category {
//             name
//             slug
//           }
//           image {
//             childImageSharp {
//               fixed(width: 800, height: 500) {
//                 src
//               }
//             }
//           }
//           author {
//             name
//             picture {
//               childImageSharp {
//                 fixed(width: 30, height: 30) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default Blog;
