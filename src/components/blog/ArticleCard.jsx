import React from 'react';
import { Link } from 'gatsby';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Moment from 'react-moment';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <Card className="card-container">
        <Link to={`/blog/post/${article.node.slug}`}>
          <CardMedia
            className="feature-image"
            image={article.node.image.childImageSharp.fixed.src}
            title={article.node.title}
          />
        </Link>

        <CardContent>
          <Link to={`/blog/post/${article.node.slug}`}>
            <Typography gutterBottom variant="h5" component="h5">
              {article.node.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className="details">
              <CalendarToday className="calendar-icon" />
              <Moment fromNow className="date">
                {article.node.publishedAt}
              </Moment>
            </span>
            <span className="description">{article.node.description}</span>
          </Typography>
        </CardContent>
        <div className="category-name">
          <Link to={`/blog/category/${article.node.category.slug}`}>
            {article.node.category.name}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ArticleCard;
