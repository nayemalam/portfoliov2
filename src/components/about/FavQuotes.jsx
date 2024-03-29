import React, { Component } from 'react';
import randomQuote from '../../data/Quotes';

class FavQuotes extends Component {
  render() {
    return (
      <div className="favquotes" data-aos="zoom-in">
        <h1>{randomQuote.quote}</h1>
        <span>- {randomQuote.author}</span>
      </div>
    );
  }
}

export default FavQuotes;
