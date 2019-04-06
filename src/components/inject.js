import React, { Component } from 'react'
import {scene, camera, renderer} from '../gl_inst/gl_index'
// import {camera, renderer} from '../gl_inst/gl_index'

// detach the scene from gl_index, allow new ones to be made from guile

const inject = (Wrapped) => {
    class HOC extends Component {
        render() {
            return (
                <Wrapped 
                    skeddit={"aye"}
                    gl={'THREE'}
                    {...this.props}
                />
            )
        }
    }
    return HOC
}

const threeToProps = (Target) => {
    class ThreeObject extends Component {
        render() {
            return (
                <Target 
                    scene={scene}
                    camera={camera}
                    renderer={renderer}
                    {...this.props}
                />
            )
        }
    }

    return ThreeObject
}

export {
    inject,
    threeToProps
}