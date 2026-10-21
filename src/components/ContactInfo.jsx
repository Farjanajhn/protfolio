// ContactInfo.jsx — matches the site's warm-minimal style
// Same tokens as Main/About/Skills/Contact

const ContactInfo = () => (
  <section className="ci" aria-labelledby="ci-title">
    <style>{css}</style>

    <div className="ci__card">
      <h2 id="ci-title" className="ci__eyebrow">Contact information</h2>

      <dl className="ci__list">
        <div>
          <dt>Email</dt>
          <dd><a href="mailto:farjanajhn12@gmail.com">farjanajhn12@gmail.com</a></dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd><a href="tel:+46767567843">+46 76 756 78 43</a></dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>Umeå, Sweden</dd>
        </div>
      </dl>
    </div>
  </section>
);

export default ContactInfo;

const css = `
.ci {
  --ci-primary: #0075de;
  --ci-ink-2: #31302e;
  --ci-muted: #615d59;
  --ci-canvas: #ffffff;
  --ci-line: #e6e6e6;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.ci *, .ci *::before, .ci *::after { box-sizing: border-box; }

.ci__card {
  max-width: 480px;
  margin: 12px auto 0;
  padding: 24px;
  border-radius: 12px;
  background: var(--ci-canvas);
  border: 1px solid var(--ci-line);
}
.ci__eyebrow {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--ci-muted);
}
.ci__list { margin: 0; }
.ci__list > div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 12px 0;
  border-top: 1px solid var(--ci-line);
}
.ci__list dt { font-size: 14px; color: var(--ci-muted); }
.ci__list dd {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--ci-ink-2);
  text-align: right;
  overflow-wrap: anywhere;
}
.ci__list a {
  color: var(--ci-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.ci__list a:hover { border-color: var(--ci-primary); }
.ci__list a:focus-visible {
  outline: 2px solid var(--ci-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .ci__list > div { flex-direction: column; gap: 2px; }
  .ci__list dd { text-align: left; }
}
`;