// Script for opening and closing the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Purchase function to simulate buying a product
function purchase(productName, price) {
    alert(`You are purchasing ${productName} for $${price}. Please proceed to checkout.`);
    // In a real scenario, redirect to a payment page or integrate PayPal/Stripe API
}

