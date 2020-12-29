import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Categories from '../components/blog/Categories';
import Articles from '../components/blog/Articles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Blog = () => {
  const data = useStaticQuery(query);

  return (
    <div className="blog container">
      <h1>{data.strapiGlobal.siteName}</h1>
      {/* <p>{data.strapiGlobal.defaultSeo.metaTitle}</p>
      <p>{data.strapiGlobal.defaultSeo.metaDescription}</p> */}
      <div className="top-bar">
        <h2>
          Latest <ArrowDownwardIcon className="icon" />
        </h2>
        <Categories />
      </div>
      <Articles articles={data.allStrapiArticle.edges} />
    </div>
  );
};

const query = graphql`
  query {
    strapiGlobal {
      siteName
      defaultSeo {
        metaTitle
        metaDescription
      }
    }
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(
      filter: { status: { eq: "published" } }
      sort: { order: DESC, fields: [publishedAt] }
    ) {
      edges {
        node {
          strapiId
          slug
          title
          description
          publishedAt
          category {
            name
            slug
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;