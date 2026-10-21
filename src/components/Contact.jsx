// Contact.jsx — minimal, same tokens and components as Main/About/Skills
// Layout: 12-col grid, same 4 | 8 split as About and Skills
// EmailJS integration unchanged (service, template, key and field names)

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farjanajhn/" },
  { label: "GitHub", href: "https://github.com/Farjanajhn" },
  { label: "X / Twitter", href: "https://twitter.com/farjanajhn12" },
  { label: "Dribbble", href: "https://dribbble.com/farjanajhn" },
];

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l5-5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Spinner = () => (
  <svg className="c-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* Fades cards in once as they scroll into view */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll(".c-reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const Contact = () => {
  const ref = useReveal();
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [note, setNote] = useState("");

  // Clear the status message after a few seconds
  useEffect(() => {
    if (!note) return;
    const t = setTimeout(() => { setNote(""); setStatus("idle"); }, 5000);
    return () => clearTimeout(t);
  }, [note]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;
    try {
      setStatus("sending");
      setNote("");
      await emailjs.sendForm(
        "service_bnz4abr",
        "template_gov2hhi",
        form.current,
        "eWJVylKLCzGa6yoo1"
      );
      setStatus("success");
      setNote("Thanks! Your message is on its way. I'll get back to you within 24–48 hours.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error?.text || error);
      setStatus("error");
      setNote("Something went wrong and your message wasn't sent. Please try again, or email me directly.");
    }
  };

  const sending = status === "sending";

  return (
    <section id="message" className="contact" aria-labelledby="contact-title" ref={ref}>
      <style>{css}</style>

      <div className="contact__inner">
        <header className="contact__header c-reveal">
          <p className="c-badge">Contact</p>
          <h2 id="contact-title" className="contact__title">
            Let's work <span className="contact__mark">together</span>.
          </h2>
          <p className="contact__intro">
            Send a message about a job, internship, project or collaboration.
            I'll get back to you as soon as I can.
          </p>
        </header>

        <div className="contact__grid">
          {/* ── Left: details ── */}
          <div className="c-card c-card--side c-reveal">
            <p className="c-status">
              <span className="c-dot" aria-hidden="true" />
              Open to UX/UI roles and internships
            </p>

            <dl className="c-facts">
              <div>
                <dt>Email</dt>
                <dd><a className="c-link" href="mailto:farjanajhn12@gmail.com">farjanajhn12@gmail.com</a></dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Umeå, Sweden · open to remote</dd>
              </div>
              <div>
                <dt>Response time</dt>
                <dd>Within 24–48 hours</dd>
              </div>
            </dl>

            <div className="c-side__foot">
              <p className="c-eyebrow">Find me online</p>
              <nav className="c-social" aria-label="Social profiles">
                {LINKS.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="c-btn-utility">
                    {label} <ArrowUpRight />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="c-card c-card--form c-reveal" style={{ "--d": "60ms" }}>
            <h3 className="c-form__title">Send a message</h3>

            <form ref={form} onSubmit={sendEmail} className="c-form">
              <div className="c-form__row">
                <div className="c-field">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" type="text" name="from_name" autoComplete="name" required />
                </div>
                <div className="c-field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" type="email" name="reply_to" autoComplete="email" required />
                </div>
              </div>

              <div className="c-form__row">
                <div className="c-field">
                  <label htmlFor="c-subject">Subject</label>
                  <input id="c-subject" type="text" name="subject" placeholder="e.g. UX internship at …" required />
                </div>
                <div className="c-field">
                  <label htmlFor="c-phone">Phone <span className="c-optional">(optional)</span></label>
                  <input id="c-phone" type="tel" name="phone" autoComplete="tel" />
                </div>
              </div>

              <div className="c-field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" rows={6} required />
              </div>

              <div
                className={`c-note${note ? " is-visible" : ""} c-note--${status}`}
                role="status"
                aria-live="polite"
              >
                {note}
              </div>

              <div className="c-form__foot">
                <p className="c-privacy">Your message goes straight to my inbox. No spam, ever.</p>
                <button type="submit" className="c-btn" disabled={sending}>
                  {sending ? <><Spinner /> Sending…</> : <>Send message <Arrow /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ───────────────────────────────────────────── */
/* Same tokens as Main.jsx */
const css = `
.contact {
  --c-primary: #0075de;
  --c-primary-active: #005bab;
  --c-ink: #000000;
  --c-ink-2: #31302e;
  --c-muted: #615d59;
  --c-faint: #a39e98;
  --c-canvas: #ffffff;
  --c-paper: #f6f5f4;
  --c-line: #e6e6e6;
  --c-green: #1aae39;
  --c-red: #c4320a;

  background: var(--c-paper);
  color: var(--c-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.contact *, .contact *::before, .contact *::after { box-sizing: border-box; }

.contact__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 120px;
}

/* Header — same as About and Skills */
.contact__header { margin-bottom: 40px; }
.c-badge {
  display: inline-flex;
  margin: 0 0 24px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--c-canvas);
  border: 1px solid var(--c-line);
  color: var(--c-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
}
.contact__title {
  margin: 0;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.033em;
}
.contact__mark {
  background-image: linear-gradient(transparent 62%, rgba(98,174,240,0.35) 62%);
  padding: 0 2px;
}
.contact__intro {
  margin: 16px 0 0;
  max-width: 34rem;
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-muted);
}

/* Grid — 4 | 8 */
.contact__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}
.c-card--side { grid-column: span 4; display: flex; flex-direction: column; }
.c-card--form { grid-column: span 8; }

/* Cards */
.c-card {
  padding: 24px;
  border-radius: 12px;
  background: var(--c-canvas);
  border: 1px solid var(--c-line);
}
.c-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--c-muted);
}

/* Details */
.c-status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
  font-size: 15px;
  font-weight: 600;
}
.c-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--c-green);
  animation: c-ping 2.4s ease-out infinite;
}
.c-facts { margin: 0; }
.c-facts > div { padding: 12px 0; border-top: 1px solid var(--c-line); }
.c-facts dt {
  margin: 0 0 2px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--c-muted);
}
.c-facts dd { margin: 0; font-size: 15px; color: var(--c-ink-2); overflow-wrap: anywhere; }
.c-link { color: var(--c-primary); text-decoration: none; border-bottom: 1px solid transparent; }
.c-link:hover { border-color: var(--c-primary); }

.c-side__foot {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--c-line);
}
.c-facts { margin-bottom: 24px; }
.c-social { display: flex; flex-wrap: wrap; gap: 8px; }
.c-btn-utility {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  background: var(--c-canvas);
  border: 1px solid var(--c-line);
  color: var(--c-ink-2);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color .15s ease, color .15s ease;
}
.c-btn-utility:hover { border-color: var(--c-faint); color: var(--c-ink); }

/* Form */
.c-card--form, .c-card--side { padding: 32px; }
.c-form__title { margin: 0 0 24px; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
.c-form { display: flex; flex-direction: column; gap: 18px; }
.c-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.c-field { display: flex; flex-direction: column; gap: 6px; }
.c-field label { font-size: 14px; font-weight: 500; color: var(--c-ink-2); }
.c-optional { font-weight: 400; color: var(--c-muted); }
.c-field input,
.c-field textarea {
  width: 100%;
  min-height: 44px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--c-line);
  background: var(--c-canvas);
  color: var(--c-ink);
  font: 400 16px/1.5 'Inter', system-ui, sans-serif;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.c-field textarea { min-height: 144px; resize: vertical; }
.c-field input::placeholder, .c-field textarea::placeholder { color: var(--c-faint); }
.c-field input:hover, .c-field textarea:hover { border-color: #cfcac4; }
.c-field input:focus, .c-field textarea:focus {
  outline: none;
  border-color: var(--c-primary);
  box-shadow: 0 0 0 3px rgba(0,117,222,0.15);
}

.c-note {
  display: none;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.5;
}
.c-note.is-visible { display: block; }
.c-note--success { background: rgba(26,174,57,0.08); color: #137a2a; border: 1px solid rgba(26,174,57,0.25); }
.c-note--error { background: rgba(196,50,10,0.06); color: var(--c-red); border: 1px solid rgba(196,50,10,0.25); }

.c-form__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 6px;
}
.c-privacy { margin: 0; font-size: 14px; color: var(--c-muted); }

/* Primary button — same as the hero */
.c-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border: 0;
  border-radius: 9999px;
  background: var(--c-primary);
  color: #fff;
  font: 500 16px/1.5 'Inter', system-ui, sans-serif;
  cursor: pointer;
  transition: background-color .15s ease;
}
.c-btn:hover:not(:disabled) { background: var(--c-primary-active); }
.c-btn:disabled { opacity: 0.7; cursor: progress; }
.c-btn:focus-visible, .c-btn-utility:focus-visible, .c-link:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 3px;
}
.c-spin { animation: c-rotate 1s linear infinite; }

/* Motion */
.c-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--d, 0ms);
}
.c-reveal.is-in { opacity: 1; transform: none; }
@keyframes c-ping {
  0%   { box-shadow: 0 0 0 0 rgba(26,174,57,0.35); }
  70%  { box-shadow: 0 0 0 7px rgba(26,174,57,0); }
  100% { box-shadow: 0 0 0 0 rgba(26,174,57,0); }
}
@keyframes c-rotate { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .c-reveal { opacity: 1; transform: none; transition: none; }
  .c-dot, .c-spin { animation: none; }
}

/* Tablet */
@media (max-width: 1023px) {
  .c-card--side, .c-card--form { grid-column: 1 / -1; }
}

/* Mobile */
@media (max-width: 767px) {
  .contact__inner { padding: 32px 16px 80px; }
  .contact__header { margin-bottom: 32px; }
  .contact__intro { font-size: 16px; }
  .contact__grid { grid-template-columns: 1fr; }
  .c-card--form, .c-card--side { padding: 24px; }
  .c-form__row { grid-template-columns: 1fr; }
  .c-form__foot { flex-direction: column-reverse; align-items: stretch; }
  .c-privacy { text-align: center; }
  .c-btn { width: 100%; }
}
`;