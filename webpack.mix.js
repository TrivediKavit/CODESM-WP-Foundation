let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});

// mix.webpackConfig({
//     devtool: 'source-map',
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 //exclude: /node_modules(?!\/foundation-sites)|bower_components/,
//                 use: [
//                     {
//                         loader: 'babel-loader',
//                         options: Config.babel()
//                     }
//                 ],
//                 include: [
//                     path.resolve(__dirname, 'src'),
//                     path.resolve(__dirname, 'node_modules/foundation-sites')
//                 ]
//             }
//         ]
//     }
// });


mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'assets/fonts/font-awesome');
mix.copy('node_modules/intl-tel-input/build/js/utils.js', 'assets/scripts/intl-tel-input-utility.js');
mix.copy('node_modules/intl-tel-input/build/img', 'assets/images/intl-tel-input');

mix.js('assets/scripts/src/script.js','assets/scripts/script.js');

mix.sass('assets/styles/scss/style.scss', 'assets/styles/style.css');

mix.sourceMaps(true, 'source-map');

// Use this to debug `--stats-children` warnings
// mix.webpackConfig({
//     stats: {
//         children: true,
//     },
// });