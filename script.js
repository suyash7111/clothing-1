/* ===== 1. EDIT THESE: your real business details. Anything in [brackets] shows a setup warning. ===== */
const BIZ = {
  name: "Ingoude",
  legal: "[Registered business name]",
  addr: "[Registered address]",
  email: "[orders@yourdomain.com]",
  phone: "[Phone number]",
  reg: "[GST / company registration number]",
  hours: "[Support hours]",
  cur: "$",
  ship: "[Describe delivery areas, times and charges]",
  ret: "[Describe your return, exchange and refund policy]",
  terms: "[Add your terms of sale]",
};
/* ===== 2. EDIT THESE: SAMPLE products. Replace names, prices and descriptions (d) with real ones.
   Optional real photos you own or are licensed to use: img:['images/blazer-1.jpg','images/blazer-2.jpg'] ===== */
const P = [
  {
    id: 1,
    n: "Brown Blazer",
    p: 310,
    c: "Outerwear",
    a: "#b08d6a",
    b: "#5a3a26",
    sk: "#e0ac8b",
    hr: "#2a1d18",
    img: [
      "https://images.unsplash.com/photo-1747814896398-bdf36d11f596?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1747817230338-fd252147d627?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1578476719994-464aef88d2da?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 2,
    n: "Beige Pants",
    p: 125,
    c: "Bottoms",
    a: "#e9dcc4",
    b: "#b9a78c",
    sk: "#8d5a3c",
    hr: "#1c1411",
    lg: 1,
    img: [
      "https://images.unsplash.com/photo-1771621089871-55ed3cfa9dc4?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1743764252765-b8a552f7c6c2?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1747817230338-fd252147d627?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 3,
    n: "Brown Shirt",
    p: 200,
    c: "Tops",
    a: "#c9955c",
    b: "#8a5a34",
    sk: "#f0c4a0",
    hr: "#6b4a2e",
    lg: 1,
    img: [
      "https://images.unsplash.com/photo-1614676459401-34413f54cc73?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1747814896398-bdf36d11f596?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1771621089871-55ed3cfa9dc4?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 4,
    n: "Sand Trench",
    p: 380,
    c: "Outerwear",
    a: "#d9c6a3",
    b: "#9c8461",
    sk: "#5e3a28",
    hr: "#1c1411",
    lg: 1,
    img: [
      "https://images.unsplash.com/photo-1743764252765-b8a552f7c6c2?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1747817230338-fd252147d627?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1747814896398-bdf36d11f596?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 5,
    n: "Linen Coat",
    p: 260,
    c: "Outerwear",
    a: "#f6f2e9",
    b: "#cfc7b8",
    sk: "#e8b896",
    hr: "#8a5a3a",
    img: [
      "https://images.unsplash.com/photo-1747817230338-fd252147d627?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1578476719994-464aef88d2da?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1743764252765-b8a552f7c6c2?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 6,
    n: "Yellow Wrap",
    p: 175,
    c: "Tops",
    a: "#f2b630",
    b: "#c47d0e",
    sk: "#7a4a30",
    hr: "#241812",
    lg: 1,
    img: [
      "https://images.unsplash.com/photo-1664734037746-00422ddd11ac?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1614676459401-34413f54cc73?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1743764252765-b8a552f7c6c2?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 7,
    n: "Ribbed Knit",
    p: 95,
    c: "Tops",
    a: "#9a6a4c",
    b: "#5a3a2a",
    sk: "#f3cdb0",
    hr: "#3b2a20",
    img: [
      "https://images.unsplash.com/photo-1614676459401-34413f54cc73?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1578476719994-464aef88d2da?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1747814896398-bdf36d11f596?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
  {
    id: 8,
    n: "Pleat Trousers",
    p: 150,
    c: "Bottoms",
    a: "#7f7a70",
    b: "#4b4741",
    sk: "#c98e68",
    hr: "#241812",
    img: [
      "https://images.unsplash.com/photo-1578476719994-464aef88d2da?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1771621089871-55ed3cfa9dc4?auto=format&fit=crop&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1743764252765-b8a552f7c6c2?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    ],
    d: "",
  },
];
/* ===== 3. PHOTOS: put real, licensed photos in an images/ folder next to this file. Missing files fall back to the illustrations. =====
   images/hero.jpg (wide, ~2000x1200) and images/p<ID>-1.jpg, -2.jpg, -3.jpg per product (portrait 4:5, ~1200x1500). Set PHOTOS=false to use illustrations only. */
const PHOTOS = true,
  HERO_IMG =
    "https://images.unsplash.com/photo-1747814896398-bdf36d11f596?auto=format&fit=crop&fm=jpg&q=80&w=1400";
/* ===== app ===== */
/* ===== Storage and shared state ===== */
const L = (k, d) => {
  try {
    const v = JSON.parse(localStorage.getItem("ing_" + k));
    return v == null ? d : v;
  } catch (e) {
    return d;
  }
};
const S = (k, v) => {
  try {
    localStorage.setItem("ing_" + k, JSON.stringify(v));
  } catch (e) {}
};
const cart = L("cart", []),
  wish = L("wish", []),
  orders = L("orders", []);
let cur = location.hash || "#/",
  user = L("user", null),
  filter = "All",
  q = "",
  size = "M",
  lastMail = "",
  first = true;
const sv = () => {
  S("cart", cart);
  S("wish", wish);
  S("orders", orders);
  S("user", user);
};
const $ = (s) => document.querySelector(s),
  $app = $("#app"),
  esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const money = (n) => BIZ.cur + n,
  find = (id) => P.find((x) => x.id == id) || P[0],
  count = () => cart.reduce((s, i) => s + i.q, 0),
  total = () => cart.reduce((s, i) => s + find(i.id).p * i.q, 0);
const ico = (d) =>
  `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const cartI = ico(
    '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.700 12.400h10.600L21 7H6"/>',
  ),
  heartI = ico(
    '<path d="M12 20s-8-4.900-8-11a4.500 4.500 0 0 1 8-2.800A4.500 4.500 0 0 1 20 9c0 6.100-8 11-8 11z"/>',
  ),
  userI = ico(
    '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7"/>',
  ),
  searchI = ico(
    '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.500-3.500"/>',
  );
const logoI =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M3.300 7l17.400 10M3.300 17 20.700 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></svg>';
/* illustrated models (original artwork, no third-party images) */
/* ===== Illustrated models (placeholders until real photos are added) ===== */
function fig(o) {
  const out = o.c == "Outerwear",
    t = o.c == "Bottoms" ? "#efeae2" : o.a,
    b = o.c == "Bottoms" ? o.a : "#3a3431",
    k = 'stroke="rgba(0,0,0,.22)"';
  return `<path d="M32 ${out ? 100 : 85}h36l-2 37H52l-2-27-2 27H34z" fill="${b}"/>${o.lg ? `<rect x="40" y="17" width="20" height="28" rx="9" fill="${o.hr}"/>` : ""}<rect x="46" y="29" width="8" height="10" fill="${o.sk}"/><circle cx="50" cy="24" r="8" fill="${o.sk}"/><path d="M41.500 23a8.500 8.500 0 0 1 17 0c-4-4-13-4-17 0z" fill="${o.hr}"/><path d="M32 40 21 84l7 2 9-38zM68 40l11 44-7 2-9-38z" fill="${t}" ${k}/><circle cx="24" cy="88" r="4" fill="${o.sk}"/><circle cx="76" cy="88" r="4" fill="${o.sk}"/><path d="M${out ? "24 104" : "28 86"}L32 40Q50 35 68 40L${out ? "76 104" : "72 86"}Z" fill="${t}" ${k}/>${out ? `<path d="m50 38-8 24 8-6 8 6z" fill="${o.b}"/>` : `<path d="m44 38 6 8 6-8z" fill="${o.sk}"/>`}`;
}
function art(p, i = 0) {
  return PHOTOS
    ? `<img src="${esc((p.img && p.img[i]) || `images/p${p.id}-${i + 1}.jpg`)}" alt="${esc(p.n)}" loading="lazy" data-id="${p.id}" data-i="${i}">`
    : svgArt(p, i);
}
function svgArt(p, i = 0) {
  return `<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: model wearing ${esc(p.n)}" focusable="false"><rect width="100" height="125" fill="${["#d9d4cc", "#cdd3cf", "#dccfc4"][i % 3]}"/><circle cx="50" cy="58" r="44" fill="#fff" opacity=".28"/>${fig(p)}</svg>`;
}
const thumb = (p, i) => `<div class="th">${art(p, i)}</div>`;
const hero = () =>
  `<svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${[
    [24, 12, "#f7f6f3", "#cfc7b8", "#e0ac8b", "#8a5a3a", 1],
    [42, 5, "#ece3d0", "#b9a78c", "#8d5a3c", "#2a1d18", 0],
    [60, 8, "#f5b52a", "#c47d0e", "#f0c4a0", "#6b4a2e", 1],
    [80, 14, "#cdb38f", "#9c8461", "#5e3a28", "#1c1411", 1],
  ]
    .map(
      ([x, y, a, b, sk, hr, lg]) =>
        `<g transform="translate(${x - 25} ${y}) scale(.5)">${fig({ c: "Outerwear", a, b, sk, hr, lg })}</g>`,
    )
    .join("")}</svg><img class="heroimg" src="${HERO_IMG}" alt="" data-hero>`;
const go = (h) => {
  cur = h;
  try {
    history.pushState(null, "", h);
  } catch (e) {}
  route();
};
/* ===== UI helpers ===== */
function toast(t) {
  const e = $("#toast");
  e.textContent = t;
  e.classList.add("show");
  setTimeout(() => e.classList.remove("show"), 1800);
}
function add(id, s) {
  const f = cart.find((i) => i.id == id && i.s == s);
  f ? f.q++ : cart.push({ id: +id, s, q: 1 });
  toast("Added to bag");
  nav();
}
const todo = Object.values(BIZ).some((v) => String(v).startsWith("["));
function nav() {
  sv();
  const r = cur.split("/")[1] || "",
    c = (k) => (r == k ? ' aria-current="page"' : "");
  if (todo)
    console.warn(
      "Some BIZ business details still contain [placeholders]. Fill them in before publishing.",
    );
  $("#fb").textContent = BIZ.name;
  $("#fd").textContent = BIZ.name;
  $("#fl").textContent = `© ${new Date().getFullYear()} ${BIZ.legal}`;
  $("#nav").innerHTML =
    `<div class="nav ${r ? "" : "home"}"><a class="logo" href="#/" aria-label="${esc(BIZ.name)} home">${logoI}<span>${esc(BIZ.name)}</span></a>
<nav class="links" aria-label="Primary"><a href="#/"${c("")}>Home</a><a href="#/catalog"${c("catalog")}>Catalog</a><a href="#/info/contact"${c("info")}>Contact</a></nav>
<form class="search" id="sf" role="search"><label class="sr" for="q">Search products</label><input id="q" type="search" value="${esc(q)}" placeholder="Search fashion items…" autocomplete="off"><button class="ib" type="submit" aria-label="Search">${searchI}</button></form>
<a class="ib" href="#/wishlist" aria-label="Wishlist, ${wish.length} saved">${heartI}${wish.length ? `<b aria-hidden="true">${wish.length}</b>` : ""}</a><a class="ib" href="#/profile" aria-label="Profile">${userI}</a><a class="ib" href="#/cart" aria-label="Bag, ${count()} items">${cartI}${count() ? `<b aria-hidden="true">${count()}</b>` : ""}</a></div>`;
}
/* ===== Reusable components ===== */
const heartB = (p) =>
  `<button class="heart" data-heart="${p.id}" aria-pressed="${wish.includes(p.id)}" aria-label="Save ${esc(p.n)} to wishlist">${heartI}</button>`;
const addB = (p) =>
  `<button class="add" data-add="${p.id}" aria-label="Add ${esc(p.n)} to bag">${cartI}</button>`;
const info = (p) =>
  `<div class="info"><div class="price">${money(p.p)}</div><div class="name">${esc(p.n)}</div></div>`;
const card = (p) =>
  `<article class="card"><a href="#/product/${p.id}" aria-label="${esc(p.n)}">${thumb(p)}</a>${info(p)}${addB(p)}</article>`;
const gcard = (p) =>
  `<article class="card"><a href="#/product/${p.id}" aria-label="${esc(p.n)}">${thumb(p)}</a><div class="row">${info(p)}${heartB(p)}${addB(p)}</div></article>`;
const field = (id, l, t, ac, w, v) =>
  `<div class="f ${w ? "w" : ""}"><label for="${id}">${l}</label><input id="${id}" name="${id}" type="${t}" autocomplete="${ac}" required value="${esc(v || "")}"></div>`;
const head = (t) =>
  `<div class="sec" style="margin-top:50px"><h1 class="display pg">${t}</h1></div>`;
const cats = [...new Set(P.map((p) => p.c))];
const row = (a, b) => `<div class="r"><span>${a}</span><span>${b}</span></div>`;
/* ===== Page views ===== */
const views = {
  "": () => `<section class="hero" aria-labelledby="h0">${hero()}<div class="badge b1">${cats.length} categories</div><div class="badge b2">${P.length} products</div><h1 id="h0" class="sr">${esc(BIZ.name)}: the collection</h1><p class="display" aria-hidden="true">Collection</p></section>
<div class="wrap"><div class="strip">${P.slice(0, 3).map(card).join("")}</div>
<div class="sec"><h2 class="display">Shop by type</h2><a class="btn" href="#/catalog">View all</a></div>
<div class="tiles">${cats.map((c, i) => `<a class="tile" style="background:linear-gradient(150deg,${["#b08d6a,#5a3a26", "#f2b630,#c47d0e", "#7f7a70,#3e3a35"][i % 3]})" href="#/catalog" data-f="${c}"><span class="display">${c}</span></a>`).join("")}</div>
<div class="sec"><h2 class="display">New in</h2></div><div class="strip" style="margin:0">${P.slice(3, 6).map(card).join("")}</div></div>`,
  catalog: () => {
    const l = P.filter(
      (p) =>
        (filter == "All" || p.c == filter) &&
        p.n.toLowerCase().includes(q.toLowerCase()),
    );
    return `<div class="wrap">${head("Catalog")}<div class="chips" role="group" aria-label="Filter by type" style="margin-bottom:12px">${["All", ...cats].map((c) => `<button class="chip" data-f="${c}" aria-pressed="${c == filter}">${c}</button>`).join("")}</div>
<p class="note" role="status">${l.length} item${l.length == 1 ? "" : "s"}${q ? ` for “${esc(q)}”` : ""}</p>${l.length ? `<div class="grid">${l.map(gcard).join("")}</div>` : '<div class="empty"><p>No items match. Clear the search or pick another type.</p></div>'}</div>`;
  },
  product: (id) => {
    const p = find(id);
    return `<div class="wrap"><div class="pd"><div><div class="big th">${art(p, 0)}</div><div class="thumbs">${[1, 2, 0].map((i) => thumb(p, i)).join("")}</div></div>
<div><span class="chip" style="display:inline-block">${p.c}</span><h1 class="display">${esc(p.n)}</h1><div class="price">${money(p.p)}</div>
<fieldset style="border:0;padding:0;margin:0"><legend class="lab">Size</legend><div class="chips">${["XS", "S", "M", "L", "XL"].map((s) => `<button class="sz" data-size="${s}" aria-pressed="${s == size}">${s}</button>`).join("")}</div></fieldset>
<p style="margin:30px 0 0;display:flex;gap:10px"><button class="btn lime full" data-add="${p.id}" data-s="1">Add to bag ${cartI}</button>${heartB(p)}</p>
<div style="margin-top:34px">${p.d ? `<details open><summary>Product details</summary><p>${esc(p.d)}</p></details>` : ""}<details><summary>Delivery and returns</summary><p>See our <a href="#/info/shipping" style="text-decoration:underline">shipping</a> and <a href="#/info/returns" style="text-decoration:underline">returns</a> policies.</p></details></div></div></div>
<div class="sec"><h2 class="display">More to explore</h2></div><div class="strip" style="margin:0">${P.filter(
      (x) => x.id != p.id,
    )
      .slice(0, 3)
      .map(card)
      .join("")}</div></div>`;
  },
  wishlist: () => {
    const l = P.filter((p) => wish.includes(p.id));
    return `<div class="wrap">${head("Wishlist")}${l.length ? `<div class="grid">${l.map(gcard).join("")}</div>` : '<div class="empty"><p>No saved items yet. Use the heart on any piece to keep it here.</p><a class="btn" href="#/catalog">Browse the catalog</a></div>'}</div>`;
  },
  cart: () =>
    `<div class="wrap">${head("Bag")}${
      cart.length
        ? `<div class="two"><div>${cart
            .map((i, k) => {
              const p = find(i.id);
              return `<div class="line">${thumb(p)}<div><strong>${esc(p.n)}</strong><div class="name" style="font-size:1rem">Size ${i.s}</div><div class="qty"><button data-dec="${k}" aria-label="Decrease quantity of ${esc(p.n)}">−</button><span aria-label="Quantity">${i.q}</span><button data-inc="${k}" aria-label="Increase quantity of ${esc(p.n)}">+</button><button class="rm" data-rm="${k}" aria-label="Remove ${esc(p.n)}">Remove</button></div></div><div class="price" style="font-size:1.5rem">${money(p.p * i.q)}</div></div>`;
            })
            .join("")}</div>
<aside class="sum" aria-label="Order summary">${row("Subtotal", money(total()))}${row("Delivery", "Confirmed by email")}<hr><div class="r t"><span>Total</span><span>${money(total())}</span></div><a class="btn lime full" href="#/checkout">Continue to checkout</a></aside></div>`
        : '<div class="empty"><p>Your bag is empty.</p><a class="btn" href="#/catalog">Browse the catalog</a></div>'
    }</div>`,
  checkout: () =>
    `<div class="wrap">${head("Checkout")}${
      cart.length
        ? `<div class="two"><form class="form" id="co" aria-label="Delivery details">${field("nm", "Full name", "text", "name", 1, user && user.name)}${field("em", "Email", "email", "email", 1, user && user.email)}${field("ph", "Phone", "tel", "tel")}${field("pc", "Postcode", "text", "postal-code")}${field("ad", "Street address", "text", "street-address", 1)}${field("ct", "City", "text", "address-level2", 1)}<p class="note w">No payment is taken on this website. After you submit, you send your order request to us by email and we reply with delivery and payment details.</p><p id="cerr" class="err w" role="alert"></p></form>
<aside class="sum" aria-label="Order summary">${cart.map((i) => row(`${esc(find(i.id).n)} (${i.s}) ×${i.q}`, money(find(i.id).p * i.q))).join("")}<hr><div class="r t"><span>Total</span><span>${money(total())}</span></div><button class="btn lime full" type="submit" form="co">Save order request</button></aside></div>`
        : '<div class="empty"><p>Nothing to check out yet.</p><a class="btn" href="#/catalog">Browse the catalog</a></div>'
    }</div>`,
  done: () =>
    `<div class="wrap done"><h1 class="display pg">Order request saved</h1><p>It is saved on this device but <strong>not sent yet</strong>. Send it to us by email and we will reply to confirm availability, delivery and payment.</p>${lastMail ? `<p><a class="btn lime" href="${lastMail}">Email this order to us</a></p>` : '<p class="err">The business email is not configured yet.</p>'}<p><a class="btn line2" href="#/profile">View order history</a></p></div>`,
  profile:
    () => `<div class="wrap">${head(user ? "Hi, " + esc(user.name) : "Profile")}<div class="stats"><div><b>${orders.length}</b>Order requests</div><div><b>${wish.length}</b>Saved items</div><div><b>${count()}</b>In your bag</div></div>
<form class="form" id="pf" style="max-width:560px" aria-label="Your details">${field("pn", "Name", "text", "name", 1, user && user.name)}${field("pe", "Email", "email", "email", 1, user && user.email)}<p class="note w">Saved only in this browser. No password or account is created.</p><button class="btn lime w" type="submit">Save details</button></form>
<h2 class="display" style="font-size:3rem;margin:40px 0 20px">Order history</h2>${orders.length ? orders.map((o) => `<div class="ord"><span><strong>Request #${o.n}</strong><br><span class="name" style="font-size:1rem">${esc(o.d)} · ${o.c} item${o.c > 1 ? "s" : ""}</span></span><span class="price" style="font-size:1.6rem">${money(o.t)}</span></div>`).join("") : '<div class="empty">No order requests yet.</div>'}
<p style="margin-top:40px"><button class="btn line2" data-clear>Delete all data on this device</button></p></div>`,
  info: () => `<div class="wrap info">${head("Info")}
<h2 id="contact" class="display">Contact and business details</h2><dl><dt>Business</dt><dd>${esc(BIZ.legal)}</dd><dt>Address</dt><dd>${esc(BIZ.addr)}</dd><dt>Email</dt><dd>${esc(BIZ.email)}</dd><dt>Phone</dt><dd>${esc(BIZ.phone)}</dd><dt>Registration</dt><dd>${esc(BIZ.reg)}</dd><dt>Support hours</dt><dd>${esc(BIZ.hours)}</dd></dl>
<h2 id="shipping" class="display">Shipping</h2><p>${esc(BIZ.ship)}</p><h2 id="returns" class="display">Returns and refunds</h2><p>${esc(BIZ.ret)}</p>
<h2 id="privacy" class="display">Privacy</h2><p>This website keeps your bag, wishlist, profile (name and email) and order history only in your browser's local storage on this device. Nothing is sent to a server. The site uses no cookies, analytics, advertising, or third-party scripts, fonts or embeds. The product and banner photos are loaded from Unsplash's image servers (images.unsplash.com), which can see your IP address and browser details when the photos load. If you choose to email an order, your details go to us through your own email app. You can delete everything at any time from the Profile page.</p>
<h2 id="terms" class="display">Terms of sale</h2><p>Order requests are not binding until we confirm them by email. Prices are shown in ${esc(BIZ.cur)}.\n${esc(BIZ.terms)}</p></div>`,
};
/* ===== Router ===== */
const titles = {
  "": "Collection",
  catalog: "Catalog",
  product: "Product",
  cart: "Bag",
  checkout: "Checkout",
  done: "Order request saved",
  profile: "Profile",
  wishlist: "Wishlist",
  info: "Info",
};
function route() {
  let [, r = "", a] = cur.split("/");
  if (!views[r]) r = "";
  nav();
  $app.innerHTML = views[r](a);
  document.title = `${titles[r]} — ${BIZ.name}`;
  if (r == "info" && a && $("#" + a)) $("#" + a).scrollIntoView();
  else window.scrollTo(0, 0);
  if (!first) {
    const h = $app.querySelector("h1,h2");
    if (h) {
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
    }
  }
  first = false;
}
document.addEventListener(
  "error",
  (e) => {
    const t = e.target;
    if (!t || t.tagName != "IMG") return;
    if (t.dataset.hero !== undefined) t.remove();
    else if (t.dataset.id)
      t.outerHTML = svgArt(find(t.dataset.id), +t.dataset.i);
  },
  true,
);
addEventListener("hashchange", () => {
  cur = location.hash || "#/";
  route();
});
addEventListener("popstate", () => {
  cur = location.hash || "#/";
  route();
});
/* ===== Event handlers ===== */
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  if (f.id == "sf") {
    q = $("#q").value.trim();
    filter = "All";
    go("#/catalog");
  }
  if (f.id == "pf") {
    const g = (k) => f.elements[k].value;
    user = { name: g("pn").trim(), email: g("pe").trim() };
    toast("Details saved");
    route();
  }
  if (f.id == "co") {
    const g = (k) => f.elements[k].value;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    const n = 1000 + orders.length + 1,
      d = new Date().toLocaleDateString(),
      t = total(),
      c = count(),
      lines = cart
        .map(
          (i) =>
            `- ${find(i.id).n} (size ${i.s}) x${i.q}: ${money(find(i.id).p * i.q)}`,
        )
        .join("\n");
    const body = `Order request #${n}\n\n${lines}\n\nTotal: ${money(t)}\n\nName: ${g("nm")}\nEmail: ${g("em")}\nPhone: ${g("ph")}\nAddress: ${g("ad")}, ${g("ct")} ${g("pc")}`;
    lastMail = /^\[/.test(BIZ.email)
      ? ""
      : `mailto:${BIZ.email}?subject=${encodeURIComponent("Order request #" + n)}&body=${encodeURIComponent(body)}`;
    orders.unshift({ n, d, t, c });
    cart.length = 0;
    nav();
    $app.innerHTML = views.done();
    window.scrollTo(0, 0);
    $app.querySelector("h1").focus();
  }
});
document.addEventListener("click", (e) => {
  const t = e.target.closest(
    "[data-add],[data-f],[data-size],[data-inc],[data-dec],[data-rm],[data-heart],[data-clear]",
  );
  if (!t) return;
  const d = t.dataset;
  if (d.add !== undefined) {
    add(d.add, d.s ? size : "M");
    return;
  }
  if (d.heart) {
    const i = wish.indexOf(+d.heart);
    i < 0 ? wish.push(+d.heart) : wish.splice(i, 1);
    toast(i < 0 ? "Saved to wishlist" : "Removed from wishlist");
    if (cur == "#/wishlist") route();
    else {
      nav();
      document
        .querySelectorAll(`[data-heart="${d.heart}"]`)
        .forEach((b) => b.setAttribute("aria-pressed", i < 0));
    }
    return;
  }
  if (d.f) {
    filter = d.f;
    if (!t.matches("a")) route();
  }
  if (d.size) {
    size = d.size;
    document
      .querySelectorAll(".sz")
      .forEach((b) => b.setAttribute("aria-pressed", b.dataset.size == size));
  }
  if (d.inc !== undefined) {
    cart[d.inc].q++;
    route();
  }
  if (d.dec !== undefined) {
    if (--cart[d.dec].q < 1) cart.splice(d.dec, 1);
    route();
  }
  if (d.rm !== undefined) {
    cart.splice(d.rm, 1);
    route();
  }
  if (d.clear !== undefined) {
    if (!t.dataset.sure) {
      t.dataset.sure = 1;
      t.textContent = "Click again to confirm deletion";
      return;
    }
    cart.length = wish.length = orders.length = 0;
    user = null;
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith("ing_"))
        .forEach((k) => localStorage.removeItem(k));
    } catch (x) {}
    route();
    toast("Data deleted");
  }
});
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const h = a.getAttribute("href");
  if (h.startsWith("#/")) {
    e.preventDefault();
    go(h);
  } else if (h == "#app") {
    e.preventDefault();
    $app.focus();
  }
});
route();
