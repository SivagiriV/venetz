import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div 
    style={{
      ...styles.faqItem,
      ...(isOpen ? styles.faqItemOpen : {})
    }} 
    onClick={onToggle}
  >
    <div style={styles.questionRow}>
      <h3 style={styles.question}>{question}</h3>
      <span style={styles.icon}>{isOpen ? '−' : '+'}</span>
    </div>
    {isOpen && <p style={styles.answer}>{answer}</p>}
  </div>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why you have to use Venetz?",
      answer: "As we all know Peaceful sleep and our health are directly related. To have a healthy Mind, peaceful sleep is very much a needy one. So only we sell the needed peaceful sleep for everyone through Venetz.",
    },
    {
      question: "How is Venetz Different from other Mosquito net?",
      answer: "Venetz Provides not only the Mosquito net but also the required Frame for our bed. Venetz is one of the first companies to provide Frame along with the Mosquito Net as a complete solution to our long standing Mosquito's problem while sleeping at night.",
    },
    {
      question: "How sturdy is the Frame?",
      answer: "The frames are made of High quality uPVC (The materials used in the uPVC door and the windows) which is self manufactured by Venetz exclusively for the structural purpose.",
    },
    {
      question: "How many different colors of frames we have?",
      answer: "We offer frames in white color. This choice was made to ensure a universally appealing look that complements any style or décor. We believe that the white frame enhances the presentation of our products, making it a suitable match for all our customers' needs.",
    },
    {
      question: "How sturdy is the frame and does the frames will have joints between them?",
      answer: "The sturdiness can be assessed in such a way that we need 1700 kg of weight to break the frame and for up to 10 feet one single frame without joints can be fixed where you can't find any bend in the frame. There won't be any joints between each frame.",
    },
    {
      question: "Why Venetz is highly durable than other Mosquito nets available in the market?",
      answer: "Venetz mosquito nets are designed with superior durability in mind. They are crafted from high-density polyethylene (HDPE), a material known for its strength and resistance to wear and tear. Additionally, our nets are technically knitted using advanced Automated Technology, which enhances their strength further and ensures they can withstand daily use without compromising their Purpose of protection at any cost. This combination of high-quality material and meticulous construction makes Venetz a highly durable choice for long-lasting protection.",
    },
    {
      question: "Is VENETZ with frame is customizable?",
      answer: "Yes, Venetz is highly customizable! We take pride in being one of the few providers who offer tailored solutions to meet each customer's unique needs. Customization is one of our key strengths, allowing us to deliver a mosquito net that perfectly fits your specifications and preferences. This commitment to personalized service ensures that you receive a solution that is both effective and satisfying.",
    },
    {
      question: "For customized Venetz Solution what we should do?",
      answer: "To customize your Venetz mosquito net, please follow the instructions provided in the video available through our Check Me Before Ordering link. The video will guide you through the simple process of taking accurate measurements. It only takes about 2 minutes to complete, but this small investment of your time ensures that you receive a perfectly tailored solution for your home. This effort will reward you with peaceful, uninterrupted sleep for you and your family throughout the night.",
    },
    {
      question: "How the installation will be done at our place?",
      answer: "Venetz is designed as a self-installable product, which is one of its biggest strengths. Approximately 60% of the installation is completed before the package leaves our warehouse. The remaining steps are meticulously designed for easy installation by just one person, so straightforward that even a child can handle it.",
    },
  ];

  return (
    <section style={styles.faqSection}>
      <h2 style={styles.title}>Still Have Questions?</h2>
      <div style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
      <Link to="/mosquito-net/contact-form" style={styles.contactButton}>
        Contact Us
      </Link>
    </section>
  );
}

const styles = {
  faqSection: {
    padding: '32px',
    margin: '0 auto',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#333333',
    textAlign: 'center',
    marginBottom: '48px',
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '48px',
    width: '800px',
    maxWidth: '100%',
  },
  faqItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: '8px',
    padding: '24px',
    cursor: 'pointer',
  },
  faqItemOpen: {
    backgroundColor: '#F0F0F0',
  },
  questionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: '18px',
    color: '#333333',
    flex: 1,
    paddingRight: '16px',
    margin: 0,
  },
  answer: {
    fontSize: '16px',
    color: '#666666',
    marginTop: '16px',
    lineHeight: '24px',
  },
  icon: {
    fontSize: '24px',
    color: '#000',
  },
  contactButton: {
    backgroundColor: '#75B343',
    padding: '16px 32px',
    marginBottom: '32px',
    borderRadius: '10px',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 500,
    textDecoration: 'none',
    display: 'inline-block',
  },
};

// Media query for mobile responsiveness
const mobileStyles = `
  @media (max-width: 768px) {
    .faqSection {
      padding: 16px;
    }
    .title {
      font-size: 24px;
      margin-bottom: 24px;
    }
    .faqContainer {
      width: 100%;
    }
  }
`;

// Append media query styles to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = mobileStyles;
  document.head.appendChild(styleElement);
}

