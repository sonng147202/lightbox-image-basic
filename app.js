const imgsEl = document.querySelectorAll('.image')
let currentIndex = 0

const renderLightbox = (imgSrc) => {
    const lightboxHtml = `
        <div id="lightbox">
            <div class="lightbox-content">
                <i class='bx bx-left-arrow-alt' id="prev"></i>
                <img 
                    src="${imgSrc}" 
                    alt="" 
                    class="lightbox-image"
                />
                <i class='bx bx-right-arrow-alt' id="next"></i>
            </div>
        </div>
    `
    document.body.insertAdjacentHTML('beforebegin', lightboxHtml)
}

document.onclick = (event) => {
    if (event.target.matches('#lightbox')) {
        event.target.parentNode.removeChild(event.target)
    }
    if (event.target.matches('#prev')) {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = imgsEl.length - 1
        }
        const parentEle = event.target.parentNode
        const currentImg = parentEle.querySelector('.lightbox-image')
        currentImg.src = imgsEl[currentIndex].src
    }
    if (event.target.matches('#next')) {
        currentIndex++
        if (currentIndex >= imgsEl.length) {
            currentIndex = 0
        }
        const parentEle = event.target.parentNode
        const currentImg = parentEle.querySelector('.lightbox-image')
        currentImg.src = imgsEl[currentIndex].src
    }
}

imgsEl.forEach((item, index) => {
    item.onclick = () => {
        currentIndex = index
        const imgSrc = item.src
        renderLightbox(imgSrc)
    }
})
