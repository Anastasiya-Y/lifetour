function initVideo() {
  const video = document.querySelector('.hero__video-wrapper');

  if (!video) {
    return;
  }

  createVideo(video);
}

function createVideo(video) {
  const link = video.querySelector('.hero__video-link');
  const button = video.querySelector('.hero__video-button');

  if (!link || !button) {
    return;
  }

  const id = createUrl(link);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('hero__video-wrapper--is-enabled');
}

function createUrl(link) {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const url = link.getAttribute('href');
  const match = url.match(regexp);

  return match[1];
}

function generateUrl(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateUrl(id));
  iframe.classList.add('hero__video');

  return iframe;
}

const regenerateUrl = (url) => url.replace(/&autoplay=1/, '');

const stopVideo = (element) => {
  let containerElement = document.getElementById(element);
  let slides = document.querySelectorAll('.hero__slide');

  if (containerElement) {
    let iframeTag = containerElement.querySelector('iframe');

    if (iframeTag) {
      let iframeSrc = iframeTag.src;
      iframeTag.src = regenerateUrl(iframeSrc);
    }
  }
};

export {initVideo, stopVideo};
