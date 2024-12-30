import React from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from '../utils';

export default function Footer() {
  const isMobile = useIsMobile();
  console.log('is',isMobile)
  const handleCall = () => {
    window.location.href = 'tel:+919585520356';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:sales@venetz.in';
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/venetzindia/', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/venetzIndia', '_blank');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' :'row',
      justifyContent:'space-between',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    logoContainer: {
      marginBottom: '16px',
    },
    logo: {
      width: '120px',
      height: '40px',
      objectFit: 'contain',
    },
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '16px',
    },
    contactItem: {
      padding: '4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    contactText: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#404040',
    },
    socialContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '16px',
    },
    followText: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#404040',
      marginBottom: '8px',
    },
    socialIcons: {
      display: 'flex',
    },
    iconButton: {
      padding: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    icon: {
      fontSize: '20px',
      color: '#000',
    },
    ctaButton: {
      backgroundColor: '#75B343',
      padding: '12px',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '250px',
    },
    ctaText: {
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
    },
  };

  return (
    <footer style={styles.container}>
      <div style={styles.logoContainer}>
        <Link to="/mosquito-net/ready-to-install">
          <img
            src={'/assets/venetz_logo.png'}
            alt="Venetz Logo"
            style={styles.logo}
          />
        </Link>
      </div>
      <div style={styles.contactContainer}>
        <button onClick={handleCall} style={styles.contactItem}>
          <span style={styles.contactText}>+91 9585 52 0356</span>
        </button>
        <button onClick={handleEmail} style={styles.contactItem}>
          <span style={styles.contactText}>sales@venetz.in</span>
        </button>
      </div>
      <div style={styles.socialContainer}>
        <span style={styles.followText}>Follow Us</span>
        <div style={styles.socialIcons}>
          <button onClick={openInstagram} style={styles.iconButton}>
            <i className="fa-brands fa-instagram" style={styles.icon}></i>
          </button>
          <button onClick={openFacebook} style={styles.iconButton}>
            <i className="fa-brands fa-facebook" style={styles.icon}></i>
          </button>
        </div>
      </div>
      <button style={styles.ctaButton}>
        <span style={styles.ctaText}>Transform Your Sleep Tonight!</span>
      </button>
    </footer>
  );
}

