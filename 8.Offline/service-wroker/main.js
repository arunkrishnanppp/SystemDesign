/* SW Reistration */

const registerServiceWorker = async () => {
  try {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.register('service-worker.js');
      // {
      // scope: '/'
      // }
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    }
  } catch (e) {
    console.log('Error During service worker registration');
  }
};
registerServiceWorker();
