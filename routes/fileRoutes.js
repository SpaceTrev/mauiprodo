const path = require("path");

module.exports = ((app) => {
  // HTML Files
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/collaborate", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/index.html"));
  });

  app.get("/sustainability-map-signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/index.html"));
  });

  app.get("/sustainability-map-signup-paid", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid-options/paid/index.html"));
  });

  app.get("/sustainability-map-paid-options", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid-options/index.html"));
  });

  app.get("/sustainability-map-signup-public", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/public/index.html"));
  });

  app.get("/gofundme", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/gofundme/index.html"));
  });

  app.get("/club-makena", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/club-makena/index.html"));
  });

  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/contact/index.html"));
  });

  app.get("/events", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/index.html"));
  });

  app.get("/events-calendar", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/calendar/index.html"));
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

  app.get("/thanks", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/aftersub/thanks/index.html"))
  })

  app.get("/need-help", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/aftersub/help/index.html"))
  })

  // app.get("/react", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pages/react-test/index.html"));
  // });


  // Style Files
  app.get('/style-home', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get('/style-collaborate', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/css/style.css"));
  });

  app.get('/style-sustainability-map-signup', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/css/style.css"));
  });

  app.get('/style-sustainability-map-signup-paid', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid-options/paid/css/style.css"));
  });

  app.get('/style-sustainability-map-signup-public', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/public/css/style.css"));
  });

  app.get('/style-gofundme', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/gofundme/css/style.css"));
  });

  app.get('/style-club-makena', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/club-makena/css/style.css"));
  });

  app.get('/style-contact', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/contact/css/style.css"));
  });

  app.get('/style-calendar', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/calendar/css/style.css"));
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

  app.get("/thanks-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/aftersub/thanks/css/style.css"))
  });
  
  app.get("/help-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/aftersub/help/css/style.css"))
  });

  app.get("/paid-options-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid-options/css/style.css"));
  });


  // Javascript Files

  app.get('/paid-form', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/paid-form-js/logic.js"));
  });

  app.get('/public-form-logic', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/public-form-js/logic.js"));
  });

  app.get('/contact-form-logic', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/contact-form-js/logic.js"));
  });

  app.get('/club-makena-form-logic', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/club-makena-form-js/logic.js"));
  });

  app.get('/instafeed-logic', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/media/js/script.js"));
  });

  app.get('/shopify-logic-prod', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/products/js/script.js"));
  });

  app.get('/firebase-app', function (req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-app.js"));
  });

  app.get('/firebase-database', function (req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-database.js"));
  });

  app.get('/firebase-database-map', function (req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-database.js.map"));
  });

  app.get('/hide-url-mobile', function (req, res) {
    res.sendFile(path.join(__dirname, "../config/hideurlmobile/logic.js"));
  });

  // xml sitemap
  app.get('/sitemap.xml', function (req, res) {
    res.sendFile(path.join(__dirname, "../sitemap/sitemap.xml"));
  });

  // button image
  app.get('/subscribenowbtn.png', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/paypal/subscribenowbtn.png'))
  })
  // app.get('/react-test', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../config/components/collaborate/script.js"));
  // });
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