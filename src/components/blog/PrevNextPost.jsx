import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PrevNextPost = ({ pageContext }) => {
  const { prev, next } = pageContext;

  return (
    <div className="prev-next-post">
      <div>
        {prev && (
          <Link to={`/blog/post/${prev.slug}`} className="action-button">
            <span className="icon">
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </span>
            <span className="prev-text">{prev.title}</span>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={`/blog/post/${next.slug}`} className="action-button">
            <span className="next-text">{next.title}</span>
            <span className="icon">
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNextPost;
