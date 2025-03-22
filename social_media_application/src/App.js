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

  const [tokendetails, settokendetails] = useState({
    tokentype: "",
    access_token: "",
    expires_in: "",
  });

  function handle(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  async function register() {
    try {
      const response = await axios.post("http://20.244.56.144/test/register", {
        companyName: "goMart",
        ownerName: "Nithish P",
        rollNo: "717822F136",
        ownerEmail: "717822F36@kce.ac.in",
        accessCode: "GEVSsY",
      });
      console.log(response.data);
      setregisterdetails(response.data);
      await fetch();
    } catch (error) {
      console.error("The issue with the registration details:", error.message);
    }
  }

  async function fetch() {
    try {
      console.log(registerdetails);
      const response = await axios.post("http://20.244.56.144/test/auth", {
        companyName: registerdetails.companyName,
        clientID: registerdetails.clientID,
        clientSecret: registerdetails.clientSecret,
        ownerName: registerdetails.ownerName,
        ownerEmail: registerdetails.ownerEmail,
        rollNo: registerdetails.rollNo,
      });
      console.log(response.data);
      settokendetails(response.data);
    } catch (error) {
      console.error("The issue with the registration details:", error.message);
    }
  }

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
