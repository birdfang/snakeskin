import React, { Component } from 'react'
// // import * as THREE from '../../lib/three'
import '../../lib/OBJLoader'
import { threeToProps } from '../inject'
import gwbridge from '../../assets/models/gwbridge.obj'

let scene;
let spot;

class Bridge extends Component {
    constructor() {
        super()
        this.object = spot;
    }

    loadObj() {
        // const scene = this.props.scene
        scene = this.props.scene
        // let spot = this.object
        var loader = new THREE.OBJLoader( );
    
        loader.load( gwbridge, function ( object ) {
        // loader.load( 'assets/models/gwbridge.obj', function ( object ) {
                // object.traverse( function ( child ) {
                //     if ( child instanceof THREE.Mesh ) {
                //         child.material.map = texture;
                //     }
                // } );
                // object.position.y = - 95;
                console.log(object)
                object.name = 'bridge'
                object.position.x = -2
                object.position.y = -10
                object.position.z = 12

                object.rotation.y = -90
                object.scale.set(0.1, 0.1, 0.1)

                if (!spot) {
                    spot = object
                } else {
                    return
                }
                scene.add( object );
                // gui.add(object.scale, 'x', 0, 1 )
                // gui.add(object.scale, 'y', 0, 1 )
                // gui.add(object.scale, 'z', 0, 1 )
                // gui.add(object.position, 'x', -10, 15 )
                // gui.add(object.position, 'y', -10, 15 )
                // gui.add(object.position, 'z', -10, 15 )

            }  );
    }

    componentWillMount() {
        if (!spot) {
            this.loadObj()
            this.props.scene.add(this.object)
        } else {
            this.props.scene.add(this.object)
        }

        // document.body.onclick = () => { this.props.scene.remove(this.object) }

    }

    // handleObj() {
    //     if (!spot) {
    //         this.loadObj()
    //     } else {
    //         this.props.scene.addObj()
    //     }
    // }

    componentWillUnmount() {
        this.props.scene.remove(spot)
    }

    render() {
        return null
    }
}

export default threeToProps(Bridge)