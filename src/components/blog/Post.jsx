import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import Layout from '../layout';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { MenuItem, MenuList } from '@material-ui/core';
import { socialItems } from '../../data/NavigationItems';
import ShareButtons from '../sharebuttons/ShareButtons';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      slug
      image {
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        name
        picture {
          childImageSharp {
            fixed(width: 50, height: 50) {
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
  console.log('hey', location.state);
  console.log('context', pageContext);
  const { prev, next } = pageContext;
  console.log(article);
  return (
    <Layout seo={seo}>
      <div className="post container">
        <Img
          className="cover-image"
          fluid={article.image.childImageSharp.fluid}
          imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        />
        <div className="inner-container">
          <h1 className="title">{article.title}</h1>
          <p className="sub-description">
            Published on{' '}
            <Moment format="Do MMM YYYY">{article.publishedAt}</Moment> -{' '}
            <FontAwesomeIcon className="icon-bullet" icon={faClock} size="sm" />{' '}
            3 min read
          </p>
          <Markdown source={article.content} escapeHtml={false} />
          <hr />
          <div className="footer">
            <table className="author">
              <tr>
                <td rowSpan={2} className="image">
                  {article.author.picture && (
                    <Img
                      fixed={article.author.picture.childImageSharp.fixed}
                      imgStyle={{ position: 'static', borderRadius: '50%' }}
                    />
                  )}
                </td>
                <td className="name">{article.author.name}</td>
              </tr>
              <tr>
                <td>
                  <MenuList className="social">
                    {socialItems.map((item, id) => (
                      <a
                        key={id}
                        className="linkWithNoDecoration"
                        href={item.link}
                      >
                        <MenuItem>
                          <FontAwesomeIcon
                            icon={item.icon}
                            size="lg"
                            style={{
                              color: '#757575',
                            }}
                          />
                        </MenuItem>
                      </a>
                    ))}
                  </MenuList>
                </td>
              </tr>
            </table>
            <ShareButtons
              title={article.title}
              url={`https://nayemalam.com/blog/post/${article.slug}`}
              twitterHandle={'nayem_wizdom'}
            />
            <div className="prev-next-section">
              <table>
                {prev && (
                  <Link
                    to={`/blog/post/${prev.slug}`}
                    className="action-button"
                  >
                    <tr>
                      <td className="icon">
                        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                      </td>
                      <td className="prev-text">{prev.title}</td>
                    </tr>
                  </Link>
                )}
              </table>
              <table>
                {next && (
                  <Link
                    to={`/blog/post/${next.slug}`}
                    className="action-button"
                  >
                    <tr>
                      <td className="next-text">{next.title}</td>
                      <td className="icon">
                        <FontAwesomeIcon icon={faAngleRight} size="2x" />
                      </td>
                    </tr>
                  </Link>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* {location.state.prevPath && (
          <span className="previous-button">
            <Link to={location.state.prevPath}>
              <FontAwesomeIcon className="icon-bullet" icon={faCaretLeft} /> go
              back
            </Link>
          </span>
        )} */}
    </Layout>
  );
};

export default Post;
