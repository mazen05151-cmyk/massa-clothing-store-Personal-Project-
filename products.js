const fallbackProducts = [
    { 
        name: "Comfy Pajama Set", 
        price: "350 EGP", 
        category: "Women's Clothes", 
        image: "Coordinated pajama fun with friends.png", 
        discount: "10%" 
    },
    { 
        name: "red and blue ig? lmao Set", 
        price: "280 EGP", 
        category: "Women's Clothes", 
        image: "Stylish loungewear in a bright studio.png", 
        discount: "" 
    },
    { 
        name: "Blonde Pijama Set", 
        price: "800 EGP", 
        category: "Children's Clothes", 
        image: "Relaxed moments in coordinated loungewear.png", 
        discount: "40%" 
    },
];

function renderProducts(products) {
    const container = document.querySelector('.recommended-cards');
    container.innerHTML = '';
    products.forEach(product => {
        const name = product.name;
        const price = product.price ? `${product.price} EGP` : '';
        const category = product.category || '';
        const image = product.imageUrl || product.image || '';
        const discount = product.discount || '';

        container.innerHTML += `
            <div class="product-card">
                <div class="overlay">
                    <div class="product-thumbnail">
                        <img src="${image}" alt="${name}">
                    </div>
                    ${discount ? `<span class="discount">${discount}</span>` : ''}
                </div>
                <div class="product-info">
                    <span>${category}</span>
                    <a href="#">${name}</a>
                    <h4>${price}</h4>
                </div>
                <div class="icons">
                    <a href="#" class="btn">Order Now!</a>
                </div>
            </div>
        `;
    });
}

fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data => renderProducts(data))
    .catch(() => renderProducts(fallbackProducts));