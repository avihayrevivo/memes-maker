'use strict'

let gCanvas
let gCtx
let gPrevPos

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

function onLeftAlignment() {
    leftAlignment()
    renderMeme()
    drawSelectedBox()
}

function onRightAlignment() {
    rightAlignment()
    renderMeme()
    drawSelectedBox()
}

function onCenterAlignment() {
    centerAlignment()
    renderMeme()
    drawSelectedBox()
}

function drawSelectedBox(idx) {
    const meme = getMeme()
    var line
    if (!idx) line = meme.lines[meme.selectedLineIdx]
    else line = meme.lines[idx]

    const metrics = gCtx.measureText(line.txt)
    const width = metrics.width
    const height = metrics.fontBoundingBoxAscent

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(line.x - width / 2, line.y - height + 10, width, height)
}

function onDown(ev) {
    const meme = getMeme()
    const { offsetX, offsetY } = ev
    for (let i = 0; i < meme.lines.length; i++) {
        let line = meme.lines[i]
        let metrics = gCtx.measureText(line.txt)
        let width = metrics.width
        let height = metrics.fontBoundingBoxAscent
        let rectLeft = line.x - width / 2
        let rectRight = line.x + width / 2
        let rectTop = line.y - height
        let rectBottom = line.y
        let isXIn = offsetX >= rectLeft && offsetX <= rectRight
        let isYIn = offsetY >= rectTop && offsetY <= rectBottom
        if (isXIn && isYIn) {
            meme.selectedLineIdx = i
            setMemeDrag(true)
            const pos = getEvPos(ev)
            gPrevPos = pos
            document.querySelector('.canvas-text').value = line.txt
            renderMeme()
            drawSelectedBox(i)
        } else {
            renderMeme()
        }
    }
}

function onMove(ev) {
    const meme = getMeme()
    const isDrag = meme.lines[meme.selectedLineIdx].isDrag
    if (!isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gPrevPos.x
    const dy = pos.y - gPrevPos.y
    moveMeme(dx, dy)
    gPrevPos = pos
    renderMeme()
    drawSelectedBox()
}

function onUp() {
    setMemeDrag(false)
}

function onMostPopular(word, elBtn) {
    let currSize = window.getComputedStyle(elBtn).fontSize
    elBtn.style.fontSize = parseFloat(currSize) + 2 + 'px'
    var word = mostPopular(word)
    gQueryOptions.filterBy.txt = word
    renderGallery()
}

function getEvPos(ev) {
    const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onRenderEmoji(idx) {
    if (idx === 1) addEmoji('😂')
    if (idx === 2) addEmoji('😭')
    if (idx === 3) addEmoji('😎')
    if (idx === 4) addEmoji('💣')
    if (idx === 5) addEmoji('👻')
    renderMeme()
    drawSelectedBox()
}

function coverCanvasWithImg(elImg = document.querySelector('img')) {
    gCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gCanvas.width
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

