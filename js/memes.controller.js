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
    const text = meme.lines[0].txt
    const color = meme.lines[0].color
    const size = meme.lines[0].size
    gCtx.lineWidth = 1
    gCtx.fillStyle = color
    gCtx.font = size + 'px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, 200, 40)
    // gCtx.strokeText(text, offsetX, offsetY)
}
