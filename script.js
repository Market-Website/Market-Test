// Vinyl collection organized by genre with pre-determined loudness values
let vinyls = [
    // Rock
    { id: 1, title: "Smell of a friend", artist: "The Lodge", year: 1988, price: 8.99, image: "FILES/COVERS/smell_of_a_friend_EnF9F__please_credit[palette.fm].png", audio: "FILES/AUDIO/smell_of_a_friend.wav", loudness: 85, actualCover: "FILES/ACTUAL COVERS/SMELL OF A FRIEND.JPG" },
    { id: 2, title: "White Winds", artist: "Andreas Vollenweider", year: 1984, price: 12.99, image: "FILES/COVERS/white_winds_vS4gh__please_credit[palette.fm].png", audio: "FILES/AUDIO/white_winds.wav", loudness: 45, actualCover: "FILES/ACTUAL COVERS/WHITE WINDS.JPG" },
    { id: 3, title: "Demon in disguise", artist: "David Bromberg", year: 1972, price: 15.99, image: "FILES/COVERS/demons in disguise.png", audio: "FILES/AUDIO/demon_in_disguise.wav", loudness: 78, actualCover: "FILES/ACTUAL COVERS/DEMON IS DISGUISE.JPG" },
    { id: 4, title: "Paths of colour", artist: "Nina Ryser", year: 2020, price: 18.99, image: "FILES/COVERS/paths_of_colour_27LgU__please_credit[palette.fm].png", audio: "FILES/AUDIO/paths_of_colour.wav", loudness: 62, actualCover: "FILES/ACTUAL COVERS/PATHS OF COLOR.JPG" },
    { id: 6, title: "Into the fire", artist: "Bryan Adams", year: 1987, price: 11.99, image: "FILES/COVERS/into_the_fire_BqVHP__please_credit[palette.fm].png", audio: "FILES/AUDIO/into_the_fire.wav", loudness: 92, actualCover: "FILES/ACTUAL COVERS/INTO THE FIRE.JPG" },
    { id: 7, title: "On the Edge", artist: "Sea Level", year: 1978, price: 14.99, image: "FILES/COVERS/on_the_edge_tmRKH__please_credit[palette.fm].png", audio: "FILES/AUDIO/on_the_edge.wav", loudness: 70 },
    { id: 8, title: "3-D", artist: "Rick Zivic", year: 1980, price: 9.99, image: "FILES/COVERS/3-D_jcSWM__please_credit[palette.fm].png", audio: "FILES/AUDIO/3-D.wav", loudness: 55, actualCover: "FILES/ACTUAL COVERS/3D.JPG" },
    { id: 9, title: "Beat Street", artist: "Unknown", year: 0, price: 6.99, image: "FILES/COVERS/beat street.png", audio: "FILES/AUDIO/beat_street.wav", loudness: 88 },
    { id: 10, title: "Moon dog matine", artist: "Unknown", year: 0, price: 13.99, image: "FILES/COVERS/moon_dog_matine_ZwlNJ__please_credit[palette.fm].png", audio: "FILES/AUDIO/moon_dog_matine.wav", loudness: 40, actualCover: "FILES/ACTUAL COVERS/MOONDOG MATINEE.JPG" },
    { id: 11, title: "One on One", artist: "Cheap Trick", year: 1982, price: 10.99, image: "FILES/COVERS/one_on_one_tQlYe__please_credit[palette.fm].png", audio: "FILES/AUDIO/one_on_one.wav", loudness: 82, actualCover: "FILES/ACTUAL COVERS/ONE ON ONE.JPG" },
    { id: 28, title: "Raised on Radio", artist: "Journey", year: 1986, price: 14.99, image: "FILES/COVERS/raised_on_radio_new_horizon.png", audio: "FILES/AUDIO/raised_on_radio_new_horizon.wav", loudness: 75, actualCover: "FILES/ACTUAL COVERS/RAISED ON RADIO.JPG" },
    
    // Jazz
    { id: 12, title: "Impressions of the Middle East", artist: "Unknown", year: 0, price: 16.99, image: "FILES/COVERS/impressions_of_the_middle_east_I2DcE__please_credit[palette.fm].png", audio: "FILES/AUDIO/impressions_of_the_middle_east.wav", loudness: 35, actualCover: "FILES/ACTUAL COVERS/IMPRESSIONS OF THE MIDDLE EAST.JPG" },
    { id: 13, title: "Gypsy queen", artist: "Priscilla Coolidge", year: 1970, price: 19.99, image: "FILES/COVERS/gypsy_queen_6f5mB__please_credit[palette.fm].png", audio: "FILES/AUDIO/gypsy_queen.wav", loudness: 58, actualCover: "FILES/ACTUAL COVERS/GYPSY QUEEN.JPG" },
    { id: 14, title: "The tears of a clown", artist: "The Miracles", year: 1967, price: 14.49, image: "FILES/COVERS/the_tears_of_a_clown_NyEqN__please_credit[palette.fm].png", audio: "FILES/AUDIO/the_tears_of_a_clown.wav", loudness: 75, actualCover: "FILES/ACTUAL COVERS/TEAR OF A CLOWN.JPG" },
    { id: 15, title: "The electrifying guitar of walter", artist: "Unknown", year: 0, price: 11.49, image: "FILES/COVERS/the_electrifying_guitar_of_walter_QxKH9__please_credit[palette.fm].png", audio: "FILES/AUDIO/the_electrifying_guitar_of_walter.wav", loudness: 68, actualCover: "FILES/ACTUAL COVERS/THE ELECTRIFYING GUITAR OF WALKTER RAIM.JPG" },
    { id: 16, title: "Planet Waves", artist: "Unknown", year: 0, price: 17.99, image: "FILES/COVERS/planet_waves_i9pis__please_credit[palette.fm].png", audio: "FILES/AUDIO/planet_waves.wav", loudness: 52, actualCover: "FILES/ACTUAL COVERS/PLANET WAVES.JPG" },
    { id: 17, title: "Disco gold", artist: "Unknown", year: 0, price: 22.99, image: "FILES/COVERS/DARK SIDE OF THE MOON C.png", audio: "FILES/AUDIO/disco_gold.wav", loudness: 95 },
    { id: 18, title: "How men are", artist: "Unknown", year: 0, price: 13.49, image: "FILES/COVERS/how_men_are_ZJxCG__please_credit[palette.fm].png", audio: "FILES/AUDIO/how_men_are.wav", loudness: 48, actualCover: "FILES/ACTUAL COVERS/HOW MEN ARE.JPG" },
    { id: 19, title: "Sambatá", artist: "Unknown", year: 0, price: 15.49, image: "FILES/COVERS/sambata_Eg4dK__please_credit[palette.fm].png", audio: "FILES/AUDIO/sambata.wav", loudness: 72, actualCover: "FILES/ACTUAL COVERS/SAMBATA.JPG" },
    
    // Pop, Disco & New Wave
    { id: 20, title: "All mean come", artist: "Unknown", year: 0, price: 7.99, image: "FILES/COVERS/all_mean_come_iM9Cy__please_credit[palette.fm].png", audio: "FILES/AUDIO/all_mean_come.wav", loudness: 65 },
    { id: 21, title: "Don't crush the dwarf, and me the pliers", artist: "Unknown", year: 0, price: 5.99, image: "FILES/COVERS/dont_crush_the_dwarf_and_me_the_pliers_62oQ1__please_credit[palette.fm].png", audio: "FILES/AUDIO/dont_crush_the_dwarf_and_me_the_pliers.wav", loudness: 42, actualCover: "FILES/ACTUAL COVERS/DONT CRUSH THAT DWARF, HAND ME THE PLIERS.JPG" },
    { id: 22, title: "Double Time", artist: "Leon Redbone", year: 0, price: 10.49, image: "FILES/COVERS/double_time_8hNDe__please_credit[palette.fm].png", audio: "FILES/AUDIO/double_time.wav", loudness: 50, actualCover: "FILES/ACTUAL COVERS/DOUBLE TIME.JPG" },
    { id: 25, title: "Saturday night band come on dance", artist: "Unknown", year: 0, price: 12.49, image: "FILES/COVERS/saturday_night_band_come_on_dance_HhRkD__please_credit[palette.fm].png", audio: "FILES/AUDIO/saturday_night_band_come_on_dance.wav", loudness: 90, actualCover: "FILES/ACTUAL COVERS/COME ON DANCE, DANCE.JPG" },
    { id: 26, title: "No life love and pain", artist: "Unknown", year: 0, price: 16.49, image: "FILES/COVERS/no_life_love_and_pain_ks10r__please_credit[palette.fm].png", audio: "FILES/AUDIO/no_life_love_and_pain.wav", loudness: 60, actualCover: "FILES/ACTUAL COVERS/LIFE LOVE AND PAIN.JPG" },
    { id: 27, title: "Angel cry dark moon", artist: "Unknown", year: 0, price: 20.99, image: "FILES/COVERS/angel_cry_dark_moon_cMHvz__please_credit[palette.fm].png", audio: "FILES/AUDIO/angel_cry_dark_moon.wav", loudness: 38 }
];

let currentAudio = null;
let currentPlayingId = null;
let cart = [];
let currentSort = null;

function renderVinyls() {
    const grid = document.getElementById('vinylGrid');
    grid.innerHTML = '';
    
    // Filter out vinyls that are already in the cart
    const availableVinyls = vinyls.filter(vinyl => !cart.find(item => item.id === vinyl.id));
    
    const containerWidth = grid.offsetWidth || window.innerWidth - 40;
    const cardWidth = 280;
    const cardHeight = 280;
    
    // Calculate how many columns can fit
    const cols = Math.floor(containerWidth / (cardWidth + 30));
    const rows = Math.ceil(availableVinyls.length / cols);
    
    // Calculate spacing to center the grid
    const totalGridWidth = cols * cardWidth + (cols - 1) * 30;
    const startX = (containerWidth - totalGridWidth) / 2;
    const startY = 40;
    
    const spacing = 30;
    
    // Set grid height based on number of rows
    const totalGridHeight = rows * (cardHeight + spacing) + 100;
    grid.style.height = totalGridHeight + 'px';

    availableVinyls.forEach((vinyl, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        
        const card = document.createElement('div');
        card.className = 'vinyl-card';
        
        // Calculate grid position
        const finalX = startX + col * (cardWidth + spacing);
        const finalY = startY + row * (cardHeight + spacing);
        
        // Z-index based on row position
        const zIndex = 100 - row;
        
        card.style.left = finalX + 'px';
        card.style.top = finalY + 'px';
        card.style.zIndex = zIndex;
        
        card.draggable = true;
        card.dataset.vinylId = vinyl.id;
        
        card.innerHTML = `
            <div class="vinyl-image-container">
                <img src="${vinyl.image}" alt="${vinyl.title}" class="vinyl-image" id="image-${vinyl.id}">
            </div>
            <div class="vinyl-info">
                <div class="vinyl-details">
                    <span class="vinyl-price">$${vinyl.price.toFixed(2)}</span>
                </div>
                <div class="audio-controls">
                    <button class="play-btn" id="play-${vinyl.id}" onclick="togglePlay(${vinyl.id}); event.stopPropagation();" ${!vinyl.audio ? 'disabled' : ''}>
                        ${vinyl.audio ? '▶ Play' : '🎵 No Audio'}
                    </button>
                </div>
            </div>
        `;
        
        // Store original z-index
        card.dataset.originalZ = zIndex;
        
        grid.appendChild(card);
        
        // Add drag event listeners to each card
        card.addEventListener('dragstart', function(e) {
            this.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', this.dataset.vinylId);
        });
        
        card.addEventListener('dragend', function(e) {
            this.classList.remove('dragging');
        });
        
        // Check if card is in bottom area and flip popup if needed
        card.addEventListener('mouseenter', function() {
            const popup = this.querySelector('.vinyl-info');
            const cardRect = this.getBoundingClientRect();
            const popupHeight = 250; // Approximate popup height
            
            // If popup would go off bottom of screen, position it above the card
            if (cardRect.bottom + popupHeight > window.innerHeight) {
                popup.style.top = 'auto';
                popup.style.bottom = '100%';
                popup.style.marginTop = '0';
                popup.style.marginBottom = '0';
            } else {
                popup.style.top = '100%';
                popup.style.bottom = 'auto';
                popup.style.marginTop = '0';
                popup.style.marginBottom = '0';
            }
        });
    });
}


function togglePlay(id) {
    const vinyl = vinyls.find(v => v.id === id);
    if (!vinyl || !vinyl.audio) return;

    const playBtn = document.getElementById(`play-${id}`);

    if (currentPlayingId === id && currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playBtn.textContent = '▶ Play';
        playBtn.classList.remove('playing');
        currentPlayingId = null;
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentPlayingId) {
                const prevBtn = document.getElementById(`play-${currentPlayingId}`);
                if (prevBtn) {
                    prevBtn.textContent = '▶ Play';
                    prevBtn.classList.remove('playing');
                }
            }
        }

        currentAudio = new Audio(vinyl.audio);
        currentAudio.play();
        playBtn.textContent = '⏸ Pause';
        playBtn.classList.add('playing');
        currentPlayingId = id;

        currentAudio.onended = () => {
            playBtn.textContent = '▶ Play';
            playBtn.classList.remove('playing');
            currentPlayingId = null;
        };
    }
}

function buyVinyl(id) {
    const vinyl = vinyls.find(v => v.id === id);
    if (vinyl) {
        // Check if already in cart
        if (!cart.find(item => item.id === id)) {
            cart.push(vinyl);
            updateCartUI();
            toggleCart(); // Open cart
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');
    
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image-container" onclick="togglePlay(${item.id})" style="cursor: pointer;">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-play-overlay"></div>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
        cartFooter.style.display = 'block';
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    
    // Re-render vinyls to restore the removed album
    renderVinyls();
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) return;
    
    // Prompt for checkout code
    const code = prompt('Enter CODE to complete purchase:');
    
    // Check if user cancelled or entered empty code
    if (code === null || code.trim() === '') {
        alert('Checkout cancelled. Please enter CODE to complete your purchase.');
        return;
    }
    
    // Prepare purchase data for receipt page
    const itemsData = encodeURIComponent(JSON.stringify(cart));
    
    // Clear cart
    cart = [];
    updateCartUI();
    
    // Redirect to receipt page with purchase data
    window.location.href = `receipt.html?code=${encodeURIComponent(code)}&items=${itemsData}`;
}

// Global hover detection to handle z-index stacking issues
let currentHoveredCard = null;

document.addEventListener('mousemove', (e) => {
    const cards = Array.from(document.querySelectorAll('.vinyl-card'));
    let hoveredCard = null;
    
    // Check if mouse is over any interactive element within the current hovered card
    const target = e.target;
    if (currentHoveredCard && currentHoveredCard.contains(target)) {
        // Mouse is still within the currently hovered card (including buttons, info popup, etc.)
        // Keep current hover state
        return;
    }
    
    // Also check if mouse is over the vinyl-info popup (which may extend beyond card bounds)
    if (target.closest('.vinyl-info') || target.closest('.play-btn') || target.closest('.buy-btn')) {
        // Mouse is over popup or buttons, keep current hover state
        return;
    }
    
    // Find all cards under the cursor
    const cardsUnderCursor = cards.filter(card => {
        const rect = card.getBoundingClientRect();
        return e.clientX >= rect.left && e.clientX <= rect.right &&
               e.clientY >= rect.top && e.clientY <= rect.bottom;
    });
    
    // If multiple cards overlap, pick the one with highest original z-index (naturally on top)
    if (cardsUnderCursor.length > 0) {
        hoveredCard = cardsUnderCursor.reduce((highest, card) => {
            const cardZ = parseInt(card.dataset.originalZ) || 0;
            const highestZ = parseInt(highest.dataset.originalZ) || 0;
            return cardZ > highestZ ? card : highest;
        });
    }
    
    // Reset all cards except the new hovered one
    cards.forEach(card => {
        if (card !== hoveredCard) {
            card.classList.remove('active-hover');
            card.style.zIndex = card.dataset.originalZ;
        }
    });
    
    // Activate hovered card
    if (hoveredCard) {
        hoveredCard.classList.add('active-hover');
        hoveredCard.style.zIndex = '9999';
        currentHoveredCard = hoveredCard;
    } else {
        currentHoveredCard = null;
    }
});

// Setup checkout bin drop functionality
const checkoutBin = document.getElementById('checkoutBin');

// Handle drag over checkout bin
checkoutBin.addEventListener('dragover', (e) => {
    e.preventDefault();
    checkoutBin.classList.add('drag-over');
});

// Handle drag leave checkout bin
checkoutBin.addEventListener('dragleave', () => {
    checkoutBin.classList.remove('drag-over');
});

// Handle drop on checkout bin
checkoutBin.addEventListener('drop', (e) => {
    e.preventDefault();
    checkoutBin.classList.remove('drag-over');
    
    const vinylId = parseInt(e.dataTransfer.getData('text/plain'));
    const vinyl = vinyls.find(v => v.id === vinylId);
    
    if (vinyl && !cart.find(item => item.id === vinylId)) {
        cart.push(vinyl);
        updateCartUI();
        
        // Remove the card from the page
        const cardToRemove = document.querySelector(`[data-vinyl-id="${vinylId}"]`);
        if (cardToRemove) {
            cardToRemove.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            cardToRemove.style.opacity = '0';
            cardToRemove.style.transform = 'scale(0.8)';
            setTimeout(() => {
                cardToRemove.remove();
            }, 300);
        }
    }
});

// Function to get dominant color from image
function getDominantColor(imageSrc, callback) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let r = 0, g = 0, b = 0;
        const pixelCount = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }
        
        r = Math.floor(r / pixelCount);
        g = Math.floor(g / pixelCount);
        b = Math.floor(b / pixelCount);
        
        // Convert to HSL for better sorting
        const hsl = rgbToHsl(r, g, b);
        callback(hsl);
    };
    
    img.onerror = function() {
        callback([0, 0, 0]); // Default if image fails to load
    };
}

// Convert RGB to HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    return [h * 360, s * 100, l * 100];
}

// Sort by color
function sortByColor() {
    const buttons = document.querySelectorAll('.sort-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentSort = 'color';
    
    let processed = 0;
    vinyls.forEach((vinyl, index) => {
        getDominantColor(vinyl.image, (hsl) => {
            vinyl.colorHue = hsl[0];
            processed++;
            
            if (processed === vinyls.length) {
                vinyls.sort((a, b) => a.colorHue - b.colorHue);
                renderVinyls();
            }
        });
    });
}

// Sort by loudness (using pre-determined values)
function sortByLoudness() {
    const buttons = document.querySelectorAll('.sort-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentSort = 'loudness';
    
    // Sort by pre-determined loudness values (highest to lowest)
    vinyls.sort((a, b) => b.loudness - a.loudness);
    renderVinyls();
}

// Initial render
renderVinyls();
