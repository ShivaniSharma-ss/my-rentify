import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./SellerDetails.module.css";

const SellerDetails = () => {
  let { email } = useParams();
  const [seller, setSeller] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  useEffect(() => {
    fetch(`${process.env.BASE_URL}getSellerDetails?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((item) => {
        setSeller(item.userDetails);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className={"py-4" + " " + styles.bloggerDetailsMainDiv}>
        <div
          className={"mb-3" + " " + styles.card}
          style={{ maxWidth: "60rem", marginTop: "5rem" }}
        >
          <div className={"row g-0"}>
            <div className="col-md-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                className={
                  "img-fluid rounded-start" + " " + styles.bloggerDetailsPic
                }
                alt="..."
              />
            </div>
            <div className={styles.intro + " " + "col-md-8"}>
              <div className="card-body">
                <h5
                  className={styles.cardTitle + " " + "card-title text-success"}
                >
                  {seller.firstName + " " + seller.lastName}
                </h5>
                <p className={styles.para + " " + "card-text text-muted"}>
                  Email: {seller.email}
                </p>
                <p className={styles.para + " " + "card-text text-muted"}>
                  Phone Number: {seller.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDetails;
