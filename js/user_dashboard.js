const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

//switch
document.addEventListener('DOMContentLoaded', function () {
    const switchButtons = document.querySelectorAll('.switch-btn');
    const menuLists = document.querySelectorAll('.menu-list');

    switchButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const mode = this.dataset.mode;
            switchMode(mode);
        });
    });

    function switchMode(mode) {
        switchButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        menuLists.forEach(function(menu) {
            menu.style.display = 'none';
        });

        const selectedMenu = document.getElementById(`${mode}-menu`);
        selectedMenu.style.display = 'block';

        document.querySelector(`.switch-btn[data-mode="${mode}"]`).classList.add('active');
    }
});

//add to cartdocument.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-btn');
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    const placeOrderButton = document.getElementById('place-order-btn');
	
    let totalPrice = 0;

    orderButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const menuItem = this.parentNode;
            const itemName = menuItem.querySelector('h2').textContent;
            const itemPrice = parseFloat(menuItem.querySelector('.price').textContent.replace('Rs. ', ''));
            totalPrice += itemPrice;

            const cartItem = document.createElement('li');
            let menuType;
            const menuSection = menuItem.closest('.menu-list').id; // Get the menu section id

            // Determine the menu type based on the menu section id
            switch (menuSection) {
                case 'breakfast-menu':
                    menuType = 'Breakfast';
                    break;
                case 'lunch-menu':
                    menuType = 'Lunch';
                    break;
                case 'dinner-menu':
                    menuType = 'Dinner';
                    break;
                case 'starter-menu':
                    menuType = 'Starters';
                    break;
                case 'berevages-menu':
                    menuType = 'Beverages';
                    break;
                default:
                    menuType = 'Unknown';
            }

            cartItem.textContent = `${menuType}: ${itemName} - Rs. ${itemPrice}`;
            cartItems.appendChild(cartItem);
			

            totalPriceDisplay.textContent = totalPrice;

			
        });
    });

        

    placeOrderButton.addEventListener('click', function () {
         // Store cart items, total price, and menu types in sessionStorage
    const cartItemsData = [];
    cartItems.querySelectorAll('li').forEach(function (item) {
        const menuItem = {
            menuType: item.dataset.menuType,
            itemName: item.textContent.split(': ')[1].split(' - ')[0], // Extract item name
            itemPrice: parseFloat(item.textContent.split(' - Rs. ')[1]) // Extract item price
        };
        cartItemsData.push(menuItem);
    });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
    sessionStorage.setItem('totalPrice', totalPrice);

    // Redirect to the place order page
    window.location.href = 'place_order.html';
});