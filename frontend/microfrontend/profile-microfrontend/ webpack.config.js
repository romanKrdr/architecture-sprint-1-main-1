module.exports = {
    name: "profile-microfrontend",
    filename: "Profile.js",
    exposes: {
        'Main': '.Profile.js',
        'EditProfilePopup': './src/components/EditProfilePopup.js',
        'EditAvatarPopup': './src/components/EditAvatarPopup.js'
    },
    shared: ["react", "react-dom"]
    };    