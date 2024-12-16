import React, { useState } from "react";

const Add = () => {
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
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.inputContainer}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Locality</label>
          <input
            type="text"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="Locality/Colony"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Township</label>
          <input
            type="text"
            name="township"
            value={formData.township}
            onChange={handleChange}
            placeholder="Town/Village"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.selectInput}
          >
            <option value="">Select</option>
            <option value="City 1">City 1</option>
            <option value="City 2">City 2</option>
            <option value="City 3">City 3</option>
          </select>
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
    backgroundColor: "#f9f9f9",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "400px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  inputContainer: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  selectInput: {
    height: "35px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Add;
