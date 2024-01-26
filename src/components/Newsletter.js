import React, { useState } from "react";
const user_id = process.env.REACT_APP_MAILCHIMP_USER_ID;
const audience_id = process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID;

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
        <form onSubmit={handleSubmit} action={`https://store.us9.list-manage.com/subscribe/post?u=${user_id}&id=${audience_id}`} method="POST">
            <input type="hidden" name="u" value="process.env.REACT_APP_MAILCHIMP_USER_ID" />
            <input type="hidden" name="id" value="process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID" />
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