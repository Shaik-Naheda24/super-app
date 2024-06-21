import React, { useState } from "react";
import bgImage from "../../assets/image 13 (1).png";
import styles from "./Registration.module.css";

function Registration() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [consent, setConsent] = useState(false);

  const handleSubmit = () => {
    if (!name || !username || !email || !mobile || !consent) {
      return alert("Please fill all the fields");
    } else {
      console.log({ name, username, email, mobile, consent });
    }
  };

  return (
    <div>
      <div>
        <img src={bgImage} alt="background" />
      </div>
      <div>
        <div>
          <h1>Super App</h1>
          <h2>Create your new account</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="tel"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <div>
            <input
              type="checkbox"
              value={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
              }}
            />
            <label htmlFor="">Share my registration data with Superapp</label>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>SIGN UP</button>
          <p>
            By clicking on Sign up. you agree to Superapp Terms and Conditions
            of Use
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
