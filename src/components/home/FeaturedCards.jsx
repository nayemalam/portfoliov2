import { Link } from 'gatsby'
import React, { Component } from 'react'

class FeaturedCards extends Component {
  render() {
    return (
      <div className="featured-cards">
        <div className="container-lg">
          <div className="card">
            <Link to="/life">
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${require('../../images/misc/life.jpg')})`,
                }}
              >
                <h1 className="title">Current Life in a Nutshell</h1>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/uses">
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${require('../../images/misc/book.jpg')})`,
                }}
              >
                <h1 className="title">Blog Posts</h1>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/uses">
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${require('../../images/misc/chess.jpg')})`,
                }}
              >
                <h1 className="title">Uses</h1>
              </div>
            </Link>
          </div>

          <div className="card">
            <a
              href="https://www.youtube.com/channel/UCzxuB9xo-RmnFgqLqLiRQDQ"
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
    )
  }
}

export default FeaturedCards
