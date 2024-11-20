function displayCart(){
    str=``
    for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i);
    
        const prod = JSON.parse(localStorage.getItem(key))
        str+=`<div style="display : flex; justify-content : space-between">
        <h2>${prod.title}</h2>
        <p>Price: $${prod.price}</p>
        <button onclick = "removeProd(${prod.id})">Remove</button>
        </div>`
    }
    document.getElementById("con").innerHTML=str
}

displayCart()

function removeProd(){
    console.log(id);
    localStorage.removeItem(id);
    displayCart();
    
}