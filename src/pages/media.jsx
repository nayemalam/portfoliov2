import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../components/htmltitle/HTMLTitle';

class Media extends Component {

    render () {

      const mediaItems = [
        {
          'website': 'https://plancanada.ca/Mohammed-Nayem-Alam',
          'logo': require('../images/media/T20.png'),
          'alt': 'Top 20 Under 20'
        },
        {
          'website': 'https://globalnews.ca/video/1178025/marymount-poetry-slam',
          'logo': require('../images/media/global.png'),
          'alt': 'Global News'
        },
        {
          'website': 'https://www.cansbridgefellowship.com/',
          'logo': require('../images/media/cansbridge.png'),
          'alt': 'Cansbridge Fellowship'
        },
        {
          'website': 'https://vtv.vaniercollege.qc.ca/2017/04/speak-up-slam-poetry-competition-2017/',
          'logo': require('../images/media/vanier.png'),
          'alt': 'Vanier College'
        },
        {
          'website': 'https://www.literacytoday.ca/secondary/production/authentic-writing-production/creating-spoken-word-poetry/',
          'logo': require('../images/media/literacytoday.png'),
          'alt': 'Literacy Today'
        },
        {
          'website': 'https://www.youtube.com/watch?v=YWba-iXlF80',
          'logo': require('../images/media/tedx_mcgill.png'),
          'alt': 'TEDx McGill'
        },
        {
          'website': 'https://www.youtube.com/watch?v=x2pQ3g5EL6Q&t',
          'logo': require('../images/media/tedx_mario.png'),
          'alt': 'TEDx Marianopolis'
        },
        {
          'website': 'https://www.tyndalestgeorges.com/uploads/2/8/4/5/28450747/spring_nl_2019_website_en.pdf',
          'logo': require('../images/media/tyndale.jpg'),
          'alt': 'Tyndale St. Georges'
        },
        {
          'website': 'https://montreal.ctvnews.ca/video?clipId=298629',
          'logo': require('../images/media/ctv.png'),
          'alt': 'CTV News'
        },
        {
          'website': 'https://youeffect.tumblr.com/post/124712966286/nayem-alam-speaks-up-by-elizabeth-diemanuele',
          'logo': require('../images/media/youeffect.png'),
          'alt': 'YouEffect'
        },
        {
          'website': 'https://www.danielbielak.com/naymealam',
          'logo': require('../images/media/youthempowerment.png'),
          'alt': 'Youth Empowerment Podcast'
        },
        {
          'website': 'http://marymount.emsb.qc.ca/trendingnews-2013-2014.html',
          'logo': require('../images/media/emsb-logo.png'),
          'alt': 'English Montreal School Board'
        },
        {
          'website': 'http://514magazine.ca/nayem-alam-the-young-leader/',
          'logo': require('../images/media/514-mag.png'),
          'alt': '514 Magazine'
        },
        {
          'website': 'https://open.spotify.com/episode/45qlGbLtmB2He6RwWZQx0Q',
          'logo': require('../images/media/sca.jpg'),
          'alt': 'Small Consistent Actions'
        },
        {
          'website': '',
          'logo': require('../images/media/cjad.png'),
          'alt': 'CJAD Radio'
        },
        {
          'website': 'https://urgenerationblog.wordpress.com/2017/02/21/north-star-academys-spoken-word-competition-speak-up-montreal-by-mary-zoi/',
          'logo': require('../images/media/nstar.jpg'),
          'alt': 'Northstar Academy'
        },
        {
          'website': 'http://www.vinsider.ca/news/speak-up-intercollegiate-poetry-slam/',
          'logo': require('../images/media/v-insider.png'),
          'alt': 'Vanier Insider'
        },
        {
          'website': 'http://marymount.emsb.qc.ca/documents/mma-highlights/SpotlightFebruary2014.pdf',
          'logo': require('../images/media/marymount.jpg'),
          'alt': 'Marymount Academy'
        }
    ];

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