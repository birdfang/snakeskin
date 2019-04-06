import React from 'react'
import posed from 'react-pose'
import { PageContainer } from '../helpers'

class Contact extends React.Component  {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({ isVisible: !this.state.isVisible })
    }

    componentWillUnmount() {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        return (
            <PageContainer pose={this.state.isVisible ? 'visible' : 'hidden'} style={{ color: 'white', height: 800, opacity: 0.5, background: 'palevioletred', width: '100vw', paddingTop: 80 }}>
                contact me on the streets
            </PageContainer>
        )
    }
}

// const PageContainer = posed.div({
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
// });

export default Contact