import React, { Component } from 'react';

class TypeWriter extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      index: 0,
      isDeleting: false,
      isWaiting: false,
    };

    this.type = this.type.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      window.onload = this.type();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  type() {
    const { text, index, isDeleting } = this.state;
    const currentIndex = index % this.props.words.length;
    const currentWord = this.props.words[currentIndex];

    this.setState({
      isWaiting: false,
    });

    if (isDeleting) {
      this.setState({
        text: currentWord.substring(0, this.state.text.length - 1),
      });
    } else {
      this.setState({
        text: currentWord.substring(0, this.state.text.length + 1),
      });
    }

    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && text === currentWord) {
      typeSpeed = 500;

      this.setState({
        isWaiting: false,
        isDeleting: false,
      });
    } else if (isDeleting && text === '') {
      typeSpeed = 300;

      this.setState({
        isDeleting: false,
        index: this.state.index + 1,
      });
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  render() {
    return (
      <div className="typewriter">
        {/* <span className="staticText">
          Welcome to my cave{' '}
          <span role="img" aria-label="rocket emoji" className="hvr-grow">
            🚀
          </span>
        </span>
        <br />
        <br /> */}
        <span className="staticText dynamicText">{this.state.text}</span>
        {/* <span>While I enjoy putting myself in several distinct areas, my main interests lie within the intersections of engineering, speaking, writing and building some pretty cool things.</span> */}
      </div>
    );
  }
}

export default TypeWriter;
