import React, { Component } from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import FloatingHamburger from './hamburger/FloatingHamburger';
import MobileAvatar from './mobileavatar/MobileAvatar';
import Fab from '@material-ui/core/Fab';

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
            isOpen: !this.state.isOpen,
            isSocialOpen: false
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
                <div className='floatingbar'>        
            
                    <Fab className='customfab' onClick={this.toggleDrawer}>
                        {/* passing state isOpen to Hamburger */}
                        <FloatingHamburger isOpen={this.state.isOpen} />
                    </Fab>

                    <SwipeableDrawer
                        variant='temporary'
                        anchor='left'
                        open={this.state.isOpen}
                        onClose={this.toggleDrawer}
                        onOpen={this.toggleDrawer}
                    >
                        <MobileAvatar 
                            isSocialOpen={this.state.isSocialOpen} 
                            toggleSocialDrawer={this.toggleSocialDrawer} 
                            socialLinks={this.props.socialLinks}>
                        </MobileAvatar>

                        <div onClick={this.toggleDrawer}
                        role='presentation'>
                            {this.props.NavItems}
                        </div>
                    </SwipeableDrawer>
                </div>
            </div>
            
        )
    }
}
    
export default MobileMenu;