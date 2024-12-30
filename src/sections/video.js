import React, { useState } from 'react';
import useIsMobile from '../utils';
export default function VideoSection() {
  const isMobile = useIsMobile();
  const [isPlaying, setIsPlaying] = useState(true);
  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#fff',
      padding: '32px',
    },
    content: {
      maxWidth: isMobile ? '100%' : '50%',
    },
    title: {
      fontSize: isMobile ? '36px' : '48px',
      textAlign: isMobile ? 'center' : 'left',
      fontWeight: '700',
      color: '#333333',
      marginBottom: isMobile ? '6px' : '24px',
      lineHeight: isMobile ? '45px' : '56px',
    },
    highlightedText: {
      color: '#FF0033',
    },
    description: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: 500,
      color: '#404040',
      textAlign: isMobile ? 'center' : 'left',
      marginBottom: '32px',
      lineHeight: isMobile ? '24px' : '28px',
      whiteSpace: 'pre-line',
    },
    watchButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
    },
    watchText: {
      fontSize: '24px',
      color: '#404040',
      fontWeight: 600,
      marginRight: '8px',
    },
    arrowImage: {
      width: '150px',
      height: '20px',
      objectFit: 'contain',
    },
    videoWrapper: {
      position: 'relative',
      marginTop: isMobile ? '20px' : '0',
    },
    video: {
      height: isMobile ? '200px' : '300px',
      width: isMobile ? '300px' : '600px',
      borderRadius: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>
          <span style={styles.highlightedText}>Setting Up</span>
          <br />
          Is Simple
        </h2>

        <p style={styles.description}>
          {`Watch our step-by-step video guide
and learn how to assemble your
Venetz Mosquito Net in minutes.`}
        </p>

        <div
          style={styles.watchButton}
          onClick={() => setIsPlaying(true)}
        >
          <span style={styles.watchText}>Watch the Video</span>
          <img
            src={'/assets/Arrow.png'}
            alt="Arrow"
            style={styles.arrowImage}
          />
        </div>
      </div>

      <div style={styles.videoWrapper}>
        <iframe
          style={styles.video}
          src="https://www.youtube.com/embed/sJUpXic5_rA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

