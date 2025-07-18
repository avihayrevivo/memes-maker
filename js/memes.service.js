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
            isDrag: false
        },
    ]
}
var gKeywordSearchCountMap = { 'funny': 0, 'awkward': 0, 'baby': 0, 'happy': 0, 'bad': 0, 'animal': 0 }
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
            isDrag: false
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

function leftAlignment() {
    gMeme.lines[gMeme.selectedLineIdx].x = 100
}

function rightAlignment() {
    gMeme.lines[gMeme.selectedLineIdx].x = 300
}

function centerAlignment() {
    gMeme.lines[gMeme.selectedLineIdx].x = 200
}

function mostPopular(word) {
    gKeywordSearchCountMap[word]++

    return Object.entries(gKeywordSearchCountMap).reduce((max, current) => {
        return current[1] > max[1] ? current : max
    })[0];
}

function setMemeDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveMeme(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].x += dx
    gMeme.lines[gMeme.selectedLineIdx].y += dy
}