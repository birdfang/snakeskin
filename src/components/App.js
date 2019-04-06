import React, { Component, Suspense } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Box from './gl_components/Box'
// import Bridge from './gl_components/Bridge'
import Home from '../pages/Home'
// import Nav from './Nav'
import Nav from './NewNav'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import Loadable from '../components/LoadableHOC'
import ProjectDetail from '../pages/ProjectDetail'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../styles/theme'

import '../styles/main.css'

// let Bridge = Loadable({
//     loader: () => import('./gl_components/Bridge'),
//     loading: () => <div style={{ color: 'white', fontSize: 80 }}>LOADING BRAH</div>
// })
const Bridge = React.lazy(() => import('./gl_components/Bridge'));



export default class App extends Component {
    constructor() {
        super()

        this.state = {}
        
    }

    componentDidMount() {
        document.body.overflowX = 'hidden'
    }

    render() {
        return (

            <ThemeProvider theme={mainTheme}>
            <div style={{ margin: 0 }}>
                {/* <Nav /> */}
                <div style={{ position: 'fixed', zIndex: 400 }}>
                {/* <Nav /> */}

                </div>
                {/* <Box /> */}
                {/* <Suspense fallback={<h1 style={{ color: 'white' }}>LOADIN BRAH</h1>}>
                    <Bridge yo="thang"/>
                </Suspense> */}
                    {/* <Home /> */}
                    
                    
                    {/* <About /> */}

                    <Route exact path="/" component={Home}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/projects" component={ProjectDetail} />
            </div>
            </ThemeProvider>
        )
    }
}