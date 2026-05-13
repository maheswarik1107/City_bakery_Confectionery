/* ===== CITY BAKERY & CONFECTIONERY - app.js ===== */

/* ========== ADD-ONS DATA ========== */
const ADDONS = [
  { id: 'addon-photo', name: 'Photo Print', desc: 'Custom photo printed on your cake', price: 150 },
  { id: 'addon-design', name: 'Artistic Design', desc: 'Custom hand-crafted artistic decoration', price: 200 },
  { id: 'addon-step', name: 'Step/Tier Styling', desc: 'Multi-tier step cake presentation', price: 200 },
  { id: 'addon-shape', name: 'Custom Shape', desc: 'Heart, car, letter or any custom shape', price: 200 },
  { id: 'addon-garnish', name: 'Choco Garnish', desc: 'Premium chocolate garnish & decorations', price: 100 },
  { id: 'addon-fondant', name: 'Fondant Figures', desc: 'Handmade fondant characters & shapes', price: 300 },
];

/* ========== PRODUCT DATA ========== */
const PRODUCTS = [
  // FRESH CREAM
  { id: 1, name: 'Strawberry Cake', cat: 'fresh-cream', desc: 'Fresh cream with luscious strawberries', img: 'gallery/Strawberry Cake.jpg', prices: [{ label: '500gm', val: 300 }, { label: '1kg', val: 600 }], badge: 'Popular' },
  { id: 2, name: 'Mango Cream Cake', cat: 'fresh-cream', desc: 'Tropical mango with fresh cream layers', img: 'gallery/Mango Cream Cake.jpg', prices: [{ label: '500gm', val: 300 }, { label: '1kg', val: 600 }] },
  { id: 3, name: 'Blueberry Cake', cat: 'fresh-cream', desc: 'Bursting blueberries in silky cream', img: 'gallery/Blueberry Cake.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }] },
  { id: 4, name: 'Butterscotch Cake', cat: 'fresh-cream', desc: 'Classic butterscotch with nutty crunch', img: 'gallery/Butterscotch Cake.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }], badge: 'Bestseller' },
  { id: 5, name: 'Rasamalai Cake', cat: 'fresh-cream', desc: 'Unique fusion of rasamalai & cream', img: 'gallery/Rasamalai Cake.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }] },
  { id: 6, name: 'Mixed Fruit Cake', cat: 'fresh-cream', desc: 'Seasonal fresh fruits on cream base', img: 'gallery/Mixed Fruit Cake.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }] },
  { id: 7, name: 'Vanilla Cream Cake', cat: 'fresh-cream', desc: 'Light, airy classic vanilla fresh cream', img: 'gallery/Vanilla Cream Cake.jpg', prices: [{ label: '500gm', val: 250 }, { label: '1kg', val: 400 }] },

  // PREMIUM
  { id: 8, name: 'White Forest Cake', cat: 'premium', desc: 'White chocolate with cherries & cream', img: 'gallery/White Forest Cake.jpg', prices: [{ label: '500gm', val: 300 }, { label: '1kg', val: 600 }] },
  { id: 9, name: 'Red Velvet Cake', cat: 'premium', desc: 'Iconic red velvet with cream cheese frosting', img: 'gallery/Red Velvet Cake.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }], badge: 'Premium' },
  { id: 10, name: 'Oreo Red Velvet', cat: 'premium', desc: 'Red velvet loaded with Oreo crumbs', img: 'gallery/Oreo Red Velvet.jpg', prices: [{ label: '500gm', val: 450 }, { label: '1kg', val: 900 }], badge: 'Special' },
  { id: 11, name: 'Black Forest Cake', cat: 'premium', desc: 'Dark chocolate with cherries & cream', img: 'gallery/Black Forest Cake.jpg', prices: [{ label: '500gm', val: 250 }, { label: '1kg', val: 400 }] },

  // CHOCOLATE
  { id: 12, name: 'Choco Scotch', cat: 'chocolate', desc: 'Chocolate meets butterscotch heaven', img: 'gallery/Choco Scotch.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }] },
  { id: 13, name: 'Choco Fudge Cake', cat: 'chocolate', desc: 'Dense, rich chocolate fudge layers', img: 'gallery/Choco Fudge Cake.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }], badge: 'Fav' },
  { id: 14, name: 'Brownie Blast Cake', cat: 'chocolate', desc: 'Fudgy brownie chunks in every bite', img: 'gallery/Brownie Blast Cake.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }] },
  { id: 15, name: 'Choco Dry Fruit & Nuts', cat: 'chocolate', desc: 'Chocolate packed with premium nuts', img: 'gallery/Choco Dry Fruit & Nuts.jpg', prices: [{ label: '500gm', val: 450 }, { label: '1kg', val: 900 }], badge: 'Premium' },
  { id: 16, name: 'Choco Truffle', cat: 'chocolate', desc: 'Silky smooth chocolate truffle ganache', img: 'gallery/Choco Truffle.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }] },
  { id: 17, name: 'Choco Mango', cat: 'chocolate', desc: 'Chocolate & mango tropical fusion', img: 'gallery/Choco Mango.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }] },
  { id: 18, name: 'Choco Almond', cat: 'chocolate', desc: 'Rich chocolate with toasted almonds', img: 'gallery/Choco Almond.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }] },
  { id: 19, name: 'Choco Oreo', cat: 'chocolate', desc: 'Chocolate cake crowned with Oreos', img: 'gallery/Choco Oreo.jpg', prices: [{ label: '500gm', val: 350 }, { label: '1kg', val: 700 }], badge: 'Bestseller' },
  { id: 20, name: 'Choco Kit Kat', cat: 'chocolate', desc: 'Wrapped in Kit Kat bars all around', img: 'gallery/Choco Kit Kat.jpg', prices: [{ label: '500gm', val: 500 }, { label: '1kg', val: 950 }], badge: 'Trending' },
  { id: 21, name: 'Choco Cashew Overloaded', cat: 'chocolate', desc: 'Loaded with cashews & chocolate', img: 'gallery/Choco Cashew Overloaded.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }] },
  { id: 22, name: 'Choco Chips Cake', cat: 'chocolate', desc: 'Moist cake loaded with choco chips', img: 'gallery/Choco Chips Cake.jpg', prices: [{ label: '500gm', val: 400 }, { label: '1kg', val: 800 }] },
  { id: 23, name: 'Pinata Cake', cat: 'special', desc: 'Surprise-filled cake for extra fun!', img: 'gallery/Pinata Cake.jpg', prices: [{ label: '500gm', val: 600 }, { label: '1kg', val: 1200 }], badge: 'Hit!' },

  // BUTTER CREAM
  { id: 24, name: 'Vanilla Butter Cream', cat: 'butter-cream', desc: 'Classic vanilla with silky butter cream', img: 'gallery/Vanilla Butter Cream.jpg', prices: [{ label: '1kg', val: 400 }] },
  { id: 25, name: 'Chocolate Butter Cream', cat: 'butter-cream', desc: 'Rich chocolate butter cream delight', img: 'gallery/Chocolate Butter Cream.jpg', prices: [{ label: '1kg', val: 400 }] },
  { id: 26, name: 'Butterscotch Butter Cream', cat: 'butter-cream', desc: 'Sweet butterscotch with creamy frosting', img: 'gallery/Butterscotch Butter Cream.jpg', prices: [{ label: '1kg', val: 400 }] },
  { id: 27, name: 'Honey Cake', cat: 'butter-cream', desc: 'Drizzled with pure natural honey', img: 'gallery/Honey Cake.jpg', prices: [{ label: '1kg', val: 600 }], badge: 'Special' },
];

const TESTIMONIALS = [
  { name: "Priya S.", initial: "P", type: "Birthday Cake", rating: 5, text: "Ordered a custom photo cake for my daughter's birthday. The design was perfect, the cream was so fresh and the delivery was exactly on time. Will always order from City Bakery!" },
  { name: "Ramesh K.", initial: "R", type: "Wedding Cake", rating: 5, text: "Our 3-tier wedding cake was absolutely stunning! Everyone at the reception couldn't stop complimenting it. The taste matched the look - incredible. Thank you City Bakery!" },
  { name: "Divya M.", initial: "D", type: "Daily Order", rating: 5, text: "I order cakes from City Bakery almost every week. The butterscotch cake is the best in Chennai - perfectly moist and creamy. Love this place!" },
  { name: "Arun T.", initial: "A", type: "Anniversary Cake", rating: 5, text: "Surprised my wife with a choco fudge cake for our anniversary. She was in tears! The cake was moist, not too sweet, and beautifully decorated. Highly recommend!" },
  { name: "Meera L.", initial: "M", type: "Corporate Order", rating: 4, text: "Ordered for our office event. Everything was delivered fresh and on time. The team appreciated the variety and quality. Will definitely order again for our next event." },
  { name: "Karthik B.", initial: "K", type: "Regular Customer", rating: 5, text: "The Red Velvet cake from City Bakery is unmatched in the whole of Chennai. The cream cheese frosting is perfect. My go-to bakery for all celebrations!" }
];

const GALLERY_IMGS = [
  'gallery/gallery1.jpg',
  'gallery/gallery2.jpg',
  'gallery/gallery3.png',
  'gallery/gallery4.jpg',
  'gallery/gallery5.jpg',
  'gallery/gallery6.png',
  'gallery/gallery7.jpg',
  'gallery/gallery8.jpg',
  'gallery/gallery9.jpg',
  'gallery/gallery10.jpg',
  'gallery/gallery11.jpg',
  'gallery/gallery12.jpg',
  'gallery/gallery13.jpg',
  'gallery/gallery14.jpeg',
  'gallery/gallery15.jpeg',
  'gallery/gallery16.jpeg',
  'gallery/gallery17.jpeg',
  'gallery/gallery18.jpeg'
];


/* ========== STATE ========== */
let cart = JSON.parse(localStorage.getItem('cb_cart') || '[]');
let currentFilter = 'all';
let displayedCount = 8;
let testimonialIndex = 0;
let selectedBranch = 'Neelankarai';

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.style.display = 'none';
  }, 2800);
  initApp();
});

function initApp() {
  if (!localStorage.getItem('cb_branch')) {
    document.getElementById('locationPopup').style.display = 'flex';
  } else {
    selectedBranch = localStorage.getItem('cb_branch');
    document.getElementById('selectedBranchLabel').textContent = selectedBranch;
    document.getElementById('mobileBranchLabel').textContent = selectedBranch;
    document.getElementById('locationPopup').style.display = 'none';
  }
  renderProducts();
  renderBestSellers();
  renderGallery();
  renderTestimonials();
  updateCartUI();
  startTestimonialCarousel();
  setupScrollAnimations();
  setupNavHighlight();
  setupDateInputMin();
}

/* ========== LOCATION ========== */
function selectBranch(name) {
  selectedBranch = name;
  localStorage.setItem('cb_branch', name);
  document.getElementById('selectedBranchLabel').textContent = name;
  document.getElementById('mobileBranchLabel').textContent = name;
  document.getElementById('locationPopup').style.display = 'none';
  showToast(`Branch set to ${name}`, 'success');
}
function useCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => selectBranch('Neelankarai'),
      () => showToast('Could not detect location. Please select manually.', 'error')
    );
  } else {
    showToast('Geolocation not supported. Please select manually.', 'error');
  }
}
function toggleLocationDropdown() {
  const dd = document.getElementById('locationDropdown');
  dd.classList.toggle('open');
}
function changeBranch(e, name) {
  e.stopPropagation();
  selectedBranch = name;
  localStorage.setItem('cb_branch', name);
  document.getElementById('selectedBranchLabel').textContent = name;
  document.getElementById('mobileBranchLabel').textContent = name;
  document.getElementById('locationDropdown').classList.remove('open');
  showToast(`Branch changed to ${name}`, 'success');
}
document.addEventListener('click', (e) => {
  const sel = document.querySelector('.location-selector');
  if (sel && !sel.contains(e.target)) {
    document.getElementById('locationDropdown').classList.remove('open');
  }
});

/* ========== MOBILE MENU ========== */
function closeMobileMenu() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('mobileNavOverlay').classList.remove('open');
}
document.getElementById('hamburgerBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('mobileNavOverlay').classList.add('open');
});

/* ========== SEARCH ========== */
function toggleSearch() {
  const bar = document.getElementById('searchBarContainer');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  } else {
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchInput').value = '';
  }
}
function handleSearch(val) {
  const res = document.getElementById('searchResults');
  if (!val.trim()) { res.innerHTML = ''; return; }
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(val.toLowerCase()) ||
    p.desc.toLowerCase().includes(val.toLowerCase()) ||
    p.cat.toLowerCase().includes(val.toLowerCase())
  ).slice(0, 6);
  if (!matches.length) {
    res.innerHTML = '<div class="search-result-item"><div class="search-result-info"><strong>No results found</strong><span>Try different keywords</span></div></div>';
    return;
  }
  res.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openProductModal(${p.id}); toggleSearch();">
      <img class="search-result-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="search-result-info">
        <strong>${p.name}</strong>
        <span>from ₹${p.prices[0].val}</span>
      </div>
    </div>`).join('');
}

/* ========== FILTER TABS ========== */
function filterTab(el, cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentFilter = cat;
  displayedCount = 8;
  renderProducts();
}

/* ========== RENDER PRODUCTS ========== */
function renderProducts() {
  let filtered = currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === currentFilter);
  const toShow = filtered.slice(0, displayedCount);
  document.getElementById('productsGrid').innerHTML = toShow.map(p => productCardHTML(p)).join('');
  const btn = document.getElementById('loadMoreBtn');
  btn.style.display = filtered.length > displayedCount ? 'inline-block' : 'none';
}
function loadMore() {
  displayedCount += 8;
  renderProducts();
}

/* ========== RENDER BEST SELLERS ========== */
function renderBestSellers() {
  const bs = PRODUCTS.filter(p => p.badge === 'Bestseller' || p.badge === 'Popular' || p.badge === 'Fav').slice(0, 8);
  document.getElementById('bestSellersGrid').innerHTML = bs.map(p => productCardHTML(p)).join('');
}

/* ========== PRODUCT CARD HTML ========== */
function productCardHTML(p) {
  const price = p.prices[0];
  const badgeClassMap = {
    'Popular': 'badge-popular', 'Bestseller': 'badge-bestseller', 'Premium': 'badge-premium',
    'Special': 'badge-special', 'Fav': 'badge-fav', 'Trending': 'badge-trending',
    'Hit!': 'badge-hit', 'Custom': 'badge-custom'
  };
  const badgeClass = badgeClassMap[p.badge] || 'badge-popular';
  const sizeButtons = p.prices.length > 1
    ? `<div class="product-sizes">${p.prices.map((s, i) => `<button class="size-btn${i === 0 ? ' active' : ''}" onclick="selectSize(this, ${p.id}, '${s.label}', ${s.val})">${s.label}</button>`).join('')}</div>`
    : '';
  return `
    <div class="product-card fade-up" id="pc-${p.id}">
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-meta-row">
          <div class="product-price">
            <span class="price-current" id="price-${p.id}">₹${price.val}</span>
        </div>
        ${sizeButtons}
        </div>
        <div class="product-actions">
          <div class="qty-wrap">
            <button class="qty-btn" onclick="changeQty('qty-${p.id}', -1)">−</button>
            <input class="qty-val" id="qty-${p.id}" value="1" min="1" max="10" readonly>
            <button class="qty-btn" onclick="changeQty('qty-${p.id}', 1)">+</button>
          </div>
          <button class="btn-view" onclick="openProductModal(${p.id})">Customise</button>
          <button class="btn-add" onclick="addToCartFromCard(${p.id})">+ Cart</button>
        </div>
      </div>
    </div>`;
}

/* ========== SIZE SELECT ========== */
function selectSize(btn, id, label, val) {
  const card = btn.closest('.product-card');
  card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  btn.dataset.activePrice = val;
  btn.dataset.activeLabel = label;
  document.getElementById(`price-${id}`).textContent = `₹${val}`;
}

function getActiveSize(id) {
  const card = document.getElementById(`pc-${id}`);
  const activeBtn = card ? card.querySelector('.size-btn.active') : null;
  const p = PRODUCTS.find(p => p.id === id);
  if (activeBtn && activeBtn.dataset.activePrice) {
    return { label: activeBtn.textContent, val: parseInt(activeBtn.dataset.activePrice) };
  }
  return { label: p.prices[0].label, val: p.prices[0].val };
}

/* ========== QUANTITY ========== */
function changeQty(inputId, delta) {
  const input = document.getElementById(inputId);
  const val = parseInt(input.value) + delta;
  if (val >= 1 && val <= 10) input.value = val;
}

/* ========== ADD TO CART ========== */
function addToCartFromCard(id) {
  const p = PRODUCTS.find(p => p.id === id);
  const qtyInput = document.getElementById(`qty-${id}`);
  const qty = qtyInput ? parseInt(qtyInput.value) : 1;
  const { label, val } = getActiveSize(id);
  addToCart(p, label, val, qty, []);
}

function addToCart(product, label, val, qty = 1, addons = []) {
  // Build a unique key that includes selected add-on IDs so the same cake with different add-ons is treated as a separate line item
  const addonKey = addons.map(a => a.id).sort().join('+');
  const key = `${product.id}-${label}${addonKey ? '-' + addonKey : ''}`;
  const addonTotal = addons.reduce((s, a) => s + a.price, 0);
  const totalPrice = val + addonTotal;

  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, 10);
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      img: product.img,
      size: label,
      price: totalPrice,
      basePrice: val,
      addons,
      qty
    });
  }
  saveCart();
  updateCartUI();
  showToast(`🛒 ${product.name} added to cart!`, 'success');
}

function removeFromCart(key) {
  cart = cart.filter(c => c.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('Item removed from cart', 'info');
}

function updateCartQty(key, delta) {
  const item = cart.find(c => c.key === key);
  if (!item) return;
  item.qty = Math.max(1, Math.min(item.qty + delta, 10));
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() { localStorage.setItem('cb_cart', JSON.stringify(cart)); }
function getCartTotal() { return cart.reduce((s, c) => s + c.price * c.qty, 0); }
function getCartCount() { return cart.reduce((s, c) => s + c.qty, 0); }

function updateCartUI() {
  const count = getCartCount();
  document.getElementById('cartBadge').textContent = count;
  document.getElementById('mbbBadge').textContent = count;
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const empty = document.getElementById('cartEmpty');
  if (!cart.length) {
    empty.style.display = 'block';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';
  const itemsHTML = cart.map(c => {
    const addonLine = c.addons && c.addons.length
      ? `<div class="cart-item-addons">${c.addons.map(a => `+${a.name}`).join(', ')}</div>`
      : '';
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${c.img}" alt="${c.name}" loading="lazy">
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-size">${c.size}</div>
          ${addonLine}
          <div class="cart-item-price">₹${(c.price * c.qty).toLocaleString()}</div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" onclick="updateCartQty('${c.key}', -1)">−</button>
            <span class="cart-qty-num">${c.qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty('${c.key}', 1)">+</button>
            <button class="cart-remove" onclick="removeFromCart('${c.key}')">✕ Remove</button>
          </div>
        </div>
      </div>`;
  }).join('');
  const emptyEl = empty.cloneNode(true);
  container.innerHTML = itemsHTML;
  container.prepend(emptyEl);
  document.getElementById('cartTotal').textContent = `₹${getCartTotal().toLocaleString()}`;
}

/* ========== CART TOGGLE ========== */
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

/* ========== CHECKOUT ========== */
function proceedToCheckout() {
  if (!cart.length) { showToast('Your cart is empty!', 'error'); return; }
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  const summary = document.getElementById('checkoutSummary');
  summary.innerHTML = `<div style="font-weight:700;margin-bottom:8px;font-family:'Playfair Display',serif;">Order Summary</div>` +
    cart.map(c => {
      const addonNote = c.addons && c.addons.length ? ` + ${c.addons.map(a => a.name).join(', ')}` : '';
      return `<div class="checkout-summary-item"><span>${c.name} (${c.size})${addonNote} × ${c.qty}</span><span>₹${(c.price * c.qty).toLocaleString()}</span></div>`;
    }).join('') +
    `<div class="checkout-summary-item"><span>Total</span><span>₹${getCartTotal().toLocaleString()}</span></div>`;
  document.getElementById('checkoutTotal').textContent = `₹${getCartTotal().toLocaleString()}`;
  document.getElementById('checkoutOverlay').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
}

function toggleAddressField(radio) {
  document.getElementById('addressFieldGroup').style.display = radio.value === 'home' ? 'flex' : 'none';
}

function placeOrderWhatsApp() {
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const address = document.getElementById('coAddress').value.trim();
  const branch = document.getElementById('coBranch').value;
  const date = document.getElementById('coDate').value;
  const time = document.getElementById('coTime').value;
  const message = document.getElementById('coMessage').value.trim();
  if (!name || !phone) { showToast('Please fill in your name and phone number.', 'error'); return; }
  if (deliveryType === 'home' && !address) { showToast('Please enter your delivery address.', 'error'); return; }
  if (!date) { showToast('Please select a delivery date.', 'error'); return; }
  let msg = `🎂 *City Bakery & Confectionery - New Order*\n\n`;
  msg += `👤 *Customer:* ${name}\n📞 *Phone:* ${phone}\n\n`;
  msg += `📦 *ORDER ITEMS:*\n`;
  cart.forEach(c => {
    const addonNote = c.addons && c.addons.length ? `\n   Add-ons: ${c.addons.map(a => `${a.name} (+₹${a.price})`).join(', ')}` : '';
    msg += `• ${c.name} (${c.size}) × ${c.qty} = ₹${(c.price * c.qty).toLocaleString()}${addonNote}\n`;
  });
  msg += `\n💰 *Total: ₹${getCartTotal().toLocaleString()}*\n\n`;
  msg += `🚚 *Delivery Type:* ${deliveryType === 'home' ? 'Home Delivery' : 'Store Pickup'}\n`;
  if (deliveryType === 'home') msg += `📍 *Address:* ${address}\n`;
  msg += `🏪 *Branch:* ${branch}\n`;
  msg += `📅 *Date:* ${date}\n⏰ *Time:* ${time}\n`;
  if (message) msg += `📝 *Special Instructions:* ${message}\n`;
  msg += `\n_Ordered via City Bakery Website_`;
  window.open(`https://wa.me/917373730309?text=${encodeURIComponent(msg)}`, '_blank');
  closeCheckout();
  cart = [];
  saveCart();
  updateCartUI();
  showToast('🎉 Order sent via WhatsApp! We will confirm soon.', 'success');
}

function orderViaWhatsApp() {
  if (!cart.length) { showToast('Your cart is empty!', 'error'); return; }
  let msg = `🎂 *City Bakery & Confectionery - Quick Order*\n\n📦 *Items:*\n`;
  cart.forEach(c => {
    const addonNote = c.addons && c.addons.length ? ` [${c.addons.map(a => a.name).join(', ')}]` : '';
    msg += `• ${c.name} (${c.size})${addonNote} × ${c.qty} = ₹${(c.price * c.qty).toLocaleString()}\n`;
  });
  msg += `\n💰 *Total: ₹${getCartTotal().toLocaleString()}*\n\n_Please confirm delivery details._`;
  window.open(`https://wa.me/917373730309?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ========== PRODUCT MODAL — with add-ons ========== */
function openProductModal(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;

  const addonsHTML = `
    <div class="modal-addons-section">
      <div class="modal-addons-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        Customise Your Cake
        <span class="modal-addons-subtitle">Optional add-ons</span>
      </div>
      <div class="modal-addons-list">
        ${ADDONS.map(a => `
          <label class="addon-row" for="addon-${id}-${a.id}">
            <input
              type="checkbox"
              id="addon-${id}-${a.id}"
              class="addon-checkbox"
              data-price="${a.price}"
              data-name="${a.name}"
              data-addon-id="${a.id}"
              onchange="updateModalPrice(${id}, ${p.prices[0].val})"
            >
            <div class="addon-info">
              <span class="addon-name">${a.name}</span>
              <span class="addon-desc">${a.desc}</span>
            </div>
            <span class="addon-price">+₹${a.price}</span>
          </label>`).join('')}
      </div>
    </div>`;

  document.getElementById('productModalInner').innerHTML = `
    <img class="modal-img" src="${p.img}" alt="${p.name}" loading="lazy">
    <div class="modal-info">
      <div class="modal-name">${p.name}</div>
      <div class="modal-desc">${p.desc}</div>

      ${p.prices.length > 1 ? `
      <div>
        <div style="font-size:.82rem;font-weight:600;color:var(--text);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px;">Select Size</div>
        <div class="product-sizes">
          ${p.prices.map((s, i) => `
            <button
              class="size-btn${i === 0 ? ' active' : ''}"
              data-base="${s.val}"
              onclick="modalSelectSize(this, '${s.label}', ${s.val}, ${p.id})"
            >${s.label} — ₹${s.val}</button>`).join('')}
        </div>
      </div>` : ''}

      ${addonsHTML}

      <div class="modal-price-row">
        <div>
          <div class="modal-price-label">Total Price</div>
          <div class="modal-price">
            <span class="price-current" id="modal-price-${p.id}">₹${p.prices[0].val}</span>
          </div>
        </div>
        <div class="qty-wrap">
          <button class="qty-btn" onclick="changeQty('modal-qty-${p.id}', -1)">−</button>
          <input class="qty-val" id="modal-qty-${p.id}" value="1" min="1" max="10" readonly>
          <button class="qty-btn" onclick="changeQty('modal-qty-${p.id}', 1)">+</button>
        </div>
      </div>

      <button class="btn-primary full-width modal-add-cart-btn" style="margin-top:4px" onclick="modalAddToCart(${p.id})">
        Add to Cart
      </button>
    </div>`;

  document.getElementById('productModalOverlay').classList.add('open');
}

/* Recompute the displayed price whenever a size or add-on changes */
function updateModalPrice(id, fallbackBase) {
  // Find the active base price
  const activeSize = document.querySelector('#productModalInner .size-btn.active');
  const base = activeSize ? parseInt(activeSize.dataset.base || fallbackBase) : fallbackBase;

  // Sum checked add-ons
  const addonTotal = Array.from(
    document.querySelectorAll(`#productModalInner .addon-checkbox:checked`)
  ).reduce((s, cb) => s + parseInt(cb.dataset.price), 0);

  document.getElementById(`modal-price-${id}`).textContent = `₹${(base + addonTotal).toLocaleString()}`;
}

function modalSelectSize(btn, label, val, id) {
  btn.closest('.product-sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateModalPrice(id, val);
}

function modalAddToCart(id) {
  const p = PRODUCTS.find(p => p.id === id);
  const qtyEl = document.getElementById(`modal-qty-${id}`);
  const qty = qtyEl ? parseInt(qtyEl.value) : 1;

  // Get selected size
  const activeBtn = document.querySelector('#productModalInner .size-btn.active');
  const sizeLabel = activeBtn ? activeBtn.textContent.split(' — ')[0].trim() : p.prices[0].label;
  const baseVal = activeBtn ? parseInt(activeBtn.dataset.base || p.prices[0].val) : p.prices[0].val;

  // Collect selected add-ons
  const selectedAddons = Array.from(
    document.querySelectorAll('#productModalInner .addon-checkbox:checked')
  ).map(cb => ({
    id: cb.dataset.addonId,
    name: cb.dataset.name,
    price: parseInt(cb.dataset.price)
  }));

  addToCart(p, sizeLabel, baseVal, qty, selectedAddons);
  closeProductModal();
}

function closeProductModal() {
  document.getElementById('productModalOverlay').classList.remove('open');
}

/* ========== GALLERY ========== */
function renderGallery() {
  document.getElementById('galleryGrid').innerHTML = GALLERY_IMGS.map((img, i) => `
    <div class="gallery-item" onclick="openLightbox('${img}')">
      <img src="${img}" alt="Gallery ${i + 1}" loading="lazy">
    </div>`).join('');
}
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

/* ========== TESTIMONIALS ========== */
/* ========== TESTIMONIALS ========== */
function getTestimonialsPerPage() {
  return window.innerWidth < 768 ? 1 : 3;
}

function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');

  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="test-stars">${'⭐'.repeat(t.rating)}</div>
      <div class="test-text">"${t.text}"</div>
      <div class="test-author">
        <div class="test-avatar">${t.initial}</div>
        <div><div class="test-name">${t.name}</div><div class="test-type">${t.type}</div></div>
      </div>
    </div>`).join('');

  const dots = document.getElementById('testimonialDots');
  const perPage = getTestimonialsPerPage();
  const pages = Math.ceil(TESTIMONIALS.length / perPage);

  dots.innerHTML = Array.from({ length: pages }, (_, i) =>
    `<button class="dot${i === 0 ? ' active' : ''}" onclick="goToTestimonial(${i})"></button>`
  ).join('');
}

function startTestimonialCarousel() {
  setInterval(() => {
    const perPage = getTestimonialsPerPage();
    const pages = Math.ceil(TESTIMONIALS.length / perPage);
    goToTestimonial((testimonialIndex + 1) % pages);
  }, 5000);
}

function goToTestimonial(idx) {
  testimonialIndex = idx;

  const cards = document.querySelectorAll('.testimonial-card');
  const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 0;
  const perPage = getTestimonialsPerPage();

  document.getElementById('testimonialsTrack').style.transform =
    `translateX(-${idx * perPage * cardWidth}px)`;

  document.querySelectorAll('#testimonialDots .dot').forEach((d, i) =>
    d.classList.toggle('active', i === idx)
  );
}

window.addEventListener('resize', () => {
  renderTestimonials();
  goToTestimonial(0);
});
/* ========== FAQ ========== */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-a');
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q => q.classList.remove('open'));
  if (!isOpen) { answer.classList.add('open'); btn.classList.add('open'); }
}

/* ========== CUSTOM ORDER ========== */
function submitCustomOrder() {
  const name = document.getElementById('customName').value.trim();
  const phone = document.getElementById('customPhone').value.trim();
  const type = document.getElementById('customType').value;
  const weight = document.getElementById('customWeight').value;
  const date = document.getElementById('customDate').value;
  const msg = document.getElementById('customMsg').value.trim();
  if (!name || !phone) { showToast('Please fill in your name and phone.', 'error'); return; }
  let wa = `🎨 *Custom Cake Order - City Bakery*\n\n`;
  wa += `👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n`;
  if (type) wa += `🎂 *Type:* ${type}\n`;
  if (weight) wa += `⚖️ *Weight:* ${weight}\n`;
  if (date) wa += `📅 *Date:* ${date}\n`;
  if (msg) wa += `📝 *Details:* ${msg}\n`;
  window.open(`https://wa.me/917373730309?text=${encodeURIComponent(wa)}`, '_blank');
  showToast('Custom order sent via WhatsApp!', 'success');
}

/* ========== TOAST ========== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ========== SCROLL ANIMATIONS ========== */
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

const observerMutator = new MutationObserver(() => {
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.05 });
    observer.observe(el);
  });
});
observerMutator.observe(document.body, { childList: true, subtree: true });

/* ========== NAV HIGHLIGHT ========== */
function setupNavHighlight() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => observer.observe(s));
}

/* ========== DATE MIN ========== */
function setupDateInputMin() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split('T')[0];
  ['coDate', 'customDate'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.min = dateStr;
  });
}

/* ========== HEADER SCROLL ========== */
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(120,60,30,0.12)' : '0 2px 15px rgba(120,60,30,0.08)';
});

/* ========== KEYBOARD NAV ========== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileMenu();
    closeProductModal();
    closeCheckout();
    closeLightbox();
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar.classList.contains('open')) toggleCart();
    const searchBar = document.getElementById('searchBarContainer');
    if (searchBar.classList.contains('open')) toggleSearch();
  }
});
