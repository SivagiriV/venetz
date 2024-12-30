import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import testUtils from 'react-dom/test-utils';

const BannerSection = () => {
  const isMobile = useIsMobile();
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    heroSection: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      padding:'0 64px',
      marginVertical: 'auto',
      backgroundColor: 'transparent',
    },
    mobileHeroSection: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      marginVertical: 'auto',
      backgroundColor: '#fff',
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'row',
      gap: '48px',
    },
    heroText: {
      // flex: 1,
      textAlign: isMobile ?'center' : 'left',
      justifyContent: 'center',
    },
    heroTitle: {
      fontSize: isMobile ? '32px' : '48px',
      fontWeight: '700',
      color: '#333333',
      marginBottom: '24px',
      lineHeight: isMobile ? '40px' : '56px',
    },
    highlightedText: {
      color: '#FF0033',
    },
    heroDescription: {
      fontSize: isMobile ? '16px':'18px',
      color: '#666666',
      marginBottom: '32px',
      lineHeight:isMobile ? '24px': '28px',
      width:'100%'
    },
    ctaButton: {
      backgroundColor: '#75B343',
      padding: '16px 32px',
      borderRadius: '10px',
      alignSelf: 'flex-start',
      border: 'none',
      cursor: 'pointer',
    },
    ctaButtonText: {
      color: '#FFFFFF',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '500',
    },
    centerImageSection: {
      width: '100%',
      height: '600px',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      top: '80%',
      zIndex: 1,
    },
    centerImage: {
      width: '100%',
      height: '100%',
      borderRadius: '16px',
      objectFit: 'contain',
    },
    impactSection: {
      height: isMobile ? '580px': '650px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '32px',
    },
    impactTitle: {
      fontSize: isMobile ? '32px' : '40px',
      fontWeight: '700',
      color: '#333333',
      marginBottom: '48px',
      textAlign: isMobile ? 'center' : 'left',
    },
    impactCards: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '24px',
      maxWidth: '1200px',
      width: '100%',
      alignItems: isMobile ? 'center' : 'stretch',
    },
    impactCard: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
    },
    impactText: {
      fontSize: '18px',
      color: '#404040',
      textAlign: isMobile ? 'center' : 'left',
      lineHeight: '24px',
      fontWeight: 500,
    },
  };
  const ImpactCard = ({ text }) => (
    <div style={styles.impactCard}>
      <p style={styles.impactText}>{text}</p>
    </div>
  );
  return (
    <div style={styles.container}>
      {!isMobile ? (
        <div style={{
          backgroundImage: `url(/assets/banner.png)`,
          backgroundSize: 'cover',
          width: '100%',
          height: '600px',
        }}>
          <div style={isMobile ? styles.mobileHeroSection :styles.heroSection}>
            <div style={styles.heroContent}>
              <div style={styles.heroText}>
                <h1 style={styles.heroTitle}>
                  India's First<br />
                  <span style={styles.highlightedText}>Bed Mosquito Net</span><br />
                  with Frame
                </h1>
                <p style={styles.heroDescription}>
                  Discover how our innovative, ready-to-install mosquito net
                  frames bring peaceful nights and ultimate protection to your
                  family.
                </p>
                <button style={styles.ctaButton}>
                  <span style={styles.ctaButtonText}>Get Peaceful Sleep Now!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={isMobile ? styles.mobileHeroSection:styles.heroSection}>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>
                India's First<br />
                <span style={styles.highlightedText}>Bed Mosquito Net</span><br />
                with Frame
              </h1>
              <p style={styles.heroDescription}>
                Discover how our innovative, ready-to-install mosquito net
                frames bring peaceful nights and ultimate protection to your
                family.
              </p>
              <button style={styles.ctaButton}>
                <span style={styles.ctaButtonText}>Get Peaceful Sleep Now!</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div style={styles.centerImageSection}>
          <img
            src={'/assets/mid_banner.png'}
            alt="Center Banner"
            style={styles.centerImage}
          />
        </div>
      )}
      <div style={{
        backgroundImage: `url(/assets/hero_section.png)`,
        backgroundSize: 'cover',
        width: '100%',
        // height: '650px',
      }}>
        <div style={styles.impactSection}>
          <h2 style={styles.impactTitle}>
            The True Cost of{' '}
            <span style={styles.highlightedText}>Sleepless Nights</span>
          </h2>
          <div style={styles.impactCards}>
            <ImpactCard text="Poor sleep impacts your health and daily productivity" />
            <ImpactCard text="Ineffective mosquito prevention methods waste money" />
            <ImpactCard text="Long-term frustration and health risks due to mosquito bites" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

