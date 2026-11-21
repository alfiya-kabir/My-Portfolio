import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { profile, stats, heroStack, about, experience, projects, skills, education, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alfiya K — Full-Stack Developer (React, Angular, Next.js)" },
      { name: "description", content: "Full-stack developer in the UAE with 5 years building SaaS and enterprise apps in React, Angular, Next.js and Node.js. Available immediately." },
      { property: "og:title", content: "Alfiya K — Full-Stack Developer" },
      { property: "og:description", content: "5 years building SaaS & enterprise web apps. React · Angular · Next.js · Node.js. Available immediately in the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav: [string, string][] = [["about", "About"], ["work", "Work"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"]];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border bg-muted/60 px-3 py-1 text-sm text-foreground/90 transition hover:border-primary/50 hover:text-primary">{children}</span>;
}

function Section({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-sm text-primary">{kicker}</p>
        <h2 className="mt-2 text-4xl font-bold md:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Header() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
      let cur = "";
      nav.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 160) cur = id; });
      setActive(cur);
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <div className="glass relative mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-hidden rounded-2xl border px-4 py-3 md:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2 font-display text-lg font-bold">
          {profile.name} <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`rounded-lg px-3 py-1.5 text-sm transition ${active === id ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{label}</a>
          ))}
        </nav>
        <a href={profile.resume} download className="shrink-0 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25">Download CV</a>
        <span className="absolute bottom-0 left-0 h-0.5 bg-primary transition-[width]" style={{ width: `${progress * 100}%` }} />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-36 md:min-h-screen md:grid-cols-[1.25fr_1fr] md:pt-28">
      <div>
        <Reveal><p className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm text-muted-foreground"><span className="h-2 w-2 rounded-full bg-success" /> Available now · {profile.location}</p></Reveal>
        <Reveal delay={100}><h1 className="mt-6 text-5xl font-extrabold leading-[0.95] md:text-7xl"><span className="text-gradient">{profile.headline}</span></h1></Reveal>
        <Reveal delay={200}><p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.intro}</p></Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25">Let's talk</a>
            <a href="#projects" className="rounded-xl border px-5 py-3 font-semibold transition hover:border-primary/60 hover:text-primary">See my work</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-xl border px-5 py-3 transition hover:border-primary/60 hover:text-primary">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border px-5 py-3 transition hover:border-primary/60 hover:text-primary">LinkedIn</a>
          </div>
        </Reveal>
      </div>
      <Reveal delay={250}>
        <p className="mb-4 text-muted-foreground">What I build with</p>
        <div className="flex flex-wrap gap-2">{heroStack.map((s) => <Pill key={s}>{s}</Pill>)}</div>
        <div className="animate-float mt-10 overflow-hidden rounded-2xl border bg-card font-mono text-sm shadow-2xl shadow-primary/10">
          <div className="flex items-center gap-2 border-b px-4 py-3"><span className="h-3 w-3 rounded-full bg-dot-red" /><span className="h-3 w-3 rounded-full bg-dot-yellow" /><span className="h-3 w-3 rounded-full bg-success" /><span className="ml-2 text-muted-foreground">developer.ts</span></div>
          <pre className="overflow-x-auto p-5 leading-7 text-muted-foreground"><span className="text-primary">const</span> alfiya = {"{"}{"\n"}  role: <span className="text-success">"Full-Stack Developer"</span>,{"\n"}  experience: <span className="text-success">"5 years"</span>,{"\n"}  loves: [<span className="text-success">"scalable systems"</span>, <span className="text-success">"clean code"</span>],{"\n"}  status: <span className="text-success">"ready to join"</span>,{"\n"}{"}"};</pre>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && onClose(); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm animate-in fade-in" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.title}>
      <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border bg-card p-7 animate-in zoom-in-95 slide-in-from-bottom-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div><p className="font-mono text-sm text-primary">{p.tag}</p><h3 className="mt-1 text-3xl font-bold">{p.title}</h3></div>
          <button onClick={onClose} aria-label="Close" className="rounded-lg border px-3 py-1 text-muted-foreground hover:text-foreground">✕</button>
        </div>
        <p className="mt-4 text-muted-foreground">{p.summary}</p>
        <ul className="mt-6 space-y-3">{p.points.map((pt) => <li key={pt} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{pt}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-2">{p.stack.map((s) => <Pill key={s}>{s}</Pill>)}</div>
        {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-block text-primary hover:underline">Learn more ↗</a>}
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const [open, setOpen] = useState<Project | null>(null);
  const [copiedContact, setCopiedContact] = useState<"email" | "phone" | "error" | null>(null);
  const copyContact = async (type: "email" | "phone", value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(type);
    } catch {
      setCopiedContact("error");
    }
  };
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        <Section id="about" kicker="01 · About" title="A bit about me">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal className="space-y-5 text-lg text-muted-foreground">{about.map((a) => <p key={a}>{a}</p>)}<p className="text-foreground">{profile.availability}</p></Reveal>
            <div className="grid gap-4">{stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}><div className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40"><p className="font-display text-4xl font-bold text-primary">{s.value}</p><p className="mt-1 text-muted-foreground">{s.label}</p></div></Reveal>
            ))}</div>
          </div>
        </Section>

        <Section id="work" kicker="02 · Experience" title="Where I've worked">
          <div className="relative space-y-14 border-l pl-8 md:ml-4">
            {experience.map((e) => (
              <Reveal key={e.company} className="relative">
                <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary" />
                <p className="text-sm text-muted-foreground">{e.period} · {e.place}</p>
                <h3 className="mt-1 text-2xl font-bold">{e.role}, <span className="font-medium text-muted-foreground">{e.company}</span></h3>
                <ul className="mt-5 space-y-3 text-muted-foreground">{e.points.map((p) => <li key={p} className="flex gap-3"><span className="text-primary">—</span>{p}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" kicker="03 · Projects" title="Featured work">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 120} className={i === 0 ? "md:col-span-2" : ""}>
                <button onClick={() => setOpen(p)} className="group flex h-full w-full flex-col rounded-2xl border bg-card p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                  <p className="font-mono text-xs text-primary">{p.tag}</p>
                  <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{p.stack.slice(0, 5).map((s) => <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{s}</span>)}</div>
                  <span className="mt-auto pt-6 text-sm text-primary">View details <span className="inline-block transition group-hover:translate-x-1">→</span></span>
                </button>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" kicker="04 · Skills" title="My toolkit">
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([cat, list], i) => (
              <Reveal key={cat} delay={(i % 2) * 100}><div className="h-full rounded-2xl border bg-card p-6"><h3 className="text-lg font-bold">{cat}</h3><div className="mt-4 flex flex-wrap gap-2">{list.map((s) => <Pill key={s}>{s}</Pill>)}</div></div></Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" kicker="05 · Education" title="Learning & credentials">
          <Reveal><div className="grid gap-8 rounded-2xl border bg-card p-8 md:grid-cols-2">
            <div><h3 className="text-2xl font-bold">{education.degree}</h3><p className="mt-2 text-muted-foreground">{education.school}</p><p className="mt-1 text-muted-foreground">{education.period} · <span className="text-primary">{education.grade}</span></p></div>
            <div className="space-y-4"><div><p className="text-sm text-muted-foreground">Certifications</p><div className="mt-2 flex flex-wrap gap-2">{education.certifications.map((c) => <Pill key={c}>{c}</Pill>)}</div></div><div><p className="text-sm text-muted-foreground">Languages</p><p className="mt-1">{education.languages.join(" · ")}</p></div></div>
          </div></Reveal>
        </Section>

        <Section id="contact" kicker="06 · Contact" title="Let's build something great">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal className="space-y-5">
              <p className="text-lg text-muted-foreground">I'm available to join immediately and happy to chat about frontend or full-stack roles in the UAE or abroad.</p>
              <div className="flex items-center justify-between gap-4 rounded-xl border bg-card p-4">
                <span className="break-all font-display text-lg font-bold md:text-xl">{profile.email}</span>
                <button type="button" onClick={() => void copyContact("email", profile.email)} className="shrink-0 rounded-lg border px-3 py-2 text-sm transition hover:border-primary/60 hover:text-primary">
                  {copiedContact === "email" ? "Copied" : "Copy email"}
                </button>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl border bg-card p-4">
                <span className="text-lg">{profile.phone}</span>
                <button type="button" onClick={() => void copyContact("phone", profile.phone)} className="shrink-0 rounded-lg border px-3 py-2 text-sm transition hover:border-primary/60 hover:text-primary">
                  {copiedContact === "phone" ? "Copied" : "Copy phone"}
                </button>
              </div>
              <p className="min-h-5 text-sm text-muted-foreground" aria-live="polite">
                {copiedContact === "error" ? "Could not copy. Please copy the contact details manually." : copiedContact ? `${copiedContact === "email" ? "Email" : "Phone number"} copied to clipboard.` : ""}
              </p>
              <div className="flex gap-3"><a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2 hover:border-primary/60 hover:text-primary">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2 hover:border-primary/60 hover:text-primary">GitHub</a></div>
            </Reveal>
            {/* <Reveal delay={150} className="flex flex-col justify-center gap-4 rounded-2xl border bg-card p-6">
              <a href={`mailto:${profile.email}`} className="rounded-xl bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition hover:shadow-lg hover:shadow-primary/25">Email me</a>
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="rounded-xl border px-5 py-3 text-center font-semibold transition hover:border-primary/60 hover:text-primary">Call me</a>
            </Reveal> */}
          </div>
        </Section>
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name} · Built with React & Tailwind</footer>
      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
