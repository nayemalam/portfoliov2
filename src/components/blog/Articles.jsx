import React from 'react';
import { Grid } from '@material-ui/core';
import ArticleCard from './ArticleCard';

const Articles = ({ articles }) => {
  const articlesASC = articles.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return (
    <div className="articles">
      <Grid container spacing={5} data-aos="fade">
        {articlesASC?.map((article, i) => (
          <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
            <ArticleCard article={article.frontmatter} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Articles;
