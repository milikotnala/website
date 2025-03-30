let cart = [];

function addToCart(id, name, price) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total;
}
