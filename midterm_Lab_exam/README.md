# Assignment 2 – Samsung Shop (Static, Responsive Pages)

**Name:** [Your name]
**Course:** [Course name and code]
**Folder:** `assignment-2/`

## AI use disclosure
This project was built with help from Claude (an AI assistant), as allowed by my instructor. I reviewed, tested and edited the code myself.

## Reference site
- **Name:** Samsung
- **URL:** https://www.samsung.com/
- **Screenshot:** ![Samsung reference site](screenshots/reference-samsung.png)

My site is modeled on Samsung's online store: the header with the SAMSUNG wordmark and nav, the grey promo bar, the full-width product banner, and the product page with a title bar and Buy Now button.

## What I built
| File | Description |
|---|---|
| `index.html` | Homepage with header, promo bar, hero banner, features strip, a grid of 10 product cards (5 phones, 5 watches), chat widget and footer |
| `product.html` | Product detail page for the Galaxy S26 Ultra: larger image, name, price, description, specs, quantity selector, Add to Cart button, related products |
| `css/style.css` | Custom styling, media queries and animations on top of Bootstrap |
| `images/` | Product images |
| `screenshots/` | Reference screenshot and responsive screenshots |

Every product card links to the same `product.html`, so there is one detail page for the site, as the assignment asks.

There is **no JavaScript**. The cart icon, Add to Cart buttons, Buy Now button, search and chat are visual only.

## Framework: Bootstrap 5.3.3
Bootstrap is loaded from the jsDelivr CDN (CSS only) and does real layout work:

- **Navbar:** `navbar`, `navbar-brand`, `navbar-nav`, `nav-link`, with `flex-wrap` and `order-*` classes so the links move under the logo on phones.
- **Product grid:** `row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4`.
- **Features strip and footer:** `row-cols-2 row-cols-md-4`.
- **Product page layout:** `col-12 col-md-6` for the image and details split.
- **Utilities:** Flexbox classes such as `d-flex`, `justify-content-between`, `gap-*`, plus spacing and text utilities.

The layout uses Flexbox and CSS Grid (the hero uses CSS Grid to place the text on top of the image). There are no tables and no absolute-positioned layouts.

## Responsive behaviour
| Width | Product grid | Header | Product page |
|---|---|---|---|
| ~375px (phone) | 1 column | Logo and icons on row 1, links on row 2 | Image stacked above details |
| ~768px (tablet) | 2 columns | Logo and icons on row 1, links on row 2 | Image left, details right |
| 1200px+ (desktop) | 5 columns | Logo, links and icons on one row | Image left, details right |

Custom media queries in `css/style.css` also handle the hero (text moves below the image on phones) and smaller headings.

## Animations (CSS only)
Page-load animations for the header and hero, scroll-triggered reveals for cards, hover effects on cards, buttons and icons, and a floating chat avatar. They are turned off automatically for users with "reduce motion" enabled.

## Screenshots
Saved in `screenshots/`:

| Page | Phone (375px) | Tablet (768px) | Desktop (1200px) |
|---|---|---|---|
| Homepage | `home-375.png` | `home-768.png` | `home-1200.png` |
| Product page | `product-375.png` | `product-768.png` | `product-1200.png` |

## Folder structure
```
assignment-2/
├── index.html
├── product.html
├── css/
│   └── style.css
├── images/
│   └── (product images)
├── screenshots/
│   └── (reference and responsive screenshots)
├── README.md
└── (completion PDF)
```

## How to run
Open `index.html` in a browser. An internet connection is needed for the Bootstrap and Google Fonts links. Click any product to open `product.html`.

## Credits
- Layout framework: [Bootstrap](https://getbootstrap.com/)
- Font: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Product images, names and the Samsung brand belong to Samsung and are used only for this class project. This is not an official Samsung site, and prices are sample values.