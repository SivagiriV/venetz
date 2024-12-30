import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils';


const AdvantageCard = ({ icon, title, description }) => (
  <div style={styles.advantageCard}>
    <div style={styles.iconContainer}>
      <img src={icon} alt={title} style={styles.icon} />
    </div>
    <h3 style={{...styles.advantageTitle, ...styles.redText}}>{title}</h3>
    <p style={styles.advantageDescription} dangerouslySetInnerHTML={{__html: description.replace('\n', '<br />')}} />
  </div>
);

const AdvantagesSection = () => {
  const isMobile = useIsMobile();

  return (
    <div style={styles.container}>
      <div style={{...styles.heroSection, marginBottom: isMobile ? '36px' : '48px'}}>
        <h1 style={{...styles.mainTitle, fontSize: isMobile ? '36px' : '48px'}}>
          End <span style={styles.redText}>Sleepless Nights</span>
          <br />
          with Venetz
        </h1>

        <p style={{...styles.description, fontSize: isMobile ? '16px' : '18px'}}>
          Venetz Mosquito Nets offer a ready-to-install, durable, and
          eco-friendly solution to protect your family from mosquito bites while
          ensuring uninterrupted sleep.
        </p>

        <button style={styles.button}>
          <span style={styles.buttonText}>See How It Works</span>
        </button>
      </div>

      <div style={styles.divider} />

      <div style={styles.advantagesSection}>
        <h2 style={{...styles.advantagesTitle, fontSize: isMobile ? '36px' : '48px'}}>
          Experience the<br />
          <span style={styles.redText}>Venetz Advantage</span>
        </h2>

        <div style={styles.advantagesGrid}>
          <AdvantageCard
            icon={'/assets/health-icon.png'}
            title="Protection"
            description="Keeps mosquito-borne<br /> diseases at bay"
          />
          {!isMobile && <div style={styles.verticalDivider}></div>}
          <AdvantageCard
            icon={'/assets/sleep-icon.png'}
            title="Better Sleep"
            description="Enjoy uninterrupted,<br /> peaceful nights."
          />
          {!isMobile && <div style={styles.verticalDivider}></div>}
          <AdvantageCard
            icon={'/assets/protection-icon.png'}
            title="Improved Health"
            description="Enhanced well-being<br /> for the whole family."
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
  },
  mainTitle: {
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333333',
  },
  redText: {
    color: '#FF0033',
  },
  description: {
    textAlign: 'center',
    color: '#666666',
    marginBottom: '32px',
    lineHeight: '28px',
  },
  button: {
    backgroundColor: '#75B343',
    padding: '16px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '500',
  },
  divider: {
    height: '2px',
    backgroundColor: '#ABABAB',
    width: '100%',
    maxWidth: '400px',
    margin: '24px 0',
  },
  verticalDivider: {
    height: '200px',
    backgroundColor: '#ABABAB',
    width: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  advantagesSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  advantagesTitle: {
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '48px',
    color: '#333333',
  },
  advantagesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  advantageCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    minWidth: '280px',
    maxWidth: '350px',
    padding: '24px',
  },
  iconContainer: {
    marginBottom: '24px',
  },
  icon: {
    width: '64px',
    height: '64px',
  },
  advantageTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#333333',
  },
  advantageDescription: {
    fontSize: '16px',
    textAlign: 'center',
    color: '#666666',
    lineHeight: '24px',
  },
};

export default AdvantagesSection;

