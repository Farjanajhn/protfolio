// Contact.jsx — playful theme
// EmailJS integration unchanged (service, template, key and field names).
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farjanajhn/" },
  { label: "GitHub", href: "https://github.com/Farjanajhn" },
  { label: "Dribbble", href: "https://dribbble.com/farjanajhn" },
];

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll(".pf-rv") ?? [];
    if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.12 });
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
      await emailjs.sendForm("service_bnz4abr", "template_gov2hhi", form.current, "eWJVylKLCzGa6yoo1");
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
    <section id="message" className="pf pf-sec" aria-labelledby="contact-title" ref={ref}>
      <style>{css}</style>
      <div className="pf-wrap">
        <div className="pf-cta pf-rv">
          <span className="pf-hand">your turn</span>
          <h2 id="contact-title">Let's make<br />something <em>obvious</em></h2>
          <p>Send a message about a job, internship, project or collaboration. I'll get back to you as soon as I can.</p>
        </div>

        <div className="pf-contact">
          <aside className="pf-cinfo pf-box pf-rv">
            <p className="pf-cinfo__status"><span className="pf-dot" aria-hidden="true" />Open to UX/UI roles and internships</p>
            <dl>
              <div><dt>Email</dt><dd><a href="mailto:farjanajhn12@gmail.com">farjanajhn12@gmail.com</a></dd></div>
              <div><dt>Location</dt><dd>Remote or anywhere in Sweden</dd></div>
              <div><dt>Response time</dt><dd>Within 24–48 hours</dd></div>
            </dl>
            <div className="pf-cinfo__links">
              {LINKS.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
          </aside>

          <form ref={form} onSubmit={sendEmail} className="pf-form pf-box pf-rv" style={{ "--d": "80ms" }} noValidate={false}>
            <h3>Send a message</h3>
            <div className="pf-form__row">
              <label htmlFor="c-name">Name<input id="c-name" type="text" name="from_name" autoComplete="name" required /></label>
              <label htmlFor="c-email">Email<input id="c-email" type="email" name="reply_to" autoComplete="email" required /></label>
            </div>
            <div className="pf-form__row">
              <label htmlFor="c-subject">Subject<input id="c-subject" type="text" name="subject" placeholder="e.g. UX internship at …" required /></label>
              <label htmlFor="c-phone"><span className="pf-lab">Phone <span>(optional)</span></span><input id="c-phone" type="tel" name="phone" autoComplete="tel" /></label>
            </div>
            <label htmlFor="c-message">Message<textarea id="c-message" name="message" rows={5} required /></label>
            {note && (
              <p className={`pf-note${status === "error" ? " is-error" : ""}`} role={status === "error" ? "alert" : "status"}>{note}</p>
            )}
            <div className="pf-form__foot">
              <p>Your message goes straight to my inbox. No spam, ever.</p>
              <button type="submit" className="pf-btn pf-btn--blue" disabled={sending} aria-busy={sending}>
                {sending ? "Sending…" : "Send message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const css = `
.pf-cta{text-align:center;margin-bottom:48px}
.pf-cta h2{margin:0;font:700 clamp(52px,8.4vw,120px)/.95 var(--pf-round);letter-spacing:-.03em;color:#000}
.pf-cta h2 em{font-style:normal;color:var(--pf-blue)}
.pf-cta p{max-width:32rem;margin:18px auto 0!important;font-size:18px}
.pf-contact{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:28px;align-items:start}
.pf-cinfo{padding:26px;background:var(--pf-sun)!important;display:flex;flex-direction:column;gap:22px}
.pf-cinfo__status{display:flex;align-items:center;gap:8px;font:600 15px var(--pf-sans);color:#000!important}
.pf-cinfo dl{margin:0;display:grid;gap:16px}
.pf-cinfo dt{font:600 12px var(--pf-sans);letter-spacing:.08em;text-transform:uppercase;color:var(--pf-ink-2)}
.pf-cinfo dd{margin:2px 0 0;font-size:15.5px;color:#000;overflow-wrap:anywhere}
.pf-cinfo dd a{color:#000;font-weight:600;text-decoration:none;border-bottom:1.5px solid #000}
.pf-cinfo__links{display:flex;flex-wrap:wrap;gap:8px}
.pf-cinfo__links a{font:600 14px var(--pf-sans);text-decoration:none;color:#000;background:#fff;border:1.5px solid #000;border-radius:99px;padding:6px 12px;box-shadow:2px 2px 0 #000}
.pf-cinfo__links a:hover{background:var(--pf-blue);color:#fff}
.pf-form{padding:28px;display:grid;gap:16px}
.pf-form h3{margin:0;font:700 24px var(--pf-round);color:#000}
.pf-form__row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.pf-form label{display:flex;flex-direction:column;gap:6px;font:600 14px var(--pf-sans);color:var(--pf-ink-2)}
.pf-form .pf-lab span{font-weight:400;color:var(--pf-muted)}
.pf-form input,.pf-form textarea{font:400 16px var(--pf-sans);color:#000;background:#fff;border:1.5px solid #000;border-radius:14px;padding:11px 14px;outline:none;transition:box-shadow .15s}
.pf-form input:focus,.pf-form textarea:focus{box-shadow:3px 3px 0 var(--pf-blue)}
.pf-form textarea{resize:vertical;min-height:130px}
.pf-form__foot{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.pf-form__foot p{font-size:14px}
.pf-note{padding:12px 14px;border-radius:14px;border:1.5px solid #000;background:#9be3c0;color:#000!important;font-size:14.5px}
.pf-note.is-error{background:#ffb4a2}
@media (max-width:900px){.pf-contact{grid-template-columns:1fr}}
@media (max-width:560px){.pf-form__row{grid-template-columns:1fr}.pf-form__foot .pf-btn{width:100%}}
`;
