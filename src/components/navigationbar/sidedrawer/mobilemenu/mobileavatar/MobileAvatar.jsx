import React, { Component} from 'react';
import {
    Avatar,
    Paper,
    Menu,
    Button

} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import personalPic from '../../../../../images/NayemAlam.jpg';

class MobileAvatar extends Component {

    render () {
        return (
            <div className='mobileavatar'>
                <Avatar alt="Nayem Alam" src={personalPic} style={{width: '100px', height: '100px'}}/>
                <h3>Nayem Alam</h3>
                <p style={{marginTop: '-20px'}}>
                    nayem.alam@mail.mcgill.ca
                    <Button
                        aria-haspopup="true"
                        onClick={this.props.toggleSocialDrawer}
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        >
                        <MoreVertIcon/>
                    </Button>
                    <Menu
                        anchorEl={this.anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        open={this.props.isSocialOpen}
                        onClose={this.props.toggleSocialDrawer}
                    >
                        <Paper>
                            {this.props.socialLinks}
                        </Paper>
                    </Menu>
                </p>
            </div>
        )
    }
}

export default MobileAvatar;