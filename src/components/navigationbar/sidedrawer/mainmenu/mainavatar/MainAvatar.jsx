import React, { Component } from 'react';
import { Link } from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import personalPic from '../../../../../images/common/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

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
        <p style={{ marginTop: '-10px' }} className="hvr-icon-float">
          <FontAwesomeIcon icon={faCode} size="sm" className="hvr-icon" />{' '}
          Full-stack web dev. @{' '}
          <a
            className="linkWithNoDecoration"
            href="https://montreal.ubisoft.com/en/"
            target="_blank"
            aria-label="link to ubisoft"
            rel="noreferrer"
          >
            Ubisoft
          </a>
        </p>
      </div>
    );
  }
}

export default MainAvatar;
