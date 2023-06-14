import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const allFilters = ['all', 'sites', 'academic', 'hackathons', 'personal'];

class FilterButtons extends Component {
  render() {
    return (
      <div className="filterbuttons">
        {allFilters.map((filteredItem, id) => (
          <Button
            className="filterButton"
            key={id}
            value={id}
            onClick={() => this.props.changeFilter(filteredItem, id)}
            style={{
              backgroundColor:
                id === this.props.activeIndex ? '#43C6AC' : 'inherit',
              boxShadow:
                id === this.props.activeIndex
                  ? '0px 13px 5px -11px rgba(0,0,0,0.38)'
                  : 'none',
            }}
          >
            {filteredItem}
          </Button>
        ))}
      </div>
    );
  }
}

export default FilterButtons;
