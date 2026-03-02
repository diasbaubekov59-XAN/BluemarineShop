// Простой слайдер hero
const heroImg = document.querySelector('.hero-slide img');
const images = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1920',
    'https://images.unsplash.com/photo-1529139578434-69e1934e8ff3?w=1920'
];
let imgIndex = 0;
setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    heroImg.src = images[imgIndex];
}, 4000);

// Добавьте товары в grid (как в Zara)
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.products-grid');
    const products = [
        {img:'https://images.unsplash.com/photo-1542272604-787c3835535a?w=400', name:'Куртка', price:'45 900 ₸'},
        {img:'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400', name:'Рубашка', price:'18 900 ₸'},
        {img:'https://images.unsplash.com/photo-1574676309321-b1d6732e7ad1?w=400', name:'Платье', price:'37 900 ₸'},
        {img:'https://images.unsplash.com/photo-1548036300-ef33ef0d3336?w=400', name:'Джинсы', price:'24 900 ₸'}
    ];
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `<img src="${p.img}" alt="${p.name}">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="price">${p.price}</div>
            </div>`;
        grid.appendChild(div);
    });
});

// Корзина (простая)
document.querySelector('.cart').onclick = () => alert('Корзина: 3 товара на 109 700 ₸');
