import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

    const addHtml = galleryItems.map((item) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
    />
    </a>
    </div>`
).join("");

galleryRef.insertAdjacentHTML('beforeend', addHtml)

function onClick (e) {
    e.preventDefault();
    const url = e.target.dataset.source;
    if (!url) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`)
    instance.show()
    }

    galleryRef.addEventListener('click', onClick);
