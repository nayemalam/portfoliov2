import React, { Component } from 'react';
import {
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuList,
    MenuItem,
    Hidden
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'; 
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

        const socialLinks = (
            <MenuList>
                <a
                style={{color: '#000',textDecoration: 'none'}}
                href="https://github.com/nayemalam"
                >
                    <MenuItem>
                        <FontAwesomeIcon icon={faGithub} size='2x' style={{paddingRight: '5px'}}/>
                        Github
                    </MenuItem>
                </a>
                <MenuItem>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: '#0e76a8', paddingRight: '5px'}}/>
                    LinkedIn
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: '#fb3958', paddingRight: '5px'}}/>
                    Instagram
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={faMedium} size='2x' style={{color: '#000', paddingRight: '5px'}}/>
                    Medium
                </MenuItem>
            </MenuList>
        )

        return (
            <div className='sidedrawer'>
                <Hidden smUp implementation="css">
                    {/* passing prop NavItems to MobileMenu */}
                    <MobileMenu NavItems={drawer} socialLinks={socialLinks}></MobileMenu>
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
