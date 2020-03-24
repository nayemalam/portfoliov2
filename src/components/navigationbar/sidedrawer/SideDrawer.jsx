import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';
import MobileMenu from './mobilemenu/MobileMenu';
import MainMenu from './mainmenu/MainMenu';
import { Link } from 'react-router-dom';

class SideDrawer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isOpen: false,
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);  
    }

    toggleDrawer() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

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
                <List onClick={this.toggleDrawer}>
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
                    <MobileMenu NavItems={drawer} toggleDrawer={this.toggleDrawer} isOpen={this.state.isOpen} ></MobileMenu>
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
