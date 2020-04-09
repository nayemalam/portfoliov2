import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MainAvatar from './mainavatar/MainAvatar';
import preval from 'preval.macro';

class MainMenu extends Component {

    render () {

        const dateTimeStamp = preval`
        module.exports = new Date().toLocaleString();
        `

        return (
            <div className='mainmenu'>
                <Drawer
                    variant="permanent"
                    open
                >
                    <MainAvatar></MainAvatar>
                    {this.props.NavItems}
                    <p className='date'>Last updated: {dateTimeStamp} </p>
                </Drawer>
            </div>
        )
    }

}

export default MainMenu;
    