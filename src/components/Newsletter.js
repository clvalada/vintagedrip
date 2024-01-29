import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setSubscribed(true);
  };

  return (
    <div className="newsletter-container">
      {subscribed ? (
        <p>Rad! We'll hit you up when the fresh stuff drops.</p>      ) : (
        <>
        <h3>Stay in the loop—subscribe and we'll ping you about our newest gear!</h3>
        <form action="https://store.us9.list-manage.com/subscribe/post?u=aab3b04908d1e6bb55a846eb0&amp;id=a9453507da&amp;f_id=000526e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
            <label htmlFor="email"></label>
            <input
              placeholder="Your email address"
              type="email"
              id="MERGE0"
              name="MERGE0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Newsletter;
