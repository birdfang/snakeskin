import Scene from './Scene'
import Box from './Box'
import PerspectiveCamera from './PerspectiveCamera'
import Mesh from './Mesh'
import Renderer from './Renderer'
import '../lib/OBJLoader'
import '../lib/OrbitControls'
import '../lib/MTLLoader'

const Guile = {
    Scene,
    Box,
    PerspectiveCamera,
    Mesh,
    Renderer
}

export default Guile

// var animate = function () {
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
// };

// animate();