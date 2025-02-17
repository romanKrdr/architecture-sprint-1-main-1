module.exports = {
    name: "picture-microfrontend",
    filename: "Card.js",
    exposes: {
        'Card': './Card.js',
        'ImagePopup': './src/components/ImagePopup.js',
        'PopupWithForm': './src/components/PopupWithForm.js',
        'AddPlacePopup': './src/components/AddPlacePopup.js'
    },
    shared: ["react"]
    }; 