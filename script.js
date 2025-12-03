// Vinyl collection organized by genre
let vinyls = [
    // Rock
    { id: 1, title: "Smell of a friend", artist: "The Lodge", year: 1988, price: 8.99, image: "FILES/COVERS/smell_of_a_friend_EnF9F__please_credit[palette.fm].png", audio: "FILES/AUDIO/smell_of_a_friend.wav" },
    { id: 2, title: "White Winds", artist: "Andreas Vollenweider", year: 1984, price: 12.99, image: "FILES/COVERS/white_winds_vS4gh__please_credit[palette.fm].png", audio: "FILES/AUDIO/white_winds.wav" },
    { id: 3, title: "Demon in disguise", artist: "David Bromberg", year: 1972, price: 15.99, image: "FILES/COVERS/img_lMbRA__please_credit[palette.fm].png", audio: "FILES/AUDIO/demon_in_disguise.wav" },
    { id: 4, title: "Paths of colour", artist: "Nina Ryser", year: 2020, price: 18.99, image: "FILES/COVERS/paths_of_colour_27LgU__please_credit[palette.fm].png", audio: "FILES/AUDIO/paths_of_colour.wav" },
    { id: 6, title: "Into the fire", artist: "Bryan Adams", year: 1987, price: 11.99, image: "FILES/COVERS/into_the_fire_BqVHP__please_credit[palette.fm].png", audio: "FILES/AUDIO/into_the_fire.wav" },
    { id: 7, title: "On the Edge", artist: "Sea Level", year: 1978, price: 14.99, image: "FILES/COVERS/on_the_edge_tmRKH__please_credit[palette.fm].png", audio: "FILES/AUDIO/on_the_edge.wav" },
    { id: 8, title: "3-D", artist: "Rick Zivic", year: 1980, price: 9.99, image: "FILES/COVERS/3-D_jcSWM__please_credit[palette.fm].png", audio: "FILES/AUDIO/3-D.wav" },
    { id: 9, title: "Beat Street", artist: "Unknown", year: 0, price: 6.99, image: "FILES/COVERS/beat street.png", audio: "FILES/AUDIO/beat_street.wav" },
    { id: 10, title: "Moon dog matine", artist: "Unknown", year: 0, price: 13.99, image: "FILES/COVERS/moon_dog_matine_ZwlNJ__please_credit[palette.fm].png", audio: "FILES/AUDIO/moon_dog_matine.wav" },
    { id: 11, title: "One on One", artist: "Cheap Trick", year: 1982, price: 10.99, image: "FILES/COVERS/one_on_one_tQlYe__please_credit[palette.fm].png", audio: "FILES/AUDIO/one_on_one.wav" },
    
    // Jazz
    { id: 12, title: "Impressions of the Middle East", artist: "Unknown", year: 0, price: 16.99, image: "FILES/COVERS/impressions_of_the_middle_east_I2DcE__please_credit[palette.fm].png", audio: "FILES/AUDIO/impressions_of_the_middle_east.wav" },
    { id: 13, title: "Gypsy queen", artist: "Priscilla Coolidge", year: 1970, price: 19.99, image: "FILES/COVERS/gypsy_queen_6f5mB__please_credit[palette.fm].png", audio: "FILES/AUDIO/gypsy_queen.wav" },
    { id: 14, title: "The tears of a clown", artist: "The Miracles", year: 1967, price: 14.49, image: "FILES/COVERS/the_tears_of_a_clown_NyEqN__please_credit[palette.fm].png", audio: "FILES/AUDIO/the_tears_of_a_clown.wav" },
    { id: 15, title: "The electrifying guitar of Walter", artist: "Unknown", year: 0, price: 11.49, image: "FILES/COVERS/the_electrifying_guitar_of_walter_QxKH9__please_credit[palette.fm].png", audio: "FILES/AUDIO/the_electrifying_guitar_of_walter.wav" },
    { id: 16, title: "Planet Waves", artist: "Unknown", year: 0, price: 17.99, image: "FILES/COVERS/planet_waves_i9pis__please_credit[palette.fm].png", audio: "FILES/AUDIO/planet_waves.wav" },
    { id: 17, title: "Disco gold", artist: "Unknown", year: 0, price: 22.99, image: "FILES/COVERS/DARK SIDE OF THE MOON C.png", audio: "FILES/AUDIO/disco_gold.wav" },
    { id: 18, title: "How men are", artist: "Unknown", year: 0, price: 13.49, image: "FILES/COVERS/how_men_are_ZJxCG__please_credit[palette.fm].png", audio: "FILES/AUDIO/how_men_are.wav" },
    { id: 19, title: "Sambatá", artist: "Unknown", year: 0, price: 15.49, image: "FILES/COVERS/sambata_Eg4dK__please_credit[palette.fm].png", audio: "FILES/AUDIO/sambata.wav" },
    
    // Pop, Disco & New Wave
    { id: 20, title: "All mean come", artist: "Unknown", year: 0, price: 7.99, image: "FILES/COVERS/all_mean_come_iM9Cy__please_credit[palette.fm].png", audio: "FILES/AUDIO/all_mean_come.wav" },
    { id: 21, title: "Don't crush the dwarf, and me the pliers", artist: "Unknown", year: 0, price: 5.99, image: "FILES/COVERS/dont_crush_the_dwarf_and_me_the_pliers_62oQ1__please_credit[palette.fm].png", audio: "FILES/AUDIO/dont_crush_the_dwarf_and_me_the_pliers.wav" },
    { id: 22, title: "Double Time", artist: "Leon Redbone", year: 0, price: 10.49, image: "FILES/COVERS/double_time_8hNDe__please_credit[palette.fm].png", audio: "FILES/AUDIO/double_time.wav" },
    { id: 25, title: "Saturday night band come on dance", artist: "Unknown", year: 0, price: 12.49, image: "FILES/COVERS/saturday_night_band_come_on_dance_HhRkD__please_credit[palette.fm].png", audio: "FILES/AUDIO/saturday_night_band_come_on_dance.wav" },
    { id: 26, title: "No life love and pain", artist: "Unknown", year: 0, price: 16.49, image: "FILES/COVERS/no_life_love_and_pain_ks10r__please_credit[palette.fm].png", audio: "FILES/AUDIO/no_life_love_and_pain.wav" },
    { id: 27, title: "Angel cry dark moon", artist: "Unknown", year: 0, price: 20.99, image: "FILES/COVERS/angel_cry_dark_moon_cMHvz__please_credit[palette.fm].png", audio: "FILES/AUDIO/angel_cry_dark_moon.wav" }
];

let currentAudio = null;
let currentPlayingId = null;
let cart = [];

function renderVinyls() {
    const grid = document.getElementById('vinylGrid');
    grid.innerHTML = '';
    
    const containerWidth = grid.offsetWidth || window.innerWidth - 40;
    const containerHeight = grid.offsetHeight || window.innerHeight - 40;
    const cardWidth = 250;
    const spacing = 80;
    
    // Organize albums into 3 roughly equal columns (genre bins)
    const cols = 3;
    const itemsPerCol = Math.ceil(vinyls.length / cols);
    
    const genreList = [
        vinyls.slice(0, itemsPerCol),      // Column 1: First 8 albums
        vinyls.slice(itemsPerCol, itemsPerCol * 2),  // Column 2: Next 8 albums
        vinyls.slice(itemsPerCol * 2)      // Column 3: Remaining albums
    ];
    
    const cellWidth = containerWidth / cols;
    
    // Find max items in any column for height calculation
    const maxItems = Math.max(...genreList.map(g => g.length));
    const cellHeight = containerHeight / maxItems;

    genreList.forEach((genreVinyls, colIndex) => {
        genreVinyls.forEach((vinyl, rowIndex) => {
            const card = document.createElement('div');
            card.className = 'vinyl-card';
            
            // Position in genre column
            const cellCenterX = colIndex * cellWidth + (cellWidth / 2) - (cardWidth / 2);
            const cellCenterY = rowIndex * cellHeight + (cellHeight / 2) - (cardWidth / 2);
            
            // Add random offset within cell (±40% of cell size)
            const offsetX = (Math.random() - 0.5) * cellWidth * 0.4;
            const offsetY = (Math.random() - 0.5) * cellHeight * 0.4;
            
            const randomX = cellCenterX + offsetX;
            const randomY = cellCenterY + offsetY;
            
            // Z-index based on vertical position (lower Y = higher z-index, like a vinyl crate viewed from above)
            const zIndex = Math.floor(randomY);
            
            card.style.left = randomX + 'px';
            card.style.top = randomY + 'px';
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
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for your purchase!\n\nTotal: $${total.toFixed(2)}\n\nItems:\n${cart.map(item => `- ${item.title} ($${item.price.toFixed(2)})`).join('\n')}`);
    
    // Clear cart
    cart = [];
    updateCartUI();
    toggleCart();
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

// Initial render
renderVinyls();
