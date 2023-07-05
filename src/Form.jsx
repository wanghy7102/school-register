import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [post, setPost] = useState("");
  const [area, setArea] = useState("");
  const captchaRef = useRef(null);

  return (
    <form method="POST">
      <div className="formbold-form-title">
        <h2>School Registration</h2>
        <p>Fill out the form carefully for registration</p>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="firstName" className="formbold-form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="formbold-form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="formbold-form-label">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="formbold-form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="email" className="formbold-form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="formbold-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="formbold-form-label">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="formbold-form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="formbold-mb-3">
        <label htmlFor="address" className="formbold-form-label">
          Street Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="formbold-form-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="formbold-mb-3">
        <label htmlFor="address2" className="formbold-form-label">
          Street Address Line 2
        </label>
        <input
          type="text"
          name="address2"
          id="address2"
          className="formbold-form-input"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="state" className="formbold-form-label">
            State/Prvince
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="formbold-form-input"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country" className="formbold-form-label">
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="formbold-form-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="post" className="formbold-form-label">
            Post/Zip code
          </label>
          <input
            type="text"
            name="post"
            id="post"
            className="formbold-form-input"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="area" className="formbold-form-label">
            Area Code
          </label>
          <input
            type="text"
            name="area"
            id="area"
            className="formbold-form-input"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
      </div>

      <ReCAPTCHA
        sitekey="6Le_Qu0mAAAAAFjsfGnbaNrYXugjXlQLzMxNHiS5"
        ref={captchaRef}
      />

      <button className="formbold-btn">Register Now</button>
    </form>
  );
};

export default Form;
