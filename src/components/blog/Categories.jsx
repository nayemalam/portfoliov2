import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Categories = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <div className="categories">
        <div className="title">Categories</div>
        <div className="items">
          {data.allStrapiCategory.edges.map((category, i) => (
            <Link
              key={`category__${category.node.slug}`}
              to={`/blog/category/${category.node.slug}`}
            >
              <div className="item">{category.node.name}</div>
            </Link>
          ))}
        </div>
      </div>
    )}
  />
);

export default Categories;