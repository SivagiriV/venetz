import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils';

export default function MissionSection() {
  const isMobile = useIsMobile();

  const styles = {
    container: {
      backgroundColor: '#75B343',
      paddingTop: '48px',
      paddingLeft: '64px',
      paddingRight: '64px',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: '10px',
    },
    textSection: {
      flex: 1,
      maxWidth: '600px',
    },
    title: {
      fontSize: isMobile ? '36px' : '48px',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '24px',
      lineHeight: isMobile ? '40px' : '56px',
      textAlign: isMobile ? 'center' : 'left',
    },
    description: {
      fontSize: isMobile ? '16px' : '24px',
      color: '#FFFFFF',
      marginBottom: '32px',
      lineHeight: isMobile ? '25px' : '32px',
      textAlign: isMobile ? 'center' : 'left',
    },
    button: {
      backgroundColor: '#FFFFFF',
      padding: '16px 32px',
      borderRadius: '10px',
      alignSelf: 'flex-start',
      border: 'none',
      cursor: 'pointer',
    },
    buttonText: {
      color: '#333333',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '500',
      textAlign: 'center',
    },
    imageContainer: {
      width: '33%',
      alignSelf: 'flex-end',
    },
    image: {
      width: '100%',
      height: '400px',
      objectFit: 'contain',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.textSection}>
          <h2 style={styles.title}>
            Our Mission<br />at Venetz
          </h2>
          <button style={styles.button}>
            <span style={styles.buttonText}>Become Part of Our Story</span>
          </button>
        </div>
        <div style={{ width: isMobile ? '100%' : '33%' }}>
          <p style={styles.description}>
            At Venetz, we are committed to delivering eco-friendly, innovative
            solutions that ensure the safety and comfort of your family.
          </p>
        </div>
        {!isMobile && (
          <div style={styles.imageContainer}>
            <img
              src={'/assets/mission.png'}
              alt="Our Mission"
              style={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}

