import React, { Component } from 'react';

class TypeWriter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            index: 0,
            isDeleting: false,
            isWaiting: false
        }

        this.type = this.type.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.type(), {once: true});
    }

    type() {
        
        const { text, index, isDeleting } = this.state
        const currentIndex = index % this.props.words.length;
        const currentWord = this.props.words[currentIndex];

        this.setState({
            isWaiting: false
        })

        if(isDeleting) {
            this.setState({
                text: currentWord.substring(0, this.state.text.length - 1)
            })
        } else {
            this.setState({
                text: currentWord.substring(0, this.state.text.length + 1)
            })
        }

        let typeSpeed = 100;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        if(!isDeleting && (text === currentWord)) {
            typeSpeed = 1000;

            this.setState({
                isWaiting: true,
                isDeleting: true
            })
        } else if (isDeleting && text === '') {
            typeSpeed = 400;

            this.setState({
                isDeleting: false,
                index: this.state.index + 1
            })
        }

        setTimeout(() => this.type(), typeSpeed)

    }

    render () {

        return (
            <div className='typewriter'>
                <span>Hello, I'm Nayem.</span>
                <br/>
                <span className='dynamicText'>I like to&nbsp;{this.state.text}</span>
            </div>
        )    
    }
}

export default TypeWriter;