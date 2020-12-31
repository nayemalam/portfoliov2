import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialItems } from '../../data/NavigationItems';

class Socials extends Component {
    render() {
        
        return (
            <div className='socials'>
                <div className='buttons'>
                    {socialItems.map((item,id) => (
                        <a key={id} className='linkWithNoDecoration hvr-bounce-in' href={item.link} aria-label={item.ariaLabel}>
                            <Button aria-label='GitHub Icon'>
                                <FontAwesomeIcon icon={item.icon} size='3x' style={{color: item.styleColor, paddingRight: '5px'}} />
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}

export default Socials;