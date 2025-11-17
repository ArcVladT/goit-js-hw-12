import axios from 'axios';
import createGallery from './render-functions';

const input = document.querySelector('.input');
const btn = document.querySelector('.button');
const form = document.querySelector('.form');
const list = document.querySelector('.list');
const loadMoreBtn = document.querySelector('.button-more');
const loading = document.querySelector('.loading');

let word;

const submitBtn = form.addEventListener('submit', event => {
  loading.classList.remove('dnone');
  loadMoreBtn.classList.add('dnone');
  event.preventDefault();
  if (!input.value) {
    return iziToast.show({
      message: 'Input is empty!',
      position: 'topRight',
    });
  }
  if (list.children.length) {
    list.innerHTML = '';
  }

  word = input.value;
  getImages();
});

loadMoreBtn.addEventListener('click', event => {
  loading.classList.remove('dnone');
  loadMoreBtn.classList.add('dnone');
  getImages();
});

let pageNum = 1;

const getImages = async () => {
  const params = {
    key: '53276596-345bffa6c3e00e2f2781507b9',
    q: `${word}`,
    per_page: 15,
    page: pageNum,
  };
  try {
    const getImagesByQuery = await axios.get(`https://pixabay.com/api/`, {
      params,
    });

    pageNum++;
    createGallery(getImagesByQuery.data.hits);
    console.log(getImagesByQuery.data.hits);
    if (!getImagesByQuery.data.hits.length > 0) {
      loading.classList.add('dnone');

      return iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch {
    console.error(error);
  }
};
export default getImages;
