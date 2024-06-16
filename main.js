function postProduct() {
    // Get the values from the form
    const sellerName = document.getElementById('sellername').value;
    const sellerNum = document.getElementById('sellernum').value;
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('Location').value;
    const productDetail = document.getElementById('productDetail').value;
    const img1 = document.getElementById('img1').value;
    const img2 = document.getElementById('img2').value;
    const img3 = document.getElementById('img3').value;

    // Create a product object
    const product = {
        sellername: sellerName,
        sellernum: sellerNum,
        product: productName,
        price: price,
        location: location,
        description: productDetail,
        image1: img1,
        image2: img2,
        image3: img3
    };

    // Get existing products from localStorage
    let storedProducts = localStorage.getItem("DATA");
    let productsArray = storedProducts ? JSON.parse(storedProducts) : [];

    // Add new product to array
    productsArray.push(product);

    // Save updated array back to localStorage
    localStorage.setItem("DATA", JSON.stringify(productsArray));

    // Optionally, clear the form after submission
    document.getElementById('sellForm').reset();

    // Add the product to the displayed product list
    displayProducts();
}

function displayProducts() {
    var storedProducts = localStorage.getItem("DATA");
    var productsArray = storedProducts ? JSON.parse(storedProducts) : [];

    var container = document.getElementById("userProductContainer");
    container.innerHTML = ""; // Clear the container

    productsArray.forEach(function (product) {
        var productCard = document.createElement("div");
        productCard.className = "ad-card";
        productCard.innerHTML = `
            <img src="${product.image1}" alt="${product.product}">
            <p class="pricing"> Rs. ${product.price} <span class="heart-icon"> <i class="fa-regular fa-heart"></i> </span> </p>
            <div class="ad-desc">
                <p>${product.product}</p>
            </div>
            <div class="location">
                <p>${product.location}</p>
                <div class="small-txt">
                    <p> Posted just now</p>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Call displayProducts when the page loads
window.onload = function () {
    displayProducts();

window.location.href = "user.html";

};
