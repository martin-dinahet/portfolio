import type { FC } from "react";

const links = [
  {
    label: "CV",
    href: "/cv-martin-dinahet-fullstack-webdev.pdf",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-dinahet",
  },
  {
    label: "Email",
    href: "mailto:martin.dinahet@proton.me",
  },
  {
    label: "GitHub",
    href: "https://github.com/martin-dinahet",
  },
];

export const IndexPage: FC = () => (
  <main className="site-shell">
    <nav className="nav-edge" aria-label="Navigation principale">
      <a className="wordmark" href="#accueil" aria-label="Martin Dinahet">
        Martin Dinahet
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a
            className="nav-contact"
            href={link.href}
            key={link.label}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            target={link.href.startsWith("http") ? "_blank" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>

    <section className="hero-letter motion-block" id="accueil" aria-labelledby="hero-title">
      <p className="salutation">Martin Dinahet · Paris</p>
      <h1 id="hero-title">Développeur Fullstack.</h1>
      <p className="hero-note">
        Je cherche un premier poste fullstack après 6 mois de stage dans une startup parisienne.
        J’aime construire des applications web lisibles, avec une base technique propre : interface,
        backend, données et mise en production.
      </p>
    </section>

    <section className="section experience motion-block" aria-labelledby="experience-title">
      <h2 id="experience-title">Expérience</h2>
      <div className="body-copy">
        <p>
          Stage fullstack de 6 mois sur un SaaS de veille IA pour startups et entreprises. J’y ai
          développé l’application en <strong>Next.js</strong>, <strong>React</strong> et
          <strong> Tailwind</strong>, intégré l’IA au produit, et travaillé sur un backend structuré
          en <strong>Clean Architecture</strong>, <strong>CQRS</strong>, <strong>Prisma</strong>,
          <strong> RabbitMQ</strong>, <strong>WebSocket</strong>, <strong>Docker</strong> et
          <strong> Kubernetes</strong>.
        </p>
      </div>
    </section>

    <section
      className="section project motion-block"
      id="opensprint"
      aria-labelledby="project-title"
    >
      <h2 id="project-title">OpenSprint</h2>
      <div className="body-copy">
        <p>
          <strong>OpenSprint</strong> est une plateforme open source de gestion de projet, utilisée
          en production par une startup pour les retours clients, l’organisation et la coordination
          d’équipe. Stack : <strong>Hono</strong>, <strong>Prisma</strong>,
          <strong> PostgreSQL</strong>, <strong>Clean Architecture</strong>,
          <strong> Next.js</strong>, <strong>React</strong>, <strong>Tailwind</strong> et
          <strong> shadcn/ui</strong>.
        </p>
        <a
          className="text-link"
          href="https://opensprint.dinahet.dev"
          rel="noreferrer"
          target="_blank"
        >
          Voir OpenSprint
        </a>
      </div>
    </section>

    <section className="section skills motion-block" aria-labelledby="skills-title">
      <h2 id="skills-title">Compétences</h2>
      <div className="body-copy">
        <p>
          <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>,
          <strong> Hono</strong>, <strong>Prisma</strong>, <strong>PostgreSQL</strong>,
          <strong> Clean Architecture</strong>, <strong>CQRS</strong>, services asynchrones, temps
          réel, Docker. Bachelor <strong>Concepteur Développeur d’Applications Web</strong>.
        </p>
      </div>
    </section>

    <section className="contact-letter motion-block" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Discutons simplement.</h2>
      <p>Je serais heureux d’échanger autour d’un poste de développeur fullstack.</p>
      <nav className="contact-links" aria-label="Liens de contact">
        {links.map((link) => (
          <a
            className="contact-email"
            href={link.href}
            key={link.label}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            target={link.href.startsWith("http") ? "_blank" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </section>

    <footer className="foot-letter">
      <p className="foot-letter__close">
        Martin Dinahet
        <span> · Développeur fullstack · 2026</span>
      </p>
    </footer>
  </main>
);
