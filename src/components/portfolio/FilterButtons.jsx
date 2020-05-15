import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const allFilters = ['all', 'sites', 'academic', 'hackathons', 'personal'];

class FilterButtons extends Component {
    render() {

        return (
            <div className='filterbuttons'>
                {allFilters.map((filteredItem, id) => (
                    <Button 
                        className='filterButton'
                        key={id} 
                        value={id}
                        onClick={() => this.props.changeFilter(filteredItem, id)}
                        style={{backgroundColor: (id === this.props.activeIndex) ? '#43C6AC' : 'inherit'}}
                    >
                        {filteredItem}
                    </Button>
                ))}
            </div>
        )
    }
}

export default FilterButtons;