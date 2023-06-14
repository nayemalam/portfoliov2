import React, { Component } from 'react';

class HeaderDesc extends Component {
  render() {
    return (
      <div className="headerdesc">
        <h1 className="customHeader">
          {this.props.header}
          <span
            style={{ display: 'block' }}
            className="finePrint paragraphColor"
          >
            {this.props.desc}
          </span>
        </h1>
      </div>
    );
  }
}

export default HeaderDesc;
