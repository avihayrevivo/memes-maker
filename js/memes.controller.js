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
    drawSelectedBox()
}

function showImg() {
    const elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hidden')

    const elEditor = document.querySelector('.editor')
    elEditor.classList.remove('hidden')

    document.querySelector('.editor-btn').classList.add('selected')
    document.querySelector('.gallery-btn').classList.remove('selected')

    renderMeme()
}

function onSetLineTxt(elInput) {
    setLineTxt(elInput)
    renderMeme()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function downloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-meme'
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onSwitchUpLine() {
    const meme = getMeme()
    switchUpLine()
    document.querySelector('.canvas-text').value = meme.lines[meme.selectedLineIdx].txt
    renderMeme()
}

function onSwitchDownLine() {
    const meme = getMeme()
    switchDownLine()
    document.querySelector('.canvas-text').value = meme.lines[meme.selectedLineIdx].txt
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
    const boxPos = { x: currMeme.x - width / 2, y: currMeme.y - height + 10 }
    updateBoxPos(boxPos, height, width)

    gCtx.strokeRect(currMeme.boxPos.x, currMeme.boxPos.y, width, height)
}

function onDown(ev) {
    const meme = getMeme()
    const boxPos = meme.lines[meme.selectedLineIdx].boxPos
    const height = meme.lines[meme.selectedLineIdx].boxHeight
    const width = meme.lines[meme.selectedLineIdx].boxWidth

    const { offsetX, offsetY } = ev
    if (
        offsetX >= boxPos.x && offsetX <= boxPos.x + width &&
        offsetY >= boxPos.y && offsetY <= boxPos.y + height
    ) {
        document.querySelector('.canvas-text').value = meme.lines[meme.selectedLineIdx].txt
    }
}

