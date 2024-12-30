import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    emailId: "",
    city: "",
    pincode: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#fff",
    },
    input: {
      border: "1px solid #E5E5E5",
      borderRadius: 4,
      padding: 12,
      marginBottom: 16,
      fontSize: 16,
      width: "500px",
      backgroundColor: "#F5F5F5",
    },
    mobileInput: {
      width: "300px",
    },
    button: {
      backgroundColor: "#75B343",
      color: "#FFFFFF",
      padding: "16px 32px",
      borderRadius: 10,
      fontSize: 18,
      fontWeight: 500,
      border: "none",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#669D39",
    },
  };

  const isMobile = window.innerWidth < 769;

  return (
    <div style={styles.container}>
      <input
        style={{ ...styles.input, ...(isMobile ? styles.mobileInput : {}) }}
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
      />
      <input
        style={{ ...styles.input, ...(isMobile ? styles.mobileInput : {}) }}
        type="number"
        placeholder="Mobile Number"
        value={formData.mobileNo}
        onChange={(e) => handleChange("mobileNo", e.target.value)}
      />
      <input
        style={{ ...styles.input, ...(isMobile ? styles.mobileInput : {}) }}
        type="email"
        placeholder="Email ID"
        value={formData.emailId}
        onChange={(e) => handleChange("emailId", e.target.value)}
      />
      <input
        style={{ ...styles.input, ...(isMobile ? styles.mobileInput : {}) }}
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
      />
      <input
        style={{ ...styles.input, ...(isMobile ? styles.mobileInput : {}) }}
        type="number"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) => handleChange("pincode", e.target.value)}
      />
      <button
        style={styles.button}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)
        }
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
