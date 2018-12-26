//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '../node_modules/jquery/dist/jquery.js',
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      'lib/angular-mocks/angular-mocks.js',
      // '../node_modules/angular-mocks/angular-mocks.js',
      // 'core/**/*.js',
      // 'view*/**/*.js'
      'src/**/*.js'
    ],

    exclude: [
      'src/**/docs/*'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
