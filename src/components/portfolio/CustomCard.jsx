import React, { Component } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Typography,
    IconButton,
    Badge
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tags from './Tags';

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

        return (
            <div className='customcard' data-aos='fade'>
                <Card className='card'>
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

                   <Tags tags={this.props.tags} />

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
                                <Badge color="secondary" badgeContent={this.state.count} max={5}>
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