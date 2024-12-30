import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils';

export default function FeaturesSection() {
  const isMobile = useIsMobile();

  const styles = {
    container: {
      position: 'relative',
      minHeight: '600px',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: isMobile ? '#fff' : 'transparent',
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1
    },
    content: {
      paddingLeft: isMobile ? 0 : '64px',
      padding: isMobile ? '16px' : '32px',
      paddingTop: isMobile ? '32px' : '32px',
      maxWidth: isMobile ? '100%' : '50%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    header: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'flex-start',
      gap: '24px',
      alignItems: isMobile ? 'center' : 'flex-start',
      marginBottom: isMobile ? 0 :'48px',
    },
    titleContainer: {
      // flex: 1,
    },
    title: {
      fontSize: isMobile ? '36px' : '48px',
      fontWeight: '700',
      color: '#333333',
      lineHeight: isMobile ? '44px' : '56px',
      textAlign: isMobile ? 'center' : 'left',
    },
    highlightedText: {
      color: '#FF0033',
    },
    featuresGrid: {
        // width:'50%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: isMobile ? 'nowrap' : 'wrap',
      gap: isMobile ? '16px' : '24px',
      alignItems: 'center'
    },
    featureBox: {
      backgroundColor: '#75B343',
      borderRadius: '16px',
      padding: '20px',
      minWidth: '250px',
      maxWidth: '250px'
    },
    featureText: {
      color: '#FFFFFF',
      fontSize: '18px',
      lineHeight: '24px',
      textAlign: isMobile ? 'center' : 'left',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  const FeatureBox = ({ title }) => (
    <div style={styles.featureBox}>
      <p style={styles.featureText}>{title}</p>
    </div>
  );
  return (
    <div style={styles.container}>
      {!isMobile && (
        <img
          src={'/assets/features_banner.png'}
          alt="Features Banner"
          style={styles.backgroundImage}
        />
      )}
      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.titleContainer}>
            <h2 style={styles.title}>
              Designed for<br />
              <span style={styles.highlightedText}>
                Your Comfort<br />
                and Safety
              </span>
            </h2>
          </div>
          {!isMobile && (
            <div style={styles.iconContainer}>
              <img
                src={'/assets/features_badge.png'}
                alt="Features Badge"
                style={{ width: '175px', height: '175px', objectFit: 'contain' }}
              />
            </div>
          )}
        </div>
        <div style={styles.featuresGrid}>
          <FeatureBox
            title={
              isMobile
                ? "Effortless setup with easy-to-install frames."
                : "Effortless setup \nwith easy-to-install\n frames."
            }
          />
          <FeatureBox
            title={
              isMobile
                ? "High-quality, fine mesh netting for optimal  protection."
                : "High-quality, fine \nmesh netting for \noptimal  protection."
            }
          />
          <FeatureBox
            title={
              isMobile
                ? "Durable, recyclable materials for long-lasting use."
                : "Durable, recyclable \nmaterials for long-\nlasting use."
            }
          />
          <FeatureBox
            title={
              isMobile
                ? "Available in various sizes for beds and cradles."
                : "Available in various \nsizes for beds and \ncradles."
            }
          />
        </div>
      </div>
    </div>
  );
}

