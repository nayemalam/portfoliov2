import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'; 

class Socials extends Component {
    render() {
        
        return (
            <div className='socials'>
                <div className='buttons'>
                    <a className='linkWithNoDecoration hvr-bounce-in' href="https://github.com/nayemalam">
                        <Button>
                            <FontAwesomeIcon icon={faGithub} size='3x' style={{paddingRight: '5px'}} />
                        </Button>
                    </a>
                    <a className='linkWithNoDecoration hvr-bounce-in' href="https://www.linkedin.com/in/nayemalam/">
                        <Button>
                            <FontAwesomeIcon icon={faLinkedin} size='3x' style={{color: '#0e76a8', paddingRight: '5px'}} />
                        </Button>
                    </a>
                    <a className='linkWithNoDecoration hvr-bounce-in' href="https://www.instagram.com/nayem_wizdom/">
                        <Button>
                            <FontAwesomeIcon icon={faInstagram} size='3x' style={{color: '#fb3958', paddingRight: '5px'}} />
                        </Button>
                    </a>
                    <a className='linkWithNoDecoration hvr-bounce-in' href="https://medium.com/@nayemalam">
                        <Button>
                            <FontAwesomeIcon icon={faMedium} size='3x' style={{color: '#000', paddingRight: '5px'}} />
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Socials;