import React, { Component } from 'react';

class Content extends Component {

  render() {

    const styles = {
      root: {
        // marginTop: '30px'
      },
      content: {
        fontSize: '31px'
      }
      
    };

    return (
      <div style={styles.root}>
        <p className='customHeader' style={styles.content}>
          Thank you for hitting up my website! While I enjoy putting myself in several distinct areas, my main interests lie within the intersections of engineering, speaking, writing and building some pretty cool sh*t.
        </p>
      </div>
    )
  }
}

export default Content;