import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MetaTags from '../components/metatags/MetaTags';
import Categories from '../components/blog/Categories';
import Articles from '../components/blog/Articles';

const SuccessfulAndFailedVentures = () => {
  // const data = useStaticQuery(query);

  return (
    <div className="blog container">
      <MetaTags title="Successful & Failed Ventures | Nayem Alam" />
      <h1>Successful & Failed Ventures</h1>
    </div>
  );
}

export default SuccessfulAndFailedVentures;
