'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'example',
            size: 20,
            color: 'white'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function setImg(elImg){
    const elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hidden')

    const elEditor = document.querySelector('.editor')
    elEditor.classList.remove('hidden')

    renderMeme(elImg)
}

function setLineTxt() {
    return document.querySelector('.canvas-text').value
}
