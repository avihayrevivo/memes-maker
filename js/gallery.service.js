'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['awkward', 'animal'] },
    { id: 4, url: 'img/4.jpg', keywords: ['animal'] },
    { id: 5, url: 'img/5.jpg', keywords: ['bad'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'happy', 'awkward'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'happy'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'awkward'] },
    { id: 12, url: 'img/12.jpg', keywords: ['bad', 'awkward'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'happy'] },
    { id: 14, url: 'img/14.jpg', keywords: ['bad', 'awkward'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'awkward'] },
    { id: 16, url: 'img/16.jpg', keywords: ['bad', 'awkward'] },
]

function getImgs() {
    return gImgs
}

function imgSelect(id) {
    gMeme.selectedImgIdx = id
}

function getFilteredImgs(options) {
    if (!options) options = {}
    const filterBy = options.filterBy
    var imgs = _filterImgs(filterBy)
    return imgs
}


function _filterImgs(filterBy) {
    var imgs = gImgs.slice()

    if (filterBy.txt) {
        const regexTxt = new RegExp(filterBy.txt, 'i')
        imgs = imgs.filter(img => regexTxt.test(img.keywords))
    }
    return imgs
}
