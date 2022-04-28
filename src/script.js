import './stylesheet.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { boxContent } from './boxcontent.js'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { textChanger } from './textchanger.js'

// Loader
const loadingBarElement = document.querySelector('.loading-bar')
const loadingManager = new THREE.LoadingManager(
    // Loaded
    () => {
        gsap.to(document.querySelector('.loading-box'), {
            duration: 1,
            opacity: 0,
            delay: 1,
            onComplete: () => {
                document.querySelector('.loading-box').style.zIndex = '-10'                       
            }
        })

    },

    // Progress
    (itemUrl, itemsLoaded, itemsTotal) =>
    {
        // Calculate the progress and update the loadingBarElement
        const progressRatio = itemsLoaded / itemsTotal
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
    }
)
// const gltfLoader = new GLTFLoader(loadingManager)
// const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager)


// Init Declarations
let currentIntersect, isCuboctaOpen, areTetrasMoving, isBoxOpen, mixer, idiom, boxWidth
let activeBox = 1

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Mouse
const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) => {
    mouse.x = -event.clientX / sizes.width - 0.5
    mouse.y = event.clientY / sizes.height - 0.5
})

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.set(20,20,20)
camera.lookAt(new THREE.Vector3(0, 0, 0))
camera.aspect = sizes.width / sizes.height
scene.add(camera)


//// MESHES ////

// Cuboctahedron
const cubocta = {}
const cuboctaArr = []
const helpersArr = []
const tetrasTransVector = new THREE.Vector3(0, 1, 1).normalize()
const tetrasRotationValues = {
    x: [0, 0, Math.PI, Math.PI, Math.PI/2, Math.PI/2, -Math.PI/2, -Math.PI/2, Math.PI/2, Math.PI/2, -Math.PI/2, -Math.PI/2],
    y: [0, 0, 0, 0, Math.PI/2, -Math.PI/2, Math.PI/2, -Math.PI/2, 0, 0, 0, 0],
    z: [0, Math.PI, 0, Math.PI, 0, 0, 0, 0, Math.PI/2, -Math.PI/2, Math.PI/2, -Math.PI/2]
} 
new GLTFLoader(loadingManager).load('/cubocta.glb', (gltf) => {
    for(let i = 0; i < 12; i++){ 
        cubocta['tetra' + i] = gltf.scene.children[0].clone()
        cuboctaArr.push(cubocta['tetra' + i])
        cuboctaArr[i].rotation.x = tetrasRotationValues.x[i]
        cuboctaArr[i].rotation.y = tetrasRotationValues.y[i]
        cuboctaArr[i].rotation.z = tetrasRotationValues.z[i]        
        cuboctaArr[i].material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0,    
            roughness: 0.4
        })
        cubocta['helper' + i] = new THREE.Object3D()
        helpersArr.push(cubocta['helper' + i])
        helpersArr[i].rotation.x = cuboctaArr[i].rotation.x
        helpersArr[i].rotation.y = cuboctaArr[i].rotation.y
        helpersArr[i].rotation.z = cuboctaArr[i].rotation.z           
        scene.add(cuboctaArr[i])             
    }
})

// Spheres
const spheres = {}
const spheresArr = []
const spheresGroup = new THREE.Group()
const spheresPositionValues = {
    x: [0, 0, 2.5, 0, -2.5, 0, 0],
    y: [0, 2.5, 0, 0, 0, 0, -2.5],
    z: [0, 0, 0, 2.5, 0, -2.5, 0]
} 
for(let i = 0; i < 7; i++){ 
    spheres['sphere' + i] = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.5),
        new THREE.MeshStandardMaterial({
            color:0xeeeeff,
            metalness: 0,
            roughness: 0.4
        }))
    spheresArr.push(spheres['sphere' + i])    
    spheresArr[i].position.x = spheresPositionValues.x[i]
    spheresArr[i].position.y = spheresPositionValues.y[i]
    spheresArr[i].position.z = spheresPositionValues.z[i]
    spheresGroup.add(spheresArr[i])                   
}
spheresGroup.add(new THREE.Mesh(
    new THREE.OctahedronGeometry(2.5, 0),
    new THREE.MeshStandardMaterial({
        color: 0xeeeeff,
        metalness: 0,
        roughness: 0.4,
        wireframe: true        
    })
))
spheresArr[0].material = new THREE.MeshStandardMaterial({emissive:0x00ffff})
scene.add (spheresGroup)

// Sphere Labels
const labels = {}
const labelsArr = []
const labelsContent = []
labels.content0 = {}
labels.content1 = { en: 'About Me', fr: 'Sur Moi', pt: 'Sobre Mim' }
labels.content2 = { en: 'Skills', fr: 'Compétences', pt: 'Competências' }
labels.content3 = { en: 'Experience', fr: 'Expérience', pt: 'Experiência' }
labels.content4 = { en: 'Education', fr: 'Éducation', pt: 'Educação' }
labels.content5 = { en: 'Projects', fr: 'Projets', pt: 'Projetos' }
labels.content6 = { en: 'Contact', fr: 'Contact', pt: 'Contato' }
for(let i = 0; i < 7; i++){
    labels['div' + i] = document.createElement('div')
    labels['div' + i].className = 'sphere-label'
    labels['div' + i].id = 'sphereLabel' + i
    labelsContent.push(labels['content' + i])
    labels['div' + i].textContent = (labelsContent[i])[idiom]
    labels['label' + i] = new CSS2DObject(labels['div' + i])
    labelsArr.push(labels['label' + i])
    spheresArr[i].add(labels['label' + i])
    labels['label' + i].position.set(0, 0, 0)
    labels['label' + i].visible = false
}

// Particles
const particlesCount = 20000
const particlesPosition = new Float32Array(particlesCount * 3)
const particles = new THREE.Points(
    new THREE.BufferGeometry(1, 32, 32),
    new THREE.PointsMaterial({
        size: 0.25,
        sizeAttenuation: true,
        color: new THREE.Color(0xeeeeff),
        transparent: true,
        alphaMap: new THREE.TextureLoader().load('/particle1.png'),
        depthWrite: false,
        blending: THREE.NormalBlending,
    })
)
for(let i=0; i < particlesCount * 3; i++) {
    particlesPosition[i] = (Math.random() - 0.5) * 100
}
particles.geometry.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3))
scene.add(particles)


//// LIGHTS ////

// Ambient light
const ambientLight = new THREE.AmbientLight()
ambientLight.color = new THREE.Color(0xffffff)
ambientLight.intensity = 0.7
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight(0x66fffc, 0.2)
directionalLight.position.set(10, 5, 0)
scene.add(directionalLight)

// Hemisphere light
const hemisphereLight = new THREE.HemisphereLight(0xff66660, 0x6666ff, 0.2)
scene.add(hemisphereLight)

// Point light
const pointLight = new THREE.PointLight(0x00ffff, 0.5, 10, 2)
pointLight.position.set(0, 0, 0)
scene.add(pointLight)


//// RENDERERS ////

// CSS 2D Renderer
const css2DRenderer = new CSS2DRenderer()
document.body.appendChild(css2DRenderer.domElement)
css2DRenderer.setSize(sizes.width, sizes.height)

// WebGL Renderer
const webGLRenderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
webGLRenderer.setClearColor(0xffffff)
document.body.appendChild(webGLRenderer.domElement)
webGLRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
webGLRenderer.setSize(sizes.width, sizes.height)


//// EVENTS ////

// Raycaster
const raycaster = new THREE.Raycaster()
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height * 2 - 1)
})

window.addEventListener('mousemove', () => {
    if(currentIntersect && !isCuboctaOpen) {
        canvas.style.cursor = 'pointer'
    } else {
        canvas.style.cursor = 'initial'
    }
})

// Cubocta Opener ==> Resolve position error
function cuboctaOpen() {
    if(currentIntersect) {
        if(!isCuboctaOpen && !isBoxOpen) {
            canvas.style.zIndex = -1
            helpersArr.forEach((helper) => {
                helper.translateOnAxis (tetrasTransVector, 10)
            })
            for(let i = 0; i < cuboctaArr.length; i++){
                gsap.to(cuboctaArr[i].position, {x: helpersArr[i].position.x, duration: 5, ease: 'power3'})
                gsap.to(cuboctaArr[i].position, {y: helpersArr[i].position.y, duration: 5, ease: 'power3'})
                gsap.to(cuboctaArr[i].position, {z: helpersArr[i].position.z, duration: 5, ease: 'power3'})
            }               
            gsap.to(camera, {fov: 15, zoom: 0.5, duration: 5, onUpdate: () => {camera.updateProjectionMatrix()}})
            document.querySelector('.main').style.visibility = 'visible'
            labelsArr.forEach((label) => {
                label.visible = true
            })            
            setTimeout(() => {setMainText()}, 1000)
            setTimeout(() => {
                document.querySelector('#mainIdiomChangers').style.visibility = 'visible'
                document.querySelector('.social-icons-box').style.visibility = 'visible'                
            }, 7500)
            
            isCuboctaOpen = true
            canvas.style.cursor = "initial"
            areTetrasMoving = true
            setTimeout(() => {
                areTetrasMoving = false
            }, 5000)
        }             
    }       
}

window.addEventListener('click', () => {cuboctaOpen()})

// Cubocta Closer ==> Resolve position error
window.addEventListener('dblclick', () => {
    if(currentIntersect) {
        if(isCuboctaOpen && !isBoxOpen) {
            canvas.style.zIndex = 0
            unsetMainText()
            helpersArr.forEach((helper) => {
                helper.position.x = 0
                helper.position.y = 0
                helper.position.z = 0
            })
            for(let i = 0; i < cuboctaArr.length; i++){
                gsap.to(cuboctaArr[i].position, {x: 0, duration: 5, ease: 'power3'})
                gsap.to(cuboctaArr[i].position, {y: 0, duration: 5, ease: 'power3'})
                gsap.to(cuboctaArr[i].position, {z: 0, duration: 5, ease: 'power3'})
            }   
            gsap.to(camera, {fov: 60, zoom: 1, duration: 5, onUpdate: () => {camera.updateProjectionMatrix()}})
                 
            document.querySelector('#mainIdiomChangers').style.visibility = 'hidden'
            document.querySelector('.social-icons-box').style.visibility = 'hidden'
            labelsArr.forEach((label) => {
                label.visible = false
            })      
            areTetrasMoving = true
            setTimeout(() => {
                isCuboctaOpen = false
                areTetrasMoving = false
                for(let i = 0; i < cuboctaArr.length; i++){
                    cuboctaArr[i].position.x = 0
                    cuboctaArr[i].position.y = 0
                    cuboctaArr[i].position.z = 0                    
                }                
                clock.start()                
            }, 5000)            
        }
    }
})

// Box Opener ==> Add && !isBoxOpen
for(let i = 1; i < 7; i++) {    
    labels['div' + i].addEventListener('click', () => {
        if (sizes.width > 800) {
            boxWidth = '640px'
        } else {
            boxWidth = '90%'
        }
        document.querySelector('.box').style.visibility = "visible"
        document.querySelector('.scroll').scrollTo(0,0)
        document.querySelector('#boxContent').innerHTML = (boxContent['cont' + i])[idiom]
        gsap.fromTo('.box', {
            boxShadow: 'rgba(204, 255, 255, 0.4) 0px 0px 20px 0px, rgba(204, 255, 255, 0.6) 0px 0px 1px 1px',
        }, {
            boxShadow: 'rgba(102, 102, 153, 0.1) 0px 5px 10px 0px, rgba(102, 102, 153, 0.1) 0px 0px 0px 1px',
            duration: 1.5,
            ease: 'power2.in'            
        })
        gsap.fromTo('.box', {
            width: 0
        }, {
            width: boxWidth,
            duration: 1,
            ease: 'power3.out'
        })
        gsap.fromTo('.box', {
            height: 0
        }, {
            height: '90%',
            delay: 0.5,
            duration: 1,
            ease: 'power3.out'
        })
        gsap.fromTo('.container', {
            opacity: 0
        }, {
            opacity: 1,
            delay: 1,
            duration: 1,
            ease: 'power3.out'            
        })
        gsap.fromTo('html', {
            '--anim': 0
        }, {
            '--anim': 1,
            delay: 1.5,
            duration: 1.5,
            ease: 'power2.out'            
        })
        activeBox = i
        isBoxOpen = true
    })
}

// Box Closer
document.querySelector('.closer').addEventListener('click', () => {
    gsap.to('.container', {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in'            
    })  
    gsap.to('.box', {
        height: 0,
        delay: 0,
        duration: 1        
    })   
    gsap.fromTo('.box', {
        boxShadow: 'rgba(102, 102, 153, 0.1) 0px 5px 10px 0px, rgba(102, 102, 153, 0.1) 0px 0px 0px 1px'
    }, {
        boxShadow: 'rgba(204, 255, 255, 0.4) 0px 0px 20px 0px, rgba(204, 255, 255, 0.6) 0px 0px 1px 1px',
        delay: 0.5,
        duration: 1,
        ease: 'power2.out'                   
    })
    gsap.to('.box', {
        width: 0,
        delay: 0.5,
        duration: 1,
        ease: 'power3.in',
        onComplete: () => {
            document.querySelector('.box').style.visibility = "hidden"
            isBoxOpen = false   
        }
    })
})

// set/unset Main Text
async function setMainText() {
    idiom = 'en'
    await textChanger(boxContent.helloWorld.en, document.querySelector('#helloWorld'), 20)
    await textChanger('Alexandre Leitão Santos.', document.querySelector('#myName'), 40)
    await textChanger(boxContent.iDo.en, document.querySelector('#iDo'), 30)
    await textChanger(boxContent.presentation.en, document.querySelector('#presentation'), 10)    
    for (let i = 1; i < 7; i++) {
        setTimeout(() => {
            textChanger((labels['content' + i]).en, document.querySelector(`#sphereLabel${i}`), 50)
        }, 200*i);
    }
}
async function unsetMainText() {
    for (let i = 1; i < 7; i++) {
        await textChanger('', document.querySelector(`#sphereLabel${i}`), 0)
    }
    await textChanger('', document.querySelector('#helloWorld'), 20)
    await textChanger('', document.querySelector('#myName'), 40)
    await textChanger('', document.querySelector('#iDo'), 30)
    await textChanger('', document.querySelector('#presentation'), 10)    
    idiom = undefined
}

// Idiom Changer
async function changeIdiomFancy(id) {  
    textChanger(boxContent.helloWorld[id], document.querySelector('#helloWorld'), 25)
    textChanger(boxContent.iDo[id], document.querySelector('#iDo'), 50)
    textChanger(boxContent.presentation[id], document.querySelector('#presentation'), 10)    
    for (let i = 1; i < 7; i++) {
        setTimeout(() => {            
            textChanger((labels['content' + i])[id], document.querySelector(`#sphereLabel${i}`), 50)
        }, 200*i);
    }   
}

function changeIdiom(id) {
    if (idiom !== id) {
        idiom = id
        document.documentElement.setAttribute("lang", id)
        document.querySelector('#boxContent').innerHTML = (boxContent['cont' + activeBox])[idiom]
        changeIdiomFancy(id)
    }
}
document.querySelectorAll('.en-changer').forEach((node) => {
    node.addEventListener('click', () => {changeIdiom('en')})
})
document.querySelectorAll('.fr-changer').forEach((node) => {
    node.addEventListener('click', () => {changeIdiom('fr')})
})
document.querySelectorAll('.pt-changer').forEach((node) => {
    node.addEventListener('click', () => {changeIdiom('pt')})
})

// Back to Box Top
document.querySelector('#backToBoxTop').addEventListener('click', () => {
    document.querySelector('.scroll').scrollTo(0,0)
})

// Window Resize Updater
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight    
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    webGLRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))    
    css2DRenderer.setSize(sizes.width, sizes.height)
    webGLRenderer.setSize(sizes.width, sizes.height)
})


//// ANIMATE ////

const clock = new THREE.Clock()
let previousTime = 0
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    if(mixer) {
        mixer.update(deltaTime)
    }

    // Update model
    setTimeout(() => {   
        cuboctaArr.forEach((tetra) => {
            tetra.translateOnAxis(tetrasTransVector, ((Math.sin(elapsedTime*Math.PI))/100))
        })        
    }, 1000)

    spheresGroup.rotation.x = Math.sin(elapsedTime/10)*Math.PI
    spheresGroup.rotation.y = Math.cos(elapsedTime/10)*Math.PI

    spheresArr.forEach((sphere) => {
        sphere.rotation.x = -Math.sin(elapsedTime/5)*Math.PI
        sphere.rotation.y = -Math.cos(elapsedTime/5)*Math.PI
    })

    // Update particles
    particles.rotation.y = elapsedTime * 0.025
    particles.rotation.z = elapsedTime * 0.05

    particles.geometry.attributes.position.needsUpdate = true

    // Update camera
    camera.position.set(mouse.x*5+20, mouse.y*5+20, 20)
    camera.lookAt(new THREE.Vector3(0, 0, 0))    

    // Cast a ray
    raycaster.setFromCamera(mouse, camera)

    const objectsToTest = cuboctaArr 
    const intersects = raycaster.intersectObjects(objectsToTest)

    ////////RESOLVE THIS!!!
    if(intersects.length && !areTetrasMoving) {
        // if(currentIntersect === null) {
        //     cuboctaArr.forEach((tetra) => {
        //         helpersArr.forEach((helper) => {
        //         helper.translateOnAxis (tetrasTransVector, 0.05)
        //         })
        //         for(let i = 0; i < cuboctaArr.length; i++){
        //             gsap.to(cuboctaArr[i].position, {x: helpersArr[i].position.x, duration: 0.25})
        //             gsap.to(cuboctaArr[i].position, {y: helpersArr[i].position.y, duration: 0.25})
        //             gsap.to(cuboctaArr[i].position, {z: helpersArr[i].position.z, duration: 0.25})
        //         }
        //     })                
        // }
        currentIntersect = intersects[0]
    } else {
        // if(currentIntersect) {        
        //     cuboctaArr.forEach((tetra) => {
        //         helpersArr.forEach((helper) => {
        //             helper.position.x = 0
        //             helper.position.y = 0
        //             helper.position.z = 0
        //         })
        //         for(let i = 0; i < cuboctaArr.length; i++){
        //             gsap.to(cuboctaArr[i].position, {x: helpersArr[i].position.x, duration: 1})
        //             gsap.to(cuboctaArr[i].position, {y: helpersArr[i].position.y, duration: 1})
        //             gsap.to(cuboctaArr[i].position, {z: helpersArr[i].position.z, duration: 1})
        //         }
        //     })        
        // }
        currentIntersect = null
    }

    // Render
    webGLRenderer.render(scene, camera)
    css2DRenderer.render(scene, camera)    
    
    // Call next tick
    window.requestAnimationFrame(tick)    
}

tick()