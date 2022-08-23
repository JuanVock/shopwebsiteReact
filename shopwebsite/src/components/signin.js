import React, { userRef } from "react";

const Sigin = () => {
  const emailRef = userRef();
  const psdRef = userRef();
};

const onSubmit = (e) => {
  e.preventDefault();
  const email = emailRef.current.value;
  const passwort = psdRef.current.value;
};

const forgotPasswordHandler = () => {
  const email = emailRef.current.value;
};

return (
  <div className="form">
    <h2>Login</h2>
    <form onSubmit={onSubmit}>
      <input placeholder="Email" type="Email" ref={emailRef}></input>
      <input placeholder="Password" type="password" ref={psdRef} />
      <button type="submit">Sign In</button>
    </form>
  </div>
);
