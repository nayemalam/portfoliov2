import React, { Component } from 'react';
import { Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import { Link } from 'gatsby';

class NotificationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
    this.closeNotif = this.closeNotif.bind(this);
  }

  closeNotif() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div className="notificationbar">
        <Collapse in={this.state.isOpen}>
          <div className="alert">
            <div className="message">
              <div className="icon">
                <InfoOutlinedIcon />
              </div>
              Hello, I'm currently doing some beta testing (hence some links
              might be broken) - come back on Dec 30.
            </div>
            <div className="action">
              <IconButton size="small" onClick={this.closeNotif}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default NotificationBar;
