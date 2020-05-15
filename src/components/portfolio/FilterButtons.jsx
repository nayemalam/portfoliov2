import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const allFilters = ['all', 'sites', 'academic', 'hackathons', 'personal'];
// push to travis
class FilterButtons extends Component {
    render() {
        return (
            <div className='filterbuttons'>
                {allFilters.map((filteredItem, id) => (
                    <Button 
                        className='filterButton'
                        key={id} 
                        onClick={() => this.props.changeFilter(filteredItem)}
                    >
                        {filteredItem}
                    </Button>
                ))}
            </div>
        )
    }
}

export default FilterButtons;