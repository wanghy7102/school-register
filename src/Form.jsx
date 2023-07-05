import { Link } from "react-router-dom";

const Form = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/school-register/" className="brand-logo">
          School Registration Form
        </Link>
      </div>
    </nav>
  );
};

export default Form;
