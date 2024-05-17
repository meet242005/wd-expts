function showProduct() {
    //Product 1
    var product1 = {
        name: 'Apple',
        price: 50,
        description: 'It is a fruit'
    };
    //Product 2
    var product2 = {
        name: 'Mango',
        price: 30,
        description: 'It is also a fruit'
    };
    document.getElementsByTagName('table')[0].innerHTML +=
        "<tr><td>" + product1.name + "</td><td>" + product1.price + "</td><td>" + product1.description + "</td> </tr>";
    document.getElementsByTagName('table')[0].innerHTML +=
        "<tr><td>" + product2.name + "</td><td>" + product2.price + "</td><td>" + product2.description + "</td> </tr>";
}
addEventListener("load", showProduct);
