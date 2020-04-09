import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MainAvatar from './mainavatar/MainAvatar';
import preval from 'preval.macro';

class MainMenu extends Component {

    render () {

        // const dateTimeStamp = preval`
        // module.exports = new Date().toLocaleString();
        // `

    
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }

        const date = new Date();
        const dateTimeStamp = new Intl.DateTimeFormat('en-US',options).format(date)
        console.log(dateTimeStamp)

        return (
            <div className='mainmenu'>
                <Drawer
                    variant="permanent"
                    open
                >
                    <MainAvatar></MainAvatar>
                    {this.props.NavItems}
                    {/* TODO: following should be dynamic */}
                    <p className='date'>Last updated: {dateTimeStamp} </p>
                </Drawer>
            </div>
        )
    }

}

export default MainMenu;
    