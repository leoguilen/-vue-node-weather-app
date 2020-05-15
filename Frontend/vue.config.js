module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-node-weather-app/'
        : '/',
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Weather App";
            return args;
        });
    },
};