import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CodeIcon from '@material-ui/icons/Code';
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'; 

const mainItems = [
    {
        'title': 'Home',
        'link': '/',
        'icon': <HomeOutlinedIcon />        
    },
    {
        'title': 'About',
        'link': '/about',
        'icon': <PermIdentityIcon />        
    },
    {
        'title': 'Portfolio',
        'link': '/portfolio',
        'icon': <CodeIcon />        
    },
    {
        'title': 'Media',
        'link': '/media',
        'icon': <PermMediaOutlinedIcon />        
    },
    {
        'title': 'Speaking',
        'link': '/speaking',
        'icon': <RecordVoiceOverOutlinedIcon />        
    }
];

const socialItems = [
    {
        'title': 'GitHub',
        'link': 'https://github.com/nayemalam',
        'icon': faGithub,
        'styleColor': 'default',
        'ariaLabel': 'GitHub'
    },
    {
        'title': 'LinkedIn',
        'link': 'https://www.linkedin.com/in/nayemalam/',
        'icon': faLinkedin,
        'styleColor': '#0e76a8',
        'ariaLabel': 'LinkedIn'
    },
    {
        'title': 'Instagram',
        'link': 'https://www.instagram.com/nayem_wizdom/',
        'icon': faInstagram,
        'styleColor': '#fb3958',
        'ariaLabel': 'Instagram'
    },
    {
        'title': 'Medium',
        'link': 'https://medium.com/@nayemalam',
        'icon': faMedium,
        'styleColor': '#000',
        'ariaLabel': 'Medium'
    }
];

export { mainItems, socialItems }