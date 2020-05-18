import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import portfolioItems from '../data/PortfolioItems';
import CustomCard from '../components/portfolio/CustomCard';
import FilterButtons from '../components/portfolio/FilterButtons';
import { sortByDateASC, sortByDateDESC, filterArrayByString } from '../components/helpers';
import SortButtons from '../components/portfolio/SortButtons';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

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
        const headerText = 'Everything I love doing is right here.'
        const descText = "(... and speaking of course 👀)"

        return (
            <div className='portfolio container'>
                <HTMLTitle title='Portfolio | Nayem Alam' />
                
                <HeaderDesc header={headerText} desc={descText} />
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