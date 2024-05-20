import React from "react";
import { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    profileType: 0,
  });
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({
    isError: false,
    msg: "",
  });

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "phoneNumber") {
      if (value !== "") {
        if (!Number(value) || value.length > 10) {
          return;
        }
      }
    }
    if (e.target.type === "radio") {
      value = parseInt(value);
    }
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    let userBody = {
      name: user.username,
      email: user.email,
    };
    if (user.firstName.length < 3) {
      setError({
        isError: true,
        msg: "First Name must be at least 3 chars long",
      });
      return;
    }
    if (user.lastName.length < 3) {
      setError({
        isError: true,
        msg: "Last Name must be at least 3 chars long",
      });
      return;
    }
    if (!validateEmail(user.email)) {
      setError({ isError: true, msg: "Invalid Email" });
      return;
    }

    if (user.phoneNumber.length < 3) {
      setError({ isError: true, msg: "Phone Number must be 10 digits long" });
      return;
    }

    if (user.password.length < 8) {
      setError({
        isError: true,
        msg: "Password must be at least 8 chars long",
      });
      return;
    }

    fetch(`${process.env.BASE_URL}addUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userBody),
    })
      .then((res) => res.json())
      .then((data) => {
        // showToast("Email has been sent succesfully.");
        navigate("/login");
        console.log(data[0], data[1]);
      })
      .catch((e) => console.log(e));
    // .then((res) => console.log(res))
    // .catch((e) => console.log(e));
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.card}>
          <div className="mt-3">
            <b className="pt-3">Welcome To RENTify</b>
          </div>

          <div className="container">
            <form className={styles.formClass} onSubmit={handleSignUp}>
              <input
                onChange={handleChange}
                type="text"
                name="firstName"
                value={user.firstName}
                placeholder="Enter First Name*"
                className="form-control"
              />
              <input
                onChange={handleChange}
                type="text"
                name="lastName"
                value={user.lastName}
                placeholder="Enter Last Name*"
                className="form-control"
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                value={user.email}
                placeholder="Enter Email*"
                className="form-control"
              />
              <input
                onChange={handleChange}
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                placeholder="Enter Phone Number*"
                className="form-control"
              />
              <input
                name="password"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                value={user.password}
                placeholder="Enter Password*"
                className="form-control"
              />
              <div className="d-flex">
                <label htmlFor="check" className={styles.showPassword}>
                  Show Password
                </label>
                <input
                  id="check"
                  type="checkbox"
                  value={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <label
                className={styles.colorLight}
                style={{ textAlign: "left" }}
                htmlFor="profileType1"
              >
                Select Profile Type:
              </label>
              <div style={{ textAlign: "left" }}>
                <div className={styles.colorLight}>
                  Buyer &nbsp;
                  <input
                    name="profileType"
                    onChange={handleChange}
                    type="radio"
                    value={0}
                    radioGroup="profileType"
                    checked={user.profileType === 0}
                  />
                </div>
                <div className={styles.colorLight}>
                  Seller &nbsp;
                  <input
                    name="profileType"
                    onChange={handleChange}
                    type="radio"
                    value={1}
                    className="ml-2"
                    radioGroup="profileType"
                    checked={user.profileType === 1}
                  />
                </div>
              </div>

              {error.isError && (
                <div className={styles.error}>
                  <span>{error.msg}</span>
                </div>
              )}
              <div style={{ marginTop: "8px" }}>
                <div>Already have an account?</div>
                <Link to="/login" className="mt-3">
                  Click here to Login
                </Link>
              </div>

              <button className="btn btn-outline-dark mt-3" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
