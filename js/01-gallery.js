import { galleryItems } from './gallery-items.js';
// Change code below this line

// const instance = basicLightbox.create(`
// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
// `);
const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", galleryHandler)

function createMurkup(items) {
    const markup = galleryItems.map(i => 
`<div class="gallery__item">
  <a class="gallery__link" href="${i.original}">
    <img
      class="gallery__image"
      src="${i.preview}"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`)
return galleryRef.createElement(markup)
};
createMurkup(galleryItems)



function galleryHandler(e) {
  
}

console.log(galleryItems);


