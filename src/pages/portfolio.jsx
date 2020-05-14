import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import portfolioItems from '../data/PortfolioItems';
import CustomCard from '../components/portfolio/CustomCard';
import FilterButtons from '../components/portfolio/FilterButtons';
import { sortByDateASC, sortByDateDESC, filterArrayByString } from '../components/helpers';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filters: 'all',
            portfolioItems,
            option: ''
        }

        // this.sortDESC = this.sortDESC.bind(this);
        // this.sortASC = this.sortASC.bind(this);
        this.updateItems = this.updateItems.bind(this);
    }

    // binding within call since we need Child to change state
    changeFilter (item) {
        this.setState({
            filters: item
        })
    }

    updateItems (event) {
        if (event.target.value === 'Recent') {
            this.setState({
                portfolioItems: sortByDateDESC(this.state.portfolioItems)
            })
        }

        if (event.target.value === 'Earliest') {
            this.setState({
                portfolioItems: sortByDateASC(this.state.portfolioItems)
            })
        }
        
        this.setState({
            option: event.target.value
        })
    }

    render() {

        return (
            <div className='portfolio container'>
                <HTMLTitle title='Portfolio | Nayem Alam' />
                
                <h1>Everything I love doing is right here.
                    <span style={{display: 'block'}} className='finePrint'>(... and speaking of course <span role='img' aria-label='eye emoji'>👀</span>)</span>
                </h1>

                <FilterButtons changeFilter={this.changeFilter.bind(this)} />

                <TextField
                    select
                    label="Sort by"
                    value={this.state.option}
                    onChange={this.updateItems}
                    style={{width: '100px'}}
                >
                    <MenuItem value='Recent'>
                        Recent
                    </MenuItem>
                    <MenuItem value='Earliest'>
                        Earliest
                    </MenuItem>

                </TextField>

                <Grid container spacing={4}>
                    {filterArrayByString(this.state.portfolioItems, this.state.filters)
                    .map((item, id) => (
                        <Grid key={id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                            <CustomCard 
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                link={item.link}
                                LinkIcon={item.LinkIcon}
                                tags={item.tags}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default Portfolio;