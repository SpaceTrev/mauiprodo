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

  // app.get("/media-example", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pages/media/example.html"));
  // });

  app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/projects/index.html"));
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
  app.get("/early-adopters-help", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/aftersub/discount/earlyadopters/index.html"))
  })
  app.get("/first-three-free-help", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/aftersub/discount/firsthreefree/index.html"))
  })
  app.get("/first-three-free", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/discounts/first-three-free/index.html"))
  })
  app.get("/early-adopters", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/discounts/early-adopters/index.html"))
  })
  app.get("/composting", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/index.html"))
  })
  app.get("/composting-business", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/business/index.html"))
  })
  app.get("/composting-personal", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/personal/index.html"))
  })

  app.get("/composting-help", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/thanks/index.html"))
  })

  app.get("/composting-thanks", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/help/index.html"))
  })

  app.get("/dance4wishes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/tickets/index.html"))
  })
  // app.get("/react", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pages/react-test/index.html"));
  // });


  // Style Files
  app.get('/style-mission', function (req, res) {
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

  app.get('/style-proj', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/projects/css/style.css"));
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

  app.get("/composting-main-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/css/style.css"));
  });

  app.get("/composting-bus-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/business/css/style.css"));
  });

  app.get("/composting-pers-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/personal/css/style.css"));
  });

  app.get("/composting-help-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/thanks/css/style.css"))
  })

  app.get("/composting-thanks-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/composting/help/css/style.css"))
  })
  app.get("/dance4wishes-style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/tickets/css/style.css"))
  })

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
  app.get("/dance4wishes-logic", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/tickets/logic/logic.js"))
  })
  // app.get('/firebaseConfig', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../config/firebase.js"));
  // });

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

  app.get('/firebase-map', function (req, res) {
    res.sendFile(path.join(__dirname, "../node_modules/firebase/firebase-app.js.map"));
  });

  // xml sitemap
  app.get('/sitemap.xml', function (req, res) {
    res.sendFile(path.join(__dirname, "../sitemap/sitemap.xml"));
  });

  // images 

  // button image
  app.get('/subscribenowbtn.png', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/paypal/subscribenowbtn.png'))
  });
  // banner images
  app.get('/blackSandCrop.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/blacksandorredCrop.jpg'))
  });
  app.get('/kam3Crop.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/kam3Crop.jpg'))
  });
  app.get('/sugBeachCrop.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/sugsithinkCrop.jpg'))
  });
  app.get('/bigsCrop.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/BigsCrop.jpg'))
  });
  app.get('/westsideCrop.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/westsideCrop.jpg'))
  })
  app.get('/windmillCrop.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/windmillCrop.jpg'))
  })
 
  app.get('/dance4wishes.png', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/dance4wishes.png'))
  })
  //mobile banner images
  app.get('/blackSand.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/blacksandorred.jpg'))
  });
  app.get('/kam3.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/kam3viw.jpg'))
  });
  app.get('/sugBeach.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/sugsithink.jpg'))
  });
  app.get('/Bigs.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/Bigs.jpg'))
  })
  app.get('/westside.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/westside.jpg'))
  })
  app.get('/windmill.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/images/windmill.jpg'))
  })
  
  

  // JSON
  app.get('/manifest.json', function (req, res) {
    res.sendFile(path.join(__dirname, '../manifest/manifest.json'))
  });
  // Dependency Files
  app.get('/bootstrapCSS', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deps/bootstrap.css"));
  });
  app.get('/bootstrapJS', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deps/bootstrap.js"));
  });
  app.get('/bootstrapCSSMap', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deps/bootstrap.css.map"));
  });
  app.get('/instafeedJS', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deps/instafeed.min.js"));
  });
  app.get('/jqueryMINjs', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deps/jquery.min.js"));
  });
  app.get('/magnificMIN', function (req, res) {
    res.sendFile(path.join(__dirname, "  ../public/deps/magnific.min.js"));
  });

  // Gif Image
  app.get('/773.gif', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/resources/gifs/773.gif'))
  })


});