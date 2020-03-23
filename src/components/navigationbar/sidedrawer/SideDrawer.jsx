import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';
import MobileMenu from './mobilemenu/MobileMenu';
import MainMenu from './mainmenu/MainMenu';

class SideDrawer extends Component {

    render () {

        const drawer = (
            <div
            style={{width: '250px'}}
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
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Hello</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText>Sorry</ListItemText>
                    </ListItem>
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
