import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils';

export default function GuaranteeSection() {
  const isMobile = useIsMobile();

  const styles = {
    container: {
      position: 'relative',
      height: isMobile ? '400px' : '700px',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#FFF',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      position: 'relative',
      zIndex: 2,
    },
    textSection: {
      flex: 1,
      padding: isMobile ? '32px' : '64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-start',
    },
    title: {
      fontSize: isMobile ? '32px' : '48px',
      fontWeight: '700',
      color: '#333333',
      textAlign: isMobile ? 'center' : 'left',
      margin: '24px 0',
      lineHeight: isMobile ? '40px' : '56px',
    },
    highlighted: {
      color: '#FF0033',
    },
    description: {
      fontSize: '20px',
      color: '#666666',
      textAlign: isMobile ? 'center' : 'left',
      marginBottom: '32px',
      lineHeight: isMobile ? '25px' : '32px',
    },
    button: {
      backgroundColor: '#75B343',
      padding: '16px',
      borderRadius: '10px',
      alignSelf: isMobile ? 'center' : 'flex-start',
      border: 'none',
      cursor: 'pointer',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: '18px',
      fontWeight: '500',
    },
    backgroundImage: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '50%',
      height: '100%',
      backgroundImage: 'url("/images/guarantee.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };

  return (
    <div style={styles.container}>
      {isMobile ? (
        <div style={styles.content}>
          <div style={styles.textSection}>
            <img
              src={'/assets/guarantee_badge.png'}
              alt="Guarantee Badge"
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />

            <h2 style={styles.title}>
              Your Peace of Mind,{' '}
              <span style={styles.highlighted}>Guaranteed</span>
            </h2>
            <p style={styles.description}>
              Try Venetz Mosquito Nets risk-free with our 30-day money-back
              guarantee.
            </p>

            <button style={styles.button}>
              <span style={styles.buttonText}>Shop Risk-Free Today</span>
            </button>
          </div>
        </div>
      ) : (
        <div style={{ ...styles.content,backgroundImage: `url(/assets/guarantee.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={styles.textSection}>
            <img
              src={'/assets/guarantee_badge.png'}
              alt="Guarantee Badge"
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />

            <h2 style={styles.title}>
              Your Peace of Mind,<br />
              <span style={styles.highlighted}>Guaranteed</span>
            </h2>
            <p style={styles.description}>
              Try Venetz Mosquito Nets risk-free<br />
              with our 30-day money-back<br />
              guarantee.
            </p>

            <button style={styles.button}>
              <span style={styles.buttonText}>Shop Risk-Free Today</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

