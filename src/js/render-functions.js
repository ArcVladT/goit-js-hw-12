const list = document.querySelector('.list');
const btnMore = document.querySelector('.button-more');
const loading = document.querySelector('.loading');

const createGallery = async images => {
  for (let {
    comments,
    downloads,
    likes,
    views,
    largeImageURL,
    taqs,
  } of images) {
    let markup = `<li class="obj-li">
              <div class="div-block">
                <div class="div-text">
                  <p class="obj-prop">Likes</p>
                  <p class="obj-p">${likes}</p>
                </div>
                <div class="div-text">
                  <p class="obj-prop">Views</p>
                  <p class="obj-p">${views}</p>
                </div>
                <div class="div-text">
                  <p class="obj-prop">Comments</p>
                  <p class="obj-p">${comments}</p>
                </div>
                <div class="div-text">
                  <p class="obj-prop">Downloads</p>
                  <p class="obj-p">${downloads}</p>
                </div>
              </div>
              <img class="obj-img" alt="${taqs}" src="${largeImageURL}" />
            </li>`;

    list.insertAdjacentHTML('beforeend', markup);
    btnMore.classList.remove('dnone');
    loading.classList.add('dnone');
  }
};

export default createGallery;
