'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function renderMeme(elImg, id) {
    const meme = getMeme()
    meme.selectedLineIdx = id
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    const text = meme.lines.selectedLineIdx.txt
}









const elTextInput = document.querySelector('.canvas-text')