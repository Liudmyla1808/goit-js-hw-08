// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
console.log(galleryItems);
const divEl = document.querySelector('.gallery');

 const Gallery = galleryItems.map(({preview, original, description}) => 
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> `).join('');
        divEl.insertAdjacentHTML ("beforeend", Gallery );
const simpleGallery = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: "alt",
    captionPosition:'bottom',
    captionDelay:250,
 });
