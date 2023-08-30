import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setLogged }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showpass, setshowpass] = useState(false);
  const [confirmpass, setconfirmpass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
    } else {
      setLogged(true);
      toast.success("Account Created successfully");
      navigate("/dashboard");
    }
  }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <button>Student</button>
          <button>Instructor</button>
        </div>
        <div>
          <label>
            First Name<sup>*</sup>
            <br />
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="Enter your First Name"
            />
            <br />
          </label>

          <label>
            Last Name<sup>*</sup>
            <br />
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Enter your Last Name"
            />
          </label>
          <br />
        </div>
        <label>
          Email Address<sup>*</sup>
          <br />
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter your Email"
          />
        </label>
        <br />

        <div>
          <label>
            Create Password<sup>*</sup>
            <br />
            <input
              required
              type={showpass ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Enter your Password"
            />
            <span
              onClick={() => {
                setshowpass((prev) => !prev);
              }}
            >
              {showpass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            Confirm Password<sup>*</sup>
            <br />
            <input
              required
              type={confirmpass ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />
            <span
              onClick={() => {
                setconfirmpass((prev) => !prev);
              }}
            >
              {confirmpass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
