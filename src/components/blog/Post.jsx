import React from 'react';
import Seo from './seo';
import MetaSeo from '../seo';
import { graphql } from 'gatsby';
// New Tina Import!
import { remarkForm } from 'gatsby-tinacms-remark';

const Post = ({ location, data }) => {
  const {
    category,
    date,
    dateOriginal,
    author,
    title,
    slug,
    metaDescription,
  } = data.post.frontmatter;
  const content = data.post.html;

  console.log(data);
  return (
    <div>
      <Seo
        slug={slug}
        title={title}
        date={dateOriginal}
        description={metaDescription}
        author={author}
      />
      <MetaSeo title={title} description={metaDescription} />
      <div className="post container">
        {author} in {category}
      </div>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        dateOriginal: date
        category
        author
        title
        metaDescription
        slug
        postImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      # Tina uses additional, specialized query data.
      # Add the required data using this GraphQL fragment.
      ...TinaRemark
    }
    date: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
      }
    }
  }
`;

// Pass in the component to wrap and configuration object
export default remarkForm(Post, { queryName: 'post' });
