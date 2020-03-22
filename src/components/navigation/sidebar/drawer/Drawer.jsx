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


class Drawer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            left: false,
            bottom: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);  
    }

    toggleDrawer() {
        this.setState({
            left: !this.state.left,
            bottom: !this.state.bottom
        })
    };



    render () {

        const list = anchor => (
            <div
            style={{width: '250px'}}
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
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
                    <ListItem>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Hello</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText>Sorry</ListItemText>
                    </ListItem>
                </List>
            </div>
        );
    
        const anchor = ['left', 'bottom'];

        return (
            <div className='drawer'>

                <Button onClick={this.toggleDrawer}>
                    <Hamburger></Hamburger>
                </Button>
                <SwipeableDrawer
                    anchor={anchor[0]}
                    open={this.state[anchor[0]]}
                    onClose={this.toggleDrawer}
                    onOpen={this.toggleDrawer}
                >
                    {list(anchor[0])}
                </SwipeableDrawer>

            </div>
        );
    }
}

export default Drawer;
