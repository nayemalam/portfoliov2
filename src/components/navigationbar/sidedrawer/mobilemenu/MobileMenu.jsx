import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons'; 
import { SwipeableDrawer, Button } from '@material-ui/core';
import Hamburger from './hamburger/Hamburger';
import MobileAvatar from './mobileavatar/MobileAvatar';


class MobileMenu extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isOpen: false,
            isSocialOpen: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);  
        this.toggleSocialDrawer = this.toggleSocialDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleSocialDrawer() {
        this.setState({
            isSocialOpen: !this.state.isSocialOpen
        })
    }


    render () {

        return (
            <div className='mobilemenu'>
                <div className='topbar'>        
                    <figure>
                        <a style={{color: '#000', textDecoration: 'none'}} href="/">
                            <figcaption>nayem alam <FontAwesomeIcon icon={faFire}/></figcaption>
                        </a>
                    </figure>

                    <Button onClick={this.toggleDrawer}>
                        {/* passing state openMenu to Hamburger */}
                        <Hamburger openMenu={this.state.isOpen}></Hamburger>
                    </Button>

                    <SwipeableDrawer
                        variant='temporary'
                        anchor='left'
                        open={this.state.isOpen}
                        onClose={this.toggleDrawer}
                        onOpen={this.toggleDrawer}
                    >
                        <div style={{paddingTop: '90px', paddingLeft: '16px'}}>
                            <MobileAvatar isSocialOpen={this.state.isSocialOpen} toggleSocialDrawer={this.toggleSocialDrawer} socialLinks={this.props.socialLinks}></MobileAvatar>
                        </div>

                        <div onClick={this.toggleDrawer}>
                         {this.props.NavItems}
                        </div>
                    </SwipeableDrawer>
                </div>
            </div>
            
        )
    }
}
    
export default MobileMenu;