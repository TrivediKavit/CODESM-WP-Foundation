let mix = require('laravel-mix');
let del = require('del');

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

mix.webpackConfig({
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                //exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: Config.babel()
                    }
                ],
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/foundation-sites')
                ]
            }
        ]
    }
});

mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'assets/fonts/font-awesome');
mix.copy('node_modules/intl-tel-input/build/js/utils.js', 'assets/scripts/intl-tel-input-utility.js');
mix.copy('node_modules/intl-tel-input/build/img', 'assets/images/intl-tel-input');

mix.js([
    /** VENDOR SCRIPTS - START **/
    'assets/scripts/src/vendor/vendor.js', // VENDOR
    'node_modules/foundation-datepicker/js/foundation-datepicker.min.js', // FOUNDATION DATEPICKER
    'node_modules/owl.carousel/dist/owl.carousel.js', // OWL CAROUSEL JS
    //'node_modules/intl-tel-input/build/js/intlTelInput.js', // INTL-TEL-INPUT
    /** VENDOR SCRIPTS - END **/
],'assets/scripts/src/vendor/vendor-dist.js');

mix.combine([
    /** FUNCTION SCRIPTS - START **/
    'assets/scripts/src/functions/callrail.js', // CALLRAIL
    'assets/scripts/src/functions/data-hrefs.js', // DATA-HREFS
    'assets/scripts/src/functions/date.js', // DATE
    'assets/scripts/src/functions/datepicker.js', // DATEPICKER
    'assets/scripts/src/functions/equalizer.js', // EQUALIZER
    'assets/scripts/src/functions/intl-tel-input.js', // INTL-TEL-INPUT
    'assets/scripts/src/functions/map-styles.js', // MAP STYLES
    'assets/scripts/src/functions/negative-margins.js', // NEGATIVE MARGINS
    'assets/scripts/src/functions/offcanvas.js', // OFFCANVAS
    'assets/scripts/src/functions/owl-carousel.js', // OWL-CAROUSEL
    /** FUNCTION SCRIPTS - END **/
],'assets/scripts/src/functions.js');

mix.combine([
    'assets/scripts/src/vendor/vendor-dist.js', // VENDOR SCRIPTS
    'assets/scripts/src/functions.js', // FUNCTION SCRIPTS
    'assets/scripts/src/site.js' // SITE SCRIPTS
], 'assets/scripts/scripts.js').then(() => {
    del('assets/scripts/src/vendor/vendor-dist.js*'); // DELETE COMPILED VENDOR JS FILE
});

mix.sass('assets/styles/scss/style.scss', 'assets/styles/style.css',{
    includePaths: [
      'node_modules/foundation-sites/scss'
    ]
}).sass('assets/styles/scss/login.scss', 'assets/styles/login.css');

mix.sourceMaps(true, 'source-map');