import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import mediaItems from '../data/MediaItems';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import EditPage from '../components/editpage/EditPage';

class Media extends Component {

    render () {
      
      const headerText = 'Beyond Grateful';
      const descText = 'I am thankful for all the amazing opportunities I\'ve had this far, I keep this page as a repo of all the places I\'ve been mentioned in.';
      
    return (
      <div className='media container'>
        <HTMLTitle title='Honorable Mentions | Nayem Alam' />
        
        <HeaderDesc header={headerText} desc={descText} />
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
        <EditPage link={'https://github.com/nayemalam/portfolio/blob/master/media.html'} />
      </div>
    )
  }
}

export default Media;