function initAudio() {
  const audio = document.querySelector('.hero__audio-wrapper');

  if (!audio) {
    return;
  }

  createAudio(audio);
}

function createAudio(audio) {
  const iframe = createIframeAudio();

  audio.appendChild(iframe);
  audio.classList.add('hero__audio-wrapper--is-enabled');
}

function createIframeAudio() {
  const iframe = document.createElement('iframe');

  iframe.classList.add('hero__audio');
  iframe.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  iframe.setAttribute('width', '340');
  iframe.setAttribute('height', '220');

  return iframe;
}

const stopAudio = (element) => {
  let containerElements = document.querySelectorAll(element);

  if (containerElements) {
    containerElements.forEach((containerElement) => {
      let iframeTag = containerElement.querySelector('iframe');

      if (iframeTag) {
        iframeTag.remove();
        createAudio(containerElement);
      }
    });
  }
};

export {initAudio, stopAudio};
