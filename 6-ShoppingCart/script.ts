
interface Product{
    name: string,
    price: number,
}

var products: Product[] = [
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

]
var cartItems: Product[]=[];
var total: number = 0

function addToCart(index:number) {
    cartItems.push(products[index])
    total+=products[index].price
    displayItems()
}

function removeFromCart(index:number) {
    total-=cartItems[index].price
    cartItems.splice(index,1)
    displayItems()
}

function displayItems()
{
    document.getElementById('cart').innerHTML = "<br>Total Value:"+total+"<br><br><br>";

    for (let index = 0; index < cartItems.length; index++) {
        let cart = document.getElementById('cart');
        cart.innerHTML += "<div onclick='removeFromCart("+index+")'>"+cartItems[index].name+" "+cartItems[index].price+"</div>";
    }


}



