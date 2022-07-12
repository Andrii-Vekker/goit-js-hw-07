import { galleryItems } from './gallery-items.js';

// const galleryRef = document.querySelector(".gallery");

// galleryRef.addEventListener("click", galleryHandler)

// function createMurkup(items) {
//   const markup = items.map(item =>
// `<div class="gallery__item">
//   <a class="gallery__link" href = "${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="Image description"
//     />
//   </a>
// </div>`).join("");
//  return galleryRef.insertAdjacentHTML("beforeend", markup);
 
// };
// createMurkup(galleryItems)



// function galleryHandler(e) {
//   e.preventDefault();
//   const largeRef = e.target.dataset.source;
// const instance = basicLightbox.create(`
//     <img src="${largeRef}" width="800" height="600">
// `)
  
// }

// console.log(galleryItems);


//////////////////////////////////////////////
const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", galleryHandler)

function createMurkup(items) {
  const markup = items.map(item =>
`<div class="gallery__item">
  <a class="gallery__link" href = "${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</div>`).join("");
  return markup
 };
createMurkup(galleryItems);

function insertList(string) {
  return galleryRef.insertAdjacentHTML("beforeend", string);
}
insertList(createMurkup(galleryItems));

function galleryHandler(e) {
  e.preventDefault();
  const largeRef = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeRef}" width="800" height="600">
`);
  if (e.target.nodeName !== "IMG") {
    return
  };

  instance.show();
}
///////////////////////////////////////////////////////////////////////////////////
// const galleryRef = document.querySelector(".gallery");

// galleryRef.addEventListener("click", galleryHandler)

// function createMurkup(items) {
//   const markup = items.map(item =>
// `<div class="gallery__item">
//   <a class="gallery__link" href = "${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="Image description"
//     />
//   </a>
// </div>`).join("");
//   return markup
//  };
// createMurkup(galleryItems);

// function insertList(string) {
//   return galleryRef.insertAdjacentHTML("beforeend", string);
// }
// insertList(createMurkup(galleryItems));

// function galleryHandler(e) {
//   e.preventDefault();
//   const largeRef = e.target.dataset.source;
//  const instance = basicLightbox.create(`
//     <img src="${largeRef}" width="800" height="600">`, {
// onShow: () => {
  
// },
// onClose: () => {

// }
// }
// )
// }