import React, { Component } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Button from '@material-ui/core/Button';

class PlayerControls extends Component {
    render() {
        // styles under videoplayer
        return (
            <div className='player-controls'>
                <Button className='controls-btn' onClick={this.props.handlePlayPause}>{this.props.playing ? <PauseIcon className='controls-icon' /> : <PlayArrowIcon className='controls-icon' />}</Button>
            </div>
        )
    }
}

export default PlayerControls;