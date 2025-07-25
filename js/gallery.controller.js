'use strict'

const gQueryOptions = {
    filterBy: { txt: '' }
}
var gElImg

function renderGallery() {
    const uploadFile = `   <label class="custom-btn">  Upload imag
    <input onchange="onImgInput(event)" type="file" accept=".jpg, .jpeg, .png, .webp"
    class="file-input btn" id="file-input" name="image" />
    </label>
`
    const elGallery = document.querySelector('.gallery')
    const imgs = getFilteredImgs(gQueryOptions)
    var strHTML = imgs.map(img => `<img 
        onclick="onImgSelect(${img.id}, this)" src="${img.url}" alt="meme${img.id}">`)

    elGallery.innerHTML = uploadFile + strHTML.join('')
}

function onImgSelect(id, elImg) {
    gElImg = elImg
    coverCanvasWithImg(elImg)
    imgSelect(id)
    showImg()
}

function onShowGallery() {
    const txt = clearMemes()
    document.querySelector('.canvas-text').value = txt
    onShowPage(1)
}

function onShowEditor() {
    onShowPage(2)
    onImgSelect(1)
}

function onShowSaved() {
    onShowPage(3)
}

function onFlexible() {
    onImgSelect(getRandomInt(1, 17))
}

function onSetFilterBy() {
    const elFilterTxt = document.querySelector('.search')
    gQueryOptions.filterBy.txt = elFilterTxt.value
    renderGallery()
}

function onShowPage(page) {
    if (page === 1) {
        const elGallery = document.querySelector('.gallery')
        elGallery.classList.remove('hidden')

        const elFilter = document.querySelector('.filter')
        elFilter.classList.remove('hidden')

        const elEditor = document.querySelector('.editor')
        elEditor.classList.add('hidden')

        const elSaved = document.querySelector('.saved-page')
        elSaved.classList.add('hidden')

        document.querySelector('.gallery-btn').classList.add('selected')
        document.querySelector('.editor-btn').classList.remove('selected')
        document.querySelector('.saved-btn').classList.remove('selected')

    } else if (page === 2) {
        const elGallery = document.querySelector('.gallery')
        elGallery.classList.add('hidden')

        const elFilter = document.querySelector('.filter')
        elFilter.classList.add('hidden')

        const elEditor = document.querySelector('.editor')
        elEditor.classList.remove('hidden')

        const elSaved = document.querySelector('.saved-page')
        elSaved.classList.add('hidden')

        document.querySelector('.editor-btn').classList.add('selected')
        document.querySelector('.gallery-btn').classList.remove('selected')
        document.querySelector('.saved-btn').classList.remove('selected')
    } else if (page === 3) {
        const elGallery = document.querySelector('.gallery')
        elGallery.classList.add('hidden')

        const elFilter = document.querySelector('.filter')
        elFilter.classList.add('hidden')

        const elEditor = document.querySelector('.editor')
        elEditor.classList.add('hidden')

        const elSaved = document.querySelector('.saved-page')
        elSaved.classList.remove('hidden')

        document.querySelector('.editor-btn').classList.remove('selected')
        document.querySelector('.gallery-btn').classList.remove('selected')
        document.querySelector('.saved-btn').classList.add('selected')
    }
}

function onImgInput(ev) {
    loadImageFromInput(ev, onImgSelect)
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()

    reader.onload = (event) => {
        const img = new Image()
        img.src = event.target.result

        img.onload = () => {
            const imgs = getImgs()
            imgs.push(
                { id: imgs.length, url: img }
            )
            onImageReady(imgs.length, img)
        }
    }
    reader.readAsDataURL(ev.target.files[0])
}
