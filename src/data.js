const wines = [{
  id: 1,
  imageUrl: '/red-wine.jpg',
  isNew: true,
  label: 'Wine',
  isFinished: true,
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 1,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}];

const heroContent = {
  title: 'Rex Goliath',
  subtitle: 'His Royal Majesty is back.',
  imageUrl: '/rex-goliath-logo.png',
  description: `America's most unhinged rooster is out of retirement, and this time? He's mad
  as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
};

// TODO: How to handle initial state -- className `active`?
const navbarLinks = [
  {
    url: "https://developer.mozilla.org",
    title: "Home",
    className: "active"
  },
  {
    url: "https://developer.mozilla.org",
    title: "Whites"
  },
  {
    url: "https://developer.mozilla.org",
    title: "Reds"
  },
  {
    url: "https://developer.mozilla.org",
    title: "Blends"
  }
];

// TODO: This should probably be in `state`
const userData = {
  url: "https://developer.mozilla.org",
  username: "S",
}

const categories = [
  {
    title: "Drink Again",
    data: wines.filter(wine => wine.isFinished === true),
  },
  {
    title: "Keep Drinking",
    data: wines.filter(wine => wine.progress !== undefined),
  }
]

export {
  wines,
  heroContent,
  navbarLinks,
  userData,
  categories,
};
