import React, { Component } from 'react'
// import {Scene, PerspectiveCamera, WebGLRenderer, Clock} from 'three'
// import * as THREE from 'three'

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 100 );
// let renderer = new THREE.WebGLRenderer();

let light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 10, 10, 10 );
scene.add( light );


// camera.position.z = 5
camera.position.set( 1.59, -2.2, 5 );
camera.rotation.set( 0.08, -0.155, 0.04 )
        
// window.addEventListener( 'resize', onWindowResize, false );

// function onWindowResize(){
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );
// }

// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// renderer.domElement.style.position = 'fixed'

// function animate() {
//     camera.rotation.y -= 0.0004
// 	camera.position.z -= 0.002
// 	camera.position.x -= 0.002

//     requestAnimationFrame( animate );
//     renderer.render( scene, camera );
// }
// requestAnimationFrame(animate)


export default class SceneInst extends Component {
    constructor() {
        super();

    }

    initThree() {

    }

    prepWindow() {
        
    }

    componentWillMount() {
        camera.position.set( 1.59, -2.2, 5 );
        camera.rotation.set( 0.08, -0.155, 0.04 )
    }

    render() {
        return null
    }
}

export {
    scene,
    camera,
    // renderer,
    light
}