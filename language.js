document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'en';

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'pt' : 'en';
        updateContent();
        updateToggleButton();
    }

    function updateContent() {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLang}`);
        });
    }

    function updateToggleButton() {
        const toggleText = langToggle.querySelector('span');
        toggleText.textContent = toggleText.getAttribute(`data-${currentLang}`);
    }

    langToggle.addEventListener('click', toggleLanguage);
}); 