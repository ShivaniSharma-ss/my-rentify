import React from "react";
import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    let email = user.email;
    let password = user.password;

    if (!validateEmail(user.email)) {
      setError({ isError: true, msg: "Invalid Email" });
      return;
    }

    if (user.password.length < 8) {
      setError({
        isError: true,
        msg: "Password must be at least 8 chars long",
      });
      return;
    }
    let userBody = {
      email,
      password,
    };

    fetch(`${process.env.BASE_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(userBody),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            navigate("/");
          }, 3000);
          // toast.success("Logged In successfully");
          //   showToast("Logged In successfully");
          localStorage.setItem("token", data.token);
          localStorage.setItem("userDetails", JSON.stringify(data.userDetails));
        } else {
          setError({ isError: true, msg: "Please check email or password" });
        }
      })
      .catch((e) => {
        console.log(e);
        setError({
          isError: true,
          msg: "User does not exist.Please sign up.",
        });
      });
  };

  return (
    <>
      {/* <ToastContainer limit={1} /> */}
      <div className={styles.mainDiv}>
        <div className={styles.card}>
          <div className="mt-3">
            <b className="pt-3">Welcome To RENTify</b>
          </div>
          <div className="container">
            <form className={styles.formClass} onSubmit={handleSignIn}>
              <input
                name="email"
                onChange={handleChange}
                type="text"
                value={user.email}
                placeholder="Enter email"
              />
              <input
                name="password"
                onChange={handleChange}
                value={user.password}
                placeholder="Enter password"
                type={showPassword ? "text" : "password"}
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
              {error.isError && (
                <div className={styles.error}>
                  <span>{error.msg}</span>
                </div>
              )}
              <div style={{ marginTop: "8px" }}>
                <div>Not An Existing User?</div>
                <Link to="/sign-up">Click here to sign up</Link>
              </div>
              <button className="btn btn-outline-dark mt-3" type="submit">
                Sign In{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
