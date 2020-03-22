import React, { Component } from 'react';
import Hamburger from '../hamburger/Hamburger';

class MobileMenu extends Component {
    render () {

        return (
            <div className='mobilemenu'>
                <div className='topbar'>        
                    <figure>
                        <a style={{color: '#000', textDecoration: 'none'}} href="">
                            <figcaption>nayem alam</figcaption>
                        </a>
                    </figure>

                    <Hamburger></Hamburger>
                </div>
            </div>
            
        )
    }
}
    
export default MobileMenu;