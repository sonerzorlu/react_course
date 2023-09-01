import React, { useState } from "react";

const FormWithObject = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (k) => {
    console.log(k);
    k.preventDefault();
    alert(`
        username:${username}
        email:${email}
        password:${password}`);

    setEmail("");
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem 2rem" }}>
      <form onSubmit={handleSubmit}>
        <h2 className="display-6 text-danger">FORMS WITH OBJECTS</h2>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name: <span>{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleUsername}
            value={username}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:<span>{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            onChange={(k) => setPassword(k.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithObject;
