import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClapButton } from '@lyket/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import Moment from 'react-moment';
import PrevNextPost from '../components/blog/PrevNextPost';
import Layout from '../components/layout';
import ShareButtons from '../components/sharebuttons/ShareButtons';

deckDeckGoHighlightElement();
export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter: article, html } = markdownRemark;
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout
      seo={{
        metaTitle: article.title,
      }}
    >
      <div className="post container">
        <Img
          className="cover-image"
          fluid={article?.featuredImage?.childImageSharp.fluid}
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
              <div className="clap-button">
                <ClapButton id={`${article.id}`} namespace="post" />
              </div>
              <div className="share-buttons">
                <p>Like this post? Share it!</p>
                <ShareButtons
                  url={url}
                  title={article.title}
                  twitterHandle={'nayemwizdom'}
                  media={article.media}
                />
              </div>
            </div>
            <PrevNextPost
              pageContext={{
                prev: {
                  title: article?.prev?.title,
                  slug: article?.prev?.slug,
                },
                next: {
                  title: article?.next?.title,
                  slug: article?.next?.slug,
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
        id
        slug
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
        prev {
          title
          slug
        }
        next {
          title
          slug
        }
      }
    }
  }
`;
