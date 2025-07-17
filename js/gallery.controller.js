'use strict'

const gQueryOptions = {
    filterBy: { txt: '' }
}

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    const imgs = getFilteredImgs(gQueryOptions)
    var strHTML = imgs.map(img => `<img 
        onclick="onImgSelect(${img.id})" src="${img.url}" alt="meme${img.id}">`)

    elGallery.innerHTML = strHTML.join('')
}

function onImgSelect(id) {
    imgSelect(id)
    showImg()
}

function onShowGallery() {
    onShowPage(1)
}

function onShowEditor() {
    onShowPage(2)
    renderMeme(getRandomInt(1, 17))
}

function onShowSaved() {
    onShowPage(3)
    renderSaved()
}

function onFlexible() {
    onShowEditor()
}

function onSetFilterBy() {
    const elFilterTxt = document.querySelector('.search')
    gQueryOptions.filterBy.txt = elFilterTxt.value
    renderGallery()
}

function onShowPage(page) {
    if (page === 1) {
        const elGallery = document.querySelector('.gallery')
        elGallery.classList.remove('hidden')

        const elFilter = document.querySelector('.filter')
        elFilter.classList.remove('hidden')

        const elEditor = document.querySelector('.editor')
        elEditor.classList.add('hidden')

        const elSaved = document.querySelector('.saved-page')
        elSaved.classList.add('hidden')

        document.querySelector('.gallery-btn').classList.add('selected')
        document.querySelector('.editor-btn').classList.remove('selected')
        document.querySelector('.saved-btn').classList.remove('selected')

    } else if (page === 2) {
        const elGallery = document.querySelector('.gallery')
        elGallery.classList.add('hidden')

        const elFilter = document.querySelector('.filter')
        elFilter.classList.add('hidden')

        const elEditor = document.querySelector('.editor')
        elEditor.classList.remove('hidden')

        const elSaved = document.querySelector('.saved-page')
        elSaved.classList.add('hidden')

        document.querySelector('.editor-btn').classList.add('selected')
        document.querySelector('.gallery-btn').classList.remove('selected')
        document.querySelector('.saved-btn').classList.remove('selected')
    } else if (page === 3) {
        const elGallery = document.querySelector('.gallery')
        elGallery.classList.add('hidden')

        const elFilter = document.querySelector('.filter')
        elFilter.classList.add('hidden')

        const elEditor = document.querySelector('.editor')
        elEditor.classList.add('hidden')

        const elSaved = document.querySelector('.saved-page')
        elSaved.classList.remove('hidden')

        document.querySelector('.editor-btn').classList.remove('selected')
        document.querySelector('.gallery-btn').classList.remove('selected')
        document.querySelector('.saved-btn').classList.add('selected')
    }
}

function renderSaved(){

}