import { Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import featuredCardItems from '../../data/FeaturedCardItems';
import laptop from '../../images/misc/laptop.jpg';

class FeaturedCards extends Component {
  render() {
    const [xs, sm, md, lg, xl] = [6, 6, 3, 3, 3];

    return (
      <div className="featured-cards">
        <div className="container-lg">
          <Grid container spacing={5} data-aos="fade">
            {featuredCardItems.map((item, i) => (
              <Grid key={i} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <div className="card">
                  <Link to={item.url}>
                    <div className="cover" style={item.backgroundImage}>
                      <h1 className="title">{item.title}</h1>
                    </div>
                  </Link>
                </div>
              </Grid>
            ))}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div className="card">
                <a
                  href="https://www.youtube.com/techtutorialsz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="cover"
                    style={{
                      backgroundImage: `url(${laptop})`,
                    }}
                  >
                    <h1 className="title">YouTube Channel</h1>
                  </div>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default FeaturedCards;
