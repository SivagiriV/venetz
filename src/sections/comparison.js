import React from 'react';
import useIsMobile from '../utils';

export default function ComparisonSection() {
  const isMobile = useIsMobile();

  const styles = {
    container: {
      padding: isMobile ? 0 : '32px',
      backgroundColor: '#F0FFE0',
    },
    header: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: !isMobile ? 'flex-start' : 'center',
      justifyContent: 'space-around',
      marginBottom: '64px',
      paddingTop: isMobile ? 0: '64px',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingBottom: isMobile ? '32px':0
    },
    title: {
      fontSize: isMobile ? '32px' : '48px',
      fontWeight: '700',
      color: '#333333',
      marginBottom: '32px',
      lineHeight: isMobile ? '40px' : '56px',
      textAlign: isMobile ? 'center' : 'left',
    },
    highlightedText: {
      color: '#FF0033',
    },
    headerButton: {
      backgroundColor: '#FF0033',
      padding: '16px 32px',
      borderRadius: '10px',
      alignSelf: isMobile ? 'center' : 'flex-start',
      border: 'none',
      cursor: 'pointer',
    },
    headerButtonText: {
      color: '#FFFFFF',
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: '500',
    },
    comparisonTable: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: isMobile ? 'center' : 'auto',
      gap: isMobile ? '12px' : '24px',
    },
    column: {
      maxWidth: isMobile ? '75px' : '200px',
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '12px' : '24px',
      borderRadius: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop: isMobile ? '20px' : 0,
    },
    columnHeader: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      color: '#333333',
      marginBottom: '24px',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '16px',
    },
    featureText: {
      fontSize: '16px',
      color: '#666666',
    },
    iconContainer: {
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    qualityText: {
      fontSize: '16px',
      color: '#666666',
      textAlign: 'left',
    },
    visualComparison: {
      borderRadius: '24px',
      padding: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    comparisonImage: {
      width: '100%',
      height: '600px',
      borderRadius: '25px',
      objectFit: 'contain',
    },
    aligned: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
  const ComparisonRow = ({ feature, ordinary = false, venetz = false }) => (
    <div style={styles.row}>
      <span style={styles.featureText}>{feature}</span>
      <div style={styles.iconContainer}>
        {ordinary ? (
          <i className="fa-solid fa-xmark" style={{color: '#FF0033'}}></i>
        ) : venetz ? (
          <i className="fa-solid fa-circle-check" style={{color: '#75B343'}}></i>
        ) : null}
      </div>
    </div>
  );
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={isMobile ? styles.aligned : {}}>
          <h2 style={styles.title}>
            <span style={styles.highlightedText}>Why Choose</span>
            <br />
            Venetz Over<br />
            Ordinary Nets?
          </h2>

          <button style={styles.headerButton}>
            <span style={styles.headerButtonText}>
              Choose the Best Protection
            </span>
          </button>
        </div>

        <div style={styles.comparisonTable}>
          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Feature</h3>
            <ComparisonRow feature="Easy Installation" />
            <ComparisonRow feature="Durable Materials" />
            <ComparisonRow feature="Protection Quality" />
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Ordinary Nets</h3>
            <ComparisonRow feature="" ordinary />
            <ComparisonRow feature="" ordinary />
            <p style={styles.qualityText}>Average</p>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Venetz Nets</h3>
            <ComparisonRow feature="" venetz />
            <ComparisonRow feature="" venetz />
            <p style={styles.qualityText}>Superior</p>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div style={styles.visualComparison}>
          <img
            src={'/assets/comparison.png'}
            alt="Comparison"
            style={styles.comparisonImage}
          />
        </div>
      )}
    </div>
  );
}

