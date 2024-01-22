/* global ShopifyBuy */
import React, { useEffect } from 'react';

const Hats = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

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
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = ShopifyBuy.buildClient({
        domain: 'crunchmoto.myshopify.com',
        storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN, // Make sure to prefix with REACT_APP_
      });

      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('collection', {
          id: '317292118191',
          node: document.getElementById('collection-component-1705702104741'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px",
                        "width": "calc(25% - 20px)"
                      },
                      "img": {
                        "height": "calc(100% - 15px)",
                        "position": "absolute",
                        "left": "0",
                        "right": "0",
                        "top": "0"
                      },
                      "imgWrapper": {
                        "padding-top": "calc(75% + 15px)",
                        "position": "relative",
                        "height": "0"
                      }
                    },
                    "button": {
                      "font-family": "Oxygen, sans-serif",
                      "font-size": "16px",
                      "padding-top": "16px",
                      "padding-bottom": "16px",
                      "color": "#000000",
                      ":hover": {
                        "color": "#000000",
                        "background-color": "#73c4be"
                      },
                      "background-color": "#80dad3",
                      ":focus": {
                        "background-color": "#73c4be"
                      },
                      "border-radius": "8px"
                    },
                    "quantityInput": {
                      "font-size": "16px",
                      "padding-top": "16px",
                      "padding-bottom": "16px"
                    }
                  },
                  "buttonDestination": "modal",
                  "contents": {
                    "options": false
                  },
                  "text": {
                    "button": "View product"
                  },
                  "googleFonts": [
                    "Oxygen"
                  ]
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
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
                      "font-family": "Oxygen, sans-serif",
                      "font-size": "16px",
                      "padding-top": "16px",
                      "padding-bottom": "16px",
                      "color": "#000000",
                      ":hover": {
                        "color": "#000000",
                        "background-color": "#73c4be"
                      },
                      "background-color": "#80dad3",
                      ":focus": {
                        "background-color": "#73c4be"
                      },
                      "border-radius": "8px"
                    },
                    "quantityInput": {
                      "font-size": "16px",
                      "padding-top": "16px",
                      "padding-bottom": "16px"
                    }
                  },
                  "googleFonts": [
                    "Oxygen"
                  ],
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      "font-family": "Oxygen, sans-serif",
                      "font-size": "16px",
                      "padding-top": "16px",
                      "padding-bottom": "16px",
                      "color": "#000000",
                      ":hover": {
                        "color": "#000000",
                        "background-color": "#73c4be"
                      },
                      "background-color": "#80dad3",
                      ":focus": {
                        "background-color": "#73c4be"
                      },
                      "border-radius": "8px"
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  },
                  "googleFonts": [
                    "Oxygen"
                  ]
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "font-family": "Oxygen, sans-serif",
                      "background-color": "#80dad3",
                      ":hover": {
                        "background-color": "#73c4be"
                      },
                      ":focus": {
                        "background-color": "#73c4be"
                      }
                    },
                    "count": {
                      "font-size": "16px",
                      "color": "#000000",
                      ":hover": {
                        "color": "#000000"
                      }
                    },
                    "iconPath": {
                      "fill": "#000000"
                    }
                  },
                  "googleFonts": [
                    "Oxygen"
                  ]
                }
            }
          });
        });
      }
    }, []);

  return (
    <>
      <h1>Vintage '80s and '90s NHL, NBA, MLB, and NFL hats from Sports Specialties, Starter, The Game, New Era, and more.</h1>
      <br></br>
      <div id="collection-component-1705702104741"></div>
    </>
  );
};

export default Hats;
