import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import Layout from '../layout';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      image {
        publicURL
        childImageSharp {
          fixed {
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
`;

const Post = ({ data, location, pageContext }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };
  console.log(location.state);
  console.log('context', pageContext);
  const { prev, next } = pageContext;

  return (
    <Layout seo={seo}>
      <div className="post container">
        {location.state.prevPath && (
          <span className="previous-button">
            <Link to={location.state.prevPath}>
              <FontAwesomeIcon className="icon-bullet" icon={faCaretLeft} /> go
              back
            </Link>
          </span>
        )}
        <div>
          {prev && <Link to={`/blog/post/${prev.slug}`}>{prev.title}</Link>}
          <br />
          {next && <Link to={`/blog/post/${next.slug}`}>{next.title}</Link>}
        </div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <Markdown source={article.content} escapeHtml={false} />

            <hr className="uk-divider-small" />

            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: 'static', borderRadius: '50%' }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
                <p>{location.state.prevPath}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;