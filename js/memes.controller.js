'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function renderMeme(id) {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${id}.jpg`
    if (!id) elImg.src = `img/${meme.selectedImgIdx}.jpg`
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    meme.lines.forEach(line => {
        gCtx.fillStyle = line.color
        gCtx.font = line.size + 'px Arial'
        gCtx.textAlign = 'center'
        gCtx.fillText(line.txt, line.x, line.y)
    })
}

function showImg() {
    const elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hidden')

    const elFilter = document.querySelector('.filter')
    elFilter.classList.add('hidden')

    const elEditor = document.querySelector('.editor')
    elEditor.classList.remove('hidden')

    document.querySelector('.editor-btn').classList.add('selected')
    document.querySelector('.gallery-btn').classList.remove('selected')

    renderMeme()
    drawSelectedBox()
}

function onSetLineTxt(elInput) {
    setLineTxt(elInput)
    renderMeme()
    drawSelectedBox()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
    drawSelectedBox()
}

function downloadCanvas(elLink) {
    renderMeme()
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-meme'
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
    drawSelectedBox()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
    drawSelectedBox()
}

function onAddLine() {
    addLine()
    renderMeme()
    drawSelectedBox()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
    drawSelectedBox()
}

function onSwitchUpLine() {
    const meme = getMeme()
    switchUpLine()
    document.querySelector('.canvas-text').value = meme.lines[meme.selectedLineIdx].txt
    renderMeme()
    drawSelectedBox()
}

function onSwitchDownLine() {
    const meme = getMeme()
    switchDownLine()
    document.querySelector('.canvas-text').value = meme.lines[meme.selectedLineIdx].txt
    renderMeme()
    drawSelectedBox()
}


function drawSelectedBox() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]

    const metrics = gCtx.measureText(line.txt)
    const width = metrics.width
    const height = metrics.fontBoundingBoxAscent

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(line.x - width / 2, line.y - height + 10, width, height)
}

function onDown(ev) {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]
    const metrics = gCtx.measureText(line.txt)
    const width = metrics.width
    const height = metrics.fontBoundingBoxAscent

    const { offsetX, offsetY } = ev

    const rectLeft = line.x - width / 2
    const rectRight = line.x + width / 2
    const rectTop = line.y - height
    const rectBottom = line.y

    const isXIn = offsetX >= rectLeft && offsetX <= rectRight
    const isYIn = offsetY >= rectTop && offsetY <= rectBottom

    if (isXIn && isYIn) {
        document.querySelector('.canvas-text').value = line.txt
        renderMeme()
        drawSelectedBox()
    } else {
        renderMeme()
    }
}

function onSaveMeme(){
    saveMeme()
}