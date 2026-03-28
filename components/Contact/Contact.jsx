'use client';
import { useRef, useState } from 'react';
import { useReveal } from '@/hooks/useGSAP';
import { SOCIALS } from '@/constants/index';
import SectionBadge from '@/components/ui/SectionBadge/SectionBadge';
import styles from './Contact.module.css';

const INFO = [
  { icon: 'fa-envelope', label: 'Email', value: 'shahmoksh7@gmail.com', href: 'mailto:shahmoksh7@gmail.com' },
  { icon: 'fa-phone', label: 'Phone', value: '+91 63534 44388', href: 'tel:+916353444388' },
  { icon: 'fa-location-dot', label: 'Location', value: 'Surat, Gujarat, India', href: null },
  { icon: 'fa-clock', label: 'Timezone', value: 'IST (UTC +5:30)', href: null },
];

export default function Contact() {
  const headRef = useReveal({ from: { opacity: 0, y: 36 }, stagger: 0.1 });
  const leftRef = useReveal({ from: { opacity: 0, x: -46 }, stagger: 0.12, start: 'top 88%' });
  const rightRef = useReveal({ from: { opacity: 0, x: 46 }, stagger: 0.12, start: 'top 88%' });

  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: Replace timeout with real endpoint (Formspree / EmailJS)
    const res = await fetch('https://formspree.io/f/mpqoqllp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
    });
    setStatus(res.ok ? 'sent' : '');
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className={styles.bgAccent} aria-hidden />
      <div className="container">

        <div ref={headRef} className={styles.head}>
          <SectionBadge>Contact</SectionBadge>
          <h2 className="sectionTitle">
            Have an idea? <span className="gradText">Let&apos;s talk</span>
          </h2>
          <p className="sectionSub">
            Open for internships, freelance projects, collabs, or just a good conversation about tech.
          </p>
        </div>

        <div className={styles.grid}>

          {/* ── Left: info ── */}
          <div ref={leftRef} className={styles.left}>
            <div className={`${styles.infoCard} glassCard`}>
              <div className={styles.availability}>
                <span className={styles.availDot} />
                <span className={styles.availText}>Currently available for opportunities</span>
              </div>

              <ul className={styles.infoList}>
                {INFO.map(({ icon, label, value, href }) => (
                  <li key={label}>
                    {href
                      ? <a href={href} className={styles.infoRow}>
                        <span className={styles.infoIcon}><i className={`fa-solid ${icon}`} /></span>
                        <span className={styles.infoBody}>
                          <span className={styles.infoLabel}>{label}</span>
                          <span className={styles.infoValue}>{value}</span>
                        </span>
                      </a>
                      : <div className={styles.infoRow}>
                        <span className={styles.infoIcon}><i className={`fa-solid ${icon}`} /></span>
                        <span className={styles.infoBody}>
                          <span className={styles.infoLabel}>{label}</span>
                          <span className={styles.infoValue}>{value}</span>
                        </span>
                      </div>
                    }
                  </li>
                ))}
              </ul>

              <div className={styles.socialRow}>
                {SOCIALS.map(({ icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className={styles.socialBtn} aria-label={label}>
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div ref={rightRef}>
            <form ref={formRef} className={`${styles.form} glassCard`} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="What is this about?" />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or idea..." required />
              </div>

              <button
                type="submit"
                className={`btnPrimary ${styles.submitBtn}`}
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? <><i className="fa-solid fa-circle-notch fa-spin" /> Sending…</>
                  : <><i className="fa-solid fa-paper-plane" /> Send Message</>
                }
              </button>

              {status === 'sent' && (
                <p className={styles.successMsg}>
                  <i className="fa-solid fa-circle-check" /> Message sent! I will get back to you soon.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
