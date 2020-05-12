import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import {
    blue,
    red,
    grey,
    orange,
    indigo
} from '@material-ui/core/colors';


class CustomCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);  
    }

    incrementCounter() {
        this.setState({
            count: this.state.count + 1
        })
    }

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
            <div className='customcard'>
                <Card style={{height: '361.61px'}}>
                    <CardActionArea>
                        <CardMedia
                            className='featuredImage'
                            image={this.props.image}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography
                                className='title'
                                variant={'h6'}
                                gutterBottom
                            >
                                {this.props.title}
                            </Typography>
                            <Typography 
                                className='description'
                                variant={"caption"}
                            >
                                {this.props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <div className='tags'>
                        {this.props.tags.map((tag,id) => (
                            <Typography key={id} className='tag' style={{background: changeBackgroundColor(tag)}}>
                                {tag}
                            </Typography>
                        ))}
                    </div>

                    <CardActions className='cardActions'>
                        <Typography 
                            className='date'
                            variant={'caption'}
                        >
                            {this.props.date}
                        </Typography>
                        <div>
                            <a href={this.props.link} rel='noopener noreferrer' target='_blank'>
                                <IconButton aria-label='share' className='linkSharpIcon'>
                                    {this.props.LinkIcon}
                                </IconButton>
                            </a>
                            <IconButton aria-label='add to fav' className='favoriteIcon'
                                onClick={this.incrementCounter}
                                title='For you to interact with :)'
                            >
                                <Badge color="secondary" badgeContent={this.state.count} max={20}>
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default CustomCard;