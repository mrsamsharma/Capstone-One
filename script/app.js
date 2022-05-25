const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.navLink');
const djData = [
  {
    hidden: false,
    photo: './capstone_assets/MG.webp',
    alt: 'Martin Garrix lastfm Photo',
    name: 'Martin Garrix',
    occupation: '2nd Best DJ in the World',
    description: 'Awarded with two MTV EMAs in 2016, holding the #1 spot in the 2017 DJ Mag Top 100.',
  },

  {
    hidden: false,
    photo: './capstone_assets/DG.webp',
    alt: 'David Guetta lastfm Photo',
    name: 'David Guetta',
    occupation: '1st Best DJ in the World',
    description: 'He has over 50 million record sales globally, with more than 10 billion streams.',
  },

  {
    hidden: true,
    photo: './capstone_assets/DVLM.jpg',
    alt: 'Dimitri Vegas & Like Mike lastfm Photo',
    name: 'Dimitri Vegas & Like Mike',
    occupation: 'Duo DJ; Record Producers',
    description: 'Performed at EXIT festival, Electric Daisy Carnival, Parookaville, UNTOLD, Creamfields and Tomorrowland.',
  },

  {
    hidden: true,
    photo: './capstone_assets/AB.webp',
    alt: 'Armin lastfm Photo',
    name: 'Armin van Buuren',
    occupation: 'Armada; A State of Trance; Armind',
    description: 'Armin is a wildly successful DJ, having been ranked No. 1 DJ by DJMag a record-breaking 5 times.',
  },

  {
    hidden: true,
    photo: './capstone_assets/AJ.webp',
    alt: 'Afrojack lastfm Photo',
    name: 'Afrojack',
    occupation: 'DJ; Record producer; Remixer',
    description: 'In July 2010, Afrojack created an Essential Mix for BBC Radio 1.',
  },

  {
    hidden: true,
    photo: './capstone_assets/MM.webp',
    alt: 'Marshmello lastfm Photo',
    name: 'Marshmello',
    occupation: '3rd Best DJ in the World',
    description: 'Marshmello received nominations for works such as "Alone", "Wolves", "Silence" and "Friends".',
  },

];

function menuToggle() {
  document.querySelector('.mobile-nav').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('hide');
}

hamburgerBtn.addEventListener('click', menuToggle);
crossBtn.addEventListener('click', menuToggle);

navLinks.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});

function loadFeaturedSpeakers(arr) {
  arr.forEach((each) => {
    const speaker = document.createElement('div');
    speaker.className = 'speaker flex';
    const speakerImg = document.createElement('img');
    speakerImg.setAttribute('src', each.photo);
    speakerImg.setAttribute('alt', each.alt);
    speaker.appendChild(speakerImg);
    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speakerInfo flex';
    const speakerName = document.createElement('h2');
    speakerName.textContent = each.name;
    speakerInfo.appendChild(speakerName);
    const speakerRank = document.createElement('span');
    speakerRank.textContent = each.occupation;
    speakerInfo.appendChild(speakerRank);
    const separator = document.createElement('hr');
    speakerInfo.appendChild(separator);
    const speakerPara = document.createElement('p');
    speakerPara.textContent = each.description;
    speakerInfo.appendChild(speakerPara);
    speaker.appendChild(speakerInfo);
    document.querySelector('.spakers-wrapper').appendChild(speaker);
  });
}

function renderSpeakers() {
  document.querySelector('.spakers-wrapper').innerHTML = '';
  if (visualViewport.width > 768) {
    loadFeaturedSpeakers(djData);
  } else loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === false));
}

renderSpeakers();
window.addEventListener('resize', renderSpeakers);

document.getElementById('moreBtn').addEventListener('click', (e) => {
  loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === true));
  e.target.remove();
});
