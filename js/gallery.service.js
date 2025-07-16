'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny'] },
]

function getImgs(){
    return gImgs
}

function imgSelect(id){
    gMeme.selectedImgIdx = id
}