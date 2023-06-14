import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class ShowHideButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <div className="showhidebutton">
        <Button className={this.props.btnclass} onClick={this.toggleShow}>
          {this.state.isHidden ? (
            <>
              {' '}
              {this.props.readLessText} <ArrowDropUpIcon />{' '}
            </>
          ) : (
            <>
              {' '}
              {this.props.readMoreText} <ArrowDropDownIcon />{' '}
            </>
          )}
        </Button>
        <div className={this.state.isHidden ? this.props.txtclass : 'hide'}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default ShowHideButton;
