import React, { useState } from "react";

const Customer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    locality: "",
    township: "",
    pincode: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>Locality</label>
          <input
            type="text"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="Locality/Colony"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>Township</label>
          <input
            type="text"
            name="township"
            value={formData.township}
            onChange={handleChange}
            placeholder="Town/Village"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="select-input"
          >
            <option value="">Select</option>
            <option value="City 1">City 1</option>
            <option value="City 2">City 2</option>
            <option value="City 3">City 3</option>
          </select>
        </div>

        <button type="submit"   style={styles.submitButton}>
        
          Submit
        </button>
      </form>
    </div>
  );
};


export default Customer;
