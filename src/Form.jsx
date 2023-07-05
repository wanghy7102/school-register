import { useState } from "react";
import Header from "./Header";

const Form = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <Header />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                type="text"
                className="validate"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
