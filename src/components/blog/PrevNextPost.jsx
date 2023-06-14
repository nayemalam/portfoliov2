import { ArrowLeftSharp, ArrowRightSharp } from '@material-ui/icons';
import { Link } from 'gatsby';
import React from 'react';

const PrevNextPost = ({ pageContext }) => {
  const { prev, next } = pageContext;

  return (
    <div className="prev-next-post">
      <div>
        {prev && prev?.title && (
          <Link to={`/blog/post/${prev.slug}`} className="action-button">
            <span className="icon hvr-bounce-in">
              <ArrowLeftSharp />
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
