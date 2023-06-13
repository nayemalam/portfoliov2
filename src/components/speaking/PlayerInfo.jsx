import React, { Component } from 'react';

class PlayerInfo extends Component {
  render() {
    // styles under videoplayer
    return (
      <div className="player-info">
        <h3 className={!this.props.url ? 'gray-text' : ''}>
          {(this.props.title instanceof Array
            ? 'Multiple'
            : this.props.title) || 'No video selected'}
        </h3>
        <p className={!this.props.url ? 'gray-text' : ''}>
          {(this.props.url instanceof Array ? 'Multiple' : this.props.url) ||
            ''}
        </p>
      </div>
    );
  }
}

export default PlayerInfo;
