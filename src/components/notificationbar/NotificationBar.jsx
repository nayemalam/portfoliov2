import React, { Component } from 'react';
import {
    Collapse,
    IconButton
 } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import { Link } from 'gatsby';

class NotificationBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
        this.closeNotif = this.closeNotif.bind(this);
    }

    closeNotif () {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div className='notificationbar'>
                <Collapse in={this.state.isOpen}>
                    <div className='alert'>
                        
                        <div className='message'>
                            <div className='icon'>
                                <InfoOutlinedIcon />
                            </div>
                            Welcome to portfolio v2.0. If you're curious about my previos portfolio, feel free to check it out <a href='https://nayemalam.github.io/portfolio' rel='noopener noreferrer' target='_blank'>here</a>.
                        </div>
                        <div className='action'>
                            <IconButton
                                size="small"
                                onClick={this.closeNotif}
                            >
                                <CloseIcon fontSize='inherit' />
                            </IconButton>
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default NotificationBar;