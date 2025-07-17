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

function onShowGallery(){
    const elGallery = document.querySelector('.gallery')
    elGallery.classList.remove('hidden')

    const elEditor = document.querySelector('.editor')
    elEditor.classList.add('hidden')
}

function onShowEditor(){
    const elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hidden')

    const elEditor = document.querySelector('.editor')
    elEditor.classList.remove('hidden')

    renderMeme(1)
}