// Eco Kit
(function() {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "maui-sustainable-solutions.myshopify.com",
      storefrontAccessToken: "72d62a14e468c3c994edba0f47d398f1"
    });

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent("product", {
        id: [3830937354326],
        node: document.getElementById("product-component-846d39bf67a"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "modal",
            variantId: "all",
            width: "240px",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              options: false,
              price: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            text: {
              button: "VIEW PRODUCT"
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#2c9ec0"
                },
                ":focus": {
                  "background-color": "#2c9ec0"
                }
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px"
              },
              compareAt: {
                "font-size": "12px"
              }
            }
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              button: {
                "background-color": "#31b0d5",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#2c9ec0"
                },
                ":focus": {
                  "background-color": "#2c9ec0"
                }
              },
              footer: {
                "background-color": "#ffffff"
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#2c9ec0"
                },
                ":focus": {
                  "background-color": "#2c9ec0"
                }
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px"
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#2c9ec0"
                },
                ":focus": {
                  "background-color": "#2c9ec0"
                }
              },
              count: {
                "font-size": "13px"
              }
            }
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();

// 40oz water bottle
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'maui-sustainable-solutions.myshopify.com',
          storefrontAccessToken: '72d62a14e468c3c994edba0f47d398f1',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3830949642326],
            node: document.getElementById('product-component-9ec290dd9cb'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#31b0d5",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

// Sunscreen
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'maui-sustainable-solutions.myshopify.com',
          storefrontAccessToken: '72d62a14e468c3c994edba0f47d398f1',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3831104667734],
            node: document.getElementById('product-component-bec265b5bdf'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#31b0d5",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

    // ecokit coooler non preorder
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'maui-sustainable-solutions.myshopify.com',
          storefrontAccessToken: '72d62a14e468c3c994edba0f47d398f1',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3941123653718],
            node: document.getElementById('product-component-d78cd281137'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#31b0d5",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/
  
    // food tin
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'maui-sustainable-solutions.myshopify.com',
          storefrontAccessToken: '72d62a14e468c3c994edba0f47d398f1',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3879881572438],
            node: document.getElementById('product-component-5e34e2a833e'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#31b0d5",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/

    // bamboo spork
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'maui-sustainable-solutions.myshopify.com',
          storefrontAccessToken: '72d62a14e468c3c994edba0f47d398f1',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3922752143446],
            node: document.getElementById('product-component-dc61438e8b3'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#31b0d5",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#31b0d5",
        ":hover": {
          "background-color": "#2c9ec0"
        },
        ":focus": {
          "background-color": "#2c9ec0"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/