document.addEventListener('DOMContentLoaded', function () {
    // Retrieve address details from sessionStorage
    const fullName = sessionStorage.getItem('fullName');
    const addressLine1 = sessionStorage.getItem('addressLine1');
    const addressLine2 = sessionStorage.getItem('addressLine2');
    const city = sessionStorage.getItem('city');
    const state = sessionStorage.getItem('state');
    const zipCode = sessionStorage.getItem('zipCode');

    // Display address details
    const addressDetailsContainer = document.getElementById('address-details');
    if (fullName && addressLine1 && city && state && zipCode) {
        const addressDetailsHTML = `
            <p>Full Name: ${fullName}</p>
            <p>Address Line 1: ${addressLine1}</p>
            <p>Address Line 2: ${addressLine2 || 'N/A'}</p>
            <p>City: ${city}</p>
            <p>State: ${state}</p>
            <p>Zip Code: ${zipCode}</p>
        `;
        addressDetailsContainer.innerHTML = addressDetailsHTML;
    }
});