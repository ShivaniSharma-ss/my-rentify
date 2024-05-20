import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import { useNavigate } from "react-router-dom";

const SellerProperties = () => {
  const navigate = useNavigate();

  const [listings, setProperties] = useState([]);
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (!userDetails) {
      navigate("/login");
    }
    fetch(`https://my-rentify-5.onrender.com/api/getMyProperties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ email: userDetails?.email }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setProperties(data.properties);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      {listings.length ? (
        listings.map((property, index) => {
          return (
            <PropertyCard
              title={property.title}
              bhk={property.bhk}
              nearbyPlaces={property.nearbyPlaces}
              securityDeposit={property.securityDeposit}
              houseRent={property.houseRent}
              furnishing={property.furnishing}
              place={property.place}
              area={property.area}
              noOfBathrooms={property.noOfBathrooms}
              address={property.address}
              preferredTenant={property.preferredTenant}
              userEmail={property.userEmail}
            />
          );
        })
      ) : (
        <div>No Properties Found</div>
      )}
    </div>
  );
};

export default SellerProperties;
