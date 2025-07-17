'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'example',
            size: 30,
            color: 'white',
            x: 200,
            y: 40,
        },
        {
            txt: 'example2',
            size: 40,
            color: 'black',
            x: 200,
            y: 360
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gSavedMemes = []

function getMeme() {
    return gMeme
}

function addLine() {
    gMeme.lines.push(
        {
            txt: 'write something',
            size: 30,
            color: 'black',
            x: 200,
            y: 100,
        }
    )
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchUpLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function switchDownLine() {
    gMeme.selectedLineIdx--
    if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function setLineTxt(elInput) {
    gMeme.lines[gMeme.selectedLineIdx].txt = elInput.value
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function saveMeme(){
    gSavedMemes.push(gMeme)
}