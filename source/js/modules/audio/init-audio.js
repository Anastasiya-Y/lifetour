function initAudio() {
  const audio = document.querySelector('.hero__audio-wrapper');

  if (!audio) {
    return;
  }

  createAudio(audio);
}

function createAudio(audio) {
  const iframe = createIframe();

  audio.appendChild(iframe);
  audio.classList.add('audio-wrapper--is-enabled');
}

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.classList.add('hero__audio');
  iframe.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  iframe.setAttribute('width', '340');
  iframe.setAttribute('height', '220');

  return iframe;
}

const stopAudio = (element) => {
  let containerElement = document.querySelector(element);

  if (containerElement) {
    let iframeTag = containerElement.querySelector('.hero__audio');

    if (iframeTag) {
      let iframeSrc = iframeTag.src;
      iframeTag.src = iframeSrc;
    }
  }
};

export {initAudio, stopAudio};
