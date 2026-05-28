   /* =========================
                PRODUCTS DATA
        ========================== */

      const products = [

  {
    id: 1,
    title: "URBAN LUX HIGH CHAIR",
    category: "sale",
    price: 2668.15,
    image: "assets/luxchair.png",
    sale: true
  },

  {
    id: 2,
    title: "MODERN BLACK HANGING LIGHT",
    category: "light",
    price: 1595.6,
    image: "assets/hanginglight.png",
    sale: true
  },

  {
    id: 3,
    title: "METRO FUSION DESK",
    category: "desk",
    price: 2238.3,
    image: "assets/table.png",
    sale: true
  },

  {
    id: 4,
    title: "LUMIN DESK LAMP",
    category: "light",
    price: 1477.8,
    image: "assets/desklamp.png",
    sale: false
  },

  {
    id: 5,
    title: "TIMELESS EDGE HANGING CLOCK",
    category: "Clock",
    price: 1071.6,
    image: "assets/clock.png",
    sale: true
  },

  {
    id: 6,
    title: "ZENITH MODERN SOFA",
    category: "sofa",
    price: 2569.59,
    image: "assets/SOFA2.png",
    sale: false
  },

  /* THIRD ROW */

 

  {
    id: 7,
    title: "HANGING LIGHT",
    category: "sale",
    price: 1410.99,
    image: "assets/hanginglight2.png",
    sale: true
  },
   {
    id: 8,
    title: "NOVA CHAIR",
    category: "chair",
    price: 1870.45,
    image: "assets/novachair.png",
    sale: true
  },

  {
    id: 9,
    title: "ZENITH PENDANT LIGHT",
    category: "light",
    price: 1180.25,
    image: "assets/pendantlight.png",
    sale: true
  }

];

      /* =========================
                RENDER PRODUCTS
        ========================== */

      const productGrid = document.getElementById("productGrid");

      function renderProducts(items) {
        productGrid.innerHTML = "";

        items.forEach((product) => {
          productGrid.innerHTML += `

                <div class="col-lg-4 col-md-6">

                    <div class="product-card text-center">

                        <div class="product-image mb-4">

                            <img src="${product.image}" alt="${product.title}">

                        </div>

                        <h3 class="product-title mb-3">
                            ${product.title}
                        </h3>

                        <div class="d-flex justify-content-center gap-1 mb-3">

                            <i class="ri-star-fill text-secondary"></i>
                            <i class="ri-star-fill text-secondary"></i>
                            <i class="ri-star-fill text-secondary"></i>
                            <i class="ri-star-fill text-secondary"></i>
                            <i class="ri-star-fill text-secondary"></i>

                        </div>

                        <h4 class="product-price mb-4">
                            $${product.price}
                        </h4>

                        <button class="add-cart-btn"
                            onclick="addToCart()">

                            ADD TO CART

                        </button>

                    </div>

                </div>

                `;
        });
      }

      renderProducts(products);

     /* =========================
        FILTER + SEARCH
========================== */

const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const categorySearch = document.getElementById("categorySearch");

let activeFilter = "all";

/* MAIN FILTER FUNCTION */

function filterProducts() {

    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySearch.value.toLowerCase();

    const filteredProducts = products.filter((product) => {

        /* BUTTON FILTER */

        const matchesButton =
            activeFilter === "all" ||
            product.category === activeFilter;

        /* DROPDOWN FILTER */

        const matchesDropdown =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        /* SEARCH INPUT */

        const matchesSearch =
            product.title.toLowerCase().includes(searchValue);

        return matchesButton && matchesDropdown && matchesSearch;

    });

    renderProducts(filteredProducts);

/* AUTO SCROLL TO PRODUCTS */

document.querySelector(".featured-products")
.scrollIntoView({
    behavior: "smooth"
});
searchInput.value = "";
categorySearch.value = "all";
}

/* BUTTON FILTER */

filterBtns.forEach((button) => {

    button.addEventListener("click", () => {

        filterBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        activeFilter = button.dataset.category;

        filterProducts();

    });

});

/* SEARCH INPUT */

searchInput.addEventListener("keyup", filterProducts);

/* DROPDOWN */

categorySearch.addEventListener("change", filterProducts);
      /* =========================
                CART LOGIC
        ========================== */

      let cartCount = localStorage.getItem("cartCount") || 0;

      const cartCounter = document.getElementById("cartCount");

      cartCounter.innerText = cartCount;

      function addToCart() {
        cartCount++;

        localStorage.setItem("cartCount", cartCount);

        cartCounter.innerText = cartCount;
      }
