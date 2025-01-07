import React, { useState } from 'react';
import useIsMobile from '../../utils';
import axios from 'axios';
const DimensionCalculator = ({ addCart, buynow }) => {
  const isMobile = useIsMobile();
  const [dimensions, setDimensions] = useState({
    length: "",
    breadth: "",
    height: "",
  });
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState('');

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      padding: isMobile ? '16px' : '32px',
      gap: '25px',
      margin: '0 auto',
    },
    illustrationContainer: {
      aspectRatio: isMobile ? '1' : '1',
      height: isMobile ? '200px' : 'auto',
    },
    illustration: {
      width: isMobile ? 150 : 300,
      height: isMobile ? 150 : 300,
      objectFit: 'cover',
    },
    formContainer: {
      flex: 1,
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#333333',
      marginBottom: '24px',
    },
    inputsContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '16px',
      marginBottom: '24px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '16px',
      color: '#333333',
      marginBottom: '8px',
    },
    inputWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      border: '1px solid #E5E5E5',
      padding: '12px',
      fontSize: '16px',
      width: isMobile ? '40px' : '120px',
      backgroundColor: '#F5F5F5',
    },
    unitBadge: {
      backgroundColor: '#E5E5E5',
      padding: '15px',
    },
    unitText: {
      fontSize: '14px',
      color: '#666666',
    },
    helpText: {
      fontSize: '14px',
      color: '#666666',
      marginBottom: '24px',
      width: '180px',
    },
    calculateButton: {
      backgroundColor: '#75B343',
      padding: '12px 24px',
      marginLeft: '10px',
      borderRadius: '4px',
      alignSelf: 'flex-start',
      border: 'none',
      cursor: 'pointer',
    },
    calculateButtonText: {
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: '600',
    },
    priceContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      backgroundColor: '#f8f9fe',
      maxWidth: '300px',
      width: '100%',
    },
    priceTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px',
    },
    price: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '8px',
    },
    quantityContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    quantityLabel: {
      marginRight: '12px',
    },
    quantitySelector: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    quantityButton: {
      padding: '8px',
      width: '36px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    quantityButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    quantityButtonText: {
      fontSize: '18px',
    },
    quantityValue: {
      padding: '0 16px',
      borderLeft: '1px solid #ddd',
      borderRight: '1px solid #ddd',
    },
    actionButton: {
      width: isMobile ? '200px' : '300px',
      padding: '16px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '12px',
      border: 'none',
      cursor: 'pointer',
    },
    addToCartButton: {
      backgroundColor: '#000',
    },
    buyNowButton: {
      backgroundColor: '#2FB344',
    },
    actionButtonText: {
      color: '#fff',
      fontWeight: '600',
    },
  };
  const calculatePrice = async (values) => {
    setLoading(true);
    setPrice(null);
    try {
      const url = "https://admin.venetz.in/api/product_custom_size";
      const params = {
        length: values?.length,
        breadth: values?.breadth,
        height: values?.height,
      };
      const headers = {
        Authorization: `Basic MTQ3IzI6dkFwMnQxSlZqYnh1ckVGMEhzaTc2TEtaeWdRQzRx`,
        "Content-type": "application/json",
      };
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      setPrice(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };
  const handleCalculate = () => {
    calculatePrice(dimensions);
  };

  const handleDimensionChange = (name, value) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setDimensions((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={styles.container}>
      {/* {!isMobile && (
        <div style={styles.illustrationContainer}>
          <img
            src="https://admin.venetz.in/dynamic/images/product_images/YXU0PZ.jpg"
            alt="Product Illustration"
            style={styles.illustration}
          />
        </div>
      )} */}
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Enter Dimension</h2>
        <div style={styles.inputsContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter Length</label>
            <div style={styles.inputWrapper}>
              <input
                style={styles.input}
                value={dimensions.length}
                onChange={(e) => handleDimensionChange("length", e.target.value)}
                type="number"
                placeholder="0"
              />
              <span style={styles.unitBadge}>
                <span style={styles.unitText}>Inches</span>
              </span>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter Breadth</label>
            <div style={styles.inputWrapper}>
              <input
                style={styles.input}
                value={dimensions.breadth}
                onChange={(e) => handleDimensionChange("breadth", e.target.value)}
                type="number"
                placeholder="0"
              />
              <span style={styles.unitBadge}>
                <span style={styles.unitText}>Inches</span>
              </span>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter Height</label>
            <div style={styles.inputWrapper}>
              <input
                style={styles.input}
                value={dimensions.height}
                onChange={(e) => handleDimensionChange("height", e.target.value)}
                type="number"
                placeholder="0"
              />
              <span style={styles.unitBadge}>
                <span style={styles.unitText}>Inches</span>
              </span>
              <button
                style={{
                  ...styles.calculateButton,
                  backgroundColor:
                    dimensions.length && dimensions.breadth && dimensions.height
                      ? "#75B343"
                      : "#E5E5E5",
                }}
                disabled={!dimensions.length || !dimensions.breadth || !dimensions.height}
                onClick={handleCalculate}
              >
                <span style={styles.calculateButtonText}>CALCULATE</span>
              </button>
            </div>
            <p style={styles.helpText}>
              The optimal height of 66 inch will ideally satisfy both stature
              and comfort very easily.
            </p>
          </div>
        </div>
        {!loading && price?.success ? (
          <div style={styles.priceContainer}>
            <div>
              <h3 style={styles.priceTitle}>{`${price?.product_custom_size_name} - Price Details`}</h3>
              <p style={styles.price}>₹ {price?.product_custom_size_price}</p>
              <div style={styles.quantityContainer}>
                <span style={styles.quantityLabel}>Quantity</span>
                <div style={styles.quantitySelector}>
                  <button
                    style={{
                      ...styles.quantityButton,
                      ...(quantity <= 1 ? styles.quantityButtonDisabled : {}),
                    }}
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <span style={styles.quantityButtonText}>−</span>
                  </button>
                  <span style={styles.quantityValue}>{quantity}</span>
                  <button
                    style={styles.quantityButton}
                    onClick={increaseQuantity}
                  >
                    <span style={styles.quantityButtonText}>+</span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button style={{ ...styles.actionButton, ...styles.addToCartButton }} onClick={() => addCart(quantity, dimensions)}>
                <span style={styles.actionButtonText}>ADD TO CART</span>
              </button>
              <button style={{ ...styles.actionButton, ...styles.buyNowButton }} onClick={() => buynow(quantity, dimensions)}>
                <span style={styles.actionButtonText}>BUY NOW</span>
              </button>
            </div>
          </div>
        ) : (
          !loading && (
            <p style={styles.title}>
              {price?.message
                ? price.message
                : "Enter the Measurements and click on Calculate price"}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default DimensionCalculator;

