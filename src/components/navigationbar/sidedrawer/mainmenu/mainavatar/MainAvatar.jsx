import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import personalPic from '../../../../../images/common/headshot.jpg';

class MainAvatar extends Component {
  render() {
    return (
      <div className="mainavatar">
        <Link to="/">
          <Avatar
            className="hvr-grow"
            alt="Nayem Alam"
            src={personalPic}
            style={{ width: '130px', height: '130px', margin: 'auto' }}
          />
        </Link>
        <h2>Nayem Alam</h2>
        <p style={{ marginTop: '-10px' }}>
          <FontAwesomeIcon icon={faCode} size="sm" className="hvr-icon" /> Sr.
          Software Engineer
        </p>
      </div>
    );
  }
}

export default MainAvatar;
