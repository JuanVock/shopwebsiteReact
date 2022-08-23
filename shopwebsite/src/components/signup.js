import React, { userRef } from "react";

const SignUp = () => {
  const emailRef = userRef();
  const nameRef = userRef();
  const psdRef = userRef();
};

const onSubmit = (e) => {
  e.preventDefault();
  const email = emailRef.current.value;
  const name = nameRef.current.value;
  const passwort = psdRef.current.value;
};

return (
  <div className="form">
    <h2>New User</h2>
    <form onSubmit={onSubmit}>
      <input placeholder="Email" type="email" ref={emailRef} />
      <input placeholder="Name" type="name" ref={nameRef} />
      <input placeholder="Password" type="password" ref={psdRef} />
      <button type="submit">Register</button>
    </form>
  </div>
);
