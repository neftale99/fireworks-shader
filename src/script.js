import * as THREE from 'three'
import gsap from 'gsap'
import GUI from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import fireworksVertexShader from './Shaders/vertex.glsl'
import fireworksFragmentShader from './Shaders/fragment.glsl'
import overlayVertexShader from './Shaders/Overlay/vertex.glsl'
import overlayFragmentShader from './Shaders/Overlay/fragment.glsl'

/**
 * Loaders
 */
// Loading
const loaderElement = document.querySelector('.loading')
const loadingManager = new THREE.LoadingManager(
    // Loaded
    () => {
        gsap.delayedCall(1, () => {

            loaderElement.style.display = 'none'

            gsap.to(
                overlayMaterial.uniforms.uAlpha, 
                { duration: 1.5, value: 0, delay: 0.5 }
            )

            gsap.to(
                overlayMaterial.uniforms.uAlpha, 
                { duration: 1.5, value: 0, delay: 0.5 }
            )

            createRandomFirework()
        })
    },
    // Progress
    (itemUrl, itemsLoaded, itemsTotal) => 
    {
        loaderElement.style.display = 'block'
    }
)

const dracoLoader = new DRACOLoader(loadingManager)
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader(loadingManager)
gltfLoader.setDRACOLoader(dracoLoader)

const textureLoader = new THREE.TextureLoader(loadingManager)

/**
 * Base
 */
// Debug
// const gui = new GUI({ width: 325 })
// const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
    vertexShader: overlayVertexShader,
    fragmentShader: overlayFragmentShader,
    uniforms: {
        uAlpha: new THREE.Uniform(1)
    },
    transparent: true,
    depthWrite: false,
})
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)

/**
 * Texture
 */
const textures = [
    textureLoader.load('./Particles/1.png'),
    textureLoader.load('./Particles/2.png'),
    textureLoader.load('./Particles/3.png'),
    textureLoader.load('./Particles/4.png'),
    textureLoader.load('./Particles/5.png'),
    textureLoader.load('./Particles/6.png')
]

/**
 * Material
 */
const  materialHouse = new THREE.MeshStandardMaterial({
    color: '#e0e200',
    metalness: 0.5,
    roughness: 0.5
})

const  materialHouse1 = new THREE.MeshStandardMaterial({
    color: '#003366',
    metalness: 0.5,
    roughness: 0.5
})

const  materialDoor = new THREE.MeshStandardMaterial({
    color: '#8b4513',
    roughness: 0.8
})

const  materialDoor1 = new THREE.MeshStandardMaterial({
    color: '#381600',
    roughness: 0.8
})

const  materialWindow = new THREE.MeshStandardMaterial({
    color: '#422300',
    roughness: 0.8
})

const  materialWindow2 = new THREE.MeshStandardMaterial({
    color: '#707070',
    roughness: 0.5,
    metalness: 1.0
})

const  materialWindowBase = new THREE.MeshStandardMaterial({
    color: '#66472e',
    roughness: 0.8
})

const  materialRoof = new THREE.MeshStandardMaterial({
    color: '#850000',
    roughness: 0.8
})

const  materialGlass = new THREE.MeshStandardMaterial({
    color: '#ffffff',        
    roughness: 0,            
    metalness: 0,            
    opacity: 0.5,               
    emissive: '#ffffff',     
    emissiveIntensity: 0.3
})

const  materialLadder = new THREE.MeshStandardMaterial({
    color: '#241300',
    roughness: 0.6,
    metalness: 0.1
})

const  materialLadder2 = new THREE.MeshStandardMaterial({
    color: '#3f3f3b',
    metalness: 1.0
})

const  materialLadder3 = new THREE.MeshStandardMaterial({
    color: '#82827d',
    metalness: 1.0
})

const  materialTube = new THREE.MeshStandardMaterial({
    color: '#898989',
    metalness: 1.0
})

const  materialBase = new THREE.MeshStandardMaterial({
    color: '#000000',
    roughness: 1.0
})

const  materialBase2 = new THREE.MeshStandardMaterial({
    color: '#636363',
    roughness: 1.0
})

const  materialThree = new THREE.MeshStandardMaterial({
    color: '#d6009d',                            
    roughness: 1.0,                        
})

const  materialThree2 = new THREE.MeshStandardMaterial({
    color: '#762c04',                            
    roughness: 1.0,                        
})

const  materialLetter = new THREE.MeshStandardMaterial({
    color: '#000000',          
    emissive: '#00e66f',       
    emissiveIntensity: 1.0,    
    roughness: 0.2,            
    metalness: 0.1,            
    opacity: 1.0,                                  
})

const  materialLetter2 = new THREE.MeshStandardMaterial({
    color: '#000000',          
    emissive: '#c900cc',       
    emissiveIntensity: 1.0,    
    roughness: 0.2,            
    metalness: 0.1,            
    opacity: 1.0,                                  
})

const  materialBaseLetter = new THREE.MeshStandardMaterial({
    color: '#000000',                    
    metalness: 1.0                                        
})

const  materialBaseLetter2 = new THREE.MeshStandardMaterial({
    color: '#ffffff',          
    emissive: '#ffffff',       
    emissiveIntensity: 1.0,    
    roughness: 0.2,            
    metalness: 0.1,            
    opacity: 1.0,                                         
})

const  materialTable = new THREE.MeshStandardMaterial({
    color: '#392809',
    roughness: 0.6,
    metalness: 0.1                                     
})

const  materialBaseTable = new THREE.MeshStandardMaterial({
    color: '#828282',
    roughness: 1.0,
    metalness: 0.1                                     
})

const  materialDish = new THREE.MeshStandardMaterial({
    color: '#8f3900',
    roughness: 0.85,
    metalness: 0.7                                     
})

const  materialDish2 = new THREE.MeshStandardMaterial({
    color: '#c4c4bb',
    roughness: 0.85,
    metalness: 0.2                                     
})

const  materialDish3 = new THREE.MeshStandardMaterial({
    color: '#8d6116',
    roughness: 1.0,
    metalness: 0.05                                     
})

const  materialChair = new THREE.MeshStandardMaterial({
    color: '#a6b5af',
    metalness: 1.0                                    
})

const  materialChair2 = new THREE.MeshStandardMaterial({
    color: '#8f2400',
    metalness: 0.3,
    roughness: 1.0,                                
})

const  materialWire = new THREE.MeshStandardMaterial({
    color: '#000000',
    metalness: 1.0,                                
})

const  materialWire2 = new THREE.MeshStandardMaterial({
    color: '#636363',
    metalness: 1.0,                                
})

const  materialWall = new THREE.MeshStandardMaterial({
    color: '#404040',
    metalness: 0.1,
    roughness: 0.5                                
})

const  materialLightStreet = new THREE.MeshStandardMaterial({
    color: '#050505',
    metalness: 1.0                              
})

const  materialLightStreet2 = new THREE.MeshStandardMaterial({
    color: '#e3e633',          
    emissive: '#e3e633',       
    emissiveIntensity: 1.0,    
    roughness: 0.2,            
    metalness: 0.1,            
    opacity: 1.0,                             
})

const  materialFan = new THREE.MeshStandardMaterial({
    color: '#555553',
    metalness: 1.0                              
})

const  materialFan2 = new THREE.MeshStandardMaterial({
    color: '#dedede',
    metalness: 1.0                              
})

const  materialFan3 = new THREE.MeshStandardMaterial({
    color: '#b5b5b5',
    metalness: 1.0                              
})

const  materialGround = new THREE.MeshStandardMaterial({
    color: '#205c00',
    roughness: 1.0                              
})

/**
 * Model
 */

gltfLoader.load(
    'Model/Ramen.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(1, 1, 1)
        gltf.scene.position.y = - 4
        gltf.scene.rotation.y = 4

        gltf.scene.receiveShadow = true
        gltf.scene.castShadow = true
    
        scene.add(gltf.scene)

        const house = gltf.scene.children.find((child) => child.name === 'Casa')
        const house1 = gltf.scene.children.find((child) => child.name === 'Casa001')
        const base1 = gltf.scene.children.find((child) => child.name === 'Base001')
        const base2 = gltf.scene.children.find((child) => child.name === 'Base')
        const door = gltf.scene.children.find((child) => child.name === 'Puerta')
        const door1 = gltf.scene.children.find((child) => child.name === 'Puerta001')
        const baseDoor = gltf.scene.children.find((child) => child.name === 'Puerta-base')
        const glass = gltf.scene.children.find((child) => child.name === 'Glass')
        const glass1 = gltf.scene.children.find((child) => child.name === 'Glass001')
        const glass2 = gltf.scene.children.find((child) => child.name === 'Glass002')
        const window1 = gltf.scene.children.find((child) => child.name === 'Ventana')
        const window2 = gltf.scene.children.find((child) => child.name === 'Persiana')
        const baseWindow = gltf.scene.children.find((child) => child.name === 'Ventana-base')
        const baseWindow2 = gltf.scene.children.find((child) => child.name === 'Base-ventana')
        const roof1 = gltf.scene.children.find((child) => child.name === 'Roof001')
        const roof2 = gltf.scene.children.find((child) => child.name === 'Roof')
        const ladder = gltf.scene.children.find((child) => child.name === 'Base-escalera2')
        const ladder2 = gltf.scene.children.find((child) => child.name === 'Base-escalera001')
        const ladder3 = gltf.scene.children.find((child) => child.name === 'Escalera')
        const tube = gltf.scene.children.find((child) => child.name === 'Tubo')
        const three = gltf.scene.children.find((child) => child.name === 'Arbol')
        const three2 = gltf.scene.children.find((child) => child.name === 'Tronco')
        const baseLetter = gltf.scene.children.find((child) => child.name === 'Anuncio001')
        const baseLetter2 = gltf.scene.children.find((child) => child.name === 'Anuncio')
        const letter = gltf.scene.children.find((child) => child.name === 'Letra2')
        const letter2 = gltf.scene.children.find((child) => child.name === 'Letra1')
        const tabble = gltf.scene.children.find((child) => child.name === 'Mesa')
        const tabble2 = gltf.scene.children.find((child) => child.name === 'Mesa-base')
        const dish = gltf.scene.children.find((child) => child.name === 'Plato')
        const dish2 = gltf.scene.children.find((child) => child.name === 'Maruchan')
        const dish3 = gltf.scene.children.find((child) => child.name === 'Palillos')
        const chair = gltf.scene.children.find((child) => child.name === 'Silla')
        const chair2 = gltf.scene.children.find((child) => child.name === 'Colchon')
        const wire = gltf.scene.children.find((child) => child.name === 'Cables')
        const wire2 = gltf.scene.children.find((child) => child.name === 'Electricity')
        const wall = gltf.scene.children.find((child) => child.name === 'Muro')
        const lightStreet = gltf.scene.children.find((child) => child.name === 'Faro')
        const lightStreet2 = gltf.scene.children.find((child) => child.name === 'Faro001')
        const fan = gltf.scene.children.find((child) => child.name === 'Base-vent')
        const fan2 = gltf.scene.children.find((child) => child.name === 'Reja-Vent')
        const fan3 = gltf.scene.children.find((child) => child.name === 'Venti')
        const ground = gltf.scene.children.find((child) => child.name === 'Tierra')


        // Material
        house.material = materialHouse
        house.receiveShadow = true
        house.castShadow = true
        
        house1.material = materialHouse1
        house1.receiveShadow = true
        house1.castShadow = true

        door.material = materialDoor
        door.receiveShadow = true
        door.castShadow = true

        door1.material = materialDoor1
        door1.receiveShadow = true
        door1.castShadow = true

        baseDoor.material = materialDoor
        baseDoor.receiveShadow = true
        baseDoor.castShadow = true

        window1.material = materialWindow
        window1.receiveShadow = true
        window1.castShadow = true

        window2.material = materialWindow2
        window2.receiveShadow = true
        window2.castShadow = true

        baseWindow.material = materialWindow
        baseWindow.receiveShadow = true
        baseWindow.castShadow = true

        baseWindow2.material = materialWindow
        baseWindow2.receiveShadow = true
        baseWindow2.castShadow = true

        roof1.material = materialRoof
        roof1.receiveShadow = true
        roof1.castShadow = true

        roof2.material = materialRoof
        roof2.receiveShadow = true
        roof2.castShadow = true

        glass.material = materialGlass
        glass.receiveShadow = true
        glass.castShadow = true

        glass1.material = materialGlass
        glass1.receiveShadow = true
        glass1.castShadow = true
        
        glass2.material = materialGlass
        glass2.receiveShadow = true
        glass2.castShadow = true

        ladder.material = materialLadder
        ladder.receiveShadow = true
        ladder.castShadow = true

        ladder2.material = materialLadder2
        ladder2.receiveShadow = true
        ladder2.castShadow = true

        ladder3.material = materialLadder3
        ladder3.receiveShadow = true
        ladder3.castShadow = true


        tube.material = materialTube
        tube.receiveShadow = true
        tube.castShadow = true

        base1.material = materialBase
        base1.receiveShadow = true
        base1.castShadow = true

        base2.material = materialBase2
        base2.receiveShadow = true
        base2.castShadow = true

        three.material = materialThree
        three.receiveShadow = true
        three.castShadow = true

        three2.material = materialThree2
        three2.receiveShadow = true
        three2.castShadow = true

        letter.material = materialLetter
        letter.receiveShadow = true

        letter2.material = materialLetter2
        letter2.receiveShadow = true

        baseLetter.material = materialBaseLetter
        baseLetter.receiveShadow = true
        baseLetter.castShadow = true

        baseLetter2.material = materialBaseLetter2
        baseLetter2.receiveShadow = true
        baseLetter2.castShadow = true

        tabble.material = materialTable
        tabble.receiveShadow = true
        tabble.castShadow = true

        tabble2.material = materialBaseTable
        tabble2.receiveShadow = true
        tabble2.castShadow = true

        dish.material = materialDish
        dish.receiveShadow = true
        dish.castShadow = true

        dish2.material = materialDish2
        dish2.receiveShadow = true
        dish2.castShadow = true

        dish3.material = materialDish3
        dish3.receiveShadow = true
        dish3.castShadow = true

        chair.material = materialChair
        chair.receiveShadow = true
        chair.castShadow = true

        chair2.material = materialChair2
        chair2.receiveShadow = true
        chair2.castShadow = true

        wire.material = materialWire
        wire.receiveShadow = true
        wire.castShadow = true
        
        wire2.material = materialWire2
        wire2.receiveShadow = true
        wire2.castShadow = true

        wall.material = materialWall
        wall.receiveShadow = true
        wall.castShadow = true

        lightStreet.material = materialLightStreet
        lightStreet.receiveShadow = true
        lightStreet.castShadow = true
        
        lightStreet2.material = materialLightStreet2
        lightStreet2.receiveShadow = true
        lightStreet2.castShadow = true

        fan.material = materialFan
        fan.receiveShadow = true
        fan.castShadow = true

        fan2.material = materialFan2
        fan2.receiveShadow = true
        fan2.castShadow = true

        fan3.material = materialFan3
        fan3.receiveShadow = true
        fan3.castShadow = true

        ground.material = materialGround
        ground.receiveShadow = true
        ground.castShadow = true
    }
)

/**
 * Light
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(9, 5,  4)
scene.add(directionalLight)

const directionalLight2 = new THREE.DirectionalLight('#ffffff', 1.5)
directionalLight2.shadow.mapSize.set(1024, 1024)
directionalLight2.castShadow = true
directionalLight2.shadow.camera.far = 15
directionalLight2.shadow.normalBias = 0.05
directionalLight2.position.set( - 4, 0, 2.5)
scene.add(directionalLight2)

const hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 )
scene.add(hemisphereLight)

// const helper = new THREE.DirectionalLightHelper(directionalLight, 5)
// scene.add(helper)

// const helper2 = new THREE.DirectionalLightHelper(directionalLight2, 5)
// scene.add(helper2)

// const helper3 = new THREE.HemisphereLightHelper(light, 5)
// scene.add(helper3)

/**
 * Tweaks
 */
// gui.addColor(materialHouse, 'color').onChange((value) => {
//     materialHouse.color.set(value)
//     console.log(value.getHexString())
// })

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
}
sizes.resolution = new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)
    sizes.resolution.set(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 3
camera.position.z = 10
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.CineonToneMapping
renderer.toneMappingExposure = 1.5
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)
renderer.setClearColor('#0b1215')

/**
 * Fireworks
 */
const  createFireworks = (count, position, size, texture, radius, color) =>
    {
        // Geometry
        const positionArray = new Float32Array(count * 3)
        const sizesArray = new Float32Array(count)
        const timeMultiplierArray = new Float32Array(count)
    
        for(let i = 0; i < count; i++)
        {
            const i3 = i * 3

            const spherical = new THREE.Spherical(
                radius * (0.75 + Math.random() * 0.25),
                Math.random() * Math.PI,
                Math.random() * Math.PI * 2
            )

            const position = new THREE.Vector3()
            position.setFromSpherical(spherical)
    
            positionArray[i3   ] = position.x
            positionArray[i3 + 1] = position.y
            positionArray[i3 + 2] = position.z

            sizesArray[i] = Math.random()

            timeMultiplierArray[i] = 1 + Math.random()
        }
    
        const geometry = new THREE.BufferGeometry()

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positionArray, 3))
        geometry.setAttribute('aSize', new THREE.Float32BufferAttribute(sizesArray, 1))
        geometry.setAttribute('aTimeMultiplier', new THREE.Float32BufferAttribute(timeMultiplierArray, 1))
    
        // Material
        texture.flipY = false
        const material = new THREE.ShaderMaterial({
            vertexShader: fireworksVertexShader,
            fragmentShader: fireworksFragmentShader,
            uniforms: {
                uSize: new THREE.Uniform(size),
                uResolution: new THREE.Uniform(sizes.resolution),
                uTexture: new THREE.Uniform(texture),
                uColor: new THREE.Uniform(color),
                uProgress: new THREE.Uniform(0)
            },
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        })
    
        // Points
        const fireworks = new THREE.Points(geometry, material)
        fireworks.position.copy(position)
        scene.add(fireworks)

        // Destroy
        const destroy = () =>
        {
            scene.remove(fireworks)
            geometry.dispose()
            material.dispose()
        }

        // Light
        const light = new THREE.PointLight(color, 0)
        light.castShadow = true
		light.position.copy(position)
        scene.add(light)

        const destroyLight = () =>
        {
            light.removeFromParent()
        }

        // Animate
        gsap
            .timeline()
            .to(
            material.uniforms.uProgress,
            {
                value: 1,
                duration: 3,
                ease: 'linear',
                onComplete: destroy
            })
            .to(
                light,
                {
                    intensity: 350,
                    duration: 0.3,
                    ease: 'power3.out'
                },
                '-=3'
            )
            .to(
                light,
                {
                    intensity: 0,
                    duration: 1,
                    ease: 'linear',
                    onComplete: destroyLight
                },
                '>'
            )
}
    
const createRandomFirework = () =>
{
    const count = Math.round(400 + Math.random() * 1000)

    const position = new THREE.Vector3(
        (Math.random() * 6) - 2,
        5,
        (Math.random() * 2) - 2
    )

    const size = 0.1 + Math.random() * 0.1

    const texture = textures[Math.floor(Math.random() * textures.length)]

    const radius = 0.5 + Math.random()

    const color = new THREE.Color()
    color.setHSL(Math.random(), 1, 0.7)

    createFireworks(count, position, size, texture, radius, color)
}

/**
 * Click
 */
document.addEventListener('click', createRandomFirework)

/**
 * Animate
 */
const clock = new THREE.Clock()
const amplitude = 0.5

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()