import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import videoItems from '../../data/VideoItems';

class Thumbnails extends Component {
    render() {
        // styles under videoplayer
        return (
            <div className='thumbnails'>
                <h1 className='titleWithBackground'>Videos</h1>
                <Grid container spacing={1}>
                    {videoItems.map((item, id) => (
                        <Grid key={id} item xs={12} sm={4} style={{textAlign: 'center'}}>
                            {this.props.renderLoadButton(item.title, item.url, item.img, item.alt)}
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default Thumbnails;