import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MetaTags from '../components/metatags/MetaTags';

const Blog = () => {
  // const data = useStaticQuery(query);

  return (
    <div className="blog container">
      <MetaTags title="Blog | Nayem Alam" />
      {/* <h1>{data.strapiGlobal.siteName}</h1> */}
      <div className="top-bar">
        <h2>
          Latest <ArrowDownwardIcon className="icon" />
        </h2>
        {/* <Categories /> */}
      </div>
      {/* <Articles articles={data.allStrapiArticle.edges} /> */}
    </div>
  );
};

export default Blog;
