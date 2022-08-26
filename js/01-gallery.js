import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const imageItems = createImageGalery(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', imageItems)
console.log(galleryItems);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createImageGalery(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}" />
        </a>
      </div>`
    }).join('')
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if(!evt.target.classList.contains('gallery__image')) {
        return
    }
    const instance = basicLightbox.create(
        `<img src="${evt.target.src}" width="800" height="600">`)
        instance.show()
    }


