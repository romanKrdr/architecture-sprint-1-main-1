module.exports = {
    name: "auth-microfrontend",
    filename: "Login.js",
    exposes: {
        './Login': './Login.js',
        './Register': './src/components/Register.js',
        'auth': './src/components/utils/auth.js',
        'ProtectedRoute': './src/components/ProtectedRoute.js'
    },
    shared: ["react", "react-dom"]
    }; 