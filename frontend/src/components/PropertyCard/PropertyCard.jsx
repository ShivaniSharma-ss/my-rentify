import React from "react";
import styles from "./PropertyCard.module.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const PropertyCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.propertyCard}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.location}>{props.address}</p>
      <div className={styles.details}>
        <div className={styles.rent}>
          ₹ {props.houseRent} <span className={styles.label}>Rent</span>
        </div>
        <div className={styles.deposit}>
          ₹ {props.securityDeposit}{" "}
          <span className={styles.label}>Deposit</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://icons.iconarchive.com/icons/aha-soft/large-home/512/Property-icon.png"
          alt="Property"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.semiFurnished}>
          <span className={styles.icon}>🛋️</span>
          <span className={styles.text}>{props.furnishing}</span>
        </div>
        <div className={styles.bhk}>
          <span className={styles.icon}>🏢</span>
          <span className={styles.text}>{props.BHK + " BHK"}</span>
        </div>
        <div className={styles.preferredTenants}>
          <span className={styles.icon}>👥</span>
          <span className={styles.text}>{props.preferredTenant}</span>
        </div>
      </div>
      <Link
        to={`../seller-details/${props.userEmail}`}
        style={{ textDecoration: "none", cursor: "pointer", color: "white" }}
      >
        {" "}
        <button className={styles.getOwnerDetails}>I am Interested</button>
      </Link>
      <div className={styles.nearby}>
        <span>Nearby:</span>
        <div className={styles.nearbyPlaces}>
          <span>{props.nearbyPlaces}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
