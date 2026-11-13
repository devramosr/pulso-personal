import { useState } from "react";
import { content, site, prices, discounts, frequencies, WEEKS } from "./data.js";

const PAGES = { pt: "/", en: "/en/" };

function money(n, lang) {
  const v = Math.round(n);
  const sep = lang === "en" ? "," : ".";
  const s = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return lang === "en" ? `R$${s}` : `R$ ${s}`;
}

function wa(text) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

function PulseMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" fill="var(--lime)" />
      <path d="M4 17h6l3-8 5 15 3-7h7" fill="none" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 15l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 0 1 7-12.4Zm-3 3.6c-.2 0-.5 0-.8.4-.3.4-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4l-.5-.3-1.8-.9c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.700-1.600-2-.2-.3 0-.5.1-.6l.4-.5.3-.4v-.5l-.9-2.100c-.2-.5-.4-.5-.6-.5Z"
      />
    </svg>
  );
}

function Header({ t, lang }) {
  return (
    <header className="header">
      <div className="header__row wrap">
        <a className="brand" href={`${PAGES[lang]}#topo`} aria-label={`${site.brand} Personal`}>
          <PulseMark />
          <span className="brand__name">{site.brand}</span>
        </a>
        <nav className="nav" aria-label={t.nav.label}>
          {t.nav.items.map((i) => (
            <a key={i.id} href={`#${i.id}`}>
              {i.label}
            </a>
          ))}
        </nav>
        <div className="header__right">
          <div className="lang" role="group" aria-label={t.langLabel}>
            <a href={PAGES.pt} hrefLang="pt-BR" lang="pt-BR" aria-current={lang === "pt" ? "true" : undefined}>
              PT
            </a>
            <span aria-hidden="true">|</span>
            <a href={PAGES.en} hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined}>
              EN
            </a>
          </div>
          <a className="btn btn--lime btn--sm header__cta" href={wa(t.contact.waMessage)} target="_blank" rel="noopener noreferrer">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  const c = t.hero.card;
  return (
    <section className="hero section section--dark" id="topo">
      <svg className="hero__pulse" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path
          className="hero__pulse-line"
          d="M0 90h380l30-60 50 120 40-90 30 30h140l30-50 40 100 30-50h430"
          fill="none"
          stroke="var(--lime)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.text}</p>
          <div className="hero__actions">
            <a className="btn btn--lime" href="#plano">
              {t.hero.primary}
            </a>
            <a className="btn btn--ghost" href={wa(t.contact.waMessage)} target="_blank" rel="noopener noreferrer">
              {t.hero.secondary}
            </a>
          </div>
          <dl className="stats">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="workout" aria-hidden="true">
          <div className="workout__top">
            <span className="chip">{c.tag}</span>
            <span className="workout__dots">
              <i /> <i /> <i />
            </span>
          </div>
          <p className="workout__title">{c.title}</p>
          <ul>
            {c.items.map(([name, sets], idx) => (
              <li key={name}>
                <span className="workout__n">{idx + 1}</span>
                <span className="workout__name">{name}</span>
                <span className="workout__sets">{sets}</span>
              </li>
            ))}
          </ul>
          <p className="workout__foot">
            <svg width="16" height="16" viewBox="0 0 16 16" focusable="false">
              <path d="M3 11l3.5-3.5 2.5 2.5L13 5.5M10 5h3.5v3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {c.footer}
          </p>
        </div>
      </div>
    </section>
  );
}

function Method({ t }) {
  const m = t.method;
  return (
    <section className="section section--light" id={m.id} aria-labelledby="metodo-title">
      <div className="wrap">
        <p className="eyebrow eyebrow--dark">{m.eyebrow}</p>
        <h2 id="metodo-title">{m.title}</h2>
        <ol className="steps">
          {m.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__n" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Choice({ pressed, onClick, children, className = "" }) {
  return (
    <button type="button" className={`choice ${className}`} aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

function Builder({ t, lang }) {
  const b = t.builder;
  const [goal, setGoal] = useState("lose");
  const [mode, setMode] = useState("studio");
  const [freq, setFreq] = useState(3);
  const [period, setPeriod] = useState("morning");

  const goalObj = b.goals.find((g) => g.id === goal);
  const modeObj = b.modes.find((m) => m.id === mode);
  const periodObj = b.periods.find((p) => p.id === period);

  const sessions = freq * WEEKS;
  const gross = sessions * prices[mode];
  const total = gross * (1 - discounts[freq]);
  const saving = gross - total;
  const perClass = total / sessions;

  const message = b.waMessage({
    goal: goalObj.label,
    mode: modeObj.label,
    freq: b.freqUnit(freq),
    period: `${periodObj.label} (${periodObj.text})`,
    total: money(total, lang),
    sessions: b.sessions(sessions),
  });

  return (
    <section className="section section--dark" id={b.id} aria-labelledby="plano-title">
      <div className="wrap">
        <p className="eyebrow">{b.eyebrow}</p>
        <h2 id="plano-title">{b.title}</h2>
        <p className="lead lead--narrow">{b.intro}</p>

        <div className="builder">
          <div className="builder__form">
            <div role="group" aria-labelledby="g-goal" className="field">
              <p className="field__label" id="g-goal">
                {b.goalLabel}
              </p>
              <div className="choices choices--2">
                {b.goals.map((g) => (
                  <Choice key={g.id} pressed={goal === g.id} onClick={() => setGoal(g.id)}>
                    <span className="choice__title">{g.label}</span>
                  </Choice>
                ))}
              </div>
              <p className="field__hint" aria-live="polite">
                {goalObj.text}
              </p>
            </div>

            <div role="group" aria-labelledby="g-mode" className="field">
              <p className="field__label" id="g-mode">
                {b.modeLabel}
              </p>
              <div className="choices choices--3">
                {b.modes.map((m) => (
                  <Choice key={m.id} pressed={mode === m.id} onClick={() => setMode(m.id)}>
                    <span className="choice__title">{m.label}</span>
                    <span className="choice__sub">{m.text}</span>
                    <span className="choice__price">
                      {money(prices[m.id], lang)} <small>{m.unit}</small>
                    </span>
                  </Choice>
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby="g-freq" className="field">
              <p className="field__label" id="g-freq">
                {b.freqLabel}
              </p>
              <div className="choices choices--4">
                {frequencies.map((n) => (
                  <Choice key={n} pressed={freq === n} onClick={() => setFreq(n)}>
                    <span className="choice__title">{b.freqUnit(n)}</span>
                    <span className="choice__sub">{b.freqOff(Math.round(discounts[n] * 100))}</span>
                  </Choice>
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby="g-period" className="field">
              <p className="field__label" id="g-period">
                {b.periodLabel}
              </p>
              <div className="choices choices--3 choices--compact">
                {b.periods.map((p) => (
                  <Choice key={p.id} pressed={period === p.id} onClick={() => setPeriod(p.id)}>
                    <span className="choice__title">{p.label}</span>
                    <span className="choice__sub">{p.text}</span>
                  </Choice>
                ))}
              </div>
            </div>
          </div>

          <aside className="summary" aria-labelledby="summary-title">
            <h3 id="summary-title">{b.summaryTitle}</h3>
            <dl className="summary__list">
              <div>
                <dt>{b.goalWord}</dt>
                <dd>{goalObj.label}</dd>
              </div>
              <div>
                <dt>{b.modeWord}</dt>
                <dd>{modeObj.label}</dd>
              </div>
              <div>
                <dt>{b.freqWord}</dt>
                <dd>{b.freqUnit(freq)}</dd>
              </div>
              <div>
                <dt>{b.periodWord}</dt>
                <dd>{periodObj.label}</dd>
              </div>
            </dl>
            <div className="summary__total" aria-live="polite" aria-atomic="true">
              <span className="summary__value">{money(total, lang)}</span>
              <span className="summary__per">{b.perMonth}</span>
            </div>
            <p className="summary__meta">
              {b.sessions(sessions)} · {money(perClass, lang)} {b.perClass}
            </p>
            {saving > 0 && <p className="summary__saving">{b.saving(money(saving, lang))}</p>}
            <a className="btn btn--ink btn--block" href={wa(message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {b.cta}
            </a>
            <p className="summary__note">{b.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function TrainerArt({ alt }) {
  return (
    <svg className="trainer" viewBox="0 0 320 360" role="img" aria-label={alt}>
      <rect width="320" height="360" rx="28" fill="var(--lime)" />
      <circle cx="248" cy="78" r="46" fill="var(--ink)" opacity=".1" />
      <path d="M0 300c40-26 92-38 160-38s120 12 160 38v60H0Z" fill="var(--ink)" />
      <path d="M92 360c4-52 28-84 68-84s64 32 68 84Z" fill="var(--paper)" />
      <rect x="146" y="236" width="28" height="44" rx="12" fill="#C9906F" />
      <ellipse cx="160" cy="190" rx="44" ry="52" fill="#D9A07B" />
      <path d="M112 186c-6-54 26-76 56-72 34 4 48 34 42 76-8-26-22-40-50-42-24-2-40 10-48 38Z" fill="#2B1E19" />
      <path d="M205 150c26 8 34 40 22 72-4-22-10-40-22-50Z" fill="#2B1E19" />
      <circle cx="144" cy="196" r="3.4" fill="#2B1E19" />
      <circle cx="176" cy="196" r="3.4" fill="#2B1E19" />
      <path d="M146 216c8 8 20 8 28 0" fill="none" stroke="#2B1E19" strokeWidth="3" strokeLinecap="round" />
      <path d="M238 292a22 22 0 1 1 44 0v36h-44Z" fill="var(--ink)" />
      <path d="M246 292a14 14 0 0 1 28 0" fill="none" stroke="var(--lime)" strokeWidth="5" />
    </svg>
  );
}

function About({ t }) {
  const a = t.about;
  return (
    <section className="section section--light" id={a.id} aria-labelledby="sobre-title">
      <div className="wrap about">
        <div className="about__art">
          <TrainerArt alt={a.photoAlt} />
        </div>
        <div className="about__text">
          <p className="eyebrow eyebrow--dark">{a.eyebrow}</p>
          <h2 id="sobre-title">{a.title}</h2>
          {a.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="badges">
            {a.badges.map((b) => (
              <li key={b}>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                  <circle cx="9" cy="9" r="9" fill="var(--ink)" />
                  <path d="M5 9.3l2.6 2.6L13 6.5" fill="none" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  const x = t.testimonials;
  return (
    <section className="section section--dark" aria-labelledby="dep-title">
      <div className="wrap">
        <p className="eyebrow">{x.eyebrow}</p>
        <h2 id="dep-title">{x.title}</h2>
        <ul className="quotes">
          {x.items.map((q) => (
            <li key={q.name}>
              <figure>
                <blockquote>{q.text}</blockquote>
                <figcaption>
                  <strong>{q.name}</strong>
                  <span>{q.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq({ t }) {
  const f = t.faq;
  return (
    <section className="section section--light" id={f.id} aria-labelledby="faq-title">
      <div className="wrap wrap--narrow">
        <p className="eyebrow eyebrow--dark">{f.eyebrow}</p>
        <h2 id="faq-title">{f.title}</h2>
        <div className="faq">
          {f.items.map((i) => (
            <details key={i.q}>
              <summary>{i.q}</summary>
              <p>{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const c = t.contact;
  return (
    <section className="section section--lime" id={c.id} aria-labelledby="contato-title">
      <div className="wrap contact">
        <div>
          <h2 id="contato-title">{c.title}</h2>
          <p className="lead">{c.text}</p>
          <a className="btn btn--ink" href={wa(c.waMessage)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {c.cta}
          </a>
        </div>
        <address className="contact__info">
          <p>{c.address}</p>
          <p>{c.hours}</p>
          <p>
            {c.instagramLabel}:{" "}
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
              @{site.instagram}
            </a>
          </p>
        </address>
      </div>
    </section>
  );
}

export default function App({ lang = "pt" }) {
  const t = content[lang];
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <Header t={t} lang={lang} />
      <main id="main">
        <Hero t={t} />
        <Method t={t} />
        <Builder t={t} lang={lang} />
        <About t={t} />
        <Testimonials t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <div className="wrap">
          <p>{t.footer}</p>
          <p>{t.demoNotice}</p>
        </div>
      </footer>
    </>
  );
}
