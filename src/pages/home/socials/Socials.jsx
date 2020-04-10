import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'; 

class Socials extends Component {
    render () {
        return (
            <div className='socials'>
                 <Grid container spacing={4}>
                    <Grid item xs={4} sm={4} style={{marginRight: '-20px'}}>
                    <FontAwesomeIcon icon={faGithub} size='2x' style={{marginRight: '25px', color: '#bfc7d5'}}/>
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{marginRight: '25px', color: '#bfc7d5'}}/>
                    <FontAwesomeIcon icon={faInstagram} size='2x' style={{marginRight: '25px', color: '#bfc7d5'}}/>
                    <FontAwesomeIcon icon={faMedium} size='2x' style={{marginRight: '15px', color: '#bfc7d5'}}/>
                    </Grid>
                    <Grid item xs={4} sm={4}><hr className='customHr'/></Grid>
                    <Grid item xs={4} sm={4} className='customHeader' style={{color: '#bfc7d5'}}>My Social Profiles</Grid>
                </Grid>
            </div>
        )
    }
}

export default Socials;