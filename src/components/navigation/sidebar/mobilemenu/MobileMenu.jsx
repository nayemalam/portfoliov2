import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons'; 
import Drawer from '../drawer/Drawer';

class MobileMenu extends Component {
    render () {

        return (
            <div className='mobilemenu'>
                <div className='topbar'>        
                    <figure>
                        <a style={{color: '#000', textDecoration: 'none'}} href="">
                            <figcaption>nayem alam <FontAwesomeIcon icon={faFire}/></figcaption>
                        </a>
                    </figure>

                    <Drawer></Drawer>
                </div>
            </div>
            
        )
    }
}
    
export default MobileMenu;