import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowLeftSharp, ArrowRightAlt, ArrowRightSharp } from '@material-ui/icons';

const PrevNextPost = ({ pageContext }) => {
  const { prev, next } = pageContext;

  return (
    <div className="prev-next-post">
      <div>
        {prev && prev?.title && (
          <Link to={`/blog/post/${prev.slug}`} className="action-button">
            <span className="icon hvr-bounce-in">
            <ArrowLeftSharp />
              {/* <FontAwesomeIcon icon={faArrowLeft} size="2x" /> */}
            </span>
            <span className="prev-text">{prev.title}</span>
          </Link>
        )}
      </div>
      <div>
        {next && next?.title && (
          <Link to={`/blog/post/${next.slug}`} className="action-button">
            <span className="next-text">{next.title}</span>
            <span className="icon hvr-bounce-in">
            <ArrowRightSharp />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNextPost;
