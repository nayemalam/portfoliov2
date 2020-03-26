import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MainAvatar from './mainavatar/MainAvatar';

class MainMenu extends Component {

    render () {

        return (
            <div className='mainmenu'>
                <Drawer
                    variant="permanent"
                    open
                >
                    <MainAvatar></MainAvatar>
                    {this.props.NavItems}
                    {/* TODO: following should be dynamic */}
                    <p className='date'>Last updated: March 25, 2020 at 3:35pm </p>
                </Drawer>
            </div>
        )
    }

}

export default MainMenu;
    