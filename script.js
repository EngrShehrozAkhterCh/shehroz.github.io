// Popup Close Function
function closePopup() {
    const popup = document.getElementById('devPopup');
    if (popup) {
        popup.style.opacity = '0';
        setTimeout(() => popup.style.display = 'none', 300);
    }
}

// Category Filter Function
function filterCategory(category) {
    const cards = document.querySelectorAll('.skill-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button styling
    buttons.forEach(btn => {
        btn.classList.remove('bg-black', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
        if(btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'All')) {
            btn.classList.remove('bg-gray-100', 'text-gray-700');
            btn.classList.add('bg-black', 'text-white');
        }
    });

    // Show/Hide cards based on filter
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Live Search Bar Function
function filterSkills() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.skill-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Grid / List View Toggle Function
function setViewMode(mode) {
    const container = document.getElementById('skillsContainer');
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (mode === 'list') {
        container.classList.remove('grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');
        container.classList.add('grid-cols-1');
        
        listBtn.classList.add('bg-white', 'text-black', 'shadow-sm');
        listBtn.classList.remove('text-gray-600');
        gridBtn.classList.remove('bg-white', 'text-black', 'shadow-sm');
        gridBtn.classList.add('text-gray-600');
    } else {
        container.classList.remove('grid-cols-1');
        container.classList.add('grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');
        
        gridBtn.classList.add('bg-white', 'text-black', 'shadow-sm');
        gridBtn.classList.remove('text-gray-600');
        listBtn.classList.remove('bg-white', 'text-black', 'shadow-sm');
        listBtn.classList.add('text-gray-600');
    }
}