const parallaxItems = document.querySelectorAll('[class*="parallax"]');
const floatingGuide = document.querySelector('.floating-guide');

const artists = [
  {
    name: 'Kelly',
    type: '時尚插畫 / 水彩速寫',
    portrait: 'Kelly Self Portrait',
    portraitImage: 'assets/images/artists/kelly-portrait.png',
    portraitFit: 'contain',
    artwork: 'Kelly Artwork 01',
    artworkImage: 'assets/images/artists/kelly-artwork.jpg',
    description:
      'Kellykiwi 以水彩與線條捕捉人物、衣著與生活片刻，作品帶有時尚插畫的輕盈感，也保留手繪顏料的即興痕跡。她的創作橫跨現場速寫、插畫教學與空間美感，擅長把日常觀察轉化成明亮、柔軟且具有個人溫度的視覺語言。',
    colors: ['#e6ded2', '#d8cfc2'],
  },
  {
    name: 'Wasabi',
    type: '花卉構圖 / 空間色彩',
    portrait: 'Artist Portrait 02',
    artwork: 'Floral Work 02',
    description:
      '許映庭擅長以花卉、枝葉與留白構成畫面，作品帶有柔和卻明確的節奏。她將植物視為空間中的情緒載體，讓畫作不只是牆面裝飾，而是能與光線、家具和生活狀態互相呼應的存在。',
    colors: ['#ddd6c9', '#e7d9d2'],
  },
  {
    name: 'Johnny',
    type: '乾燥植物 / 混合媒材',
    portrait: 'Artist Portrait 03',
    artwork: 'Mixed Media 03',
    description:
      '陳霧生以乾燥植物、紙張紋理與淡墨色塊創作，作品常呈現時間留下的痕跡。他關注植物從盛放到凋落的過程，並將其轉化為安靜、克制且富有收藏感的藝術語言。',
    colors: ['#d9d4cc', '#cbc4ba'],
  },
];

const artworkDetails = [
  {
    title: 'Botanical Silence',
    image: 'Artwork Detail 01',
    description:
      'Botanical Silence 以植物水彩為核心，透過透明色層、細緻葉脈與大量留白，呈現自然在日常空間中的安靜存在。作品適合放置於客廳、書房或接待空間，讓牆面不只是裝飾，而成為空間氣質的延伸。',
    color: '#ded7ca',
  },
  {
    title: 'Light Garden',
    image: 'Artwork Detail 02',
    description:
      'Light Garden 關注植物與光線的關係，將花瓣、葉影與空氣感轉化為柔和的畫面節奏。它適合與淺色家具、木質材質或植栽搭配，營造乾淨、自然且具有呼吸感的生活場景。',
    color: '#e7ddd3',
  },
  {
    title: 'Dried Memory',
    image: 'Artwork Detail 03',
    description:
      'Dried Memory 以乾燥植物與混合媒材創作，保留植物從生長到凋落的時間痕跡。作品具有較成熟、沉靜的視覺質感，適合用於展間、選物店、咖啡空間或具有收藏氛圍的住宅場域。',
    color: '#d1cbc2',
  },
];

const plants = [
  {
    name: '龜背芋 Monstera',
    type: '大型葉片 / 空間焦點',
    image1: 'Plant View 01A',
    image1Path: 'assets/images/plants/monstera-a.jpg',
    image2: 'Plant View 01B',
    image2Path: 'assets/images/plants/monstera-b.jpg',
    description:
      '龜背芋擁有大面積葉片與自然裂葉，是最能建立空間存在感的植栽之一。它適合明亮室內、客廳角落或展售空間，能快速讓環境變得放鬆、有層次，也很適合搭配植物水彩作品。',
    colors: ['#d9ded2', '#cbd4c0'],
  },
  {
    name: '火鶴 Anthurium',
    type: '花葉姿態 / 色彩亮點',
    image1: 'Plant View 02A',
    image1Path: 'assets/images/plants/anthurium-a.jpg',
    image2: 'Plant View 02B',
    image2Path: 'assets/images/plants/anthurium-b.jpg',
    description:
      '火鶴有明確的花形與光澤感葉片，適合成為小型空間中的視覺亮點。它能替桌面、玄關或展示層架增加一點溫度，也適合搭配低彩度的畫作與陶器。',
    colors: ['#e4d5d0', '#d7c3bd'],
  },
  {
    name: '小豆樹 China Doll',
    type: '細緻葉形 / 輕盈線條',
    image1: 'Plant View 03A',
    image1Path: 'assets/images/plants/china-doll-a.jpg',
    image2: 'Plant View 03B',
    image2Path: 'assets/images/plants/china-doll-b.jpg',
    description:
      '小豆樹的葉片細密、枝條輕盈，能讓空間出現柔和的綠意層次。它不會過度佔據視覺，適合放在書房、工作桌旁或需要安靜陪伴的角落。',
    colors: ['#dbe3d6', '#c9d5c1'],
  },
  {
    name: '琴葉榕 Fiddle Leaf Fig',
    type: '俐落線條 / 現代空間',
    image1: 'Plant View 04A',
    image1Path: 'assets/images/plants/fiddle-leaf-fig-a.jpg',
    image2: 'Plant View 04B',
    image2Path: 'assets/images/plants/fiddle-leaf-fig-b.jpg',
    description:
      '琴葉榕的葉片厚實、線條俐落，帶有一種自然又現代的雕塑感。它適合放在採光良好的空間，能與畫作、木質家具或白牆形成乾淨對比，是提升空間質感的經典選擇。',
    colors: ['#d3dacb', '#becab5'],
  },
];

const plantDetails = [
  {
    title: 'Monstera Styling',
    image: 'Plant Styling 01',
    description:
      '龜背芋適合用來建立空間的主視覺，它的大型葉片能與藝術畫作形成自然呼應。當畫作提供色彩與故事，植栽則提供生命感與立體層次，兩者搭配能讓空間從單純裝飾，轉變為完整的生活場景。',
    color: '#d7ddcf',
  },
  {
    title: 'Fiddle Leaf Styling',
    image: 'Plant Styling 02',
    description:
      '琴葉榕的垂直線條很適合搭配現代住宅、工作室與選物空間。它能讓牆面、家具與藝術品之間產生視覺連結，尤其適合放在畫作旁邊，讓平面作品與真實植物形成一種安靜的對話。',
    color: '#cbd5c2',
  },
  {
    title: 'Olive Tree Styling',
    image: 'Plant Styling 03',
    description:
      '橄欖樹適合營造輕盈、自然且不過度裝飾的空間感。它的枝葉線條能柔化室內結構，搭配淡色水彩或乾燥植物作品時，可以形成更成熟、安靜且具有收藏感的整體氛圍。',
    color: '#dfe1d6',
  },
];

const gifts = [
  {
    name: 'Botanical Gift Set',
    type: '藝術卡片 / 小型植栽 / 香氛物件',
    image1: 'Gift Set 01A',
    image2: 'Gift Set 01B',
    description:
      'Botanical Gift Set 將植物水彩卡片、小型植栽與自然香氛組成一份安靜的禮物。它適合送給剛搬入新家的朋友、喜歡植物的人，或需要一點日常儀式感的空間。',
    colors: ['#e6ded4', '#d8d0c3'],
  },
  {
    name: 'Frame & Green',
    type: '小畫框 / 桌上植物 / 空間小物',
    image1: 'Gift Set 02A',
    image2: 'Gift Set 02B',
    description:
      'Frame & Green 以小尺寸畫作搭配桌上植物，讓禮品不只是短暫的心意，而能成為對方日常空間的一部分。適合工作桌、玄關、床邊或書房角落。',
    colors: ['#ded8cd', '#cbd5c6'],
  },
  {
    name: 'Seasonal Selection',
    type: '季節選品 / 植物素材 / 紙品',
    image1: 'Gift Set 03A',
    image2: 'Gift Set 03B',
    description:
      'Seasonal Selection 依照季節挑選植物素材、紙品與小型藝術物件。每一組都保留自然的色調與觸感，適合作為節慶、開幕、感謝或紀念性的禮物。',
    colors: ['#e8dfd7', '#d6c9bd'],
  },
];

const giftDetails = [
  {
    title: 'Gift for New Home',
    image: 'Gift Styling 01',
    description:
      '新居禮不一定需要昂貴或醒目。小型畫作、桌上植栽與自然材質物件，可以溫和地進入一個新的生活場域，讓空間從第一天開始有被整理過的安定感。',
    color: '#ded6cc',
  },
  {
    title: 'Gift for Work Desk',
    image: 'Gift Styling 02',
    description:
      '工作桌上的禮物需要克制且實用。植物提供視覺休息，紙品與小畫作提供情緒標記，讓每天重複使用的地方多一點細節與專注感。',
    color: '#d7ded0',
  },
  {
    title: 'Gift for Quiet Celebration',
    image: 'Gift Styling 03',
    description:
      '不張揚的慶祝更適合以質感和時間感表達。季節植物、低彩度紙品與手感物件能保留祝福，也避免讓禮物只剩下包裝上的熱鬧。',
    color: '#e3d8cf',
  },
];

const imageSliderSets = {
  artworkDetail: [
    { title: 'Artwork View 01', color: '#ded7ca' },
    { title: 'Artwork View 02', color: '#e7ddd3' },
    { title: 'Artwork View 03', color: '#d1cbc2' },
  ],
  plantDetail: [
    { title: 'Plant Styling 01', color: '#d7ddcf' },
    { title: 'Plant Styling 02', color: '#cbd5c2' },
    { title: 'Plant Styling 03', color: '#dfe1d6' },
  ],
  giftDetail: [
    { title: 'Gift Styling 01', color: '#ded6cc' },
    { title: 'Gift Styling 02', color: '#d7ded0' },
    { title: 'Gift Styling 03', color: '#e3d8cf' },
  ],
};

const sliderState = {
  artist: 0,
  artwork: 0,
  plant: 0,
  plantDetail: 0,
  gift: 0,
  giftDetail: 0,
};

const imageSliderState = {
  artworkDetail: 0,
  plantDetail: 0,
  giftDetail: 0,
};

const setParallaxState = () => {
  if (window.innerWidth <= 768) {
    parallaxItems.forEach((item) => {
      item.style.removeProperty('--parallax-x');
      item.style.removeProperty('--parallax-y');
    });
    return;
  }

  const offset = Math.min(window.scrollY, window.innerHeight);
  const layerMotion = {
    parallax1: { x: 0, y: 0.018 },
    parallax2: { x: 0, y: 0.03 },
    parallax3: { x: 0, y: -0.026 },
    parallax4: { x: -0.045, y: 0 },
  };

  parallaxItems.forEach((item) => {
    const className = Array.from(item.classList).find((name) => name.startsWith('parallax'));
    const motion = layerMotion[className] ?? { x: 0, y: -0.01 };
    item.style.setProperty('--parallax-x', `${offset * motion.x}px`);
    item.style.setProperty('--parallax-y', `${offset * motion.y}px`);
  });
};

window.addEventListener('scroll', setParallaxState, { passive: true });
window.addEventListener('resize', setParallaxState);

setParallaxState();

const setFloatingGuideState = () => {
  if (!floatingGuide) return;
  floatingGuide.classList.toggle('is-visible', window.scrollY >= window.innerHeight * 1.5);
};

window.addEventListener('scroll', setFloatingGuideState, { passive: true });
window.addEventListener('resize', setFloatingGuideState);
setFloatingGuideState();

const setPanel = (selector, title, color, image, imageFit = 'cover') => {
  const panel = document.querySelector(selector);
  if (!panel) return;
  panel.dataset.title = title;
  panel.style.setProperty('--panel-bg', color);
  if (image) {
    panel.classList.add('has-image');
    panel.style.setProperty('--panel-image', `url("${image}")`);
    panel.style.setProperty('--panel-fit', imageFit);
  } else {
    panel.classList.remove('has-image');
    panel.style.removeProperty('--panel-image');
    panel.style.removeProperty('--panel-fit');
  }
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const renderImageSlider = (selector, sliderName) => {
  const panel = document.querySelector(selector);
  const slides = imageSliderSets[sliderName];
  if (!panel || !slides) return;

  panel.classList.add('is-image-slider');
  panel.innerHTML = slides
    .map(
      (slide, index) =>
        `<span class="image-slide${index === imageSliderState[sliderName] ? ' is-active' : ''}" style="--slide-bg: ${slide.color}" data-title="${slide.title}"></span>`,
    )
    .join('');
};

const showImageSlide = (sliderName, index) => {
  imageSliderState[sliderName] = index % imageSliderSets[sliderName].length;
  const selector = {
    artworkDetail: '[data-artwork-image]',
    plantDetail: '[data-plant-detail-image]',
    giftDetail: '[data-gift-detail-image]',
  }[sliderName];
  renderImageSlider(selector, sliderName);
};

const animateSlider = (sectionSelector, update, exitPattern = ['left', 'left', 'up']) => {
  const panels = document.querySelectorAll(`${sectionSelector} .gallery-panel`);

  panels.forEach((panel, index) => {
    panel.dataset.exit = exitPattern[index] ?? 'left';
    panel.style.transitionDelay = `${index * 0.08}s`;
    panel.classList.add('is-exiting');
  });

  window.setTimeout(() => {
    update();
    panels.forEach((panel) => {
      panel.style.transitionDelay = '0s';
      panel.classList.remove('is-exiting');
    });
  }, 430);
};

const renderArtist = () => {
  const artist = artists[sliderState.artist];
  setText('[data-artist-name]', artist.name);
  setText('[data-artist-type]', artist.type);
  setText('[data-artist-description]', artist.description);
  setPanel('[data-artist-portrait]', artist.portrait, artist.colors[0], artist.portraitImage, artist.portraitFit);
  setPanel('[data-artist-artwork]', artist.artwork, artist.colors[1], artist.artworkImage);
};

const renderArtwork = () => {
  const artwork = artworkDetails[sliderState.artwork];
  setText('[data-artwork-title]', artwork.title);
  setText('[data-artwork-description]', artwork.description);
  renderImageSlider('[data-artwork-image]', 'artworkDetail');
};

const renderPlant = () => {
  const plant = plants[sliderState.plant];
  setText('[data-plant-name]', plant.name);
  setText('[data-plant-type]', plant.type);
  setText('[data-plant-description]', plant.description);
  setPanel('[data-plant-image-one]', plant.image1, plant.colors[0], plant.image1Path);
  setPanel('[data-plant-image-two]', plant.image2, plant.colors[1], plant.image2Path);
};

const renderPlantDetail = () => {
  const plantDetail = plantDetails[sliderState.plantDetail];
  setText('[data-plant-detail-title]', plantDetail.title);
  setText('[data-plant-detail-description]', plantDetail.description);
  renderImageSlider('[data-plant-detail-image]', 'plantDetail');
};

const renderGift = () => {
  const gift = gifts[sliderState.gift];
  setText('[data-gift-name]', gift.name);
  setText('[data-gift-type]', gift.type);
  setText('[data-gift-description]', gift.description);
  setPanel('[data-gift-image-one]', gift.image1, gift.colors[0]);
  setPanel('[data-gift-image-two]', gift.image2, gift.colors[1]);
};

const renderGiftDetail = () => {
  const giftDetail = giftDetails[sliderState.giftDetail];
  setText('[data-gift-detail-title]', giftDetail.title);
  setText('[data-gift-detail-description]', giftDetail.description);
  renderImageSlider('[data-gift-detail-image]', 'giftDetail');
};

const nextSlider = {
  artist: () => {
    animateSlider('#artwork', () => {
      sliderState.artist = (sliderState.artist + 1) % artists.length;
      renderArtist();
    });
  },
  artwork: () => {
    animateSlider('#artwork-detail', () => {
      sliderState.artwork = (sliderState.artwork + 1) % artworkDetails.length;
      renderArtwork();
    }, ['left', 'up']);
  },
  plant: () => {
    animateSlider('#plants', () => {
      sliderState.plant = (sliderState.plant + 1) % plants.length;
      renderPlant();
    }, ['left', 'left', 'up']);
  },
  plantDetail: () => {
    animateSlider('#plants-detail', () => {
      sliderState.plantDetail = (sliderState.plantDetail + 1) % plantDetails.length;
      renderPlantDetail();
    }, ['left', 'up']);
  },
  gift: () => {
    animateSlider('#gifts', () => {
      sliderState.gift = (sliderState.gift + 1) % gifts.length;
      renderGift();
    }, ['up', 'left', 'left']);
  },
  giftDetail: () => {
    animateSlider('#gifts-detail', () => {
      sliderState.giftDetail = (sliderState.giftDetail + 1) % giftDetails.length;
      renderGiftDetail();
    }, ['up', 'left']);
  },
};

document.querySelectorAll('[data-slider-next]').forEach((button) => {
  button.addEventListener('click', () => {
    const sliderName = button.dataset.sliderNext;
    nextSlider[sliderName]?.();
  });
});

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
});

renderArtist();
renderArtwork();
renderPlant();
renderPlantDetail();
renderGift();
renderGiftDetail();

window.setInterval(() => {
  Object.keys(imageSliderSets).forEach((sliderName) => {
    showImageSlide(sliderName, imageSliderState[sliderName] + 1);
  });
}, 3600);
