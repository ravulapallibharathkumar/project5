document.addEventListener('DOMContentLoaded', () => {
    // Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Load cart from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get product info
            const productItem = button.parentElement;
            const productId = productItem.getAttribute('data-id');
            const productName = productItem.getAttribute('data-name');
            const productPrice = productItem.getAttribute('data-price');

            // Create product object
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            };

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                // If the product is already in the cart, increase the quantity
                existingProduct.quantity += 1;
            } else {
                // Otherwise, add the product to the cart
                cart.push(product);
            }

            // Save cart back to local storage
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(${productName} has been added to your cart!);
   });
});
});