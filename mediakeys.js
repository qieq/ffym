let ms = navigator.mediaSession;
let ym = window.wrappedJSObject.externalAPI;

ms.setActionHandler('previoustrack', () => {
    if (ym) {
        let position = ym.getProgress().position;
        if (position > 5) {
            ym.play();
        } else {
            ym.prev();
        }
    }
});

ms.setActionHandler('nexttrack', () => {
    if (ym) {
        ym.next();
    }
});