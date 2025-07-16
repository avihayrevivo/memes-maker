'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgIdx}.jpg`
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    meme.lines.forEach((line, idx) => {
        gCtx.fillStyle = line.color
        gCtx.font = line.size + 'px Arial'
        gCtx.textAlign = 'center'
        gCtx.fillText(line.txt, line.x, line.y)
    })
    drawSelectedBox()
}

function setImg() {
    const elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hidden')

    const elEditor = document.querySelector('.editor')
    elEditor.classList.remove('hidden')

    renderMeme()
}

function setLineTxt(elInput) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].txt = elInput.value
    renderMeme()
}

function onSetColor(color) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color
    renderMeme()
}

function downloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-meme'
}

function onIncreaseFont() {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size += 10
    renderMeme()
}

function onDecreaseFont() {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size -= 10
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLine() {
    const input = document.querySelector('.canvas-text').value = ''
    switchLine()
    renderMeme()
}

function drawSelectedBox() {
    const meme = getMeme()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    const currMeme = meme.lines[meme.selectedLineIdx]
    const metrics = gCtx.measureText(meme.lines[meme.selectedLineIdx].txt)
    const width = metrics.width
    const height = metrics.fontBoundingBoxAscent
    console.log(metrics);

    gCtx.strokeRect(currMeme.x - width / 2, currMeme.y - height + 10, width, height)
}