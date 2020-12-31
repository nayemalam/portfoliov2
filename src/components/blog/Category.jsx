import React from 'react';
import { graphql, Link } from 'gatsby';
import { Button } from '@material-ui/core';
import Articles from './Articles';
import Layout from '../layout';

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          slug
          title
          description
          category {
            slug
            name
          }
          image {
            childImageSharp {
              fixed(width: 660) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      slug
      name
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <Layout seo={seo}>
      <div className="category container">
        <div className="uk-container uk-container-large">
          <h1> Category - {category}</h1>
          {articles.length > 0 ? (
            <div>
              <Articles articles={articles} />
              <Link
                to="/blog/"
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block',
                  marginTop: '50px',
                }}
              >
                <Button variant="contained" color="primary">
                  Back to all posts
                </Button>
              </Link>
            </div>
          ) : (
            <div className="not-found-message">
              <h1>No articles within this category (yet).</h1>
              <Link to="/blog/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Back to all posts
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
