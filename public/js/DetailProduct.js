let products = null;
fetch('Product.json')
.then(response => response.json())
.then(data => {
    products = data;
    showDetail();
})

function showDetail (){
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisproduct = this.product.filter(value => {
        return value.id == productId
    })[0];
    if(!thisproduct){
        window.location.href =  "/";
    }

    detail.querySelector('.image img').src = thisproduct.image;
    detail.querySelector('.name').innerText = thisproduct.name;
    detail.querySelector('.price').innerText = thisproduct.price;
    detail.querySelector('.description').innerText = thisproduct.description;
    let listProduct = document.querySelector('.list');
    (products.filter(value => value.id != productId)).forEach(products => {
        let newProduct = document.createElement('a');
        newProduct.href = "/detailProduct.html?id" = products.id;
        newProduct.innerHTML = `
        `;

    })
}