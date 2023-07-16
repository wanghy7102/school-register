import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const token = captchaRef.current.getValue();
    if (token) {
      captchaRef.current.reset();
      navigate("/school-register/success");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("firstName", {
              required: "First Name is required.",
            })}
          />
          {errors.firstName && (
            <span className="formbold-form-error">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="formbold-form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="formbold-form-input"
            {...register("lastName", {
              required: "Last Name is required.",
            })}
          />
          {errors.lastName && (
            <span className="formbold-form-error">
              {errors.lastName.message}
            </span>
          )}
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
            {...register("email", {
              required: "Email is required.",
            })}
          />
          {errors.email && (
            <span className="formbold-form-error">{errors.email.message}</span>
          )}
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
            {...register("phone", {
              required: "Phone Number is required.",
            })}
          />
          {errors.phone && (
            <span className="formbold-form-error">{errors.phone.message}</span>
          )}
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
          {...register("address", {
            required: "Street Address is required.",
          })}
        />
        {errors.address && (
          <span className="formbold-form-error">{errors.address.message}</span>
        )}
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
          {...register("address2", {})}
        />
        {errors.address2 && (
          <span className="formbold-form-error">{errors.address2.message}</span>
        )}
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
            {...register("state", {
              required: "State/Province is required.",
            })}
          />
          {errors.state && (
            <span className="formbold-form-error">{errors.state.message}</span>
          )}
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
            {...register("country", {
              required: "Country is required.",
            })}
          />
          {errors.country && (
            <span className="formbold-form-error">
              {errors.country.message}
            </span>
          )}
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="post" className="formbold-form-label">
            Post/Zip Code
          </label>
          <input
            type="text"
            name="post"
            id="post"
            className="formbold-form-input"
            {...register("post", {
              required: "Post/Zip Code is required.",
            })}
          />
          {errors.post && (
            <span className="formbold-form-error">{errors.post.message}</span>
          )}
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
            {...register("area", {
              required: "Area Code is required.",
            })}
          />
          {errors.area && (
            <span className="formbold-form-error">{errors.area.message}</span>
          )}
        </div>
      </div>

      <ReCAPTCHA
        sitekey="6LcS1CgnAAAAAOYPOn3d3KpWgpmwQOF-rAGsSNcE"
        ref={captchaRef}
      />

      <button className="formbold-btn">Register Now</button>
    </form>
  );
};

export default Form;
