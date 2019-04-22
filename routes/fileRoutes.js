const path = require("path");

module.exports = ((app) => {
  // HTML Files
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/home/index.html"));
  });

  app.get("/collaborate", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/index.html"));
  });

  app.get("/sustainability-map-signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/index.html"));
  });

  app.get("/sustainability-map-price-tiers", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid/index.html"));
  });
  app.get("/sustainability-map-monthly", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid/monthly/index.html"));
  });
  app.get("/sustainability-map-yearly", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid/yearly/index.html"));
  });

  app.get("/sustainability-map-signup-public", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/public/index.html"));
  });

  app.get("/gofundme", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/gofundme/index.html"));
  });

  app.get("/club-makena", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/club-makena/index.html"));
  });

  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/contact/index.html"));
  });

  app.get("/events", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/index.html"));
  });

  app.get("/maps", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/map/index.html"));
  });

  app.get("/media", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/media/index.html"));
  });

  app.get("/mission", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/mission/index.html"));
  });

  app.get("/products", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/products/index.html"));
  });

  // Style Files
  app.get('/style-main', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get('/style-home', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/home/css/style.css"));
  });

  app.get('/style-collaborate', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/css/style.css"));
  });

  app.get('/style-sustainability-map-signup', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/css/style.css"));
  });

  app.get('/style-sustainability-map-signup-paid', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid/css/style.css"));
  });

  app.get('/style-sustainability-map-signup-public', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/public/css/style.css"));
  });

  app.get('/style-gofundme', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/gofundme/css/style.css"));
  });

  app.get('/style-club-makena', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/club-makena/css/style.css"));
  });

  app.get('/style-contact', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/contact/css/style.css"));
  });

  app.get('/style-events', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/css/style.css"));
  });

  app.get('/style-map', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/map/css/style.css"));
  });

  app.get('/style-media', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/media/css/style.css"));
  });

  app.get('/style-mission', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/mission/css/style.css"));
  });

  app.get('/style-products', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/products/css/style.css"));
  });

  // Javascript Files
  app.get('/paid-form-monthly', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/paid-form-js/monthly/logic.js"));
  });
  app.get('/paid-form-yearly', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/paid-form-js/yearly/logic.js"));
  });
  app.get('/public-form-logic', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/public-form-js/logic.js"));
  });
  app.get('/instafeed-logic', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/media/js/script.js"));
  });
  app.get('/shopify-logic-prod', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/products/js/script.js"));
  });
  app.get('/firebase-app', function(req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-app.js"));
  });
  app.get('/firebase-database', function(req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-database.js"));
  });
  app.get('/firebase-database-map', function(req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-database.js.map"));
  });
  app.get('/dropdown-hack-js', function(req, res) {
    res.sendFile(path.join(__dirname, "../config/dropdown-hack-js/script.js"));
  });
   // Dependency Files
  // app.get('/bootstrap-css', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/deps/bootstrap.css"));
  // });
  // app.get('/bootstrap-js', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/deps/bootstrap.js"));
  // });
  // app.get('/bootstrap-css-map', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/deps/bootstrap.css.map"));
  // });
  // app.get('/instafeed-js', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/deps/instafeed.min.js"));
  // });
  // app.get('/jquery-min', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/deps/jquery.min.js"));
  // });
  


});