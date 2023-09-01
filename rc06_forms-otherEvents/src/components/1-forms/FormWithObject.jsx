import React, { useState } from "react";

const FormWithObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const { username, email, password, address } = formData;

  const handleFormData = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.id);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert(`
        username:${username}
        email:${email}
        password:${password}
        address:${address}`);

    setFormData({ username: "", email: "", password: "", address: "" });
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
            onChange={handleFormData}
            value={username || ""}
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
            onChange={handleFormData}
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
            id="password"
            onChange={handleFormData}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="address"
            className="form-control"
            id="address"
            onChange={handleFormData}
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
