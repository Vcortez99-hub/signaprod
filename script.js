/**
 * SignaProd - Script principal
 * Gerencia interações do menu de contato, popup de serviços e menu mobile
 */

// Espera que o DOM seja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Referências dos elementos
    const contactMenu = document.getElementById('contactMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const servicePopup = document.getElementById('servicePopup');
    const serviceOverlay = document.getElementById('serviceOverlay');
    const contactForm = document.getElementById('contactForm');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    // Adiciona eventos para links do menu mobile (fechar ao clicar)
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Se o formulário existir, adiciona prevenção de envio
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulário enviado com sucesso!');
            this.reset();
        });
    }
    
    // Fecha os menus quando clicar fora deles
    document.addEventListener('click', function(e) {
        // Verifica se o clique foi fora do menu mobile e não no botão de toggle
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});

/**
 * Alterna a visibilidade do menu de contato
 */
function toggleContactMenu() {
    const menu = document.getElementById('contactMenu');
    const overlay = document.getElementById('serviceOverlay');
    
    if (menu) {
        menu.classList.toggle('active');
        
        if (menu.classList.contains('active')) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
}

/**
 * Alterna a visibilidade do menu mobile
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    
    if (menu) {
        menu.classList.toggle('active');
    }
}

/**
 * Abre o popup de seleção de serviços
 */
function openServicePopup() {
    const popup = document.getElementById('servicePopup');
    const overlay = document.getElementById('serviceOverlay');
    
    if (popup && overlay) {
        popup.classList.add('active');
        overlay.classList.add('active');
    }
}

/**
 * Fecha o popup de seleção de serviços
 */
function closeServicePopup() {
    const popup = document.getElementById('servicePopup');
    const overlay = document.getElementById('serviceOverlay');
    const contactMenu = document.getElementById('contactMenu');
    
    if (popup && overlay) {
        popup.classList.remove('active');
        
        // Só remove o overlay se o menu de contato não estiver ativo
        if (!contactMenu || !contactMenu.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    }
}

/**
 * Seleciona um serviço do popup e preenche o campo correspondente
 * @param {string} service - Nome do serviço selecionado
 */
function selectService(service) {
    const serviceInput = document.getElementById('selectedService');
    
    if (serviceInput) {
        serviceInput.value = service;
        closeServicePopup();
    }
}
