import React, { Component } from 'react';
import {
    List,
    Divider,
    ListItemIcon,
    ListItemText,
    MenuList,
    MenuItem,
    Hidden
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import TelegramIcon from '@material-ui/icons/Telegram';
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
                <Divider/>
                <List>
                    <MenuItem component={Link} to='/'>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/about'>
                        <ListItemIcon><InfoIcon/></ListItemIcon>
                        <ListItemText>About</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/portfolio'>
                        <ListItemIcon><AccountTreeIcon/></ListItemIcon>
                        <ListItemText>Portfolio</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/media'>
                        <ListItemIcon><PermMediaIcon/></ListItemIcon>
                        <ListItemText>Media</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/speaking'>
                        <ListItemIcon><RecordVoiceOverIcon/></ListItemIcon>
                        <ListItemText>Speaking</ListItemText>
                    </MenuItem>
                </List>
                <Divider />
                <List>
                    <MenuItem component={Link} to='/contact'>
                        <ListItemIcon><TelegramIcon/></ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </MenuItem>
                </List>
            </div>
        );

        const socialLinks = (
            <MenuList>
                <a className='linkWithNoDecoration' href="https://github.com/nayemalam">
                    <MenuItem>
                        <FontAwesomeIcon icon={faGithub} size='2x' style={{paddingRight: '5px'}}/>
                        Github
                    </MenuItem>
                </a>
                <a className='linkWithNoDecoration' href="https://www.linkedin.com/in/nayemalam/">
                    <MenuItem>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: '#0e76a8', paddingRight: '5px'}}/>
                        LinkedIn
                    </MenuItem>
                </a>
                <a className='linkWithNoDecoration' href="https://www.instagram.com/nayem_wizdom/">
                    <MenuItem>
                        <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: '#fb3958', paddingRight: '5px'}}/>
                        Instagram
                    </MenuItem>
                </a>
                <a className='linkWithNoDecoration' href="https://medium.com/@nayemalam">
                    <MenuItem>
                        <FontAwesomeIcon icon={faMedium} size='2x' style={{color: '#000', paddingRight: '5px'}}/>
                        Medium
                    </MenuItem>
                </a>
            </MenuList>
        )

        return (
            <div className='sidedrawer'>
                <Hidden smUp implementation="css">
                    {/* passing prop NavItems and socialLinks to MobileMenu */}
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
