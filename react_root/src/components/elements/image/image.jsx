import React from 'react'

import './style.scss'

export default class Image extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            className: ((props.className || '') + ' hide').trim(),
            src: props.src,
            error: false
        }
    }

    load () {
        !this.state.error ? this.setState({className: this.props.className || ''}) : null
    }

    error () {
        console.error(`Could not load image: ${ this.state.src }`)
        this.setState({
            className: ((this.props.className || '') + ' error').trim(),
            src: '/static/img/empty_pixel.png',
            error: true
        })
    }

    componentDidMount () {
        if (!this.props.alt) {
            console.warn(
                `Image has no alt tag, this is bad for SEO and should be fixed. See https://goo.gl/1fBoZW for more details.`,
                this.element
            )
        } else if (!this.props.title) {
            console.warn(
                `Image has no title tag, this is bad for SEO and should be fixed. See https://goo.gl/1fBoZW for more details.`,
                this.element
            )
        }
    }

    render () {
        return (
            <img
                src={ this.state.src }
                id={ this.props.id }
                className={ this.state.className }

                alt={ this.props.alt }
                title={ this.props.title }

                onLoad={ () => this.load() }
                onError={ () => this.error() }

                ref={ (element) => {this.element = element} }
                width="300px"
            />
        )
    }
}