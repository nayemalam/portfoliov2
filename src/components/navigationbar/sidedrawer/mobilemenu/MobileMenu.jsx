import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons'; 
import { SwipeableDrawer, Button } from '@material-ui/core';
import Hamburger from '../hamburger/Hamburger';

class MobileMenu extends Component {

    render () {

        return (
            <div className='mobilemenu'>
                <div className='topbar'>        
                    <figure>
                        <a style={{color: '#000', textDecoration: 'none'}} href="/">
                            <figcaption>nayem alam <FontAwesomeIcon icon={faFire}/></figcaption>
                        </a>
                    </figure>

                    <Button onClick={this.props.toggleDrawer}>
                        {/* passing state openMenu to Hamburger */}
                        <Hamburger openMenu={this.props.isOpen}></Hamburger>
                    </Button>

                    <SwipeableDrawer
                        variant='temporary'
                        anchor='left'
                        open={this.props.isOpen}
                        onClose={this.props.toggleDrawer}
                        onOpen={this.props.toggleDrawer}
                    >
                        {this.props.NavItems}
                    </SwipeableDrawer>
                </div>
            </div>
            
        )
    }
}
    
export default MobileMenu;