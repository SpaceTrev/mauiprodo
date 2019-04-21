// 30oz Tumbler
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482320437334],
                node: document.getElementById('product-component-c63dbeb9763'),
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

// 20oz Tumbler
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482336002134],
                node: document.getElementById('product-component-e8fe1ec8ac6'),
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

// 10oz Tumbler 
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482597949526],
                node: document.getElementById('product-component-e17dbf60747'),
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

// 36oz Water Bottle
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482330005590],
                node: document.getElementById('product-component-44aafa9e1e6'),
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

// 26oz Water Bottle
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482330955862],
                node: document.getElementById('product-component-4927e1ec0c8'),
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

// 18oz Water Bottle
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482334658646],
                node: document.getElementById('product-component-4dd0cd9eb3a'),
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

// Yeti Roadie 20 Cooler
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482604503126],
                node: document.getElementById('product-component-4991431fd99'),
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

// Yeti Tundra 35 Cooler
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482606141526],
                node: document.getElementById('product-component-d7ae6393847'),
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

// Tundra 45 Cooler
(function() {
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

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: [3482611875926],
                node: document.getElementById('product-component-d41c0a4da68'),
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