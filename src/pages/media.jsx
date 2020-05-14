import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import mediaItems from '../data/MediaItems';

class Media extends Component {

    render () {

    return (
      <div className='media container'>
        <HTMLTitle title='Honorable Mentions | Nayem Alam' />
        
        <h2 className='customHeader upperCaseAll centerText'>beyond grateful</h2>
        <div className='mediaItems'>
            <Grid container spacing={4}>
              {mediaItems.map((media, id) => (
                <Grid key={id} item xs={12} sm={4} style={{textAlign: 'center'}}>
                  <a target='_blank' rel='noopener noreferrer' href={media.website}>
                    <img className='hvr-bounce-in mediaItem' width='225' alt={media.alt} src={media.logo} />
                  </a>
                </Grid>
              ))}
            </Grid>
        </div>
      </div>
    )
  }
}

export default Media;