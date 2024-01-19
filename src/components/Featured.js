/* global ShopifyBuy */
import React, { useEffect } from 'react';

const Featured = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
      const client = ShopifyBuy.buildClient({
        domain: 'crunchmoto.myshopify.com',
        storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
      });

      ShopifyBuy.UI.onReady(client).then(ui => {
        ui.createComponent('collection', {
          id: '317293854895',
          node: document.getElementById('collection-component-1705697607232'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          // Options and configurations here
        });
      });
    };

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []); // The empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="featured">
      <h1>Featured Items</h1>
      <div id='collection-component-1705697607232'></div>
    </div>
  );
};

export default Featured;
