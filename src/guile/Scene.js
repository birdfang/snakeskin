class Scene extends THREE.Scene {
    constructor() {
        super()
        this.onTick = this.onTick || null
        this.constants = {}
    }


}

export default Scene