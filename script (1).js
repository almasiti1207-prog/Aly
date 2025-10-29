// Data 25 Makanan Jepang dengan emoji
const foodData = [
    {id: 1, name: "Sushi", japanese: "寿司", icon: "🍣", meaning: "Rasa asam", ingredients: "Nasi, ikan, nori", taste: "Segar, gurih", origin: "Tokyo"},
    {id: 2, name: "Ramen", japanese: "ラーメン", icon: "🍜", meaning: "Mie tarik", ingredients: "Mie, kaldu, daging", taste: "Gurih, asin", origin: "Hokkaido"},
    {id: 3, name: "Tempura", japanese: "天ぷら", icon: "🍤", meaning: "Gorengan", ingredients: "Udang, tepung", taste: "Renyah, gurih", origin: "Nagasaki"},
    {id: 4, name: "Takoyaki", japanese: "たこ焼き", icon: "🐙", meaning: "Gurita panggang", ingredients: "Gurita, tepung", taste: "Manis, gurih", origin: "Osaka"},
    {id: 5, name: "Okonomiyaki", japanese: "お好み焼き", icon: "🥞", meaning: "Panggang suka-suka", ingredients: "Tepung, kubis", taste: "Manis, gurih", origin: "Osaka"},
    {id: 6, name: "Gyoza", japanese: "餃子", icon: "🥟", meaning: "Dumpling", ingredients: "Daging, sayuran", taste: "Gurih, asin", origin: "China"},
    {id: 7, name: "Yakitori", japanese: "焼き鳥", icon: "🍢", meaning: "Ayam bakar", ingredients: "Ayam, tusuk", taste: "Manis, gurih", origin: "Jepang"},
    {id: 8, name: "Miso Soup", japanese: "味噌汁", icon: "🍲", meaning: "Sup miso", ingredients: "Miso, dashi", taste: "Asin, gurih", origin: "Jepang"},
    {id: 9, name: "Udon", japanese: "うどん", icon: "🍜", meaning: "Mie tebal", ingredients: "Tepung terigu", taste: "Kenyal, lembut", origin: "Kagawa"},
    {id: 10, name: "Soba", japanese: "そば", icon: "🍜", meaning: "Mie gandum", ingredients: "Tepung gandum", taste: "Kenyal, nutty", origin: "Nagano"},
    {id: 11, name: "Katsudon", japanese: "カツ丼", icon: "🍛", meaning: "Nasi cutlet", ingredients: "Daging, telur", taste: "Gurih, manis", origin: "Tokyo"},
    {id: 12, name: "Tonkatsu", japanese: "トンカツ", icon: "🍖", meaning: "Babi goreng", ingredients: "Babi, panir", taste: "Renyah, juicy", origin: "Tokyo"},
    {id: 13, name: "Sashimi", japanese: "刺身", icon: "🍣", meaning: "Ikan mentah", ingredients: "Ikan, wasabi", taste: "Segar, murni", origin: "Jepang"},
    {id: 14, name: "Yakiniku", japanese: "焼肉", icon: "🥩", meaning: "Daging bakar", ingredients: "Daging sapi", taste: "Gurih, asap", origin: "Korea"},
    {id: 15, name: "Onigiri", japanese: "お握り", icon: "🍙", meaning: "Nasi kepal", ingredients: "Nasi, nori", taste: "Gurih, asin", origin: "Jepang"},
    {id: 16, name: "Tamagoyaki", japanese: "卵焼き", icon: "🍳", meaning: "Telur dadar", ingredients: "Telur, gula", taste: "Manis, gurih", origin: "Tokyo"},
    {id: 17, name: "Karaage", japanese: "唐揚げ", icon: "🍗", meaning: "Ayam goreng", ingredients: "Ayam, bawang", taste: "Gurih, juicy", origin: "Jepang"},
    {id: 18, name: "Chawanmushi", japanese: "茶碗蒸し", icon: "🥚", meaning: "Telur kukus", ingredients: "Telur, dashi", taste: "Lembut, gurih", origin: "Jepang"},
    {id: 19, name: "Sukiyaki", japanese: "すき焼き", icon: "🍲", meaning: "Daging masak", ingredients: "Daging, sayur", taste: "Manis, gurih", origin: "Kanto"},
    {id: 20, name: "Shabu-shabu", japanese: "しゃぶしゃぶ", icon: "🍲", meaning: "Celup daging", ingredients: "Daging tipis", taste: "Ringan, segar", origin: "Osaka"},
    {id: 21, name: "Mochi", japanese: "餅", icon: "🍡", meaning: "Kue beras", ingredients: "Beras ketan", taste: "Kenyal, manis", origin: "Jepang"},
    {id: 22, name: "Dorayaki", japanese: "どら焼き", icon: "🥞", meaning: "Kue gendang", ingredients: "Pancake, kacang", taste: "Manis, lembut", origin: "Tokyo"},
    {id: 23, name: "Taiyaki", japanese: "たい焼き", icon: "🐟", meaning: "Kue ikan", ingredients: "Adonan, kacang", taste: "Manis, gurih", origin: "Tokyo"},
    {id: 24, name: "Matcha Ice", japanese: "抹茶アイス", icon: "🍦", meaning: "Es teh hijau", ingredients: "Matcha, susu", taste: "Pahit manis", origin: "Kyoto"},
    {id: 25, name: "Wagashi", japanese: "和菓子", icon: "🍡", meaning: "Kue Jepang", ingredients: "Tepung, gula", taste: "Manis, artistik", origin: "Kyoto"}
];

// Data Resep
const recipes = {
    sushi: {
        title: "Sushi Roll",
        ingredients: ["2 cangkir nasi", "4 lembar nori", "Ikan salmon", "Timun", "Cuka beras"],
        steps: ["Masak nasi", "Letakkan nori", "Tambahkan nasi", "Isi dengan bahan", "Gulung", "Potong"]
    },
    ramen: {
        title: "Ramen Ayam",
        ingredients: ["200g mie ramen", "500ml kaldu", "Daging ayam", "Telur", "Daun bawang"],
        steps: ["Rebus mie", "Panaskan kaldu", "Tumis ayam", "Siapkan mangkuk", "Tuang kaldu", "Tambahkan topping"]
    },
    tempura: {
        title: "Tempura Udang",
        ingredients: ["12 ekor udang", "1 cangkir tepung", "1 cangkir air", "Minyak goreng"],
        steps: ["Bersihkan udang", "Buat adonan", "Panaskan minyak", "Celup udang", "Goreng hingga kuning"]
    },
    gyoza: {
        title: "Gyoza Ayam",
        ingredients: ["250g ayam cincang", "Bawang putih", "Daun bawang", "20 kulit gyoza"],
        steps: ["Campur bahan", "Isi kulit gyoza", "Lipat", "Goreng", "Tambahkan air", "Kukus"]
    }
};

// Load menu items - PASTI MUNCUL 25
function loadMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) {
        console.log('Menu grid not found');
        return;
    }
    
    console.log('Loading menu items...');
    menuGrid.innerHTML = ''; // Clear existing
    
    foodData.forEach((food, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <span class="food-icon">${food.icon}</span>
            <h3>${food.name}</h3>
            <p>${food.japanese}</p>
        `;
        menuItem.onclick = () => showFoodDetail(food);
        menuGrid.appendChild(menuItem);
        console.log(`Added item ${index + 1}: ${food.name}`);
    });
    
    console.log(`Total items loaded: ${foodData.length}`);
}

// Show food detail modal
function showFoodDetail(food) {
    const modal = document.getElementById('foodModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${food.icon} ${food.name}</h2>
        <div class="food-details">
            <p><strong>Nama Jepang:</strong> ${food.japanese}</p>
            <p><strong>Arti:</strong> ${food.meaning}</p>
            <p><strong>Bahan Utama:</strong> ${food.ingredients}</p>
            <p><strong>Rasa:</strong> ${food.taste}</p>
            <p><strong>Asal:</strong> ${food.origin}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('foodModal').style.display = 'none';
}

// Show recipe
function showRecipe(type) {
    const recipeContent = document.getElementById('recipeContent');
    const recipe = recipes[type];
    
    if (!recipe || !recipeContent) return;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    recipeContent.innerHTML = `
        <h2>${recipe.title}</h2>
        <div class="recipe-section">
            <h3>🛒 Bahan-bahan:</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-section">
            <h3>📝 Langkah-langkah:</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Load menu items if on menu page
    if (document.getElementById('menuGrid')) {
        loadMenuItems();
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('foodModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// Fallback - try to load again after 1 second
setTimeout(function() {
    if (document.getElementById('menuGrid') && document.getElementById('menuGrid').children.length === 0) {
        console.log('Retrying to load menu...');
        loadMenuItems();
    }
}, 1000);