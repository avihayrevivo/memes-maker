'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    const imgs = getImgs()
    var strHTML = imgs.map(img => `<img 
        onclick="onImgSelect(${img.id})" src="${img.url}" alt="meme${img.id}">`)

    elGallery.innerHTML = strHTML.join('')
}

function onImgSelect(id) {
    imgSelect(id)
    showImg()
}