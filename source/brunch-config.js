module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^(app\/js)/
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css',
      order:{
        before: ['bootstrap.css'],
        after: ['base.scss']
      }
    }
  },
  paths: {
    watched: ["app"]
  }
};
