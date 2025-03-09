function toggleContactMenu() {
    document.getElementById('contactMenu').classList.toggle('active');
}

function openServicePopup() {
    document.getElementById('servicePopup').classList.add('active');
    document.getElementById('serviceOverlay').classList.add('active');
}

function closeServicePopup() {
    document.getElementById('servicePopup').classList.remove('active');
    document.getElementById('serviceOverlay').classList.remove('active');
}

function selectService(service) {
    document.getElementById('selectedService').value = service;
    closeServicePopup();
}

// Mobile menu
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
