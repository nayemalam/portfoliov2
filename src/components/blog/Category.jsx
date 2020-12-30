import React from 'react';
import { graphql } from 'gatsby';
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
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export default Category;
