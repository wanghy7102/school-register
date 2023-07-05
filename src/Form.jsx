import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form method="POST">
          <div className="formbold-form-title">
            <h2>Register now</h2>
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
              <label for="lastName" className="formbold-form-label">
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
        </form>
      </div>
    </div>
  );
};

export default Form;
