import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Media extends Component {

    render () {
        const mediaItems = [
            {
                'website': '#',
                'logo': '/images/media/T20.png'
            },
            {
                'website': '',
                'logo': '/images/media/global.png'
            },
            {
                'website': '',
                'logo': '/images/media/youeffect.png'
            },
            {
                'website': '',
                'logo': '/images/media/vanier.png'
            },
            {
                'website': '',
                'logo': '/images/media/literacytoday.png'
            },
            {
                'website': '',
                'logo': '/images/media/tedx_mcgill.png'
            },
            {
                'website': '',
                'logo': '/images/media/tedx_mario.png'
            },
            {
                'website': '',
                'logo': '/images/media/tyndale.jpg'
            },
            {
                'website': '',
                'logo': '/images/media/ctv.png'
            },
            {
                'website': '',
                'logo': '/images/media/youeffect.png'
            },
            {
                'website': '',
                'logo': '/images/media/cansbridge.png'
            },
            {
                'website': '',
                'logo': '/images/media/emsb-logo.png'
            },
            {
                'website': '',
                'logo': '/images/media/514-mag.png'
            },
            {
                'website': '',
                'logo': '/images/media/sca.jpg'
            },
            {
                'website': '',
                'logo': '/images/media/cjad.png'
            },
            {
                'website': '',
                'logo': '/images/media/nstar.jpg'
            },
            {
                'website': '',
                'logo': '/images/media/v-insider.png'
            },
            {
                'website': '',
                'logo': '/images/media/marymount.jpg'
            }
        ];

        return (
            <div className='media container'>
                <h2 className='titleWithBackground'>beyond grateful</h2>
                <div className='mediaItems'>
                    <Grid container spacing={3}>
                        {mediaItems.map((media, id) => (
                            <Grid key={id} item xs={6} sm={3} style={{textAlign: 'center'}}>
                                <a target='_blank' href={media.website}><img width='200' src={media.logo}/></a>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                
            </div>
        )
    }
}

export default Media;
