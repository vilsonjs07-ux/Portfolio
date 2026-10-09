import { useState, useEffect } from "react";

/* ---------- Edit your details here ---------- */
const PROFILE = {
  brand: "Wilson",
  name: "Amala Wilson",
  role: "Fullstack Developer",
  photo: "./hero.jpeg", // e.g. "/me.jpg" — leave empty to show initials
  cv: "./Resume.pdf",
  email: "vilsonjs07@gmail.com",
  linkedin: "https://www.linkedin.com/in/amalawilsonjs",
  github: "https://github.com/vilsonjs07-ux",
  about: [
    "I build fast, accessible interfaces with React and modern CSS. I care about clean structure, honest details, and screens that feel calm to use.",
    "Based in Chennai. Currently looking for frontend roles where I can own features from design handoff to production.",
  ],
};

const PROJECTS = [
  {
    title: "CashFlow Pro",
    text: "Offline-first personal and business finance manager featuring income and expense tracking, budget thresholds, savings goals, and interactive Chart.js analytics.",
    tags: ["JavaScript", "Chart.js", "LocalStorage", "CSS3"],
    link: "https://cash-flow-n4jm.vercel.app/",
  },
  {
    title: "MediCare Hospital",
    text: "Comprehensive healthcare and hospital management portal with specialist doctor profiles, medical department services, and online appointment booking.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://hospital-management-coral.vercel.app/",
  },
  {
    title: "Rural Bus Tracker",
    text: "Real-time smart passenger information and transit tracking system for rural routes featuring crowd-sourced GPS, confidence scoring, and low-bandwidth SMS mode.",
    tags: ["Python", "Flask", "Leaflet.js", "MySQL"],
    link: "https://rural-bus-tracker-iota.vercel.app/",
  },
];

const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Git", "REST APIs", "Responsive design","java","Spring Boot"];

const NAV = ["Home", "About", "Project", "Skill", "Contact"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
.pf{--ink:#000;--slate:#475569;--mute:#64748b;--line:#e5e7eb;--bg:#fff;--soft:#f6f6f6;
  font-family:'Poppins',system-ui,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6;min-height:100%}
.pf *{box-sizing:border-box}
.pf a{color:inherit;text-decoration:none}
.pf :focus-visible{outline:2px solid var(--ink);outline-offset:3px}
.pf .wrap{max-width:1000px;margin:0 auto;padding:0 24px}
.pf header{position:sticky;top:0;z-index:10;background:var(--bg);box-shadow:0 2px 6px rgba(0,0,0,.08)}
.pf nav{display:flex;align-items:center;justify-content:space-between;height:78px}
.pf .brand{font-size:28px;font-weight:500}
.pf .links{display:flex;gap:34px;list-style:none;margin:0;padding:0}
.pf .links a{font-size:18px;padding:4px 0;border-bottom:2px solid transparent;transition:border-color .2s}
.pf .links a:hover,.pf .links a.on{border-color:var(--ink)}
.pf .burger{display:none;background:none;border:0;font:inherit;font-size:16px;cursor:pointer}
.pf section{padding:96px 0;scroll-margin-top:78px}
.pf .hero{display:flex;align-items:center;gap:72px;padding:88px 0 96px}
.pf .avatar{flex:0 0 384px;width:384px;height:384px;border-radius:50%;border:1px solid var(--ink);overflow:hidden;
  display:grid;place-items:center;background:var(--soft);font-size:110px;font-weight:600;color:var(--slate)}
.pf .avatar img{width:100%;height:100%;object-fit:cover}
.pf .intro{flex:1;text-align:center}
.pf .hello{font-size:20px;font-weight:600;color:var(--slate);margin:0}
.pf h1{font-size:clamp(36px,5vw,52px);font-weight:600;line-height:1.15;margin:6px 0 2px}
.pf .role{font-size:clamp(24px,3vw,32px);font-weight:500;color:var(--slate);margin:0 0 22px}
.pf .btns{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.pf .btn{font:inherit;font-size:16px;padding:12px 18px;border-radius:10px;border:1px solid var(--ink);cursor:pointer;transition:transform .15s,background .15s,color .15s}
.pf .btn.ghost{background:#fff;color:var(--ink)}
.pf .btn.ghost:hover{background:var(--ink);color:#fff}
.pf .btn.solid{background:var(--ink);color:#fff}
.pf .btn.solid:hover{background:#222}
.pf .btn:active{transform:translateY(1px)}
.pf .social{display:flex;justify-content:center;gap:22px;margin-top:22px}
.pf .social a{display:inline-flex;transition:transform .15s}
.pf .social a:hover{transform:translateY(-2px)}
.pf h2{font-size:34px;font-weight:600;margin:0 0 28px}
.pf .alt{background:var(--soft)}
.pf .about p{max-width:62ch;font-size:18px;color:var(--slate);margin:0 0 16px}
.pf .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.pf .card{background:#fff;border:1px solid var(--ink);border-radius:14px;padding:26px;display:flex;flex-direction:column;gap:12px}
.pf .card h3{font-size:21px;font-weight:600;margin:0}
.pf .card p{margin:0;color:var(--slate);font-size:15px;flex:1}
.pf .tags{display:flex;gap:8px;flex-wrap:wrap}
.pf .tag{font-size:13px;padding:2px 10px;border-radius:999px;background:var(--soft);color:var(--slate)}
.pf .card a{font-weight:500;text-decoration:underline;text-underline-offset:4px}
.pf .skills{display:flex;flex-wrap:wrap;gap:12px}
.pf .skill{font-size:17px;padding:8px 20px;border:1px solid var(--ink);border-radius:999px;background:#fff}
.pf .contact{text-align:center}
.pf .contact p{color:var(--slate);font-size:18px;margin:0 auto 24px;max-width:46ch}
.pf footer{text-align:center;padding:28px;color:var(--mute);font-size:14px;border-top:1px solid var(--line)}
@media (max-width:820px){
  .pf .hero{flex-direction:column;gap:36px;padding:48px 0 64px}
  .pf .avatar{flex-basis:auto;width:min(300px,80vw);height:min(300px,80vw);font-size:84px}
  .pf .grid{grid-template-columns:1fr}
  .pf section{padding:64px 0}
  .pf .burger{display:block}
  .pf .links{display:none;position:absolute;top:78px;left:0;right:0;flex-direction:column;gap:0;background:var(--bg);box-shadow:0 6px 8px rgba(0,0,0,.08)}
  .pf .links.open{display:flex}
  .pf .links a{display:block;padding:14px 24px;border:0}
}
@media (prefers-reduced-motion:reduce){.pf *{transition:none!important}}
`;

const LinkedIn = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75z" />
  </svg>
);
const GitHub = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.24 3.35.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.toLowerCase())).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const initials = PROFILE.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pf">
      <style>{css}</style>

      <header>
        <div className="wrap">
          <nav aria-label="Main">
            <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go("home"); }}>{PROFILE.brand}</a>
            <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
            <ul className={"links" + (open ? " open" : "")}>
              {NAV.map((n) => {
                const id = n.toLowerCase();
                return (
                  <li key={n}>
                    <a href={"#" + id} className={active === id ? "on" : ""} onClick={(e) => { e.preventDefault(); go(id); }}>{n}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="wrap">
          <div id="home" className="hero" style={{ scrollMarginTop: 78 }}>
            <div className="avatar">
              {PROFILE.photo ? <img src={PROFILE.photo} alt={PROFILE.name} /> : <span aria-hidden="true">{initials}</span>}
            </div>
            <div className="intro">
              <p className="hello">Hello I'm</p>
              <h1>{PROFILE.name}</h1>
              <p className="role">{PROFILE.role}</p>
              <div className="btns">
                <a className="btn ghost" href={PROFILE.cv} download>Download CV</a>
                <button className="btn solid" onClick={() => go("contact")}>Contact Info</button>
              </div>
              <div className="social">
                <a href={PROFILE.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedIn /></a>
                <a href={PROFILE.github} aria-label="GitHub" target="_blank" rel="noreferrer"><GitHub /></a>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="alt about">
          <div className="wrap">
            <h2>About</h2>
            {PROFILE.about.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </section>

        <section id="project">
          <div className="wrap">
            <h2>Projects</h2>
            <div className="grid">
              {PROJECTS.map((p) => (
                <article className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                  <a href={p.link} target="_blank" rel="noreferrer">View project</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skill" className="alt">
          <div className="wrap">
            <h2>Skills</h2>
            <div className="skills">{SKILLS.map((s) => <span className="skill" key={s}>{s}</span>)}</div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Contact</h2>
            <p>Have a role or a project in mind? Send me an email and I'll reply within two days.</p>
            <div className="btns">
              <a className="btn solid" href={"mailto:" + PROFILE.email}>Email me</a>
              <a className="btn ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">Message on LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {PROFILE.name}</footer>
    </div>
  );
}
