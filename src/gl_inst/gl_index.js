// import * as THREE from '../lib/three'
import '../lib/EffectComposer'
import '../lib/MaskPass'
import '../lib/RenderPass'
import '../lib/CopyShader'
import '../lib/ShaderPass'
import '../lib/OrbitControls'
import '../lib/FilmPass'
import '../lib/FilmShader'
import '../lib/BloomPass'
import '../lib/ConvolutionShader'
import '../lib/DotScreenPass'
import '../lib/DotScreenShader'
import '../lib/OBJLoader'
import BoxMesh from '../components/guile_components/Box'
import Box from '../components/gl_components/Box';
import Guile from '../guile'

// maybe use ES6 Proxy?
let App = {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 100 ),
    light: new THREE.PointLight( 0xffffff, 1, 100 ),
    renderer: new Guile.Renderer({ antialias: true })
}

const { scene, camera, light, renderer } = App

// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 100 );
// let light = new THREE.PointLight( 0xffffff, 1, 100 );
// let renderer = new THREE.WebGLRenderer({ antialias: true });

scene.background = new THREE.Color(0xf442c8)
light.position.set( 10, 10, 10 );
scene.add( light );

// camera.position.z = 5
camera.position.set( 1.59, -2.2, 5 );
camera.rotation.set( 0.08, -0.155, 0.04 )

// setInterval(() => {
// 	camera.position.set( 1.59, -2.2, 5 );
// 	camera.rotation.set( 0.08, -0.155, 0.04 )
// }, 115000)

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    App.renderer.setSize( window.innerWidth, window.innerHeight );
    camera.updateProjectionMatrix();

}

App.renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( App.renderer.domElement );

App.renderer.domElement.style.position = 'fixed'

/* POSTPROCESSING */

const renderPass = new THREE.RenderPass(scene, camera)
const effectFilm = new THREE.FilmPass(0.8, 0.325, 256, false)
const effectCopy = new THREE.ShaderPass(THREE.CopyShader)
const dotScreenShader = new THREE.ShaderPass(THREE.DotScreenShader)
const dotScreenPass = new THREE.DotScreenPass()
const bloomPass = new THREE.BloomPass(1, 125, 45, 256)

dotScreenShader.uniforms['scale'].value = 9

// effectFilm.renderToScreen = true
// dotScreenPass.renderToScreen = true
effectCopy.renderToScreen = true
// dotScreenShader.renderToScreen = true

const composer = new THREE.EffectComposer(App.renderer)
composer.addPass(renderPass)
// composer.addPass(effectFilm)
// composer.addPass(bloomPass)
// composer.addPass(dotScreenPass)
// composer.addPass(dotScreenShader)
composer.addPass(effectCopy)



/* END OF POSTPROCESSING */





// BASE RENDER FUNCTION
// function animate() {
//     camera.rotation.y -= 0.0004
//     camera.position.z -= 0.002
//     camera.position.x -= 0.002

//     requestAnimationFrame( animate );
//     renderer.render( scene, camera );
// }

// NEW RENDER FUNCTION
var clock = new THREE.Clock()
// let box = scene.getObjectByName('green-cube')

let start = performance.now()
let current = start
let elapsed;
let SPEED = 2
let MAX = 0.5
let box;
setTimeout(() => box = scene.getObjectByName('box-mesh'), 1)



function animate() {
	let delta = clock.getDelta()
	// controls.update(delta)

	// camera.rotation.y -= 0.0004
	// camera.position.z -= 0.002
    // camera.position.x -= 0.002
    // box = scene.getObjectByName('box-mesh')
    if(box) {
        current = performance.now()
        elapsed = current - start
        BoxMesh.position.y = ( (Math.sin((elapsed / 1000) * SPEED) * MAX) ) + MAX - 2
    } else {
        box = scene.getObjectByName('box-mesh')
    }
    

    // if(box.isObject3D) {
    //     current = performance.now()
    //     elapsed = current - start
    //     box.position.y = ( (Math.sin((elapsed / 1000) * SPEED) * MAX) ) + MAX - 2
    // }
    
    
	requestAnimationFrame( animate );
	composer.render(delta)
}
requestAnimationFrame(animate)

export {
    scene,
    camera,
    light,
    renderer,
    composer
}