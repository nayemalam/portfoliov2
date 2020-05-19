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
                    My name is Nayem Alam, I am a 23yo tech enthusiast with a passion for slam poetry and engineering.
                    I hold a B.Eng. in Electrical Engineering with a Minor in Software Engineering from McGill University. 
                    Through slam poetry I like to use my voice to influence people to make an impact in society. 
                    I also enjoy writing, playing ball, improving my coding while also learning new frameworks, travelling, meeting new people and how can I forget, drinking coffee!
                    <Button className='toggleButton' onClick={this.toggleShow}>{this.state.isHidden ? <ExpandLessIcon /> : <ExpandMoreIcon />}</Button>
                </p> 
                <div className={this.state.isHidden ? 'info' : 'hidden'}>
                    <p>
                        When I’m not in school, I like to play basketball, workout and spend time with family. 
                        I’m always excited to work on projects as I’ve been continuously working on <a href="http://speakupmtl.com/"><span class='customLink'>Speak Up</span></a> which is a 
                        unique slam poetry competition to give our youth an outlet to express themselves. I also run a 
                        side hustle, <a href="http://emreld.com/"><span class='customLink'>Emreld</span></a>, which is a web design agency 
                        putting clients first to help jumpstart their business(es). Finally, I was once a content creator back in grades 
                        7-9 making <a href="https://www.youtube.com/user/TechTutorialsz"><span class='customLink'>YouTube</span></a> videos!
                    </p>
                    <p>
                        At school, I’ve devoted my extra-curricular time to being the head of marketing of 
                        McGill’s <a href="https://www.mcgilleus.ca/juniorcounil"><span class='customLink'>Junior Council</span></a>. 
                        The project manager, director of corporate relations and web designer for 
                        the <a href="https://nobemcgill.org/"><span class='customLink'>National Organization of Business & Engineering</span></a> and 
                        the web master for <a href="http://mcgillchemecar.com/"><span class='customLink'>McGill Chem-E Car</span></a>. 
                        Finally, I've also worked closely with the <a href="https://www.mcgill.ca/engine/"><span class='customLink'>McGill EngInE</span></a> team 
                        to curate the <a href="http://mcgilldesignconsultancy.com/"><span class='customLink'>McGill Design Consultancy</span></a>; our goal is to build a centralized place for all design-related questions and demands for the McGill community.
                    </p>
                </div>
                <p className='info'>
                    Feel free to check out my projects, and connect with me on my other platforms. If you’d like to get to know me, the best way is by hitting me up! 🙂
                </p>
            </div>
        )
    }
}

export default Description;