import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import portfolioItems from '../data/PortfolioItems';
import CustomCard from '../components/portfolio/CustomCard';
import FilterButtons from '../components/portfolio/FilterButtons';
import { sortByDateASC, sortByDateDESC, filterArrayByString } from '../components/helpers';
import SortButtons from '../components/portfolio/SortButtons';

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filters: 'all',
            portfolioItems,
            option: '',
            activeIndex: 0
        }
        this.sortItems = this.sortItems.bind(this);
    }

    // binding within call since we need Child to change state
    changeFilter (item, id) {
        this.setState({
            filters: item,
            activeIndex: id
        })
    }

    sortItems (event) {
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

        const filteredArray = filterArrayByString(this.state.portfolioItems, this.state.filters);

        return (
            <div className='portfolio container'>
                <HTMLTitle title='Portfolio | Nayem Alam' />
                
                <h1>Everything I love doing is right here.
                    <span style={{display: 'block'}} className='finePrint'>(... and speaking of course <span role='img' aria-label='eye emoji'>👀</span>)</span>
                </h1>

                <FilterButtons changeFilter={this.changeFilter.bind(this)} activeIndex={this.state.activeIndex} />

                <SortButtons option={this.state.option} sortItems={this.sortItems} />

                <Grid container spacing={4}>
                    {filteredArray
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