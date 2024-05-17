var products = [
    {
        name: 'Apple',
        price: 50,
    },
    {
        name: 'Mango',
        price: 30,
    },
    {
        name: 'Banana',
        price: 40,
    }
];
var cartItems = [];
var total = 0;
function addToCart(index) {
    cartItems.push(products[index]);
    total += products[index].price;
    displayItems();
}
function removeFromCart(index) {
    total -= cartItems[index].price;
    cartItems.splice(index, 1);
    displayItems();
}
function displayItems() {
    document.getElementById('cart').innerHTML = "<br>Total Value:" + total + "<br><br><br>";
    for (var index = 0; index < cartItems.length; index++) {
        var cart = document.getElementById('cart');
        cart.innerHTML += "<div onclick='removeFromCart(" + index + ")'>" + cartItems[index].name + " " + cartItems[index].price + "</div>";
    }
}
