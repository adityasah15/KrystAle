// Smooth Reveal Animation on Scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Trigger reveal once on load
reveal();

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    if(window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
    } else {
        header.style.background = 'transparent';
    }
});

/* --- CHECKOUT LOGIC --- */

// Simple function to simulate order processing
function processOrder(e) {
    e.preventDefault();
    // Show the modal
    const modal = document.getElementById('successModal');
    if(modal) {
        modal.style.display = 'flex';
    }
}

// Function to update the summary image based on selection
function updateImage() {
    const select = document.getElementById('flavorSelect');
    const img = document.querySelector('.summary-img');
    const name = document.getElementById('productName');
    
    if (select && img && name) {
        if(select.value === 'citrus') {
            img.src = 'product-citrus.png';
            name.innerText = 'Citrus Spark (12-Pack)';
        } else if (select.value === 'berry') {
            img.src = 'product-berry.png';
            name.innerText = 'Midnight Berry (12-Pack)';
        } else if (select.value === 'mint') {
            img.src = 'product-mint.png';
            name.innerText = 'Arctic Mint (12-Pack)';
        }
    }
}