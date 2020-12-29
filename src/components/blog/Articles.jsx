import { Grid } from '@material-ui/core';
import React from 'react';
import ArticleCard from './ArticleCard';

const Articles = ({ articles }) => {
  // const featuredArticles = articles.slice(articles.length - 2, articles.length);
  // const allArticles = articles.slice(0, articles.length - 2);

  // const sortedArticles = articles.sort((a, b) =>
  //   a.node.publishedAt < b.node.publishedAt
  //     ? 1
  //     : a.node.publishedAt > b.node.publishedAt
  //     ? -1
  //     : 0,
  // );

  return (
    <div className="articles">
      <Grid container spacing={5}>
        {articles.map((article, i) => (
          <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Articles;