import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add logic to handle the form submission, like sending the email to a server or storing it in your database.
    console.log("Email submitted:", email);

    // Reset the form after submission
    setEmail("");

    // Update the subscription status
    setSubscribed(true);
  };

  return (
    <div className="newsletter-container">
      {subscribed ? (
        <p>Rad! We'll hit you up when the fresh stuff drops.</p>      ) : (
        <>
        <h3>Stay in the loop—subscribe and we'll ping you about our newest gear!</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input
              placeholder="Your email address"
              type="email"
              id="email"
              name="email"
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
