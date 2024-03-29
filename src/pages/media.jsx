import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import EditPage from '../components/editpage/EditPage';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import { sortByDateASC, sortByDateDESC } from '../components/helpers';
import MetaTags from '../components/metatags/MetaTags';
import SortButtons from '../components/sortbuttons/SortButtons';
import mediaItems from '../data/MediaItems';

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: '',
      mediaItems,
    };

    this.sortItems = this.sortItems.bind(this);
  }

  sortItems(event) {
    if (event.target.value === 'Recent') {
      this.setState({
        mediaItems: sortByDateDESC(this.state.mediaItems),
      });
    }
    if (event.target.value === 'Earliest') {
      this.setState({
        mediaItems: sortByDateASC(this.state.mediaItems),
      });
    }
    this.setState({
      option: event.target.value,
    });
  }

  render() {
    const headerText = 'Beyond Grateful';
    const descText =
      "I am thankful for all the amazing opportunities I've had this far, I keep this page as a repo of all the places I've been mentioned in.";

    return (
      <div className="media container">
        <MetaTags title="Honorable Mentions | Nayem Alam" />
        <HeaderDesc header={headerText} desc={descText} />
        <span>
          <SortButtons
            option={this.state.option}
            sortItems={this.sortItems}
            showInfo={true}
            href={'media'}
          />
        </span>
        <div className="mediaItems">
          <Grid container spacing={4}>
            {this.state.mediaItems.map((media, id) => (
              <Grid
                key={id}
                item
                xs={12}
                sm={4}
                style={{ textAlign: 'center' }}
                data-aos="fade"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={media.website}
                >
                  <LazyLoadImage
                    className="hvr-bounce-in mediaItem"
                    width="225"
                    alt={media.alt}
                    src={media.logo}
                  />
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
        <EditPage
          link={
            'https://github.com/nayemalam/portfoliov2/blob/dev/src/pages/media.jsx'
          }
        />
      </div>
    );
  }
}

export default Media;
