import React, { Component } from 'react'
// import { throws } from 'assert';



const Loadable = function(config) {
    class LoadableHOC extends Component {
        constructor() {
            super()

            this.state = {
                AnotherComponent: null
            }
        }

        componentWillMount() {
            // import(config.loader)
            config.loader()
            .then( module => this.setState({ AnotherComponent: module.default }) )

            console.log('done loading!')
        }
    
        render() {
            let { AnotherComponent } = this.state
            if(!AnotherComponent) {
                // return <div>WE LOADIN...</div>
                return config.loading
            } else {
                return <AnotherComponent />
            }
        }
    }

    return LoadableHOC
    
}

export default Loadable