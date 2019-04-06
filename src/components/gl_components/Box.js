import React, { Component } from 'react'
import { threeToProps } from '../inject'
import Guile from '../../guile';
import BoxMesh from '../guile_components/Box'
// // import * as THREE from '../../lib/three'


class Box extends Component {
    constructor() {
        super();
        this.state = {
            nextColor: new THREE.Color(0x333333),
            nextBackColor: new THREE.Color(0xf9ab3f),
            currentBack: new THREE.Color(0xf442c8),
            current: new THREE.Color(0x40def9),
            third: new THREE.Color(0xf442c8),
            thirdBack: new THREE.Color(0x000000),
        }
        // BoxMesh.material.color = new THREE.Color( this.state.color )

        // this.geometry = new THREE.BoxGeometry( 1, 1, 1, 8, 8, 8 );
        // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
        // this.cube = new THREE.Mesh( this.geometry, this.material );
        // this.cube.name = "green-cube"
        // this.cube.position.x = 2
        
    }

    initThree() {
    
    }

    prepWindow() {
        
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.scene.add( BoxMesh );

        
    }

    componentWillUnmount() {
        this.props.scene.remove( BoxMesh )
    }

    toggleColors() {
        if (this.state.current != this.state.nextColor) {
            this.setState({ current: this.state.nextColor })
            this.setState({ currentBack: this.state.nextBackColor })
        } else {
            this.setState({ current: this.state.third })
            this.setState({ currentBack: this.state.thirdBack })
        }
        
        // this.props.scene.background = new THREE.Color(this.state.backColor); 
    }

    render() {
        this.props.scene.background = this.state.currentBack; 
        BoxMesh.material.color = this.state.current;
        return (
            // <h1 onClick={() => BoxMesh.material.color = new THREE.Color(0x333333)}>YO</h1>
            // <h1 onClick={() => {this.props.scene.background = new THREE.Color(this.state.backColor); BoxMesh.material.color = new THREE.Color(this.state.nextColor) }}>YO</h1>
            <h1 onClick={() => this.toggleColors() }>YO</h1>

        )
    }
}

export default threeToProps(Box)