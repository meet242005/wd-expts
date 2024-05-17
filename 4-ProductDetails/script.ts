
interface Product{
    name: string,
    price: number,
    description: string
}

function showProduct():void {
    
    //Product 1
    let product1:Product = {
        name: 'Apple',
        price: 50,
        description: 'It is a fruit'
    }

    //Product 2
    let product2:Product = {
        name: 'Mango',
        price: 30,
        description: 'It is also a fruit'
    }

    document.getElementsByTagName('table')[0].innerHTML += 
    "<tr><td>"+product1.name+"</td><td>"+product1.price+"</td><td>"+product1.description+"</td> </tr>";

    document.getElementsByTagName('table')[0].innerHTML += 
    "<tr><td>"+product2.name+"</td><td>"+product2.price+"</td><td>"+product2.description+"</td> </tr>";
}

addEventListener("load",showProduct)
