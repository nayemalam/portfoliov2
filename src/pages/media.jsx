import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

class Media extends Component {

    render () {

        return (
            <div className='media container'>
                <h2 className='customHeader upperCaseAll centerText'>beyond grateful</h2>
                <div className='mediaItems'>
                    <Grid container spacing={4}>
                        
                            <Grid item xs={12} sm={4} style={{textAlign: 'center'}}>
                                <a target='_blank' rel="noopener noreferrer" href='http://cansbridgefellowship.com/'>
                                    <Img fluid={this.props.data.imageOne.childImageSharp.fluid} />
                                </a>
                            </Grid>
                    
                    </Grid>
                </div>
                
            </div>
        )
    }
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
        fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
        }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "media/cansbridge.png" }) {
      ...fluidImage
    }
  }
`;

export default Media;