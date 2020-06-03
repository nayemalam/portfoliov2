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
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CodeIcon from '@material-ui/icons/Code';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'; 
import MobileMenu from './mobilemenu/MobileMenu';
import MainMenu from './mainmenu/MainMenu';
import { Link } from 'gatsby';

// internal css
import style from '../../../sass/global.scss';

class SideDrawer extends Component {

    render () {
  
        const drawer = (
            <div
            style={{width: style.drawerWidth}}
            >
                <Divider/>
                <List>
                    <MenuItem component={Link} to='/'>
                        <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/about'>
                        <ListItemIcon><PermIdentityIcon/></ListItemIcon>
                        <ListItemText>About</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/portfolio'>
                        <ListItemIcon><CodeIcon/></ListItemIcon>
                        <ListItemText>Portfolio</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/media'>
                        <ListItemIcon><PermMediaOutlinedIcon/></ListItemIcon>
                        <ListItemText>Media</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/speaking'>
                        <ListItemIcon><RecordVoiceOverOutlinedIcon/></ListItemIcon>
                        <ListItemText>Speaking</ListItemText>
                    </MenuItem>
                </List>
                <Divider />
                <List>
                    <MenuItem component={Link} to='/contact'>
                        <ListItemIcon><EmailOutlinedIcon/></ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </MenuItem>
                </List>
            </div>
        );

        const socialLinks = (
            <MenuList>
                <a className='linkWithNoDecoration' href="https://github.com/nayemalam">
                    <MenuItem>
                        <FontAwesomeIcon icon={faGithub} size='2x' style={{paddingRight: '5px'}} />
                        Github
                    </MenuItem>
                </a>
                <a className='linkWithNoDecoration' href="https://www.linkedin.com/in/nayemalam/">
                    <MenuItem>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: '#0e76a8', paddingRight: '5px'}} />
                        LinkedIn
                    </MenuItem>
                </a>
                <a className='linkWithNoDecoration' href="https://www.instagram.com/nayem_wizdom/">
                    <MenuItem>
                        <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: '#fb3958', paddingRight: '5px'}} />
                        Instagram
                    </MenuItem>
                </a>
                <a className='linkWithNoDecoration' href="https://medium.com/@nayemalam">
                    <MenuItem>
                        <FontAwesomeIcon icon={faMedium} size='2x' style={{color: '#000', paddingRight: '5px'}} />
                        Medium
                    </MenuItem>
                </a>
            </MenuList>
        )

        return (
            <div className='sidedrawer'>
                <Hidden smUp>
                    {/* passing prop NavItems and socialLinks to MobileMenu */}
                    <MobileMenu NavItems={drawer} socialLinks={socialLinks} />
                </Hidden>

                <Hidden xsDown>
                    {/* passing prop NavItems to MainMenu */}
                    <MainMenu NavItems={drawer} />
                </Hidden>
            </div>
        );
    }
}

export default SideDrawer;
