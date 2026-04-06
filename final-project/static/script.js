var x = 5;
var y = 7;
var z = x + y;
console.log(z); 

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); 

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y); 
sumnPrint(A, B); 

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}
//findTheBanana(L1);
//findTheBanana(L2);


function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}
// findTheBanana(L1);
// findTheBanana(L2);

function greeting() {
    const greetElement = document.getElementById("greeting");

    if (!greetElement) return;

    const now = new Date();
    const hour = now.getHours();
    let greetText = "";

    if (hour < 5 || hour >= 20) {
        greetText = "Good night";
    } else if (hour < 12) {
        greetText = "Good morning";
    } else if (hour < 18) {
        greetText = "Good afternoon";
    } else {
        greetText = "Good evening";
    }

    greetElement.innerHTML = greetText + " and welcome to the MonoMuse Museum!!";
}
greeting();

function addYear() {
    const yearElement = document.getElementById("copyYear");
    if (!yearElement) return;
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}
addYear();

function ActiveNav() {
    const navLinks = document.querySelectorAll('.nav_bar a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add("active");
        }
    });
}

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#longIntro").show();  
        $("#readLess").show();   
        $(this).hide();          
    });

    $("#readLess").click(function() {
        $("#longIntro").hide(); 
        $("#readMore").show();   
        $(this).hide();          
    });
});

function showCheckout() {
    // Reveal the hidden checkout section
    const checkout = document.getElementById("checkoutSection");
    if (checkout) {
        checkout.style.display = "block";
        // This scrolls the page down to the form automatically
        checkout.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav_bar") {
        x.className += " responsive";
    } else {
        x.className = "nav_bar";
    }
}

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return; 

    var map = L.map('map').setView([40.4432, -79.9428], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([40.4432, -79.9428]).addTo(map)
        .bindPopup('<b>MonoMuse Museum</b><br>Art meets Tech.')
        .openPopup();
}

greeting();
addYear();
ActiveNav();
initMap();