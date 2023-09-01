import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("?");
  const [email, setEmail] = useState("?");
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(`
        username:${ username}
        email:${ email}
        password:${ password}`
    )

setEmail("")

  }


  return (
    <div style={{"textAlign":"center", "margin": "2rem 2rem"}}>
      <form onSubmit={handleSubmit}>
        <h2 className="display-6 text-danger">FORMS</h2>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name: <span>{username}</span>
          </label>
          <input type="text" className="form-control" id="username" onChange={handleUsername} value={username} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
