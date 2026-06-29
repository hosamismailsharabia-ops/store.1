// ═══════════════════════════════════════
// PRODUCTS DATA
// ═══════════════════════════════════════
const products = [
  // MAKEUP
  { id: 1, cat: 'makeup', name: 'أحمر شفاه مخمل فاخر', desc: 'لون غني يدوم طوال اليوم بتركيبة مرطبة', price: 89, oldPrice: 120, badge: 'الأكثر مبيعاً', img: 'https://i.pinimg.com/736x/68/53/aa/6853aa8eeb4c2a728ad639b8b38eb850.jpg', stars: 4.8, reviews: 312 },
  { id: 2, cat: 'makeup', name: 'أساس ناعم مع SPF30', desc: 'تغطية متوسطة لمظهر طبيعي مثالي', price: 145, oldPrice: null, badge: 'جديد', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80', stars: 4.6, reviews: 178 },
  { id: 3, cat: 'makeup', name: 'مجموعة ظلال العيون الوردية', desc: 'باليت 12 لون بتدرجات رومانسية', price: 195, oldPrice: 260, badge: 'خصم 25%', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80', stars: 4.9, reviews: 524 },
  { id: 4, cat: 'makeup', name: 'ماسكارا جذابه', desc: 'تطويل وتكثيف في خطوة واحدة', price: 79, oldPrice: null, badge: null, img: 'https://i.pinimg.com/736x/21/c9/75/21c975ae77634e2cbff67cb9845c51b4.jpg', stars: 4.5, reviews: 88 },

  // SKINCARE
  { id: 5, cat: 'skincare', name: 'سيروم فيتامين C المشرق', desc: 'يوحد البشرة ويقضي على البقع الداكنة', price: 220, oldPrice: 280, badge: 'الأكثر مبيعاً', img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80', stars: 4.9, reviews: 763 },
  { id: 6, cat: 'skincare', name: 'كريم مرطب الريتينول الليلي', desc: 'ينجو البشرة وينعّم التجاعيد أثناء النوم', price: 185, oldPrice: null, badge: 'جديد', img: 'https://i.pinimg.com/736x/de/00/ea/de00eac664a8c06862f618420a4e7cba.jpg', stars: 4.7, reviews: 412 },
  { id: 7, cat: 'skincare', name: 'قناع الطين الوردي المنقي', desc: 'يزيل الشوائب ويمنح بشرة نضرة', price: 95, oldPrice: 130, badge: 'خصم 27%', img: 'https://i.pinimg.com/736x/1e/de/8b/1ede8b9a88bb8ba2ab405c21a55fbe25.jpg', stars: 4.6, reviews: 231 },
  { id: 8, cat: 'skincare', name: 'واقي الشمس الأنثوي الشفاف', desc: 'SPF50+ لا يسد المسام — مثالي للاستخدام اليومي', price: 110, oldPrice: null, badge: null, img: 'https://i.pinimg.com/736x/c3/42/c8/c342c8133f39b868332e3f681161ea75.jpg', stars: 4.8, reviews: 349 },

  // HAIRCARE
  { id: 9, cat: 'haircare', name: 'زيت أرغان المغربي الفاخر', desc: 'يغذي ويلمّع ويحمي الشعر من الحرارة', price: 135, oldPrice: 170, badge: 'الأكثر مبيعاً', img: 'https://i.pinimg.com/736x/7f/2c/84/7f2c841fc702fd81190eb99220f63f53.jpg', stars: 4.8, reviews: 556 },
  { id: 10, cat: 'haircare', name: 'شامبو الكيراتين المعالج', desc: 'للشعر التالف — يعيد الحيوية والنعومة', price: 88, oldPrice: null, badge: 'جديد', img: 'https://i.pinimg.com/1200x/b4/a8/4e/b4a84ebe379c62cd43e5c33d6e6c9e4f.jpg', stars: 4.5, reviews: 203 },

  // PERFUMES
  { id: 12, cat: 'perfumes', name: 'عطر وردة الشرق — 100ml', desc: 'رائحة زهرية شرقية تدوم 24 ساعة', price: 350, oldPrice: 450, badge: 'خصم 22%', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80', stars: 4.9, reviews: 892 },
  { id: 13, cat: 'perfumes', name: 'عطر مسك الأميرة — 50ml', desc: 'أنوثة ناعمة بلمسة مسكية فاخرة', price: 280, oldPrice: null, badge: 'جديد', img: 'https://i.pinimg.com/736x/07/71/ed/0771edee4246abc5f034c3be2e739e74.jpg', stars: 4.7, reviews: 445 },
  { id: 14, cat: 'perfumes', name: 'زيت عطري عود الجوري', desc: 'مركّز فاخر يدوم طوال اليوم بنقطات صغيرة', price: 190, oldPrice: 250, badge: 'الأكثر طلباً', img: 'https://i.pinimg.com/1200x/24/00/55/2400550e43ee99f626ac13b460b89eac.jpg', stars: 4.8, reviews: 321 },

  // CLOTHES
  { id: 15, cat: 'clothes', name: 'فستان شيفون أنيق', desc: 'قماش ناعم — مثالي للسهرات والمناسبات', price: 320, oldPrice: 420, badge: 'وصل جديد', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80', stars: 4.8, reviews: 234 },
  { id: 16, cat: 'clothes', name: 'أوفرول كاجوال شيك', desc: 'راحة وأناقة لإطلالة اليومية', price: 245, oldPrice: null, badge: 'جديد', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80', stars: 4.6, reviews: 189 },
  { id: 17, cat: 'clothes', name: 'تنورة ميدي بلورية', desc: 'إطلالة مثالية في كل موسم', price: 195, oldPrice: 260, badge: 'خصم 25%', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80', stars: 4.7, reviews: 312 },
  { id: 18, cat: 'clothes', name: 'بلوزة  ناعمة', desc: 'تناسب كل المناسبات بأسلوب عصري', price: 165, oldPrice: null, badge: null, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80', stars: 4.5, reviews: 97 },
];

// ═══════════════════════════════════════
// CART STATE
// ═══════════════════════════════════════
let cart = {};
let currentFilter = 'all';

// ═══════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-light);">
      <i class="fas fa-search" style="font-size:48px;color:var(--blush);margin-bottom:16px;display:block;"></i>
      <p style="font-size:18px;font-weight:700;color:var(--deep-mauve);">لا توجد منتجات مطابقة</p>
      <p style="font-size:14px;margin-top:8px;">جربي كلمات بحث أخرى</p>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
        ${p.badge ? `<span class="product-badge ${p.badge.includes('جديد') || p.badge.includes('وصل') ? 'new-badge' : p.badge.includes('خصم') ? 'sale-badge' : ''}">${p.badge}</span>` : ''}
        <button class="product-wish" onclick="toggleWish(this, event)" aria-label="أضيفي للمفضلة"><i class="far fa-heart"></i></button>
        <div class="product-add-overlay">
          <button class="add-to-cart-overlay" onclick="addToCart(${p.id}, event)">
            <i class="fas fa-shopping-bag"></i> أضيفي للسلة
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat-label">${catLabel(p.cat)}</span>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price-wrap">
            <span class="product-price">${p.price}ج.م</span>
            ${p.oldPrice ? `<span class="product-price-old">${p.oldPrice}ج.م</span>` : ''}
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
            <div><span class="stars">${starsHtml(p.stars)}</span><span class="star-count">(${p.reviews})</span></div>
            <button class="add-btn-small" onclick="addToCart(${p.id}, event)" aria-label="أضيفي للسلة"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function catLabel(cat) {
  const labels = { makeup: '💄 المكياج', skincare: '✨ العناية بالبشرة', haircare: '💇‍♀️ العناية بالشعر', perfumes: '🌹 العطور', clothes: '👗 الملابس' };
  return labels[cat] || '';
}

function starsHtml(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '★';
    else if (i - rating < 1 && i - rating > 0) html += '½';
    else html += '☆';
  }
  return html;
}

// ═══════════════════════════════════════
// FILTER & SEARCH
// ═══════════════════════════════════════
function filterProducts(cat) {
  currentFilter = cat;
  const searchVal = document.getElementById('searchInput').value.toLowerCase();
  let list = cat === 'all' ? [...products] : products.filter(p => p.cat === cat);
  if (searchVal) list = list.filter(p => p.name.includes(searchVal) || p.desc.includes(searchVal));
  renderProducts(list);

  // Update tab UI
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === cat);
  });
  // Update nav links
  document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active-cat'));
}

function searchProducts() {
  filterProducts(currentFilter);
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ═══════════════════════════════════════
// CART LOGIC
// ═══════════════════════════════════════
function addToCart(productId, event) {
  if (event) event.stopPropagation();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].qty++;
  } else {
    cart[productId] = { ...product, qty: 1 };
  }

  updateCartUI();
  showToast(`✅ تمت إضافة "${product.name}" إلى السلة`);
  bumpBadge();
}

function removeFromCart(productId) {
  delete cart[productId];
  updateCartUI();
}

function changeQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId].qty += delta;
  if (cart[productId].qty <= 0) {
    delete cart[productId];
  }
  updateCartUI();
}

function updateCartUI() {
  const items = Object.values(cart);
  const count = items.reduce((a, b) => a + b.qty, 0);
  const subtotal = items.reduce((a, b) => a + b.price * b.qty, 0);

  document.getElementById('cartBadge').textContent = count;
  document.getElementById('bnavBadge').textContent = count;
  document.getElementById('subtotalVal').textContent = subtotal.toLocaleString('ar-EG') + 'ج.م';
  document.getElementById('totalVal').textContent = subtotal.toLocaleString('ar-EG') + 'ج.م';

  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const cartItemsEl = document.getElementById('cartItems');

  if (items.length === 0) {
    empty.style.display = 'flex';
    footer.style.display = 'none';
    cartItemsEl.innerHTML = '';
    cartItemsEl.appendChild(empty);
  } else {
    empty.style.display = 'none';
    footer.style.display = 'block';

    // Remove old items (keep empty placeholder)
    const existingItems = cartItemsEl.querySelectorAll('.cart-item');
    existingItems.forEach(el => el.remove());

    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-cat">${catLabel(item.cat)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <span class="cart-item-price">${(item.price * item.qty).toLocaleString('ar-Eg')}ج.م</span>
          <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>
      `;
      cartItemsEl.appendChild(div);
    });
  }
}

// ═══════════════════════════════════════
// CART DRAWER TOGGLE
// ═══════════════════════════════════════
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ═══════════════════════════════════════
// WHATSAPP CHECKOUT
// ═══════════════════════════════════════
function checkoutWhatsApp() {
  const items = Object.values(cart);
  if (!items.length) return;

  const total = items.reduce((a, b) => a + b.price * b.qty, 0);
  let msg = '🌸 *طلب جديد من أختين ستور*\n\n';
  msg += '━━━━━━━━━━━━━━━━\n';
  items.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*\n`;
    msg += `   الكمية: ${item.qty} × ${item.price} ج.م= ${item.price * item.qty} ج.م\n`;
  });
  msg += '━━━━━━━━━━━━━━━━\n';
  msg += `💰 *الإجمالي: ${total.toLocaleString('ar-EG')}ج.م*\n`;
  msg += '🚚 الشحن مجاني\n\n';
  msg += 'أرجو التأكيد والتواصل لإتمام الطلب 🙏';

  const phone = '966500000000'; // ← ضعي رقم الواتساب هنا
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

// ═══════════════════════════════════════
// TOAST
// ═══════════════════════════════════════
function showToast(msg) {
  const wrap = document.getElementById('toastWrap');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i>${msg}`;
  wrap.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function bumpBadge() {
  const badge = document.getElementById('cartBadge');
  badge.classList.remove('bump');
  void badge.offsetWidth; // reflow
  badge.classList.add('bump');
}

// ═══════════════════════════════════════
// WISHLIST (UI only)
// ═══════════════════════════════════════
function toggleWish(btn, event) {
  event.stopPropagation();
  btn.classList.toggle('wished');
  const icon = btn.querySelector('i');
  if (btn.classList.contains('wished')) {
    icon.classList.remove('far');
    icon.classList.add('fas');
    showToast('💗 أُضيف إلى المفضلة');
  } else {
    icon.classList.remove('fas');
    icon.classList.add('far');
  }
}

// ═══════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

// ═══════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════
function createParticles() {
  const container = document.getElementById('heroParticles');
  const colors = ['#F9A8C9', '#F4C2C2', '#E8A0B4', '#FDE8EF', '#9B5C7A'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 12 + 4;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      --dur:${3 + Math.random() * 5}s;
      --delay:${Math.random() * 5}s;
    `;
    container.appendChild(p);
  }
}

function mobileSearch() {
  // Sync mobile search input with desktop
  const val = document.getElementById('mobileSearchInput').value;
  document.getElementById('searchInput').value = val;
  filterProducts(currentFilter);
}

function setBottomNav(id) {
  document.querySelectorAll('.bnav-item').forEach(i => i.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  updateCartUI();
  createParticles();
});