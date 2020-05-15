import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class SortButtons extends Component {
    render() {
        return (
            <div className='sortbuttons'>
                <TextField
                    select
                    label="Sort by"
                    value={this.props.option}
                    onChange={this.props.updateItems}
                    style={{width: '100px'}}
                >
                    <MenuItem value='Recent'>
                        Recent
                    </MenuItem>
                    <MenuItem value='Earliest'>
                        Earliest
                    </MenuItem>
                </TextField>
            </div>
        )
    }
}

export default SortButtons;