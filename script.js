<script>
(function() {
'use strict';
const aldiData = {
clientVideos: {
'8amities': {
title: "8'amities",
description: "Konten visual fashion kasual yang memperkuat branding dan daya tarik audiens dengan foto dan video dinamis.",
videos: [
{title: "8'Amities Astro", id: "1eVyUJjRVVBAOSIEDDRUPq-w9SinkjbNq"},
{title: "8'Amities Stan", id: "1wvkUBOtxGbA-yKIOx3evA5FRWTclbkEG"},
{title: "8'Amities GBK", id: "1oog_2GnLg5Bf7ygQh9LgY5dZPIrVwr-m"}
]
},
'cemilanketo': {
title: "Cemilan Keto",
description: "Konten edukatif cemilan sehat keto yang menampilkan produk berkualitas dengan visual menggugah selera.",
videos: [
{title: "Pizza", id: "1ylrXLPCeESz0uhx2AFLWm1MO2ioz0-q5"},
{title: "Jajanan Pasar", id: "1yVkp8z7oTmDw_piImzHLL-8WzUlWuhR5"},
{title: "Dimsum", id: "1Yo4mu28jNF7rEBy7LGVR3vyah7UJQpon"},
{title: "Olahan Ayam", id: "1O01ZMw55-Ahm7Nl6tmM33OSpgwLZuEhD"}
]
            },
            'ribsgold': {
                title: "Ribsgold",
                description: "Strategi konten unisex fashion yang menyasar pria dan wanita dengan visual modern dan gaya kontemporer.",
                videos: [
                    { title: "Kemeja Togs", id: "1Z92xucR5FNXt-Vl0QjfScgBPSKNdu2Bn" },
                    { title: "Bevery Unique", id: "19oKWsTqhWSGkc2DNS13pHqwYqqnnv2d2" },
                    { title: "Kemeja Flanel", id: "10G217ouwOhJyTqpU0kjvWEFgKF0-0cBe" },
                    { title: "Tampil Timless", id: "1ll48B46L1iXRlLG7IkE6o_4rAKYvtNnJ" },
                    { title: "Outfit Sehari Hari", id: "1hY_q2AWmFqWHCI0PiEvzHAne6Eo4L54v" },
                    { title: "Anak Motor", id: "1nJ09BvdcahFq0oZm_wLGPK2qJ7VfmLir" },
                    { title: "Drama Rese", id: "1HnKdnOHXbWXUvRnzba6Q0eTeIIRZ2h3i" },
                    { title: "Kado Buat Ayah", id: "1aElb50aKJoXbg40xYJSU_j2wo2WPZZNr" }
                ]
            },
            'bymanda': {
                title: "Bymanda",
                description: "Strategi media sosial kreatif dengan konten visual yang efektif menyampaikan pesan brand dan engagement.",
                videos: [
                    { title: "Cadar", id: "1d3kCw4Jrut3qRPqSGYQ_ERL87FSc7k-C" },
                    { title: "Gamis I", id: "1WUgGKElKs1oU1Pwne38JGGPn3cMAc4ox" },
                    { title: "Gamis II", id: "1OeCJOINqDVeVdpBgzEOWvYrK9KW6Opr8" },
                    { title: "Mukena", id: "1DD-y6ceziLZ5kVEIF3UvA5f1QbY43Quh" }
                ]
            },
            'seventhesalon': {
                title: "Seven The Salon",
                description: "Dokumentasi before-after dan layanan salon dengan visual mewah yang selaras dengan branding premium.",
                videos: [
                    { title: "Cherry Tamara", id: "1GRtmPwSnrGJ1rA4ePkphhokahHokFFFu" },
                    { title: "Valora Layer", id: "1rkV90uQn1XGR4dU_ldIK2YZG8j-meMKx" },
                    { title: "Olive", id: "1yW26qBP6ky79Br0o1IBbc09eZbDbY8dO" },
                    { title: "Michelle", id: "1ea53Vmmdi0m2ZfYpHSWtIs9BhhsSBCkx" },
                    { title: "Seminar Caogialoc", id: "19MY8-rKVqEO3j09DWpbSxOuU8HuNBftH" },
                    { title: "Seminar Schwarzkopf", id: "1dYqIQySzmMPjqTdUeh85j4990IhiCAIm" }
                ]
            },
            'tahutalaga': {
                title: "Tahu Talaga",
                description: "Konten dinamis yang menonjolkan keunggulan produk tahu lokal berkualitas dengan visual menggugah.",
                videos: [
                    { title: "Natal 2025", id: "11wdneYzb26nnlStriK_yG08CBigvxPAt" },
                    { title: "KBP", id: "1j80VtwyCZsxGEvvqL8_V8Q4LFItEhsTp" },
                    { title: "Kabin", id: "1ZrEYTKqfzsMEcP45cjC7cjejq_jipo9M" },
                    { title: "Cara Penyimpanan Tahu", id: "1VqtINaVYw4KDDSd8eaW1dqjo1TSJ3ZBB" }
                ]
            },
            'nikuya': {
                title: "Nikuya",
                description: "Visual premium untuk brand daging berkualitas dengan fokus wagyu dan salmon dalam kemasan edukatif.",
                videos: [
                    { title: "Salmon Mentah Aman?", id: "1RROsqw_j0M9hUYHykhdS82KcavdZTNiE" },
                    { title: "Meltique", id: "1_bGUWFzwA4Ka0M7IUx4PDONYlMvYCJln" },
                    { title: "Sejiwa Coffee", id: "1fglleglQU5hwnewtPvMYmglmyc8EbE3Y" },
                    { title: "Wheels Coffee", id: "1l8rWJVcwjXJHbGvTBS7ddJXKHVoXat1a" }
                ]
            },
            'pulsefitness': {
                title: "Pulse Fitness",
                description: "Konten fitness yang menangkap energi latihan dan semangat hidup sehat dengan visual dinamis motivasi.",
                videos: [
                    { title: "Campus Championship", id: "1qTeIcVSMHFucDo7lvTn8jxcJTNR7lNj6" },
                    { title: "Opening", id: "1z6TpxW-lEu56Ofw3xxPXEmOz0AiWwqFB" },
                    { title: "Tips Otot Stuk", id: "1DTeTiYxTgS-NnmHsgO31TRa_DQY9TFqW" }
                ]
            },
            'lumitystudio': {
                title: "Lumity Studio",
                description: "Video estetik untuk studio olahraga yang menampilkan vibes yoga, zumba, dan aerobik dengan energi positif.",
                videos: [
                    { title: "Opening", id: "1LXphzlnELQSGiDchoTZwNB52-n6qoD4x" },
                    { title: "Superhouse Lumity", id: "1XDmNJEVMi0SXDZTDOnOGkH-Gwxv9R8KV" },
                    { title: "Trampoline Promo", id: "1tVbWens3-QpuxPCNxZ3bvT9rXA0lprET" },
                    { title: "Trampoline Party", id: "1Px5QORQwYUNcM1CyNMm6t6OlFMUqOlUb" }
                ]
            },
            'skinethica': {
                title: "Skin Ethica",
                description: "Konten edukatif klinik kecantikan yang menampilkan layanan premium dan profesionalitas dengan trust.",
                videos: [
                    { title: "Promo Facial", id: "1A29sbb5uCkUT6DQ6MrOKjiAsEA9a2k3z" },
                    { title: "Gastric Balloon", id: "1vNuHTWF_uTj36wEbCkpjaVTDips_3iDx" }
                ]
            },
            'anitasalon': {
                title: "Anita Salon",
                description: "Dokumentasi layanan salon dengan storytelling elegan yang membantu audiens memahami keunggulan brand.",
                videos: [
                    { title: "Listy Chan Pokemon", id: "1w803KiGsj53k0eCYrplu0Yxtl6bPqIHJ" },
                    { title: "Baba Boom", id: "1JeHkcYMyyO6Q9SQLK63j-esysOt5zbJB" },
                    { title: "Color Grey", id: "1cNfrWvQ0scBWe5TI6wnlAglCaTZacf5E" }
                ]
            },
            'sambarajo': {
                title: "Sambarajo",
                description: "Konten autentik restoran Padang yang menampilkan suasana dan kelezatan masakan khas yang otentik.",
                videos: [
                    { title: "Iga Bakar", id: "1j1pwYc0XvLvDMMSbddCx5cQtQQf0pVT2" },
                    { title: "Koyor Balado", id: "1pXCaJte8bRPmtZ4YebRISTiiBqUtHQkb" },
                    { title: "Sop Buntut Marasok", id: "1jAOqv4mZSURW41S6UIzS5zN0MAF-rWmI" },
                    { title: "Ikan Bilis Baladon", id: "140wEZTbTQPxmaEUklRqkuYU9pSopVwbv" }
                ]
            },
            'peekaboo': {
                title: "Peek A Boo",
                description: "Visual dinamis hairstation yang menampilkan layanan styling dengan suasana fun dan stylish klien.",
                videos: [
                    { title: "Tokyo Wave", id: "1SoHvxfmz33Ce51qTkG3V2MS_Xk_HxCDO" },
                    { title: "Jocellyn", id: "1A-Bo0MECZyEUrl4nsVBBXo1G9da1PXDy" },
                    { title: "Aldi Cacing", id: "15-R4uZF7w0MP5ZRQg1eb6dJ6qk3lK-66" },
                    { title: "Mey Perm", id: "1X2FWve5KYvVJ7uSkJY2_5FBXZXSU00Ng" }
                ]
}
},
portfolios: {
'amities': {
title: "8'Amities Fashion Photography",
path: "8'Amities/",
photos: [
'Astro%20(1).webp', 'Astro%20(2).webp', 'Astro%20(3).webp', 'Astro%20(4).webp', 'Astro%20(5).webp',
'GBK%20(1).webp', 'GBK%20(2).webp', 'GBK%20(3).webp', 'GBK%20(4).webp', 'GBK%20(5).webp',
'Stan%20(1).webp', 'Stan%20(2).webp', 'Stan%20(3).webp', 'Stan%20(4).webp', 'Stan%20(5).webp'
]
},
'accent': {
title: 'Accent Ambios Product Photography',
path: 'Accent%20Ambios/',
photos: Array.from({length: 10}, (v, k) => `Accent%20Ambios%20(${k + 1}).webp`)
},
'ribsgold': {
title: 'Ribsgold Product Photography',
path: 'Ribsgold/',
photos: Array.from({length: 10}, (v, k) => `Ribsgold%20(${k + 1}).webp`)
},
'kopi': {
title: 'Kopi Bituka Cafe Photography',
path: 'Kopi%20Bituka/',
photos: Array.from({length: 10}, (v, k) => `Kopi%20Bituka%20(${k + 1}).webp`)
},
'bride': {
title: 'White Bride Wedding Collection',
path: 'White%20Bride/',
photos: Array.from({length: 10}, (v, k) => `White%20Bride%20(${k + 1}).webp`)
}
}
};
const aldiBaseUrl = 'https://raw.githubusercontent.com/aldiiiwijaya/aldiiiwijaya_/main/Foto/Foto%20';
let aldiCurrentItems = [];
let aldiCurrentIndex = 0;
let aldiCurrentType = '';
let aldiImageCache = new Map();
let aldiTouchStartX = 0;
let aldiTouchEndX = 0;
let aldiTouchStartTime = 0;
function aldiGetEl(id) {
return document.getElementById(id);
}
function aldiGetUrlParam(param) {
return new URLSearchParams(window.location.search).get(param);
}
function aldiPreloadImage(src) {
return new Promise((resolve, reject) => {
if (aldiImageCache.has(src)) {
resolve(aldiImageCache.get(src));
return;
}
const img = new Image();
img.onload = () => {
aldiImageCache.set(src, img);
resolve(img);
};
img.onerror = reject;
img.src = src;
});
}
const aldiImageObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const img = entry.target;
aldiPreloadImage(img.dataset.src).then(() => {
img.src = img.dataset.src;
img.classList.add('aldi-loaded');
}).catch(() => {
img.parentElement.style.display = 'none';
});
observer.unobserve(img);
}
});
});
function aldiLoadClientVideos(clientId) {
const client = aldiData.clientVideos[clientId];
if (!client) {
aldiShowError('Client not found');
return;
}
aldiCurrentItems = client.videos;
aldiCurrentType = 'video';
aldiGetEl('aldiPopupTitle').textContent = client.title;
aldiGetEl('aldiClientTitle').textContent = client.title;
aldiGetEl('aldiClientDescription').textContent = client.description;
const videosHTML = client.videos.map((video, index) => `
<div class="aldi-video-card" onclick="aldiOpenLightbox(${index})" style="animation-delay: ${index * 0.1}s;">
<div class="aldi-video-wrapper">
<iframe src="https://drive.google.com/file/d/${video.id}/preview" allowfullscreen loading="lazy"></iframe>
</div>
<h3 class="aldi-video-title">${video.title}</h3>
</div>
`).join('');
aldiGetEl('aldiVideosGrid').innerHTML = videosHTML;
aldiGetEl('aldiVideoPage').style.display = 'block';
aldiGetEl('aldiPhotoPage').style.display = 'none';
}
function aldiLoadPortfolio(clientId) {
const portfolio = aldiData.portfolios[clientId];
if (!portfolio) {
aldiShowError('Portfolio not found');
return;
}
aldiCurrentItems = portfolio.photos.map(photo => aldiBaseUrl + portfolio.path + photo);
aldiCurrentType = 'photo';
aldiGetEl('aldiPopupTitle').textContent = portfolio.title;
aldiRenderPhotos();
aldiGetEl('aldiVideoPage').style.display = 'none';
aldiGetEl('aldiPhotoPage').style.display = 'block';
const preloadCount = Math.min(6, aldiCurrentItems.length);
Promise.all(
aldiCurrentItems.slice(0, preloadCount).map(aldiPreloadImage)
).then(() => {
console.log('First batch preloaded');
});
}
function aldiRenderPhotos() {
const grid = aldiGetEl('aldiPhotoGrid');
grid.innerHTML = '';
aldiCurrentItems.forEach((photoUrl, index) => {
const photoItem = document.createElement('div');
photoItem.className = 'aldi-photo-item';
photoItem.style.animationDelay = `${index * 0.08}s`;
photoItem.onclick = () => aldiOpenLightbox(index);
const img = document.createElement('img');
img.alt = `Photo ${index + 1}`;
img.loading = 'lazy';
img.classList.add('aldi-lazy');
if (index < 6) {
img.src = photoUrl;
} else {
img.dataset.src = photoUrl;
img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
aldiImageObserver.observe(img);
}
img.onerror = function() {
this.parentElement.style.display = 'none';
};
photoItem.appendChild(img);
grid.appendChild(photoItem);
});
}
function aldiShowError(message) {
const videoGrid = aldiGetEl('aldiVideosGrid');
const photoGrid = aldiGetEl('aldiPhotoGrid');
if (videoGrid) videoGrid.innerHTML = `<div class="aldi-error">${message}</div>`;
if (photoGrid) photoGrid.innerHTML = `<div class="aldi-error">${message}</div>`;
}
function aldiOpenLightbox(index) {
if (aldiCurrentItems.length === 0) return;
aldiCurrentIndex = index;
const lightbox = aldiGetEl('aldiLightbox');
const lightboxVideo = aldiGetEl('aldiLightboxVideo');
const lightboxImg = aldiGetEl('aldiLightboxImg');
if (aldiCurrentType === 'video') {
const video = aldiCurrentItems[index];
lightboxVideo.src = `https://drive.google.com/file/d/${video.id}/preview`;
lightboxVideo.style.display = 'block';
lightboxImg.style.display = 'none';
} else {
lightboxImg.style.opacity = '0.5';
aldiPreloadImage(aldiCurrentItems[index]).then(() => {
lightboxImg.src = aldiCurrentItems[index];
lightboxImg.style.opacity = '1';
lightboxVideo.style.display = 'none';
lightboxImg.style.display = 'block';
const nextIndex = (index + 1) % aldiCurrentItems.length;
const prevIndex = (index - 1 + aldiCurrentItems.length) % aldiCurrentItems.length;
aldiPreloadImage(aldiCurrentItems[nextIndex]);
aldiPreloadImage(aldiCurrentItems[prevIndex]);
});
}
lightbox.classList.add('aldi-active');
}
function aldiCloseLightbox() {
const lightbox = aldiGetEl('aldiLightbox');
lightbox.classList.remove('aldi-active');
aldiGetEl('aldiLightboxVideo').src = '';
}
function aldiNextItem() {
if (aldiCurrentItems.length === 0) return;
aldiCurrentIndex = (aldiCurrentIndex + 1) % aldiCurrentItems.length;
if (aldiCurrentType === 'video') {
const video = aldiCurrentItems[aldiCurrentIndex];
aldiGetEl('aldiLightboxVideo').src = `https://drive.google.com/file/d/${video.id}/preview`;
} else {
const img = aldiGetEl('aldiLightboxImg');
img.style.opacity = '0.5';
aldiPreloadImage(aldiCurrentItems[aldiCurrentIndex]).then(() => {
img.src = aldiCurrentItems[aldiCurrentIndex];
img.style.opacity = '1';
const nextIndex = (aldiCurrentIndex + 1) % aldiCurrentItems.length;
aldiPreloadImage(aldiCurrentItems[nextIndex]);
});
}
}
function aldiPrevItem() {
if (aldiCurrentItems.length === 0) return;
aldiCurrentIndex = (aldiCurrentIndex - 1 + aldiCurrentItems.length) % aldiCurrentItems.length;
if (aldiCurrentType === 'video') {
const video = aldiCurrentItems[aldiCurrentIndex];
aldiGetEl('aldiLightboxVideo').src = `https://drive.google.com/file/d/${video.id}/preview`;
} else {
const img = aldiGetEl('aldiLightboxImg');
img.style.opacity = '0.5';
aldiPreloadImage(aldiCurrentItems[aldiCurrentIndex]).then(() => {
img.src = aldiCurrentItems[aldiCurrentIndex];
img.style.opacity = '1';
const prevIndex = (aldiCurrentIndex - 1 + aldiCurrentItems.length) % aldiCurrentItems.length;
aldiPreloadImage(aldiCurrentItems[prevIndex]);
});
}
}
function aldiClosePopup() {
const overlay = aldiGetEl('aldiPopupOverlay');
overlay.classList.add('aldi-hide');
overlay.classList.remove('aldi-show');
document.body.classList.remove('aldi-popup-open');
setTimeout(() => {
const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => iframe.src = '');
if (window.parent !== window) {
window.parent.postMessage('closePopup', '*');
} else {
window.close();
}
}, 400);
}
function aldiShowPopup() {
const overlay = aldiGetEl('aldiPopupOverlay');
overlay.classList.add('aldi-show');
overlay.classList.remove('aldi-hide');
document.body.classList.add('aldi-popup-open');
}
aldiGetEl('aldiPopupOverlay').addEventListener('click', e => {
if (e.target.id === 'aldiPopupOverlay') aldiClosePopup();
});
aldiGetEl('aldiLightbox').addEventListener('click', e => {
if (e.target.id === 'aldiLightbox') aldiCloseLightbox();
});
document.addEventListener('keydown', e => {
if (aldiGetEl('aldiLightbox').classList.contains('aldi-active')) {
if (e.key === 'Escape') aldiCloseLightbox();
if (e.key === 'ArrowLeft') aldiPrevItem();
if (e.key === 'ArrowRight') aldiNextItem();
} else if (e.key === 'Escape') {
aldiClosePopup();
}
});
aldiGetEl('aldiLightbox').addEventListener('touchstart', e => {
aldiTouchStartX = e.changedTouches[0].screenX;
aldiTouchStartTime = Date.now();
}, {passive: true});
aldiGetEl('aldiLightbox').addEventListener('touchend', e => {
aldiTouchEndX = e.changedTouches[0].screenX;
const touchDuration = Date.now() - aldiTouchStartTime;
if (touchDuration < 300 && Math.abs(aldiTouchEndX - aldiTouchStartX) > 50) {
aldiTouchEndX < aldiTouchStartX - 50 ? aldiNextItem() : aldiTouchEndX > aldiTouchStartX + 50 ? aldiPrevItem() : null;
}
}, {passive: true});
window.addEventListener('message', event => {
if (event.data && event.data.action) {
const {action, client, type} = event.data;
if (action === 'loadContent' && client) {
if (type === 'video' && aldiData.clientVideos[client]) {
aldiLoadClientVideos(client);
aldiShowPopup();
} else if (type === 'photo' && aldiData.portfolios[client]) {
aldiLoadPortfolio(client);
aldiShowPopup();
} else {
aldiShowError('Content not found');
aldiShowPopup();
}
}
}
});
window.addEventListener('load', () => {
const client = aldiGetUrlParam('client');
const type = aldiGetUrlParam('type');
if (client) {
if (type === 'video' && aldiData.clientVideos[client]) {
aldiLoadClientVideos(client);
setTimeout(aldiShowPopup, 100);
} else if (type === 'photo' && aldiData.portfolios[client]) {
aldiLoadPortfolio(client);
setTimeout(aldiShowPopup, 100);
} else {
aldiShowError('Content not found');
setTimeout(aldiShowPopup, 100);
}
}
});
window.aldiClosePopup = aldiClosePopup;
window.aldiCloseLightbox = aldiCloseLightbox;
window.aldiNextItem = aldiNextItem;
window.aldiPrevItem = aldiPrevItem;
window.aldiOpenLightbox = aldiOpenLightbox;
})();
</script>
