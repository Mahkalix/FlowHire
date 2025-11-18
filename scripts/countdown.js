// Countdown Timer pour FlowHire
// Date de lancement : 2 janvier 2026

function updateCountdown() {
    // Date de lancement (modifiable)
    const launchDate = new Date('2026-01-02T00:00:00').getTime();
    
    // Maintenant
    const now = new Date().getTime();
    
    // Différence
    const distance = launchDate - now;
    
    // Calculs
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    // Mise à jour du DOM - Hero countdown
    const heroDays = document.getElementById('hero-days');
    const heroHours = document.getElementById('hero-hours');
    const heroMinutes = document.getElementById('hero-minutes');
    
    if (heroDays) heroDays.textContent = days;
    if (heroHours) heroHours.textContent = hours;
    if (heroMinutes) heroMinutes.textContent = minutes;
    
    // Si le compte à rebours est terminé
    if (distance < 0) {
        if (heroDays) heroDays.textContent = '0';
        if (heroHours) heroHours.textContent = '0';
        if (heroMinutes) heroMinutes.textContent = '0';
        
        // Message de lancement
        const label = document.querySelector('.hero-countdown-label');
        if (label) {
            label.textContent = '🎉 V2 disponible maintenant !';
        }
    }
}

// Mise à jour immédiate
updateCountdown();

// Mise à jour toutes les minutes
setInterval(updateCountdown, 60000);
