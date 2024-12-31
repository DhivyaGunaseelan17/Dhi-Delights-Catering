var img = document.getElementById('img');
var slides = ['images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg', 'images/food8.jpg', 'images/food9.jpg', 'images/food10.jpg', 'images/food11.jpg'];
var start = 0;

function slider() {
    if (start < slides.length) {
        start = start + 1;
    } else {
        start = 1;
    }
    img.innerHTML = "<img src='" + slides[start - 1] + "'>";
}

setInterval(slider, 2000);
