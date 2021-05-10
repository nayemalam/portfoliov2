import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import resume from '../../images/Nayem_Resume_2021.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faFilePdf } from '@fortawesome/free-solid-svg-icons';

class MoreInfoButtons extends Component {
  render() {
    return (
      <div className="moreinfobuttons">
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <Button className="btn mui-design">
            READ MORE &nbsp; <FontAwesomeIcon icon={faFingerprint} width="16" />
          </Button>
        </Link>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button className="btn mui-design">
            VIEW RESUME &nbsp; <FontAwesomeIcon icon={faFilePdf} width="16" />
          </Button>
        </a>
      </div>
    );
  }
}

export default MoreInfoButtons;
