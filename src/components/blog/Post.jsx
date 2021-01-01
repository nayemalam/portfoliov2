import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Layout from '../layout';
import PrevNextPost from './PrevNextPost';
import ShareButtons from '../sharebuttons/ShareButtons';
import ClapButton from '../clapbutton/ClapButton';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      slug
      readTime
      image {
        publicURL
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        name
        picture {
          childImageSharp {
            fixed(width: 50, height: 50, quality: 100) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`;

const Post = ({ data, pageContext }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout seo={seo}>
      <div className="post container">
        <Img
          className="cover-image"
          fluid={article.image.childImageSharp.fluid}
          imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        />
        <span className="all-posts-button">
          <Link to="/blog">Back to all posts</Link>
        </span>

        <div className="inner-container">
          <h1 className="title">{article.title}</h1>
          <p className="sub-description">
            Published on{' '}
            <Moment format="Do MMM YYYY">{article.publishedAt}</Moment> -{' '}
            <FontAwesomeIcon className="icon-bullet" icon={faClock} size="sm" />{' '}
            {article.readTime} min read
          </p>
          <div className="content">
            <Markdown source={article.content} escapeHtml={false} />
          </div>
          <hr />
          <div className="footer">
            <div className="author-container">
              <ClapButton slug={article.slug} />
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
            <PrevNextPost pageContext={pageContext} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
