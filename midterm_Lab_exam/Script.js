
// Midterm Task 3 - cart badge and mini cart (plain JavaScript)
// N = 95  ->  one product can be added at most (95 % 4) + 2 = 5 times
const MAX_PER_PRODUCT = (95 % 4) + 2;
 
const cart = [];   // every item is { name, price }
 
const addButtons = document.querySelectorAll('#products .product-card .btn');
const cartBtn    = document.getElementById('cart-btn');
const miniCart   = document.getElementById('mini-cart');
const cartList   = document.getElementById('cart-list');
const cartEmpty  = document.getElementById('cart-empty');
const cartTotal  = document.getElementById('cart-total');
const cartCount  = document.getElementById('cart-count');
 
// read the name and price from the card itself
function readCard(button) {
  const card  = button.closest('.product-card');
  const name  = card.querySelector('.card-title').textContent.trim();
  const price = parseFloat(card.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
  return { name, price };
}
 
// how many of this product are in the cart
function countOf(name) {
  return cart.filter(item => item.name === name).length;
}
 
// every button shows "Limit reached" (disabled) when its product hit the limit, otherwise "Add to Cart"
function updateButtons() {
  addButtons.forEach(button => {
    const full = countOf(readCard(button).name) >= MAX_PER_PRODUCT;
    button.disabled = full;
    button.textContent = full ? 'Limit reached' : 'Add to Cart';
  });
}
 
// redraw badge, list, total and buttons from the cart array
function render() {
  cartCount.textContent = cart.length;
  cartEmpty.hidden = cart.length > 0;
  cartList.innerHTML = cart.map((item, i) => `
    <li class="mini-item">
      <span class="mini-name">${item.name}</span>
      <span>$${item.price.toLocaleString('en-US')}</span>
      <button type="button" class="btn btn-sm btn-outline-danger" data-index="${i}">Remove</button>
    </li>`).join('');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = '$' + total.toLocaleString('en-US');
  updateButtons();
}
 
// Add to Cart
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = readCard(button);
    if (countOf(product.name) >= MAX_PER_PRODUCT) return;
    cart.push(product);
    render();
  });
});
 
// Remove (one listener on the list handles every Remove button)
cartList.addEventListener('click', event => {
  const removeBtn = event.target.closest('button[data-index]');
  if (!removeBtn) return;
  cart.splice(Number(removeBtn.dataset.index), 1);
  render();
});
 
// cart icon opens / closes the mini cart (the link still goes to checkout.html if JavaScript is off)
cartBtn.addEventListener('click', event => {
  event.preventDefault();
  miniCart.hidden = !miniCart.hidden;
});
 
render();
 
