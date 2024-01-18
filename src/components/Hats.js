import React, { useEffect } from "react";
import ShopifyBuy from "shopify-buy";

const Hats = () => {
  useEffect(() => {
    // Load Shopify Buy Button script
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Shopify Buy Button
      const client = ShopifyBuy.buildClient({
        domain: "crunchmoto.myshopify.com",
        storefrontAccessToken: "a6f781e2acbb2659e84536d545a11772",
      });

      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("collection", {
          id: "84747124854",
          node: document.getElementById("collection-component-1705611680549"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          // Additional options and styles can be configured here
        });
      });
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      {/* Replace with your own content */}
      <h1>Hats</h1>
      <div id="collection-component-1705611680549"></div>
    </div>
  );
};

export default Hats;
