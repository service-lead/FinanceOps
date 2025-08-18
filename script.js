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
        
        // Show loading indicator
        showLoadingIndicator();
        
        // Call the webhook when app is opened (using same logic as Data Refresh button)
        const webhookUrl = 'https://opsteamai.app.n8n.cloud/webhook/97a5bfda-16e3-4c25-8278-57f42e16a9a2';
        
        fetch(webhookUrl, { 
            method: 'GET', 
            headers: { 
                'Accept': 'application/json,text/plain;q=0.9,*/*;q=0.8' 
            } 
        })
        .then(response => {
            console.log('Webhook called successfully when FinanceOps+ was opened');
            return response.json();
        })
        .then(data => {
            console.log('Webhook data received:', data);
            
            // Process the data and load it into the dashboard
            if (data && Array.isArray(data)) {
                // Wait for the iframe to load, then send the data
                setTimeout(() => {
                    const iframe = document.getElementById('financeFrame');
                    if (iframe && iframe.contentWindow) {
                        // Send the data to the iframe using postMessage
                        iframe.contentWindow.postMessage({
                            type: 'loadDashboardData',
                            data: data
                        }, '*');
                        console.log('Data sent to iframe dashboard');
                        
                        // Hide loading indicator after data is sent
                        setTimeout(() => {
                            hideLoadingIndicator();
                        }, 500);
                    }
                }, 1000); // Wait 1 second for iframe to load
            } else {
                hideLoadingIndicator();
            }
        })
        .catch(error => {
            console.error('Error calling webhook:', error);
            hideLoadingIndicator();
        });
    }
}

// Loading indicator functions
function showLoadingIndicator() {
    const modal = document.getElementById('financeModal');
    if (modal) {
        // Create loading overlay if it doesn't exist
        let loadingOverlay = document.getElementById('loadingOverlay');
        if (!loadingOverlay) {
            loadingOverlay = document.createElement('div');
            loadingOverlay.id = 'loadingOverlay';
            loadingOverlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                color: white;
                font-size: 18px;
            `;
            loadingOverlay.innerHTML = `
                <div style="text-align: center;">
                    <div style="width: 40px; height: 40px; border: 4px solid rgba(173, 11, 246, 0.3); border-top: 4px solid #AD0BF6; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 16px;"></div>
                    <div>Loading Financial Data...</div>
                </div>
            `;
            modal.appendChild(loadingOverlay);
        }
        loadingOverlay.style.display = 'flex';
    }
}

function hideLoadingIndicator() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
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

