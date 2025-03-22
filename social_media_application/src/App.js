import axios from "axios";
import React, { useState } from "react";

function App() {
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [loginsuccess, setLoginsuccess] = useState(false);
  const [registerdetails, setregisterdetails] = useState({
    companyName: "",
    clientID: "",
    clientSecret: "",
    ownerName: "",
    ownerEmail: "",
    rollNo: "",
  });

  function handle(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  async function register() {
    try {
      const response = await axios.post("https://20.244.56.144/test/register", {
        companyName: "goMart",
        ownerName: "Nithish P",
        rollNo: "717822F136",
        ownerEmail: "nithish2005palani@gmail.com",
        accessCode: "GEVSsY",
      });
      console.log(response.data);
      setregisterdetails(response.data);
    } catch (error) {
      console.error("The issue with the registration details:", error.message);
    }
  }

  async function fetch() {}

  async function login() {
    await register();
    setLoginsuccess(true);
  }

  return (
    <>
      <div>
        {!loginsuccess ? (
          <>
            <h1>Login Details</h1>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handle}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handle}
              placeholder="Password"
            />
            <br />
            <button onClick={login}>Login</button>
          </>
        ) : (
          <p>Hi, welcome back!</p>
        )}
      </div>
    </>
  );
}

export default App;
