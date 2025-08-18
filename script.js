// Dashboard Functionality Only - Authentication handled by index.html
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize dashboard functionality, no authentication checks
    initializeDashboard();
});

// Dashboard initialization
function initializeDashboard() {
    updateGreeting();
    updateDate();
    
    // Add logout functionality to profile icon
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            // Clear authentication data and redirect to index.html for logout
            localStorage.removeItem('finops_user');
            localStorage.removeItem('finops_session_start');
            window.location.href = 'index.html';
        });
    }
    
    // Add click handlers for non-clickable apps
    const nonClickableApps = document.querySelectorAll('.app-card.non-clickable');
    nonClickableApps.forEach(app => {
        app.addEventListener('click', function() {
            alert('This application is not available yet.');
        });
    });
}

// Update greeting based on time of day
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 17) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    const greetingElement = document.getElementById('greeting-text');
    if (greetingElement) {
        greetingElement.textContent = `${greeting}, Shariq Amir`;
    }
}

// Update current date
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}

// FinanceOps Modal Functions
function openFinanceOps() {
    const modal = document.getElementById('financeModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Focus the iframe
        const iframe = document.getElementById('financeFrame');
        if (iframe) {
            iframe.focus();
        }
    }
}

function closeFinanceOps() {
    const modal = document.getElementById('financeModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('financeModal');
    if (event.target === modal) {
        closeFinanceOps();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFinanceOps();
    }
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for clickable elements
    const clickableElements = document.querySelectorAll('.clickable, .favorite-icon, .menu-icon');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click handlers for favorite and menu icons
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            this.style.color = this.style.color === 'gold' ? '#fbbf24' : 'gold';
        });
    });
    
    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('Menu options coming soon!');
        });
    });
});

