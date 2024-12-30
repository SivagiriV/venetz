import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
  return (
    <header style={styles.header}>
      <Link to="/mosquito-net/ready-to-install" style={styles.logoContainer}>
        <img
          src={'/assets/venetz_logo.png'}
          alt="Venetz Logo"
          style={{
            ...styles.logo,
            ...styles.logoDesktop,
          }}
        />
      </Link>
      <Link
        to="/mosquito-net/calculate-price"
        style={styles.ctaButton}
      >
        Customize Your Net
      </Link>
      <style>{`
        @media (max-width: 768px) {
          header {
            padding: 16px 10px !important;
          }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    backgroundColor: '#fff',
    height: '60px',
    zIndex: 10,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logo: {
    height: '40px',
    objectFit: 'contain',
  },
  logoMobile: {
    width: '100px',
  },
  logoDesktop: {
    width: '150px',
  },
  ctaButton: {
    backgroundColor: '#75B343',
    padding: '12px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
  },
};
export default Header
