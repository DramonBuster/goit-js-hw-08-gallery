const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  imgGallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  imgLightbox: document.querySelector('.lightbox__image'),
  btnLightbox: document.querySelector('.lightbox__button')
}

const createMarkup = ({ preview, original, description }) => {
  
  const imgEl = document.createElement('img');
    imgEl.src = preview;
    imgEl.alt = description;
    imgEl.dataset.source = original;
    imgEl.classList.add('gallery__image');
  
  const linkEl = document.createElement('a');
    linkEl.href = imgEl.dataset.source;
    linkEl.classList.add('gallery__link');

    linkEl.appendChild(imgEl);

  const itemEl = document.createElement('li');
  itemEl.appendChild(linkEl);
  itemEl.classList.add('gallery__item');
  return itemEl;
}

const el = galleryItems.map(createMarkup);

refs.imgGallery.append(...el);

refs.imgGallery.addEventListener('click', openModal);

function openModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  console.log(event.target.dataset.source);
  refs.lightbox.classList.add('is-open');
  refs.lightbox.classList.remove('is-closed');
  refs.imgLightbox.src = event.target.dataset.source;
  refs.btnLightbox.addEventListener('click', closeModal);
}

function closeModal(event) {
  refs.lightbox.classList.remove('is-open');
  refs.lightbox.classList.add('is-closed');
}