const mapContainer = document.querySelector('.contacts__map');

// Options for the marker
const iconOptions = {
  iconUrl: 'img/svg/icon-marker.svg',
  iconSize: [33, 44],
};

// Creating a custom icon

const getIconOptions = () => {
  const customIcon = L.icon(iconOptions);
  const markerOptions = {
    title: 'lifetourLocation',
    clickable: false,
    draggable: false,
    icon: customIcon,
  };
  return markerOptions;
};


const createMap = () => {
  if (!mapContainer) {
    return;
  }

  const map = L.map(mapContainer, {scrollWheelZoom: false}).setView([55.7748763, 37.6326415], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([55.7748763, 37.6326415], getIconOptions()).addTo(map);
};

export {createMap};
