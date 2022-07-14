import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", galleryHandler)

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
//     if (e.target.nodeName !== "IMG") {
//     return
//   };
//   const largeRef = e.target.dataset.source;
//   const instance = basicLightbox.create(`
//     <img src="${largeRef}" width="800" height="600">`, {
//     onShow: () => {
//         addEventListener("keydown", (e) => {
//    if (e.key === "Escape") {
//     instance.close()
//    }
//   })
//     },
//     onClose: (e) => {
//       if (instance.visible()) {
//         removeEventListener("keydown", instance.onShow);
//       }
 
//     }
//   }
//   );
//   instance.show();
// };

//////////////////////////////////////////////////right//////////////////////////////////////////
let instance = null
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
    if (e.target.nodeName !== "IMG") {
    return
  };
  
  const largeRef = e.target.dataset.source;
    instance = basicLightbox.create(`
    <img src="${largeRef}" width="800" height="600">`, {
    onShow: () => addEventListener("keydown", closeEsc),
    onClose: () => removeEventListener("keydown", closeEsc),
  }
  );
  instance.show();
};

function closeEsc(e) {
  if (e.code === "Escape") {
    instance.close()
  }
}

/////////////////////////////////////////////////////

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
//     if (e.target.nodeName !== "IMG") {
//     return
//   };
 
//   const largeRef = e.target.dataset.source;
//   const instance = basicLightbox.create(`<button type="button" class="button" data-slide="prev" style="transform: translateY(-300px)">prev</button>
//     <img src="${largeRef}" width="800" height="600"> <button type="button" class="button" data-slide="next" style="transform: translateY(-300px)">next</button>`, {
//           onShow: () => {
//         addEventListener("keydown", (e) => {
//           if (e.key === "Escape") {
//             instance.close()
//           }
//         });
//         console.log()
//     },
//     onClose: (e) => {
//       if (instance.visible()) {
//         removeEventListener("keydown", instance.onShow);
//       };
//       const button = document.querySelector(".button");
//       button.addEventListener("click", (e) => console.log(e.target))
//       console.log(button);
//     }
//   }
//   );
//   instance.show();
// };
 
