import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MainAvatar from './mainavatar/MainAvatar';
import DateTimeStamp from '../../../datetimestamp/DateTimeStamp';

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
                    <DateTimeStamp></DateTimeStamp>
                </Drawer>
            </div>
        )
    }

}

export default MainMenu;
    