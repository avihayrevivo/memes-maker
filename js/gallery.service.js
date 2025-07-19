'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['awkward', 'animal', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['animal'] },
    { id: 5, url: 'img/5.jpg', keywords: ['bad', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'happy', 'awkward', 'baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'happy', 'baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'awkward'] },
    { id: 12, url: 'img/12.jpg', keywords: ['bad', 'awkward'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'happy'] },
    { id: 14, url: 'img/14.jpg', keywords: ['bad', 'awkward'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'awkward'] },
    { id: 16, url: 'img/16.jpg', keywords: ['bad', 'awkward'] },
    { id: 17, url: 'img/17.jpg', keywords: ['animal'] },
    { id: 18, url: 'img/18.jpg', keywords: ['happy'] },
    { id: 19, url: 'img/19.jpg', keywords: ['animal', 'awkward'] },
    { id: 20, url: 'img/20.jpg', keywords: ['funny', 'happy', 'baby'] },
    { id: 21, url: 'img/21.jpg', keywords: ['funny', 'awkward'] },
    { id: 22, url: 'img/22.jpg', keywords: ['bad', 'awkward', 'funny'] },
    { id: 23, url: 'img/23.jpg', keywords: ['funny', 'awkward', 'happy'] },
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
