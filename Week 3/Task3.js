const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const colorFilter = document.getElementById("colorFilter");
const brandFilter = document.getElementById("brandFilter");
const ratingFilter = document.getElementById("ratingFilter");

const products = document.querySelectorAll(".product");

priceValue.textContent = priceRange.value;

function filterProducts(){

    const maxPrice = priceRange.value;
    const color = colorFilter.value;
    const brand = brandFilter.value;
    const rating = ratingFilter.value;

    products.forEach(product => {

        const productPrice = product.dataset.price;
        const productColor = product.dataset.color;
        const productBrand = product.dataset.brand;
        const productRating = product.dataset.rating;

        let visible = true;

        if(productPrice > maxPrice) visible = false;
        if(color !== "all" && productColor !== color) visible = false;
        if(brand !== "all" && productBrand !== brand) visible = false;
        if(productRating < rating) visible = false;

        product.style.display = visible ? "block" : "none";
    });
}

priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
    filterProducts();
});

colorFilter.addEventListener("change", filterProducts);
brandFilter.addEventListener("change", filterProducts);
ratingFilter.addEventListener("change", filterProducts);
