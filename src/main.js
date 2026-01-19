// PWA Application Main File

let deferredPrompt;

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
