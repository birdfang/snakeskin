import React, { Component, Suspense } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Box from '../components/gl_components/Box'
import Guile from '../guile'
import YouTube from 'react-youtube'
import Text from '../components/Text'
import styled from 'styled-components'
import { Header, SubTitle, Page } from '../styles/sc_styles'

// const Bridge = React.lazy(() => import('../components/gl_components/Bridge'));
let videos = ['nMLLMNUXYt4', 'rJ-hosVPgwQ']


export default class Home extends Component {
    constructor() {
        super()
        this.components = []
        this.state = {
            bridge: false,
            currentVideo: 'nMLLMNUXYt4'
        }
    }

    componentWillUnmount() {
        // console.log('bomboclaaaat!')
    }

    componentDidMount() {
        // document.body.onclick = () => this.setState({ bridge: !this.state.bridge })
    }

    changeVideo() {

    }


    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
            //   autoplay: 1,
              controls: 0,
              modestBranding: 1
            }
          };
        return (
            <Page style={{ width: '100%', paddingTop: 60 }}>

            {/* {this.state.bridge ?
                <Suspense fallback={<h1 style={{ color: 'white' }}>LOADIN BRAH</h1>}>
                    <Bridge />
                </Suspense>
                : null
            } */}

                <Box />
                <div style={{ textAlign: 'center', width: '100vw'  }}>
                <Header align='center' type="h1">HYPERBOLIC RAP CHAMBER</Header>
                <SubTitle type="h4">v0.0.1</SubTitle>
                </div>

      <YouTube
        videoId={this.state.currentVideo}
        opts={opts}
        // onReady={}
      />
                           
            </Page>
        )
    }
}