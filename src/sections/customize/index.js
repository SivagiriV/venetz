import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorSelector from './colorselector';
import DimensionCalculator from './dimension'
import useIsMobile from '../../utils';

export default function DeliveryChecker() {
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = useState(1);
  const [maxVisitedStep, setMaxVisitedStep] = useState(1);
  const [pincode, setPincode] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [colorList, setColorList] = useState();

  const styles = {
    container: {
      margin: '0 auto',
      backgroundColor: '#FFFFFF',
      padding: '32px',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#75B343',
      padding: '16px',
      borderRadius: '8px',
    },
    stepsContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: '8px',
      width:'100%',
    },
    stepWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      padding: '8px 4px',
    },
    stepWithLine: {
      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
    },
    stepNumber: {
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '8px',
    },
    stepNumberActive: {
      backgroundColor: '#FFFFFF',
    },
    stepNumberText: {
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '600',
    },
    stepNumberTextActive: {
      color: '#75B343',
    },
    stepTitle: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '14px',
    },
    stepTitleActive: {
      color: '#FFFFFF',
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
    },
    prevButton: {
      backgroundColor: '#5A8D34',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    nextButton: {
      backgroundColor: '#000000',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '600',
    },
    formContainer: {
      padding: isMobile ? '12px' : '24px',
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#333333',
      marginBottom: '24px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '16px',
      width: '300px',
    },
    input: {
      flex: 1,
      border: '1px solid #E5E5E5',
      borderRadius: '4px',
      padding: '12px',
      fontSize: '16px',
      width: '120px',
      backgroundColor: '#F5F5F5',
    },
    checkButton: {
      backgroundColor: '#E5E5E5',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    checkButtonText: {
      fontSize: '14px',
      fontWeight: '600',
    },
    successText: {
      color: '#75B343',
      fontSize: '16px',
      marginBottom: '16px',
    },
    errorText: {
      color: '#FF0033',
      fontSize: '16px',
      marginBottom: '16px',
    },
    helpText: {
      color: '#666666',
      fontSize: '16px',
    },
    phoneNumber: {
      color: '#000000',
      fontWeight: '600',
    },
  };

  const getPostalAvailability = async () => {
    try {
      setIsChecked(false);
      const url = "https://admin.venetz.in/api/delivery_check";
      const params = { postal_code: pincode };
      const headers = {
        Authorization: `Basic MTQ3IzI6dkFwMnQxSlZqYnh1ckVGMEhzaTc2TEtaeWdRQzRx`,
        "Content-type": "application/json",
      };
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      setIsChecked(response?.data?.success);
      setIsAvailable(response?.data?.delivery_available);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const StepIndicator = ({ currentStep, steps, onStepPress }) => (
    <div style={styles.stepsContainer}>
      {steps.map((step, index) => (
        <button
          key={step.number}
          style={{
            ...styles.stepWrapper,
            ...(index !== steps.length - 1 && !isMobile ? styles.stepWithLine : {}),
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => onStepPress(step.number)}
        >
          <div
            style={{
              ...styles.stepNumber,
              ...(currentStep >= step.number ? styles.stepNumberActive : {}),
            }}
          >
            <span
              style={{
                ...styles.stepNumberText,
                ...(currentStep >= step.number ? styles.stepNumberTextActive : {}),
              }}
            >
              {step.number}
            </span>
          </div>
          <span
            style={{
              ...styles.stepTitle,
              ...(currentStep >= step.number ? styles.stepTitleActive : {}),
            }}
          >
            {step.title}
          </span>
        </button>
      ))}
    </div>
  );

  const steps = [
    { number: 1, title: "Delivery Availability Checker" },
    { number: 2, title: "Choose Color" },
    { number: 3, title: "Enter Dimension" },
  ];

  const handleCheck = () => {
    getPostalAvailability();
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setMaxVisitedStep(Math.max(maxVisitedStep, nextStep));
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepPress = (step) => {
    if (step <= maxVisitedStep) {
      setCurrentStep(step);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={styles.formContainer}>
            <h2 style={styles.title}>Check Delivery Availability</h2>

            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter Pincode"
                type="number"
                maxLength={6}
              />
              <button style={styles.checkButton} onClick={handleCheck}>
                <span style={styles.checkButtonText}>CHECK</span>
              </button>
            </div>

            {isChecked && (
              <p style={isAvailable ? styles.successText : styles.errorText}>
                {isAvailable
                  ? "Delivery Available For Your Location."
                  : "Not deliverable to this location."}
              </p>
            )}

            <p style={styles.helpText}>
              Please Call Us On{" "}
              <span style={styles.phoneNumber}>+91 95855 20356</span> To Help
              You With Delivery.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={styles.formContainer}>
            <ColorSelector />
          </div>
        );
      case 3:
        return (
          <div style={styles.formContainer}>
            <DimensionCalculator
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <StepIndicator
          currentStep={currentStep}
          steps={steps}
          onStepPress={handleStepPress}
        />
        <div style={styles.buttonGroup}>
          {currentStep > 1 && (
            <button style={styles.prevButton} onClick={handlePrev}>
              <span style={styles.buttonText}>PREV</span>
            </button>
          )}
          {currentStep < steps.length && (
            <button style={styles.nextButton} onClick={handleNext}>
              <span style={styles.buttonText}>NEXT</span>
            </button>
          )}
        </div>
      </div>
      {renderStepContent()}
    </div>
  );
}

