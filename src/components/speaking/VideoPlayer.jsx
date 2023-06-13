// Thanks to CookPete for his ReactPlayer component; tweaked for my use case.
// creds: https://github.com/CookPete/react-player/
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import PlayerInfo from './PlayerInfo';
// import PlayerControls from './PlayerControls';
import Thumbnails from './Thumbnails';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      title: null,
      playing: true,
      controls: true,
    };

    this.load = this.load.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  load = (url, title) => {
    this.setState({
      url,
      title,
    });
  };

  handlePlayPause = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  handlePlay = () => {
    // console.log('playing');
    this.setState({
      playing: true,
    });
  };

  handlePause = () => {
    // console.log('paused');
    this.setState({
      playing: false,
    });
  };
  // have an 'alt' param
  renderLoadButton = (title, url, imgPath, altText) => {
    return (
      <div>
        <Button
          onClick={() => this.load(url, title)}
          style={{ cursor: 'pointer' }}
        >
          <img
            className="hvr-grow"
            src={imgPath}
            width="255"
            height="143"
            alt={altText}
          />
        </Button>
        <p className="thumb-title">{title}</p>
      </div>
    );
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { url, playing, controls, title } = this.state;

    return (
      <div className="videoplayer">
        <div className="frame" id="anchor">
          <PlayerInfo url={url} title={title} />
          <ReactPlayer
            ref={this.ref}
            className="player"
            width="100%"
            height="100%"
            url={url}
            playing={playing}
            controls={controls}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onError={e => console.log('onError', e)}
          />
        </div>
        {/* <PlayerControls handlePlayPause={this.handlePlayPause} playing={playing} /> */}
        <Thumbnails renderLoadButton={this.renderLoadButton} />
      </div>
    );
  }
}

export default VideoPlayer;
