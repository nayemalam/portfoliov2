import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
import { 
    IconButton,
    Collapse
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={this.closeNotif}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Welcome to portfolio v2.0. If you're curious about my previos portfolio, feel free to check it out <a href='https://nayemalam.github.io/portfolio' rel='noopener noreferrer' target='_blank'>here</a>.
                    </Alert>
                </Collapse>
            </div>
        )
    }
}

export default NotificationBar;