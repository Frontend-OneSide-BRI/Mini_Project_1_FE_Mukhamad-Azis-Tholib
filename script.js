const galleryItems = [
  {
    id: 1,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1685533599~exp=1685534199~hmac=7f0d7d3f32b34fef1ac9cb1fb4438005c78d8eb124ff90df58113cd7e47c100a",
    alt: "Single Tree",
  },
  {
    id: 2,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/tibumana-waterfall-bali-island-indonesia_335224-356.jpg?w=996&t=st=1685533620~exp=1685534220~hmac=68bee7a66f9a5f568c962c0355d2248bfa09136a0a0cf6e66cdd2273836f10c0",
    alt: "Secret Waterfall",
  },
  {
    id: 3,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/waterfall-nature-thailand_335224-989.jpg?w=996&t=st=1685533851~exp=1685534451~hmac=ce0bea4e6f554c68f3fa7e63778c45a498d6ecd26f499403bf8666fe1ab3e8e5",
    alt: "Road to Heaven",
  },
  {
    id: 4,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg?w=996&t=st=1685533666~exp=1685534266~hmac=86d9436c43ed130b2dfb8f139c84c22f619c16b5d82d377a3cc9627f631db2db",
    alt: "The lingt of sunday",
  },
  {
    id: 5,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=996&t=st=1685533720~exp=1685534320~hmac=83e4b15d27856914e944de183a30b2baa2ab69cd684de1540393362925f71679",
    alt: "The Magical Forest",
  },
  {
    id: 6,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?w=996&t=st=1685533747~exp=1685534347~hmac=beec749ea4f96623d8c3513d155f6e131aa1d456cce817fa3f8ff22594bbd060",
    alt: "Hidden Leaves Village",
  },
  {
    id: 7,
    category: "food",
    image:
      "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1685534007~exp=1685534607~hmac=5f568cfdb5fb40751bf7933dfdeb91c981f12a849858d4a8d4c85e2102c6eefd",
    alt: "Delicious food composition",
  },
  {
    id: 8,
    category: "food",
    image:
      "https://img.freepik.com/free-photo/deep-fried-wonton-dark-surface_1150-43553.jpg?w=996&t=st=1685534042~exp=1685534642~hmac=4094fd4d98ed87ab1d01b6de2206bae63676663feb601e64e5c20bd94e07befb",
    alt: "Deep fried wonton on the dark surface",
  },
  {
    id: 9,
    category: "food",
    image:
      "https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?w=996&t=st=1685534084~exp=1685534684~hmac=03ad4ce051cfe9dbd3795232ed046f46d9cd2658de89cd474e8b4250fdb11d4c",
    alt: "Delicious and healthy asian food",
  },
  {
    id: 10,
    category: "food",
    image:
      "https://img.freepik.com/premium-photo/cumi-cumi-asam-manis-sweet-sour-squid-served-white-ceramic-plate-tomatoes-onions_533830-970.jpg?w=996",
    alt: "Sweet and sour squid",
  },
  {
    id: 11,
    category: "food",
    image:
      "https://img.freepik.com/free-photo/chicken-stir-fried-chili-along-with-bell-pepper-tomatoes-carrots_1150-27221.jpg?w=996&t=st=1685534215~exp=1685534815~hmac=94d6e48ed9ac53bae80de7e29644d60c6f6afdbd70ddff0faa0f1b4bcaaf4280",
    alt: "Chicken stir fried chili with bell pepper",
  },
  {
    id: 12,
    category: "food",
    image:
      "https://img.freepik.com/free-photo/fried-pork-cutlet-curry-with-rice-dark-surface_1150-41995.jpg?w=996&t=st=1685534268~exp=1685534868~hmac=68ba562e7cedcf464a758da7af6f723aec370186273ddaebc29db6b1b0e53a76",
    alt: "Golden Retriever",
  },
  {
    id: 13,
    category: "animals",
    image:
      "https://img.freepik.com/free-photo/view-wild-lion-nature_23-2150460851.jpg?w=996&t=st=1685534749~exp=1685535349~hmac=31d1d47629fecbfd1316836bdd56b39d203385edeba7c34836f64a11588e7cfe",
    alt: "Wild lion in nature",
  },
  {
    id: 14,
    category: "animals",
    image:
      "https://img.freepik.com/premium-photo/view-tigers-nature-with-vegetation_23-2150460823.jpg?w=996",
    alt: "Tigers in nature with vegetation",
  },
  {
    id: 15,
    category: "animals",
    image:
      "https://img.freepik.com/free-photo/cute-anemone-fish-playing-coral-reef-beautiful-color-clownfish-coral-feefs_488145-1151.jpg?w=996&t=st=1685534836~exp=1685535436~hmac=d7dae3200bbb3578cffb4495127cb3b160190f3d8572f9f9b3825837a00ca374",
    alt: "Clownfish on coral feefs",
  },
  {
    id: 16,
    category: "animals",
    image:
      "https://img.freepik.com/free-photo/cows-standing-green-field-front-fuji-mountain-japan_335224-197.jpg?w=996&t=st=1685534875~exp=1685535475~hmac=85f9277f0f8509c085f6ca2cdf43d4c70d239e8bb1bbda5e604d2f27d97251a6",
    alt: "Cows standing on the green field",
  },
  {
    id: 17,
    category: "animals",
    image:
      "https://img.freepik.com/free-photo/grey-cat-lying-looking-up_176474-6827.jpg?w=996&t=st=1685535150~exp=1685535750~hmac=bf2dd5fa3fb35fefce3f18efb101e01f48430c2278ae924c70dcde2164186a87",
    alt: "Cat lying and looking up",
  },
  {
    id: 18,
    category: "animals",
    image:
      "https://img.freepik.com/free-photo/closeup-shot-one-ginger-cat-hugging-licking-other-isolated-white-wall_181624-32893.jpg?w=996&t=st=1685535037~exp=1685535637~hmac=bee9c7bce14c5ab3dace641c54d453d276745dcfa2732ca27b51b6d06891e633",
    alt: "Ginger cat hugging",
  },
  {
    id: 19,
    category: "people",
    image:
      "https://img.freepik.com/free-photo/image-young-asian-woman-company-worker-glasses-smiling-holding-digital-tablet-standing-white-background_1258-89376.jpg?w=996&t=st=1685534387~exp=1685534987~hmac=a29ea548540ecbcee199b899d128cb7ec5aa4c88a86632d950a6fc044e469a33",
    alt: "Young asian woman company worker",
  },
  {
    id: 20,
    category: "people",
    image:
      "https://img.freepik.com/free-photo/shopping-concept-portrait-attractive-korean-girl-yellow-sweater-showing-promotion-offer-copy-space-pointing-looking-left-with-pleased-smile-blue-background_1258-76029.jpg?w=996&t=st=1685534430~exp=1685535030~hmac=656547427776ce6786cccbe18e3dcd8c5b8da3612c2a33fe0d77984d9cab1d5b",
    alt: "Korean girl in yellow sweater",
  },
  {
    id: 21,
    category: "people",
    image:
      "https://img.freepik.com/premium-photo/portrait-smiling-beautiful-asian-muslim-woman-brown-sweater-hijab-holding-mobile-phone-pointing-finger-aside-isolated-white-background-people-religious-lifestyle-concept_509243-5244.jpg?w=996",
    alt: "Woman in brown sweater and hijab",
  },
  {
    id: 22,
    category: "people",
    image:
      "https://img.freepik.com/free-photo/portrait-young-asia-lady-with-positive-expression-arms-crossed-smile-broadly-dressed-casual-clothing-looking-camera-pink-background_7861-3201.jpg?w=996&t=st=1685534510~exp=1685535110~hmac=e33533be68dbc17050cd63c9c18854ada16603ccb6430578575befdd61c7910f",
    alt: "Asia lady with positive expression",
  },
  {
    id: 23,
    category: "people",
    image:
      "https://img.freepik.com/free-photo/lifestyle-business-people-beautiful-cute-girl-woman-holding-smart-phone-tablet-computer-pink_1150-15546.jpg?w=996&t=st=1685534684~exp=1685535284~hmac=8b9fcfefbf43ac12ec76a50f395cf6757443010d70f38435e97ed48f0bbd8f9a",
    alt: "Asian teenage girl surprised",
  },
  {
    id: 24,
    category: "people",
    image:
      "https://img.freepik.com/premium-photo/attractive-asian-female-entrepreneur_1258-12344.jpg?w=996",
    alt: "Female entrepreneur",
  },
];

const galleryItemsContainer = document.getElementById("gallery-items");
const filterItems = document.querySelectorAll(".filter-item");

// Getting item
displayGalleryItems(galleryItems);

// Button filter
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-filter");
    const filteredItems =
      category === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === category);
    displayGalleryItems(filteredItems);
    setActiveFilter(item);

    const viewModal = Array.from(document.getElementsByClassName('view-modal'));
    viewModal.forEach((item) => {
        item.addEventListener("click", function (e) {
            const selectedCard = item.getAttribute("data-target");
            const selectedImg= galleryItems.find((item) => item.id === parseInt(selectedCard));
            const modal = document.getElementsByClassName("view");

            console.log(selectedImg);
            modal[0].setAttribute('src', selectedImg.image);
        });
    })
  });
});

// Show item gallery
function displayGalleryItems(items) {
  galleryItemsContainer.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.setAttribute('data-bs-target','#exampleModal', 'exampleModalLabel');
    card.setAttribute('data-bs-toggle','modal');
    card.innerHTML = `
    <div class="card view-modal" data-target="${item.id}" >
      <img src="${item.image}" class="card-img-top" alt="${item.alt}">
      <div class="card-body">
        <h5 class="card-title text-center">${item.alt}</h5>
      </div>
    </div>
  `;
    galleryItemsContainer.appendChild(card);
  });
}

// Filter active
function setActiveFilter(item) {
  filterItems.forEach((filter) => filter.classList.remove("active"));
  item.classList.add("active");
}

// Image onclick trigger
const viewModal = Array.from(document.getElementsByClassName('view-modal'));
viewModal.forEach((item) => {
    item.addEventListener("click", function (e) {
        const selectedCard = item.getAttribute("data-target");
        const selectedImg= galleryItems.find((item) => item.id === parseInt(selectedCard));
        const modal = document.getElementsByClassName("view");

        console.log(selectedImg);
        modal[0].setAttribute('src', selectedImg.image);
    });
})

  //   document.addEventListener("DOMContentLoaded", function () {
  //   const galleryItems = document.getElementById("gallery-items");
  //   const modalImg = document.querySelector(".modal-img");
  //   const modal = new bootstrap.Modal(document.getElementById("gallery-modal")); 
  // });
  