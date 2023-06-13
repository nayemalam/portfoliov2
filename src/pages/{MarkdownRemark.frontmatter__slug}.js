import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import Layout from '../components/layout';
// import ClapButton from '../components/clapbutton/ClapButton';
import ShareButtons from '../components/sharebuttons/ShareButtons';
import PrevNextPost from '../components/blog/PrevNextPost';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

deckDeckGoHighlightElement();
export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter: article, html } = markdownRemark;
  let url = '';

  console.log({ markdownRemark, article });
  return (
    <Layout
      seo={{
        metaTitle: article.title,
      }}
    >
      <div className="post container">
        <Img
          className="cover-image"
          fluid={article.featuredImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        />
        <span className="all-posts-button">
          <Link to="/blog">Back to all posts</Link>
        </span>
        <div className="inner-container">
          <h1 className="title">{article.title}</h1>
          <p className="sub-description">
            Published on <Moment format="Do MMM YYYY">{article.date}</Moment> -{' '}
            <FontAwesomeIcon className="icon-bullet" icon={faClock} size="sm" />{' '}
            {article.timeToRead} read
          </p>
          <div className="content">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <hr />
          <div className="footer">
            <div className="author-container">
              {/* <ClapButton slug={article.slug} /> */}
              <div className="share-buttons">
                <p>Like this post? Share it!</p>
                <ShareButtons
                  url={url}
                  title={article.title}
                  twitterHandle={'nayem_wizdom'}
                  media={article.media}
                />
              </div>
            </div>
            <PrevNextPost
              pageContext={{
                previous: {
                  title: 'Previous',
                  slug: 'previous',
                },
                next: {
                  title: 'Next',
                  slug: 'next',
                },
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
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
`;
