import Guile from '../../guile'

const geo = new Guile.Box(1, 1, 1, 5, 5, 5)
const mat = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })
const Box = new THREE.Mesh(geo, mat)
Box.position.x = 3
Box.position.y = -2
Box.name = "box-mesh"

export default Box