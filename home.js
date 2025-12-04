// Vinyl collection - same as gallery
let vinyls = [
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
    { id: 12, title: "Impressions of the Middle East", artist: "Unknown", year: 0, price: 16.99, image: "FILES/COVERS/impressions_of_the_middle_east_I2DcE__please_credit[palette.fm].png", audio: "FILES/AUDIO/impressions_of_the_middle_east.wav", loudness: 35, actualCover: "FILES/ACTUAL COVERS/IMPRESSIONS OF THE MIDDLE EAST.JPG" },
    { id: 13, title: "Gypsy queen", artist: "Priscilla Coolidge", year: 1970, price: 19.99, image: "FILES/COVERS/gypsy_queen_6f5mB__please_credit[palette.fm].png", audio: "FILES/AUDIO/gypsy_queen.wav", loudness: 58, actualCover: "FILES/ACTUAL COVERS/GYPSY QUEEN.JPG" },
    { id: 14, title: "The tears of a clown", artist: "The Miracles", year: 1967, price: 14.49, image: "FILES/COVERS/the_tears_of_a_clown_NyEqN__please_credit[palette.fm].png", audio: "FILES/AUDIO/the_tears_of_a_clown.wav", loudness: 75, actualCover: "FILES/ACTUAL COVERS/TEAR OF A CLOWN.JPG" },
    { id: 15, title: "The electrifying guitar of walter", artist: "Unknown", year: 0, price: 11.49, image: "FILES/COVERS/the_electrifying_guitar_of_walter_QxKH9__please_credit[palette.fm].png", audio: "FILES/AUDIO/the_electrifying_guitar_of_walter.wav", loudness: 68, actualCover: "FILES/ACTUAL COVERS/THE ELECTRIFYING GUITAR OF WALKTER RAIM.JPG" },
    { id: 16, title: "Planet Waves", artist: "Unknown", year: 0, price: 17.99, image: "FILES/COVERS/planet_waves_i9pis__please_credit[palette.fm].png", audio: "FILES/AUDIO/planet_waves.wav", loudness: 52, actualCover: "FILES/ACTUAL COVERS/PLANET WAVES.JPG" },
    { id: 17, title: "Disco gold", artist: "Unknown", year: 0, price: 22.99, image: "FILES/COVERS/DARK SIDE OF THE MOON C.png", audio: "FILES/AUDIO/disco_gold.wav", loudness: 95 },
    { id: 18, title: "How men are", artist: "Unknown", year: 0, price: 13.49, image: "FILES/COVERS/how_men_are_ZJxCG__please_credit[palette.fm].png", audio: "FILES/AUDIO/how_men_are.wav", loudness: 48, actualCover: "FILES/ACTUAL COVERS/HOW MEN ARE.JPG" },
    { id: 19, title: "Sambatá", artist: "Unknown", year: 0, price: 15.49, image: "FILES/COVERS/sambata_Eg4dK__please_credit[palette.fm].png", audio: "FILES/AUDIO/sambata.wav", loudness: 72, actualCover: "FILES/ACTUAL COVERS/SAMBATA.JPG" },
    { id: 20, title: "All mean come", artist: "Unknown", year: 0, price: 7.99, image: "FILES/COVERS/all_mean_come_iM9Cy__please_credit[palette.fm].png", audio: "FILES/AUDIO/all_mean_come.wav", loudness: 65 },
    { id: 21, title: "Don't crush the dwarf, and me the pliers", artist: "Unknown", year: 0, price: 5.99, image: "FILES/COVERS/dont_crush_the_dwarf_and_me_the_pliers_62oQ1__please_credit[palette.fm].png", audio: "FILES/AUDIO/dont_crush_the_dwarf_and_me_the_pliers.wav", loudness: 42, actualCover: "FILES/ACTUAL COVERS/DONT CRUSH THAT DWARF, HAND ME THE PLIERS.JPG" },
    { id: 22, title: "Double Time", artist: "Leon Redbone", year: 0, price: 10.49, image: "FILES/COVERS/double_time_8hNDe__please_credit[palette.fm].png", audio: "FILES/AUDIO/double_time.wav", loudness: 50, actualCover: "FILES/ACTUAL COVERS/DOUBLE TIME.JPG" },
    { id: 25, title: "Saturday night band come on dance", artist: "Unknown", year: 0, price: 12.49, image: "FILES/COVERS/saturday_night_band_come_on_dance_HhRkD__please_credit[palette.fm].png", audio: "FILES/AUDIO/saturday_night_band_come_on_dance.wav", loudness: 90, actualCover: "FILES/ACTUAL COVERS/COME ON DANCE, DANCE.JPG" },
    { id: 26, title: "No life love and pain", artist: "Unknown", year: 0, price: 16.49, image: "FILES/COVERS/no_life_love_and_pain_ks10r__please_credit[palette.fm].png", audio: "FILES/AUDIO/no_life_love_and_pain.wav", loudness: 60, actualCover: "FILES/ACTUAL COVERS/LIFE LOVE AND PAIN.JPG" },
    { id: 27, title: "Angel cry dark moon", artist: "Unknown", year: 0, price: 20.99, image: "FILES/COVERS/angel_cry_dark_moon_cMHvz__please_credit[palette.fm].png", audio: "FILES/AUDIO/angel_cry_dark_moon.wav", loudness: 38 },
    { id: 28, title: "Raised on Radio", artist: "Journey", year: 1986, price: 14.99, image: "FILES/COVERS/raised_on_radio_new_horizon.png", audio: "FILES/AUDIO/raised_on_radio_new_horizon.wav", loudness: 75, actualCover: "FILES/ACTUAL COVERS/RAISED ON RADIO.JPG" }
];

let currentAudio = null;
let cart = JSON.parse(localStorage.getItem('vinylCart')) || [];
let swiper;

// Initialize Swiper with Cover Flow effect
function initSwiper() {
    // Populate swiper slides
    const swiperWrapper = document.getElementById('swiperWrapper');
    vinyls.forEach((vinyl) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="playhead-bar"></div>
            <img src="${vinyl.image}" alt="${vinyl.title}" data-vinyl-id="${vinyl.id}">
        `;
        swiperWrapper.appendChild(slide);
    });
    
    // Initialize Swiper
    swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        on: {
            slideChange: function () {
                // Reset play button when slide changes
                const playBtn = document.getElementById('playBtn');
                playBtn.textContent = '▶ Play';
                playBtn.classList.remove('playing');
                
                // Stop any playing audio and reset image position
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio = null;
                }
                
                // Reset all image positions
                document.querySelectorAll('.swiper-slide img').forEach(img => {
                    img.style.transform = 'translateX(0)';
                });
            }
        }
    });
}

// Get current vinyl
function getCurrentVinyl() {
    return vinyls[swiper.activeIndex];
}

// Toggle play/pause
function togglePlay() {
    const vinyl = getCurrentVinyl();
    const playBtn = document.getElementById('playBtn');
    const activeSlide = document.querySelector('.swiper-slide-active');
    const img = activeSlide ? activeSlide.querySelector('img') : null;
    const playheadBar = activeSlide ? activeSlide.querySelector('.playhead-bar') : null;
    
    if (!vinyl.audio) {
        playBtn.textContent = '🎵 No Audio';
        return;
    }
    
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playBtn.textContent = '▶ Play';
        playBtn.classList.remove('playing');
        if (img) {
            img.style.transform = 'translateX(0)';
        }
        if (playheadBar) {
            playheadBar.classList.remove('active');
        }
        currentAudio = null;
    } else {
        if (currentAudio) {
            currentAudio.pause();
        }
        
        currentAudio = new Audio(vinyl.audio);
        currentAudio.play();
        playBtn.textContent = '⏸ Pause';
        playBtn.classList.add('playing');
        
        // Show playhead bar
        if (playheadBar) {
            playheadBar.classList.add('active');
        }
        
        // Pan image from left to right during playback
        const updateImagePosition = () => {
            if (currentAudio && img && !currentAudio.paused) {
                const progress = (currentAudio.currentTime / currentAudio.duration);
                // Calculate how much to move based on image width vs container width
                const containerWidth = img.parentElement.offsetWidth;
                const imageWidth = img.offsetWidth;
                const maxTranslate = imageWidth - containerWidth;
                
                // Reduce max translate by 150px to avoid showing watermark on right edge
                const croppedMaxTranslate = Math.max(0, maxTranslate - 250);
                
                // Pan from 0 (left side) to -croppedMaxTranslate (stops before watermark)
                const translateX = -croppedMaxTranslate * progress;
                img.style.transform = `translateX(${translateX}px)`;
                requestAnimationFrame(updateImagePosition);
            }
        };
        
        currentAudio.onloadedmetadata = () => {
            updateImagePosition();
        };
        
        currentAudio.onended = () => {
            playBtn.textContent = '▶ Play';
            playBtn.classList.remove('playing');
            if (img) {
                img.style.transform = 'translateX(0)';
            }
            if (playheadBar) {
                playheadBar.classList.remove('active');
            }
            currentAudio = null;
        };
    }
}

// Add current album to cart
function addCurrentToCart() {
    const vinyl = getCurrentVinyl();
    
    if (!cart.find(item => item.id === vinyl.id)) {
        cart.push(vinyl);
        localStorage.setItem('vinylCart', JSON.stringify(cart));
        updateCartUI();
    }
}

// Update cart UI
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
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
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

// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('vinylCart', JSON.stringify(cart));
    updateCartUI();
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
}

// Checkout
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
    localStorage.setItem('vinylCart', JSON.stringify(cart));
    updateCartUI();
    
    // Redirect to receipt page with purchase data
    window.location.href = `receipt.html?code=${encodeURIComponent(code)}&items=${itemsData}`;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        swiper.slideNext();
    } else if (e.key === 'ArrowLeft') {
        swiper.slidePrev();
    } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
    }
});

// Initialize
initSwiper();
updateCartUI();
