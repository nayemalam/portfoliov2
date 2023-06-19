import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Articles from '../components/blog/Articles';
import MetaTags from '../components/metatags/MetaTags';

const Blog = () => {
  const data = useStaticQuery(query);

  return (
    <div className="blog container">
      <MetaTags title="Blog | Nayem Alam" />
      <h1 className="customHeader">My Sanctuary</h1>
      <div className="top-bar">
        <h2 className="m-0">
          Latest <ArrowDownwardIcon className="icon" />
        </h2>
      </div>
      <Articles articles={data?.allMarkdownRemark?.nodes} />
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
          id
          date
          category
          timeToRead
          description
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

export default Blog;
