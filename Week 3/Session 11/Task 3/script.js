const products = [
    { name: "Nike Air Max", price: 1200, color: "red", brand: "Nike", rating: 4 },
    { name: "Adidas Ultraboost", price: 1500, color: "blue", brand: "Adidas", rating: 5 },
    { name: "Puma Runner", price: 800, color: "black", brand: "Puma", rating: 3 },
    { name: "Nike Revolution", price: 600, color: "green", brand: "Nike", rating: 4 },
    { name: "Adidas Street", price: 900, color: "black", brand: "Adidas", rating: 2 }
];

const productList = document.getElementById("productList");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const ratingFilter = document.getElementById("ratingFilter");
const clearFilters = document.getElementById("clearFilters");
let selectedColor = null;

// Display products
function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <h4>${product.name}</h4>
                <div class="price">$${product.price}</div>
                <div class="rating">${"★".repeat(product.rating)}</div>
                <p>Brand: ${product.brand}</p>
                <p>Color: ${product.color}</p>
            </div>
        `;
    });
}

// Filter function
function applyFilters() {
    const maxPrice = parseInt(priceRange.value);
    const minRating = parseInt(ratingFilter.value);
    const selectedBrands = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
                                .map(cb => cb.value);

    let filtered = products.filter(product =>
        product.price <= maxPrice &&
        product.rating >= minRating &&
        (selectedColor ? product.color === selectedColor : true) &&
        (selectedBrands.length ? selectedBrands.includes(product.brand) : true)
    );

    displayProducts(filtered);
}

// Price slider
priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
    applyFilters();
});

// Rating filter
ratingFilter.addEventListener("change", applyFilters);

// Brand filter
document.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", applyFilters);
});

// Color filter
document.querySelectorAll(".color-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
        if (selectedColor === this.dataset.color) {
            selectedColor = null;
        } else {
            selectedColor = this.dataset.color;
            this.classList.add("active");
        }
        applyFilters();
    });
});

// Clear filters
clearFilters.addEventListener("click", () => {
    priceRange.value = 2000;
    priceValue.textContent = 2000;
    ratingFilter.value = 0;
    selectedColor = null;
    document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
    document.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("active"));
    applyFilters();
});

// Initial load
displayProducts(products);
