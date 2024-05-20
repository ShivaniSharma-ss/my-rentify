import { React, useEffect } from "react";
import "./NavBar.css";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ showToast }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // toast.success("JHEHOEO")
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          //   showToast("Logged Out Successfully");
          localStorage.removeItem("token");
        }
      });
  };

  return (
    <>
      {/* <ToastContainer limit={1} /> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark main-nav">
        <h3 className="logo">RENTify</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item d-flex">
              &&
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item d-flex">
              <Link className="nav-link" to="/sign-up">
                Sign Up
              </Link>
            </li>

            {localStorage.getItem("token") && (
              <li className="nav-item d-flex">
                <Link to="/add-property" className="nav-link">
                  Add Property
                </Link>
              </li>
            )}

            <li className="nav-item d-flex">
              <Link to="/" className="nav-link">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/my-properties" className="nav-link">
                My Properties{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
