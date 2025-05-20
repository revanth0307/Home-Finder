const splash     = document.getElementById('splash');
const introVideo = document.getElementById('introVideo');
const knockBtn   = document.getElementById('knockBtn');
const app        = document.getElementById('app');

// Force video muted to allow autoplay on mobile
introVideo.muted = true;

// Try to play the video
introVideo.play().then(() => {
  // Video autoplayed fine, wait for it to end
  introVideo.addEventListener('ended', () => {
    knockBtn.classList.remove('hidden');
  });
}).catch(() => {
  // If autoplay fails, show button immediately
  knockBtn.classList.remove('hidden');
});

// Clicking the button hides splash & shows app
knockBtn.addEventListener('click', () => {
  splash.style.display = 'none';
  app.classList.remove('hidden');
  loadListings();  // Make sure to call this here in case DOMContentLoaded happened earlier
});

// —— Your existing DreamHome Finder code starts here —— 

let listings = [];
let currentListings = [];
let currentPage = 1;
const pageSize = 10;
const bedroomImages = {
  1: 'Images/single.jpg',
  2: 'Images/double.jpg',
  3: 'Images/triple.jpg',
};

// Fetch & initialize
async function loadListings() {
  try {
    const res = await fetch('listings.json');
    if (!res.ok) throw new Error(res.status);
    listings = await res.json();
    currentListings = listings;
    updateView();
  } catch (err) {
    console.error(err);
    document.getElementById('listings').innerHTML =
      '<p class="error">Could not load listings.</p>';
  }
}

function renderListings(data) {
  const container = document.getElementById('listings');
  container.innerHTML = '';
  if (!data.length) {
    container.innerHTML = '<p>No homes found.</p>';
    return;
  }
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-body">
        <h2>${item.title}</h2>
        <p>📍 ${item.location}</p>
        <p>📬 ${item.address}</p>
        <p>🛏️ ${item.bedrooms} Bedrooms</p>
        <p class="price">₹${item.price}/mo</p>
      </div>
    `;
    card.onclick = () =>
      showDetail(item, bedroomImages[item.bedrooms]);
    container.appendChild(card);
  });
}

function generatePagination(total) {
  const totalPages = Math.ceil(total / pageSize);
  const pg = document.getElementById('pagination');
  pg.innerHTML = '';
  const btn = (txt, cls, fn) => {
    const b = document.createElement('button');
    b.textContent = txt;
    if (cls) b.className = cls;
    b.onclick = fn;
    pg.appendChild(b);
  };
  btn('Prev', currentPage === 1 ? 'disabled' : '', () => {
    if (currentPage > 1) { currentPage--; updateView(); }
  });
  for (let p = 1; p <= totalPages; p++) {
    btn(p, p === currentPage ? 'active' : '', () => {
      currentPage = p; updateView();
    });
  }
  btn('Next', currentPage === totalPages ? 'disabled' : '', () => {
    if (currentPage < totalPages) { currentPage++; updateView(); }
  });
}

function updateView() {
  const start = (currentPage - 1) * pageSize;
  renderListings(currentListings.slice(start, start + pageSize));
  generatePagination(currentListings.length);
}

function applyFilters() {
  const loc  = document.getElementById('location').value.toLowerCase();
  const minP = parseInt(document.getElementById('minPrice').value) || 0;
  const maxP = parseInt(document.getElementById('maxPrice').value) || Infinity;
  const beds = parseInt(document.getElementById('bedrooms').value) || 0;
  currentListings = listings.filter(item =>
    item.location.toLowerCase().includes(loc) &&
    item.price >= minP && item.price <= maxP &&
    item.bedrooms >= beds
  );
  currentPage = 1;
  updateView();
}

function showDetail(item, imgUrl) {
  document.getElementById('modalImage').src = imgUrl;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalLocation').textContent = `City: ${item.location}`;
  document.getElementById('modalAddress').textContent  = `Address: ${item.address}`;
  document.getElementById('modalBedrooms').textContent = `Bedrooms: ${item.bedrooms}`;
  document.getElementById('modalPrice').textContent    = `Price: ₹${item.price}/month`;
  
  // Build Google Maps search URL using the address
  const query = encodeURIComponent(item.address + ', ' + item.location);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const mapLink = document.getElementById('modalMapLink');
  mapLink.href = mapsUrl;
  mapLink.textContent = 'View on Google Maps';

  document.getElementById('detailModal').style.display = 'flex';
}

document.getElementById('modalClose').onclick = () => {
  document.getElementById('detailModal').style.display = 'none';
};
window.onclick = e => {
  if (e.target.id === 'detailModal') {
    e.target.style.display = 'none';
  }
};

document.getElementById('searchBtn').addEventListener('click', applyFilters);
window.addEventListener('DOMContentLoaded', loadListings);
