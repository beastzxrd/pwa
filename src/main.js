// PWA Application Main File

let deferredPrompt;

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const reg = await navigator.serviceWorker.register('/sw.js', {
                scope: '/'
            });
            console.log('Service Worker registered:', reg);
            document.getElementById('pwa-status').textContent = 'PWA Service Worker: Registered ✓';
            
            // Check for updates
            reg.addEventListener('updatefound', () => {
                console.log('Service Worker update found');
            });
        } catch (err) {
            console.error('Service Worker registration failed:', err);
            document.getElementById('pwa-status').textContent = 'PWA Service Worker: Failed';
        }
    });
}

// Listen for online/offline changes
window.addEventListener('online', () => {
    document.getElementById('online-status').textContent = 'Status: Online ✓';
    console.log('Application is online');
});

window.addEventListener('offline', () => {
    document.getElementById('online-status').textContent = 'Status: Offline';
    console.log('Application is offline');
});

// Set initial status
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('online-status').textContent = 
        navigator.onLine ? 'Status: Online ✓' : 'Status: Offline';
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('PWA installation prompt available');
});

window.addEventListener('appinstalled', () => {
    console.log('PWA installed');
    deferredPrompt = null;
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
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

console.log('PWA Application Loaded');
