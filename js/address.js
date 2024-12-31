
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart items and total price from sessionStorage
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    const totalPrice = sessionStorage.getItem('totalPrice');

    // Reference the place order details container
    const placeOrderDetailsContainer = document.getElementById('place-order-details');

    // If cart items and total price exist, construct the HTML content
    if (cartItems && totalPrice) {
        let placeOrderDetailsHTML = '<ul>';
        cartItems.forEach(function (item) {
            placeOrderDetailsHTML += `<li>${item.itemName}: ${item.itemPrice}</li>`;
        });
        placeOrderDetailsHTML += `</ul><p>Total Price: ${totalPrice}</p>`;

        // Populate the place order details container
        placeOrderDetailsContainer.innerHTML = placeOrderDetailsHTML;
    } else {
        // If no items are found, display a message
        placeOrderDetailsContainer.innerHTML = '<p>No items in the order</p>';
    }
});

// Function to store form data in session storage
function storeFormData(fullName, addressLine1, addressLine2, city, state, zipCode) {
    sessionStorage.setItem('fullName', fullName);
    sessionStorage.setItem('addressLine1', addressLine1);
    sessionStorage.setItem('addressLine2', addressLine2);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('state', state);
    sessionStorage.setItem('zipCode', zipCode);
}

// Add event listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.getElementById("address-form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form inputs
        const fullName = document.getElementById("full-name").value;
        const addressLine1 = document.getElementById("address-line-1").value;
        const addressLine2 = document.getElementById("address-line-2").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipCode = document.getElementById("zip-code").value;

        // Perform validation
        if (!fullName.trim() || !addressLine1.trim() || !city.trim() || !state.trim() || !zipCode.trim()) {
            alert("Please fill in all required fields.");
            return;
        }

        // Store the form data in session storage
        storeFormData(fullName, addressLine1, addressLine2, city, state, zipCode);

        // Redirect to order confirmation page
        window.location.href = "order_confirmation.html";
    });
});