document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    // Retrieve cart items and total price from sessionStorage
    const cartItemsData = JSON.parse(sessionStorage.getItem('cartItems'));
    const totalPrice = sessionStorage.getItem('totalPrice');

    // Display cart items and total price
    if (cartItemsData && totalPrice) {
        cartItemsData.forEach(function (item) {
            const row = document.createElement('tr');
            const itemNameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const actionCell = document.createElement('td');
            const removeButton = document.createElement('button');

            itemNameCell.textContent = item.itemName;
            priceCell.textContent = item.itemPrice;

            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function () {
                // Remove item from cart and update UI
                row.remove();
                // You can add additional logic here, such as updating the total price
            });

            actionCell.appendChild(removeButton);

            row.appendChild(itemNameCell);
            row.appendChild(priceCell);
            row.appendChild(actionCell);

            cartItemsContainer.appendChild(row);
        });

        totalPriceDisplay.textContent = totalPrice;
    } else {
        cartItemsContainer.innerHTML = '<tr><td colspan="3">No items in cart</td></tr>';
    }

    // Clear sessionStorage after displaying the data (optional)
    sessionStorage.removeItem('cartItems');
    sessionStorage.removeItem('totalPrice');
});
document.getElementById("confirm-order-btn").addEventListener("click", function() {
    // Add your code here to handle the confirmation logic
    // For example, you could send the order details to a server or display a confirmation message

    // Redirect to the address page with a message
    var message = "Please Wait! Redirecting to Address Page";
    window.location.href = "address_page.html";
});
