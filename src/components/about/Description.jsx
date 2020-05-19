import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

class Description extends Component {

    constructor(props) {
        super(props)

        this.state ={
            isHidden: false
        }

        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {

        return (
            <div className='description'>
                <p className='info'>
                    B.Eng. in Electrical Engineering with a Minor in Software Engineering from McGill University. There are many things I love doing, such as giving public speeches via slam poetry, writing, playing ball, improving my coding while also learning new tech stacks, travelling and meeting new people and how can I forget, drinking coffee.
                    <Button onClick={this.toggleShow}>{this.state.isHidden ? <ExpandLessIcon /> : <ExpandMoreIcon />}</Button>
                </p> 
                <div className={this.state.isHidden ? 'info' : 'hidden'}>
                    <p>
                        When I’m not in school, I like to play basketball, workout and spend time with family. I’m always excited to work on projects as I’ve been continuously working on Speak Up which is a unique slam poetry competition to give our youth an outlet to express themselves. I also have a side hustle, Emreld, which is a web design agency putting clients first to help jumpstart their business(es). Finally, I was once a content creator back in grade 7-9 making YouTube videos!
                    </p>
                    <p>
                        At school, I’ve devoted my extra-curricular time to being the head of marketing of McGill’s Junior Council. The project manager, director of corporate relations and web designer for the National Organization of Business & Engineering and the web master for McGill Chem-E Car. Finally, I've also worked closely with the McGill EngInE team to curate the McGill Design Consultancy; our goal is to build a centralized place for all design-related questions and demands for the McGill community.
                    </p>
                </div>
                <p>Hello from the other side</p>
            </div>
        )
    }
}

export default Description;