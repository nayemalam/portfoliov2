import React, { Component } from 'react';
import {
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Hidden,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MobileMenu from './mobilemenu/MobileMenu';
import MainMenu from './mainmenu/MainMenu';
import { Link } from 'react-router-dom';

// internal css
import style from '../../../global.scss';

class SideDrawer extends Component {

    render () {
  
        const drawer = (
            <div
            style={{width: style.drawerWidth}}
            >
                <List>
                    {['Inbox', 'Starred', 'Send emails', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <MenuItem component={Link} to='/'>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/about'>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText>About</ListItemText>
                    </MenuItem>
                </List>
            </div>
        );

        return (
            <div className='sidedrawer'>
                <Hidden smUp implementation="css">
                    {/* passing prop NavItems to MobileMenu */}
                    <MobileMenu NavItems={drawer}></MobileMenu>
                </Hidden>

                <Hidden xsDown implementation="css">
                    {/* passing prop NavItems to MainMenu */}
                    <MainMenu NavItems={drawer}></MainMenu>
                </Hidden>
            </div>
        );
    }
}

export default SideDrawer;
