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
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from './mobilemenu/MobileMenu';
import MainMenu from './mainmenu/MainMenu';
import { Link } from 'gatsby';
import { mainItems, socialItems } from '../../../data/NavigationItems';

// internal css
import style from '../../../sass/global.scss';

class SideDrawer extends Component {

    render () {
  
        const drawer = (
            <div
                style={{width: style.drawerWidth}}
                role="menu"
            >
                <Divider/>
                <List>
                    {mainItems.map((item, id) => (
                        <MenuItem key={id} component={Link} to={item.link}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.title}</ListItemText>
                        </MenuItem>
                    ))}
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
                {socialItems.map((item,id) =>(
                    <a key={id} className='linkWithNoDecoration' href={item.link}>
                        <MenuItem>
                            <FontAwesomeIcon icon={item.icon} size='2x' style={{color: item.styleColor, paddingRight: '5px'}} />
                            {item.title}
                        </MenuItem>
                    </a>
                ))}
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
