import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hamburger from '../hamburger/Hamburger';

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

        return (
            <div className='drawer'>

                <Button onClick={this.toggleDrawer}>
                    <Hamburger openMenu={this.state.isOpen}></Hamburger>
                </Button>
                <SwipeableDrawer
                   anchor='left'
                   open={this.state.isOpen}
                   onClose={this.toggleDrawer}
                   onOpen={this.toggleDrawer}
                >
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
                </SwipeableDrawer>

            </div>
        );
    }
}

export default SideDrawer;
