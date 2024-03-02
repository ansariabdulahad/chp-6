const startImageAnimation = () => {
    let imageBox = document.querySelector('.image-box');
    imageBox.classList.add('active-img-animation');
}

const stopImageAnimation = () => {
    let imageBox = document.querySelector('.image-box');
    imageBox.classList.remove('active-img-animation');
}

const startColorAnimation = () => {
    let colorBox = document.querySelector('.color-box');
    colorBox.classList.add('active-color-animation');
}

const stopColorAnimation = () => {
    let colorBox = document.querySelector('.color-box');
    colorBox.classList.remove('active-color-animation');
}

const startLoaderAnimation = () => {
    let loaderBox = document.querySelector('.loader-inner-box');
    loaderBox.classList.add('active-loader-animation');
}

const stopLoaderAnimation = () => {
    let loaderBox = document.querySelector('.loader-inner-box');
    loaderBox.classList.remove('active-loader-animation');
}

const startZoomAnimation = () => {
    let zoomBox = document.querySelector('.zoom-inner-box');
    zoomBox.classList.add('active-zoom-animation');
}

const stopZoomAnimation = () => {
    let zoomBox = document.querySelector('.zoom-inner-box');
    zoomBox.classList.remove('active-zoom-animation');
}