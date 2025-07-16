'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    const imgs = getImgs()
    var strHTML = imgs.map(img => `<img 
        onclick="onImgSelect(this, ${img.id})" src="${img.url}" alt="meme${img.id}">`)
        
    elGallery.innerHTML = strHTML.join('')
}

function onImgSelect(elImg, id) {
    setImg(elImg, id)
}