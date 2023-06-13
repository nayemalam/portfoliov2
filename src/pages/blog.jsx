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
import HeaderDesc from '../components/headerdesc/HeaderDesc';

const Blog = () => {
  const data = useStaticQuery(query);
  console.log(data.allMarkdownRemark);
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
