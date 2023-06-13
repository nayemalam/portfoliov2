import React from 'react';
import { Link } from 'gatsby';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Moment from 'react-moment';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <Card className="card-container">
        <Link to={`${article.slug}`}>
          <CardMedia
            className="feature-image"
            image={article?.featuredImage?.childImageSharp?.fluid.src}
            title={article?.title}
          />
        </Link>

        <CardContent>
          <Link to={`${article.slug}`}>
            <Typography gutterBottom variant="h5" component="h5">
              {article.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className="details">
              <CalendarToday className="calendar-icon" />
              <span className="date">
                <Moment fromNow>{article.date}</Moment> -{' '}
                <FontAwesomeIcon
                  className="icon-bullet"
                  icon={faClock}
                  size="sm"
                />{' '}
                {article.timeToRead} read
              </span>
            </span>
            <span className="description">{article.description}</span>
          </Typography>
        </CardContent>
        {/* <div className="category-name">
          <Link to={`/blog/category/${article.category}`}>
            {article.category}
          </Link>
        </div> */}
      </Card>
    </div>
  );
};

export default ArticleCard;
