import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

class MainMenu extends Component {

    render () {

        return (
            <div className='mainmenu'>
                <Drawer
                    variant="permanent"
                    open
                >
                    {this.props.NavItems}
                </Drawer>
            </div>
        )
    }

}

export default MainMenu;
    