// Gloabal Variables
let cars = document.getElementsByClassName('cars');
let shapeImg = document.querySelector('.shape-img');
let rotateBox = document.querySelector('.rotate');
let moveBox = document.querySelector('.move');

let imageBox = document.querySelector('.image-box');
let colorBox = document.querySelector('.color-box');
let loaderBox = document.querySelector('.loader-inner-box');
let zoomBox = document.querySelector('.zoom-inner-box');

const startCarAnimation = () => {
    cars[0].classList.add('active-car-animation');
    cars[1].classList.add('active-car-animation');
    cars[2].classList.add('active-car-animation');
    cars[3].classList.add('active-car-animation');
}

const stopCarAnimation = () => {
    cars[0].classList.remove('active-car-animation');
    cars[1].classList.remove('active-car-animation');
    cars[2].classList.remove('active-car-animation');
    cars[3].classList.remove('active-car-animation');
}

const startShapeAnimation = () => {
    shapeImg.classList.add('active-shape-animation');
}

const stopShapeAnimation = () => {
    shapeImg.classList.remove('active-shape-animation');
}

const startRotateAnimation = () => {
    rotateBox.classList.add('active-rotate-animation');
}

const stopRotateAnimation = () => {
    rotateBox.classList.remove('active-rotate-animation');
}

const startMoveAnimation = () => {
    moveBox.classList.add('active-move-animation');
}

const stopMoveAnimation = () => {
    moveBox.classList.remove('active-move-animation');
}

const startImageAnimation = () => {
    imageBox.classList.add('active-img-animation');
}

const stopImageAnimation = () => {
    imageBox.classList.remove('active-img-animation');
}

const startColorAnimation = () => {
    colorBox.classList.add('active-color-animation');
}

const stopColorAnimation = () => {
    colorBox.classList.remove('active-color-animation');
}

const startLoaderAnimation = () => {
    loaderBox.classList.add('active-loader-animation');
}

const stopLoaderAnimation = () => {
    loaderBox.classList.remove('active-loader-animation');
}

const startZoomAnimation = () => {
    zoomBox.classList.add('active-zoom-animation');
}

const stopZoomAnimation = () => {
    zoomBox.classList.remove('active-zoom-animation');
}