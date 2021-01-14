import React from 'react';
import { Link, graphql } from 'gatsby';
import MetaSeo from '../seo';

export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const hasNext = this.props.data.posts.pageInfo.hasNextPage;
    const category = this.props.pageContext.category;

    console.log(category, hasNext, posts);
    return (
      <div className="category container">
        <MetaSeo
          title={`Posts Tagged ${category} - Page ${this.props.pageContext.pageNumber}`}
        />
      </div>
    );
  }
}

export const blogListQuery = graphql`
  query categoryPosts($skip: Int!, $limit: Int!, $category: String!) {
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "post" }, category: { eq: $category } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            category
            metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
