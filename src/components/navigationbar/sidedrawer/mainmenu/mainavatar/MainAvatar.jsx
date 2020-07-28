import React, { Component } from 'react';
import { Link } from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import personalPic from '../../../../../images/common/headshot.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'; 

class MainAvatar extends Component {

    render () {
        return (
            <div className='mainavatar'>
                <Link to='/'>
                    <Avatar className='hvr-grow' alt="Nayem Alam" src={personalPic} style={{width: '130px', height: '130px', margin: 'auto'}}/>
                </Link>
                <h2>Nayem Alam</h2>
                <p style={{marginTop: '-10px'}}>Fullstack Dev. @ <a href="https://fundmore.ai" className="linkWithNoDecoration" target="_blank" rel="noopener noreferrer">fundmore.ai</a></p>
            </div>
        )
    }
}

export default MainAvatar;
