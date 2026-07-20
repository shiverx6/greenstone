const parallaxItems = document.querySelectorAll('[class*="parallax"]');
const floatingGuide = document.querySelector('.floating-guide');

const spaceCards = Array.from(document.querySelectorAll('.space-post-card'));
const spaceCategoryButtons = Array.from(document.querySelectorAll('.space-category-nav button[data-category]'));
const spaceSearchForm = document.querySelector('.space-search');
const spaceSearchInput = document.querySelector('#space-search');
const spaceEmptyMessage = document.querySelector('.space-empty-message');
let activeSpaceCategory = 'all';

const filterSpaceArticles = () => {
  if (!spaceCards.length) return;
  const query = spaceSearchInput?.value.trim().toLocaleLowerCase('zh-Hant') ?? '';
  let visibleCount = 0;

  spaceCards.forEach((card) => {
    const categories = card.dataset.category?.split(' ') ?? [];
    const categoryMatches = activeSpaceCategory === 'all' || categories.includes(activeSpaceCategory);
    const queryMatches = !query || card.textContent.toLocaleLowerCase('zh-Hant').includes(query);
    card.hidden = !(categoryMatches && queryMatches);
    if (!card.hidden) visibleCount += 1;
  });

  if (spaceEmptyMessage) spaceEmptyMessage.hidden = visibleCount !== 0;
};

spaceCategoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeSpaceCategory = button.dataset.category;
    spaceCategoryButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    filterSpaceArticles();
  });
});

spaceSearchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  filterSpaceArticles();
});

spaceSearchInput?.addEventListener('input', filterSpaceArticles);

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
      'Kellykiwi 以水彩與線條捕捉人物、衣著與生活片刻，作品保留顏料流動與手繪的即興痕跡。明確的輪廓與輕盈色層，適合放入採光良好的居家、工作室或商業空間，為牆面建立清楚而不張揚的視覺焦點。',
    colors: ['#e6ded2', '#d8cfc2'],
  },
  {
    name: 'Wasabi',
    type: '花卉構圖 / 空間色彩',
    portrait: 'Artist Portrait 02',
    artwork: 'Floral Work 02',
    description:
      '許映庭擅長以花卉、枝葉與留白構成畫面，作品呈現柔和而明確的節奏。她將植物視為空間中的情緒載體，使畫作能與自然光、木質家具、織品及真實植栽彼此呼應。',
    colors: ['#ddd6c9', '#e7d9d2'],
  },
  {
    name: 'Johnny',
    type: '乾燥植物 / 混合媒材',
    portrait: 'Artist Portrait 03',
    artwork: 'Mixed Media 03',
    description:
      '陳霧生以乾燥植物、紙張紋理與淡墨色塊創作，保留植物從盛放到凋落的時間痕跡。作品色調沉靜、媒材層次清楚，適合與石材、深色木質及霧面金屬共同陳列。',
    colors: ['#d9d4cc', '#cbc4ba'],
  },
];

const artworkDetails = [
  {
    title: 'Botanical Silence',
    image: 'Artwork Detail 01',
    description:
      'Botanical Silence 以植物水彩為核心，透過透明色層、細緻葉脈與大量留白，呈現自然在室內的安靜存在。作品適合放置於客廳、書房或接待空間，並可與淺色木質、亞麻織品及線條簡潔的植栽搭配。',
    color: '#ded7ca',
  },
  {
    title: 'Light Garden',
    image: 'Artwork Detail 02',
    description:
      'Light Garden 關注植物與光線的關係，將花瓣、葉影與明暗變化轉化為柔和的畫面節奏。作品適合與淺色家具、木質材質或植栽搭配，讓牆面與周圍物件保有清楚的距離和呼吸感。',
    color: '#e7ddd3',
  },
  {
    title: 'Dried Memory',
    image: 'Artwork Detail 03',
    description:
      'Dried Memory 以乾燥植物與混合媒材創作，保留植物從生長到凋落的時間痕跡。低彩度與紙張紋理適合用於展間、選物店、咖啡空間，或以石材和深色木質為主的住宅場域。',
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
      '龜背芋擁有大面積葉片與自然裂葉，能在客廳角落、接待區或展售空間建立明確的視覺重心。適合明亮的散射光環境，可搭配低矮家具、自然色盆器與植物水彩作品。',
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
      '火鶴具有明確花形與帶有光澤的葉片，適合在桌面、玄關或展示層架形成小尺度焦點。可搭配低彩度畫作、霧面陶器與簡潔托盤，平衡其鮮明輪廓。',
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
      '小豆樹葉片細密、枝條輕盈，適合放在書房、工作桌旁或視覺密度較低的角落。它能柔化家具線條，又不會過度遮擋採光與主要視線。',
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
      '琴葉榕葉片厚實、線條俐落，具有清楚的垂直輪廓。適合放在採光良好的空間，與畫作、木質家具或白牆形成對比，並為較高的牆面建立尺度關係。',
    colors: ['#d3dacb', '#becab5'],
  },
];

const plantDetails = [
  {
    title: 'Monstera Styling',
    image: 'Plant Styling 01',
    description:
      '龜背芋適合用來建立空間主視覺，大型葉片能與藝術作品形成尺度上的呼應。畫作提供色彩與觀看焦點，植栽則加入立體層次與持續變化的生命感。',
    color: '#d7ddcf',
  },
  {
    title: 'Fiddle Leaf Styling',
    image: 'Plant Styling 02',
    description:
      '琴葉榕的垂直線條適合現代住宅、工作室與選物空間。放置在畫作或低矮家具旁，能連接牆面高度與平面陳列，使不同尺度的元素形成連續的觀看關係。',
    color: '#cbd5c2',
  },
  {
    title: 'Olive Tree Styling',
    image: 'Plant Styling 03',
    description:
      '橄欖樹枝葉細緻、輪廓輕盈，能柔化室內結構而不遮擋視線。搭配淡色水彩、乾燥植物作品與自然陶盆，可建立沉靜且層次清楚的整體配置。',
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
      'Botanical Gift Set 將植物水彩卡片、小型植栽與生活物件組合成一份能進入空間的禮物。適合入厝、生日或送給喜愛植物的人，並附上基本照護說明。',
    colors: ['#e6ded4', '#d8d0c3'],
  },
  {
    name: 'Frame & Green',
    type: '小畫框 / 桌上植物 / 空間小物',
    image1: 'Gift Set 02A',
    image2: 'Gift Set 02B',
    description:
      'Frame & Green 以小尺寸作品搭配桌上植栽，適合工作桌、玄關、床邊或書房角落。作品與植物在色彩和比例上經過搭配，收到後即可形成一個完整的小型陳列。',
    colors: ['#ded8cd', '#cbd5c6'],
  },
  {
    name: 'Seasonal Selection',
    type: '季節選品 / 植物素材 / 紙品',
    image1: 'Gift Set 03A',
    image2: 'Gift Set 03B',
    description:
      'Seasonal Selection 依季節挑選植物素材、紙品與小型藝術物件，並控制整體色彩與材質關係。適合作為節慶、開幕、感謝或紀念性的禮物。',
    colors: ['#e8dfd7', '#d6c9bd'],
  },
];

const giftDetails = [
  {
    title: 'Gift for New Home',
    image: 'Gift Styling 01',
    description:
      '入厝禮可以從新空間的尺度、採光與使用方式出發。小型作品、桌上植栽與自然材質物件容易融入既有家具，也能為尚在形成中的生活場域建立一個清楚起點。',
    color: '#ded6cc',
  },
  {
    title: 'Gift for Work Desk',
    image: 'Gift Styling 02',
    description:
      '工作桌上的禮物需要控制尺寸並保留實用性。小型植物提供自然層次，紙品與作品建立觀看焦點，同時避免遮擋螢幕、文件與日常動線。',
    color: '#d7ded0',
  },
  {
    title: 'Gift for Quiet Celebration',
    image: 'Gift Styling 03',
    description:
      '季節植物、低彩度紙品與能長久使用的器物，適合表達節慶、生日與感謝。禮物的價值不只在包裝，而在拆開之後仍能留在對方的生活與空間中。',
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
