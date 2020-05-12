import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {
    blue,
    red,
    grey,
    orange,
    indigo
} from '@material-ui/core/colors';

class Tags extends Component {
    
    render() {

        function changeBackgroundColor (tag) {
            let bgColor = grey[400];

            if (tag === 'HTML')  {
                bgColor = red[400];
            }

            if (tag === 'JS') {
                bgColor = orange[400];
            }

            if (tag === 'CSS') {
                bgColor = blue[400];
            }

            if (tag === 'Java') {
                bgColor = indigo[400];
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