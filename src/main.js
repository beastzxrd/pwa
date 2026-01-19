// PWA Application Main File

let deferredPrompt;

// Function to update status
function updateStatus(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const reg = await navigator.serviceWorker.register('/pwa/sw.js', {
                scope: '/pwa/'
            });
            console.log('✓ Service Worker registered successfully:', reg);
            updateStatus('pwa-status', 'PWA Service Worker: Registered ✓');
            
            // Check for updates
            reg.addEventListener('updatefound', () => {
                console.log('✓ Service Worker update found');
            });
        } catch (err) {
            console.error('✗ Service Worker registration failed:', err);
            updateStatus('pwa-status', 'PWA Service Worker: Failed - ' + err.message);
        }
    });
} else {
    console.warn('Service Worker not supported in this browser');
    updateStatus('pwa-status', 'PWA Service Worker: Not supported');
}

// Listen for online/offline changes
window.addEventListener('online', () => {
    updateStatus('online-status', 'Status: Online ✓');
    console.log('✓ Application is online');
});

window.addEventListener('offline', () => {
    updateStatus('online-status', 'Status: Offline');
    console.log('✗ Application is offline');
});

// Set initial status when DOM is ready
function initializeStatus() {
    updateStatus('online-status', 
        navigator.onLine ? 'Status: Online ✓' : 'Status: Offline');
    console.log('✓ PWA status initialized');
}

document.addEventListener('DOMContentLoaded', initializeStatus);
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeStatus);
} else {
    initializeStatus();
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('✓ PWA installation prompt available');
});

window.addEventListener('appinstalled', () => {
    console.log('✓ PWA installed successfully');
    deferredPrompt = null;
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✓ User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    } else {
        alert('App is already installed or installation is not available');
    }
}

function toggleOffline() {
    // Demo function to show offline capability
    alert('This app works offline! Try disabling your internet connection.');
}

window.installApp = installApp;
window.toggleOffline = toggleOffline;

console.log('✓ PWA Application Loaded');
