import React from 'react';
import { Grid } from '@material-ui/core';
import ArticleCard from './ArticleCard';

const Articles = ({ articles }) => {
  return (
    <div className="articles">
      <Grid container spacing={5} data-aos="fade">
        {articles.map((article, i) => (
          <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
            <ArticleCard article={article.frontmatter} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Articles;
