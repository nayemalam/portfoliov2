import { Link } from 'gatsby';
import React, { Component } from 'react';
import featuredCardItems from '../../data/FeaturedCardItems';

class FeaturedCards extends Component {
  render() {
    return (
      <div className="featured-cards">
        <div className="container-lg">
          {featuredCardItems.map((item, i) => (
            <div className="card" key={i}>
              <Link to={item.url}>
                <div className="cover" style={item.backgroundImage}>
                  <h1 className="title">{item.title}</h1>
                </div>
              </Link>
            </div>
          ))}
          <div className="card">
            <a
              href="https://www.youtube.com/techtutorialsz"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${require('../../images/misc/laptop.jpg')})`,
                }}
              >
                <h1 className="title">YouTube Channel</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedCards;
