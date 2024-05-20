import React from "react";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../PropertyCard/PropertyCard";
const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState({
    BHK: "",
    place: "",
    area: "",
    furnishing: "",
    preferredTenant: "",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    fetch(`${process.env.BASE_URL}getAllProperties`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setProperties(data.properties);
        setFilteredListings(data.properties);
      })
      .catch((err) => {});
    // const rentalListings = [
    //   {
    //     BHK: 2,
    //     place: "Bangalore",
    //     area: "Marathalli",
    //     houseRent: "20000",
    //     securityDeposit: "50000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "ABC Hospital",
    //     address: "123 Marathalli Main Road, Bangalore",
    //     title: "2 BHK Fully Furnished Apartment in Marathalli",
    //     userEmail: "Sfodslf",
    //   },
    //   {
    //     BHK: 3,
    //     place: "Mumbai",
    //     area: "Andheri",
    //     houseRent: "45000",
    //     securityDeposit: "150000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "3",
    //     nearbyPlaces: "XYZ Mall, ABC Hospital",
    //     address: "456 Andheri West, Mumbai",
    //     title: "Spacious 3 BHK in Andheri West",
    //   },
    //   {
    //     BHK: 1,
    //     place: "Chennai",
    //     area: "Adyar",
    //     houseRent: "15000",
    //     securityDeposit: "30000",
    //     furnishing: "Unfurnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "1",
    //     nearbyPlaces: "LMN Park",
    //     address: "789 Adyar Main Road, Chennai",
    //     title: "Affordable 1 BHK in Adyar",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Hyderabad",
    //     area: "Gachibowli",
    //     houseRent: "25000",
    //     securityDeposit: "60000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "OPQ School",
    //     address: "123 Gachibowli Circle, Hyderabad",
    //     title: "Modern 2 BHK in Gachibowli",
    //   },
    //   {
    //     BHK: 3,
    //     place: "Pune",
    //     area: "Baner",
    //     houseRent: "30000",
    //     securityDeposit: "90000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "3",
    //     nearbyPlaces: "RST Office",
    //     address: "456 Baner Road, Pune",
    //     title: "3 BHK Apartment in Baner",
    //   },
    //   {
    //     BHK: 1,
    //     place: "Delhi",
    //     area: "Saket",
    //     houseRent: "20000",
    //     securityDeposit: "50000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "1",
    //     nearbyPlaces: "UVW Market",
    //     address: "789 Saket, New Delhi",
    //     title: "Cozy 1 BHK in Saket",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Kolkata",
    //     area: "Salt Lake",
    //     houseRent: "18000",
    //     securityDeposit: "40000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "XYZ Hospital",
    //     address: "123 Salt Lake City, Kolkata",
    //     title: "2 BHK Apartment in Salt Lake",
    //   },
    //   {
    //     BHK: 1,
    //     place: "Bangalore",
    //     area: "Whitefield",
    //     houseRent: "22000",
    //     securityDeposit: "55000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "1",
    //     nearbyPlaces: "ABC Tech Park",
    //     address: "456 Whitefield Main Road, Bangalore",
    //     title: "1 BHK Fully Furnished in Whitefield",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Mumbai",
    //     area: "Borivali",
    //     houseRent: "30000",
    //     securityDeposit: "75000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "DEF Garden",
    //     address: "789 Borivali West, Mumbai",
    //     title: "Comfortable 2 BHK in Borivali",
    //   },
    //   {
    //     BHK: 3,
    //     place: "Chennai",
    //     area: "T Nagar",
    //     houseRent: "40000",
    //     securityDeposit: "100000",
    //     furnishing: "Unfurnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "3",
    //     nearbyPlaces: "GHI Mall",
    //     address: "123 T Nagar, Chennai",
    //     title: "Spacious 3 BHK in T Nagar",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Hyderabad",
    //     area: "Kondapur",
    //     houseRent: "27000",
    //     securityDeposit: "65000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "JKL Stadium",
    //     address: "456 Kondapur, Hyderabad",
    //     title: "2 BHK Fully Furnished in Kondapur",
    //   },
    //   {
    //     BHK: 1,
    //     place: "Pune",
    //     area: "Kothrud",
    //     houseRent: "16000",
    //     securityDeposit: "40000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "1",
    //     nearbyPlaces: "MNO University",
    //     address: "789 Kothrud, Pune",
    //     title: "1 BHK Semi Furnished in Kothrud",
    //   },
    //   {
    //     BHK: 3,
    //     place: "Delhi",
    //     area: "Dwarka",
    //     houseRent: "50000",
    //     securityDeposit: "120000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "3",
    //     nearbyPlaces: "PQR Park",
    //     address: "123 Dwarka, New Delhi",
    //     title: "Luxury 3 BHK in Dwarka",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Kolkata",
    //     area: "New Town",
    //     houseRent: "20000",
    //     securityDeposit: "50000",
    //     furnishing: "Unfurnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "STU School",
    //     address: "456 New Town, Kolkata",
    //     title: "2 BHK Unfurnished in New Town",
    //   },
    //   {
    //     BHK: 1,
    //     place: "Bangalore",
    //     area: "Koramangala",
    //     houseRent: "25000",
    //     securityDeposit: "60000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "1",
    //     nearbyPlaces: "VWX Mall",
    //     address: "789 Koramangala, Bangalore",
    //     title: "1 BHK Fully Furnished in Koramangala",
    //   },
    //   {
    //     BHK: 3,
    //     place: "Mumbai",
    //     area: "Juhu",
    //     houseRent: "60000",
    //     securityDeposit: "180000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "3",
    //     nearbyPlaces: "YZA Beach",
    //     address: "123 Juhu, Mumbai",
    //     title: "Premium 3 BHK in Juhu",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Chennai",
    //     area: "Velachery",
    //     houseRent: "28000",
    //     securityDeposit: "70000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "BCD Lake",
    //     address: "456 Velachery, Chennai",
    //     title: "2 BHK Fully Furnished in Velachery",
    //   },
    //   {
    //     BHK: 1,
    //     place: "Hyderabad",
    //     area: "Madhapur",
    //     houseRent: "21000",
    //     securityDeposit: "52000",
    //     furnishing: "Semi Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "1",
    //     nearbyPlaces: "EFG IT Park",
    //     address: "789 Madhapur, Hyderabad",
    //     title: "1 BHK Semi Furnished in Madhapur",
    //   },
    //   {
    //     BHK: 2,
    //     place: "Pune",
    //     area: "Viman Nagar",
    //     houseRent: "26000",
    //     securityDeposit: "65000",
    //     furnishing: "Unfurnished",
    //     preferredTenant: "Bachelors",
    //     noOfBathrooms: "2",
    //     nearbyPlaces: "HIJ Airport",
    //     address: "123 Viman Nagar, Pune",
    //     title: "2 BHK Unfurnished in Viman Nagar",
    //   },
    //   {
    //     BHK: 3,
    //     place: "Delhi",
    //     area: "Rohini",
    //     houseRent: "38000",
    //     securityDeposit: "95000",
    //     furnishing: "Fully Furnished",
    //     preferredTenant: "Family",
    //     noOfBathrooms: "3",
    //     nearbyPlaces: "KLM Hospital",
    //     address: "456 Rohini, New Delhi",
    //     title: "3 BHK Fully Furnished in Rohini",
    //   },
    // ];

    // setProperties(rentalListings);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const listing = properties.filter((listing) => {
        return (
          (filters.BHK === "" || listing.BHK === parseInt(filters.BHK)) &&
          (filters.place === "" ||
            listing.place.toLowerCase() === filters.place.toLowerCase()) &&
          (filters.area === "" ||
            listing.area
              .split(",")
              .map((item) => item.toLowerCase())
              .includes(filters.area.toLowerCase())) &&
          (filters.furnishing === "" ||
            listing.furnishing.toLowerCase() ===
              filters.furnishing.toLowerCase()) &&
          (filters.preferredTenant === "" ||
            listing.preferredTenant.toLowerCase() ===
              filters.preferredTenant.toLowerCase())
        );
      });
      // if (listing.length) {
      setFilteredListings(listing);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [filters, properties]);
  return (
    <>
      <h1>Property Listings</h1>
      <div className={styles.filters}>
        <input
          type="text"
          name="BHK"
          placeholder="BHK"
          value={filters.BHK}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={filters.place}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={filters.area}
          onChange={handleFilterChange}
        />
        <select
          name="furnishing"
          value={filters.furnishing}
          onChange={handleFilterChange}
        >
          <option value="">Furnishing</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
        <select
          name="preferredTenant"
          value={filters.preferredTenant}
          onChange={handleFilterChange}
        >
          <option value="">Preferred Tenant</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Family">Family</option>
          <option value="Anyone">All</option>
        </select>
      </div>
      <div className={styles.mainDivProperties}>
        <div
          className="row text-center"
          style={{ maxWidth: "100%", marginTop: "5rem" }}
        >
          {filteredListings.length ? (
            filteredListings.map((property, index) => {
              return (
                <PropertyCard
                  title={property.title}
                  BHK={property.BHK}
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
      </div>
    </>
  );
};

export default Home;
