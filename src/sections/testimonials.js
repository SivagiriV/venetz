import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils';

const testimonials = [
  {
    id: 1,
    name: "Suganya pv",
    avatar: "/placeholder.svg?height=80&width=80",
    text: "The protective mosquito net comes with both Mosquito Net and the ready to install Mosquito net Frame, which can be installed to any bed within 5 minutes of time.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    avatar: "/placeholder.svg?height=80&width=80",
    text: "I was amazed at how easy it was to set up. The quality of the net is excellent, and it has significantly reduced mosquito bites in our home.",
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=80&width=80",
    text: "As a mother, I always worry about my children's safety. This mosquito net has given me peace of mind. It's durable and effective.",
  },
  {
    id: 4,
    name: "Amit Kumar",
    avatar: "/placeholder.svg?height=80&width=80",
    text: "The customer service was exceptional. They helped me choose the right size and even followed up after the purchase. Highly recommended!",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    avatar: "/placeholder.svg?height=80&width=80",
    text: "I've tried other mosquito nets before, but this one stands out. The frame is sturdy, and the net itself is of superior quality. Worth every rupee!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile()

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[activeIndex]];
    }
    const visibleIndices = [
      (activeIndex - 1 + testimonials.length) % testimonials.length,
      activeIndex,
      (activeIndex + 1) % testimonials.length,
    ];
    return visibleIndices.map((index) => testimonials[index]);
  };

  const styles = {
    container: {
      padding: isMobile ? '32px 0px' :'32px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: isMobile ? '28px' : '48px',
      fontWeight: '700',
      color: '#333333',
      textAlign: 'center',
      marginBottom: '48px',
    },
    highlightedText: {
      color: '#FF0033',
    },
    carouselContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px',
      marginBottom: '32px',
      position: 'relative',
    },
    testimonialCard: {
      flex: 1,
      maxWidth: isMobile ? '200px':'400px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      opacity: 0.7,
      transform: 'scale(0.9)',
      transition: 'all 0.3s ease',
    },
    testimonialCardMobile: {
      width: '100%',
      marginBottom: '16px',
      opacity: 1,
      transform: 'scale(1)',
    },
    activeCard: {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 1,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '12px',
    },
    avatar: {
      width: '48px',
      height: '48px',
      borderRadius: '24px',
      backgroundColor: '#d9d9d9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '24px',
    },
    name: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333333',
    },
    testimonialText: {
      fontSize: '16px',
      color: '#666666',
      textAlign: 'left',
      lineHeight: '24px',
      marginTop: '16px',
    },
    dotsContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      marginBottom: '48px',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '4px',
      backgroundColor: '#E5E5E5',
      cursor: 'pointer',
    },
    activeDot: {
      backgroundColor: '#75B343',
    },
    ctaButton: {
      backgroundColor: '#75B343',
      padding: '16px 32px',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    ctaButtonText: {
      color: '#FFFFFF',
      fontSize: '18px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        <span style={styles.highlightedText}>Trusted</span> by Families Across the Nation
      </h2>
      <div style={styles.carouselContainer}>
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={testimonial.id}
            style={{
              ...styles.testimonialCard,
              ...(isMobile ? styles.testimonialCardMobile : {}),
              ...(index === 1 ? styles.activeCard : {}),
            }}
          >
            <div style={styles.header}>
              <div style={styles.avatar}>
                {testimonial.name.charAt(0)}
              </div>
              <span style={styles.name}>{testimonial.name}</span>
            </div>
            <p style={styles.testimonialText}>{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div style={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              ...(activeIndex === index ? styles.activeDot : {}),
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <button style={styles.ctaButton}>
        <span style={styles.ctaButtonText}>Join Our Happy Family</span>
      </button>
    </div>
  );
}

