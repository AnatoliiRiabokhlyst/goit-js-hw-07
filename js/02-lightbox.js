import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

    const addHtml = galleryItems.map((item) =>
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    alt="${item.description}"/>
    </a>`
).join("");

galleryRef.insertAdjacentHTML('beforeend', addHtml)

function onClick (e) {
    e.preventDefault();
    let modal = new SimpleLightbox('.gallery__item', {captionsData:'alt', captionDelay:250});
    modal.on('show.SimpleLightbox');
}

galleryRef.addEventListener('click', onClick);
