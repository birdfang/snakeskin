import React, { Component } from 'react'
import styled from 'styled-components'
import Projects from '../components/Projects'
import { PageContainer } from '../helpers'


export default class Work extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        this.setState({ isVisible: !this.state.isVisible })
    }


    render() {
        return (
            <PageContainer pose={this.state.isVisible ? 'visible' : 'hidden'} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <Projects />
            </PageContainer>
        )
    }
}