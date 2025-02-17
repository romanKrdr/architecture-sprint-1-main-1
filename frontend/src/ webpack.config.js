// webpack.config.js for Main App
module.exports = {
    name: "mainApp",
    remotes: {
        "auth-microfrontend": "productListing@http://example.com/auth-microfrontend/Login.js",
        "picture-microfrontend": "productListing@http://example.com/picture-microfrontend/Card.js",
        "profile-microfrontend": "productListing@http://example.com/profile-microfrontend/Profile.js"
    },
    shared: ["react", "react-dom"]
    };