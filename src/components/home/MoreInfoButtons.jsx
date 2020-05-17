import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import LaunchIcon from '@material-ui/icons/Launch';

class MoreInfoButtons extends Component {
    render() {
        
        return (
            <div className='moreinfobuttons'>
                <Button className='btn mui-design'>READ MORE &nbsp; <FingerprintIcon fontSize='small' /></Button>
                <Button className='btn mui-design'>VIEW RESUME &nbsp; <LaunchIcon fontSize='small' /></Button>
            </div>
        )
    }
}

export default MoreInfoButtons;