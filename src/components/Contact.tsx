import { ArrowUpRight, Mail } from 'lucide-react';
import { contact } from '../data/content';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="section-kicker orange reveal">05 / Next chapter</div>
        <h2 className="contact-title reveal" id="contact-title">
          Have a good
          <br />
          <em>problem?</em>
        </h2>
        <p className="fine-copy reveal" style={{ color: '#b8cab4', marginBottom: 32 }}>
          I’m open to thoughtful conversations about products, teams, and the work in
          between.
        </p>

        <div className="contact-links reveal">
          <a className="contact-link" href={`mailto:${contact.email}`}>
            <Mail size={15} aria-hidden="true" /> Email
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            className="contact-link"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Tsvetomir Uzunoff on LinkedIn"
          >
            <LinkedInIcon /> LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            className="contact-link"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Tsvetomir Uzunoff on GitHub"
          >
            <GitHubIcon /> GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <footer className="footer-line">
          <span>Tsvetomir Uzunoff · Senior Software Engineer</span>
          <span>Sofia, Bulgaria · Remote-first</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
