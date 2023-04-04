const browserInformation = {
  name: 'Chorme',
  version: 111
};
const value = localStorage.getItem('browser');

localStorage.setItem('browser', JSON.stringify(browserInformation));

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }
  
  if (navigator.setAppBadge) {
    console.log("The App Badging API is supported!");
}

if ('windowControlsOverlay' in navigator) {
  const { x } = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // Window controls are on the right (like on Windows).
  // Chrome menu is left of the window controls.
  // [ windowControlsOverlay___________________ […] [_] [■] [X] ]
  if (x === 0) {
    div.classList.add('search-controls-right');
  }
  // Window controls are on the left (like on macOS).
  // Chrome menu is right of the window controls overlay.
  // [ [X] [_] [■] ___________________windowControlsOverlay [⋮] ]
  else {
    div.classList.add('search-controls-left');
  }
} else {
  // When running in a non-supporting browser tab.
  div.classList.add('search-controls-right');
}

if (navigator.windowControlsOverlay.visible) {
  // The window controls overlay is visible in the title bar area.
}
