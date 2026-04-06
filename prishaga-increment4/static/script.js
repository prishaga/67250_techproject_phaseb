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