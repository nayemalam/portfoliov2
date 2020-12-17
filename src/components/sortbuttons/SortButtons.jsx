import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class SortButtons extends Component {
  render() {
    return (
      <div className="sortbuttons">
        <TextField
          select
          label="Sort by"
          value={this.props.option}
          onChange={this.props.sortItems}
          style={{ width: '100px' }}
        >
          <MenuItem value="Recent">Recent</MenuItem>
          <MenuItem value="Earliest">Earliest</MenuItem>
        </TextField>
        {this.props.showInfo ? (
          <div className="info-near-field">
            <a
              className="link-with-no-decoration"
              href={
                'https://github.com/nayemalam/portfoliov2/blob/dev/src/pages/' +
                this.props.href +
                '.jsx'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                title="learn how this component works! sortItems() function"
                icon={faInfoCircle}
                size="md"
                className="hvr-icon"
              />
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SortButtons;
