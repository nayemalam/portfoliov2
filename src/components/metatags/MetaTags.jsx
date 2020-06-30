import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class MetaTags extends Component {
    render() {
        return (
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{this.props.title}</title>
                <meta name="title" content={this.props.title} />
                <meta name="description" content="Nayem Alam is a 23 y/o tech enthusiast, slam poet, engineer, two-time TEDx speaker, WEday speaker, one of Canada's Top 20 Under 20, and a Montreal Global Shaper." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nayemalam.com/" />
                <meta property="article:author" content="Nayem Alam" />
                <meta property="og:title" content={this.props.title} />
                <meta property="og:description" content="Nayem Alam is a 23 y/o tech enthusiast, slam poet, engineer, two-time TEDx speaker, WEday speaker, one of Canada's Top 20 Under 20, and a Montreal Global Shaper." />
                <meta property="og:image" content="https://res.cloudinary.com/nayemalam/image/upload/v1593551252/portfolio/images/meta-cards/facebook-card.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nayemalam.com/" />
                <meta property="twitter:creator" content="@nayem_wizdom" />
                <meta property="twitter:title" content={this.props.title} />
                <meta property="twitter:description" content="Nayem Alam is a 23 y/o tech enthusiast, slam poet, engineer, two-time TEDx speaker, WEday speaker, one of Canada's Top 20 Under 20, and a Montreal Global Shaper." />
                {/* Twitter summary card with large image must be at least 280x150px */}
                <meta property="twitter:image" content="https://res.cloudinary.com/nayemalam/image/upload/v1593551835/portfolio/images/meta-cards/twitter-card.png" />                
            </Helmet>
        )
    }
}

export default MetaTags;