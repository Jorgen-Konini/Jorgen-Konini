import { site, about, experience, projects, skills } from "@/lib/data";
import {
  ArrowRightIcon,
  ClockIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "@/components/icons";

const CV_URL = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cv.pdf`;

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand">
            <span className="nav-logo">JK</span>
            <span className="nav-name">jorgen konini</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href={CV_URL} className="btn btn-ghost btn-small" download>
              <DownloadIcon size={14} color="var(--accent)" />
              CV
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="container hero-inner">
            <div className="eyebrow">{"// software engineer — react & react native"}</div>
            <h1>
              I build web &amp; mobile products <span className="accent">end to end.</span>
            </h1>
            <p className="hero-sub">
              React and React Native frontends in TypeScript, Go and PostgreSQL backends — and
              the product work in between. 5+ years shipping production platforms for US
              healthcare, HR, and legal companies.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View projects
                <ArrowRightIcon />
              </a>
              <a href={CV_URL} className="btn btn-ghost" download>
                <DownloadIcon color="var(--accent)" />
                Download CV
              </a>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <PinIcon />
                {site.location}
              </span>
              <span className="hero-meta-item">
                <span className="pulse-dot" />
                {site.availability}
              </span>
              <span className="hero-meta-item">
                <ClockIcon />
                {site.years}
              </span>
            </div>
          </div>
        </header>

        <section id="about" className="section section-alt">
          <div className="container about-grid">
            <div className="about-copy">
              <div className="eyebrow">01 / ABOUT</div>
              <h2 className="section-title">{about.heading}</h2>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="about-stats">
              {about.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">02 / EXPERIENCE</div>
              <h2 className="section-title">Where I have worked.</h2>
            </div>
            <div>
              {experience.map((job, i) => (
                <div key={job.title} className="timeline-item">
                  <div className="timeline-rail">
                    <span className={`timeline-dot${i > 0 ? " timeline-dot-hollow" : ""}`} />
                    <span className="timeline-line" />
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-head">
                      <span className="timeline-title">{job.title}</span>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <div className="timeline-tagline">{job.tagline}</div>
                    <div className="timeline-bullets">
                      {job.bullets.map((b) => (
                        <div key={b.slice(0, 24)}>{b}</div>
                      ))}
                    </div>
                    <div className="tag-row">
                      {job.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">03 / PROJECTS</div>
              <h2 className="section-title">Featured work.</h2>
            </div>
            <div className="project-grid">
              {projects.map((project) => {
                const inner = (
                  <>
                    <div className="project-head">
                      <span
                        className={`project-name${project.url ? " project-name-open" : ""}`}
                      >
                        {project.name}
                      </span>
                      {project.url ? (
                        <GitHubIcon color="var(--muted)" />
                      ) : (
                        <span className="project-badge">closed source</span>
                      )}
                    </div>
                    <p className="project-desc">{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag tag-filled">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );
                return project.url ? (
                  <a
                    key={project.name}
                    className="project-card"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={project.name} className="project-card">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">04 / SKILLS</div>
              <h2 className="section-title">Tech stack.</h2>
            </div>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.group} className="skill-card">
                  <div className="skill-group">{group.group}</div>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-inner">
            <div className="eyebrow">05 / CONTACT</div>
            <h2>Let&apos;s build something together.</h2>
            <p className="contact-sub">
              Open to remote roles and interesting projects — the fastest way to reach me is
              email.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                <MailIcon />
                {site.email}
              </a>
              <a href={CV_URL} className="btn btn-ghost" download>
                <DownloadIcon color="var(--accent)" />
                Download CV
              </a>
            </div>
            <div className="contact-links">
              <a
                href={site.github}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon size={16} />
                {site.githubLabel}
              </a>
              <a
                href={site.linkedin}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                {site.linkedinLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Jorgen Konini</span>
          <span>Designed &amp; built by me</span>
        </div>
      </footer>
    </>
  );
}
