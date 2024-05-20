import React, { useState } from "react";

const AddProperty = () => {
  const [form, setForm] = useState({
    place: "",
    title: "",
    address: "",
    area: "",
    BHK: "",
    noOfBathrooms: "",
    nearbyPlaces: "",
    preferredTenant: "",
    securityDeposit: "",
    houseRent: "",
    furnishing: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = JSON.parse(localStorage.getItem("userDetails")).email;
    form.userEmail = userEmail;
    const baseUrl = process.env;
    const fullUrl = `${baseUrl}addProperties`;

    console.log("Base URL:", baseUrl); // Should log the base URL
    console.log("Full URL:", fullUrl);
    fetch(`https://my-rentify-5.onrender.com/api/addProperties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        setMessage("Property Has Been Added Successfully");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
    console.log(form);
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-5">Add Property Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Place</label>
          <input
            type="text"
            className="form-control"
            name="place"
            value={form.place}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Area</label>
          <input
            type="text"
            className="form-control"
            name="area"
            value={form.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">BHK</label>
          <input
            type="number"
            className="form-control"
            name="BHK"
            value={form.BHK}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Bathrooms</label>
          <input
            type="number"
            className="form-control"
            name="noOfBathrooms"
            value={form.noOfBathrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nearby Places</label>
          <input
            type="text"
            className="form-control"
            name="nearbyPlaces"
            value={form.nearbyPlaces}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Tenant</label>
          <select
            className="form-select"
            name="preferredTenant"
            value={form.preferredTenant}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="bachelors">Bachelors</option>
            <option value="family">Family</option>
            <option value="anyone">Anyone</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Security Deposit</label>
          <input
            type="number"
            className="form-control"
            name="securityDeposit"
            value={form.securityDeposit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">House Rent</label>
          <input
            type="number"
            className="form-control"
            name="houseRent"
            value={form.houseRent}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Furnishing</label>
          <select
            className="form-select"
            name="furnishing"
            value={form.furnishing}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="semi">Semi Furnished</option>
            <option value="full">Fully Furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default AddProperty;
