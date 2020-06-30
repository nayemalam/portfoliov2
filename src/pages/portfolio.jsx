import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MetaTags from '../components/metatags/MetaTags';
import portfolioItems from '../data/PortfolioItems';
import CustomCard from '../components/portfolio/CustomCard';
import FilterButtons from '../components/portfolio/FilterButtons';
import { sortByDateASC, sortByDateDESC, filterArrayByString } from '../components/helpers';
import SortButtons from '../components/sortbuttons/SortButtons';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import EditPage from '../components/editpage/EditPage';

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
        const headerText = 'Coffee Nights & Curiosity';
        const descText = "One of my hobbies is to learn new tech frameworks and how to practically apply it. I love building some pretty cool sh*t and enjoy working with many people on their vision and ideas. I focus on developing my personal skills while also learning new skills simultaneously.";

        return (
            <div className='portfolio container'>
                <MetaTags title='Portfolio | Nayem Alam' />
                
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

                <EditPage link={'https://github.com/nayemalam/portfoliov2/blob/dev/src/pages/portfolio.jsx'} />
            </div>
        )
    }
}

export default Portfolio;