import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {
    blue,
    red,
    grey,
    indigo,
    green,
    lime,
    purple,
    teal,
    orange,
    cyan,
    pink,
    lightGreen,
    lightBlue,
    deepPurple,
    deepOrange,
    blueGrey
} from '@material-ui/core/colors';

class Tags extends Component {
    
    render() {

        function changeBackgroundColor (tag) {
            let bgColor = grey[500];

            if (tag === 'HTML')  {
                bgColor = red[400];
            }
            if (tag === 'Vanilla JS') {
                bgColor = orange[400];
            }
            if (tag === 'CSS') {
                bgColor = blue[800];
            }
            if (tag === 'Java') {
                bgColor = indigo[400];
            }
            if (tag === 'Java Spring') {
                bgColor = lightGreen[500];
            }
            if (tag === 'Vue.js') {
                bgColor = teal[400];
            }
            if (tag === 'React.js') {
                bgColor = lightBlue[400];
            }
            if (tag === 'Heroku') {
                bgColor = purple[400];
            }
            if (tag === 'Python') {
                bgColor = deepOrange[400];
            }
            if (tag === 'Wordpress') {
                bgColor = blueGrey[400];
            }
            if (tag === 'WooCommerce') {
                bgColor = deepPurple[500];
            }
            if (tag === 'MailChimp') {
                bgColor = pink[500];
            }
            if (tag === 'Client') {
                bgColor = cyan[600];
            }
            if (tag === 'Shopify') {
                bgColor = green[400];
            }
            if (tag === 'Android Studio') {
                bgColor = lime[700];
            }
            if (tag === 'React Native') {
                bgColor = blue[500];
            }
            if (tag === 'Graphics') {
                bgColor = red['A400'];
            }


            return bgColor;
        }

        return (
            <div className='tags'>
                {this.props.tags.map((tag,id) => (
                    <Typography key={id} className='tag' style={{background: changeBackgroundColor(tag)}}>
                        {tag}
                    </Typography>
                ))}
            </div>
        )
    }
}

export default Tags;