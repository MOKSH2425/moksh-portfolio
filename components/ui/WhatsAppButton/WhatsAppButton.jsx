'use client';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  // Encodes the pre-filled message text to ensure safe URL parsing
  const phoneNumber = '916353444388';
  const textMessage = encodeURIComponent("Hi Moksh! I saw your portfolio and would like to connect.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.waButton}
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
