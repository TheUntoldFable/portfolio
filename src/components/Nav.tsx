import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={close}>
        <span className="brand-mark" aria-hidden="true">
          T
        </span>
        <span>Tsvetomir Uzunoff</span>
      </a>

      <button
        type="button"
        className="menu-button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? <X size={15} aria-hidden="true" /> : <Menu size={15} aria-hidden="true" />}
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <nav
        id="primary-navigation"
        className={`nav ${open ? 'is-open' : ''}`}
        aria-label="Primary navigation"
      >
        <a href="#about" onClick={close}>
          About
        </a>
        <a href="#work" onClick={close}>
          Selected work
        </a>
        <a href="#toolkit" onClick={close}>
          Toolkit
        </a>
        <a className="nav-cta" href="#contact" onClick={close}>
          Let's talk <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
