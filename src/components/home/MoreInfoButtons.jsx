import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import LaunchIcon from '@material-ui/icons/Launch';
import { Link } from 'gatsby';
import resume from '../../images/Nayem-Resume.pdf';

class MoreInfoButtons extends Component {
    render() {
        
        return (
            <div className='moreinfobuttons'>
                <Link to='about' style={{textDecoration: 'none'}}>
                    <Button className='btn mui-design'>READ MORE &nbsp; <FingerprintIcon fontSize='small' /></Button>
                </Link>
                <a href={resume} target="_blank" rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                    <Button className='btn mui-design'>VIEW RESUME &nbsp; <LaunchIcon fontSize='small' /></Button>
                </a>
            </div>
        )
    }
}

export default MoreInfoButtons;