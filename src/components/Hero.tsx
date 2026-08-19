export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <div className="eyebrow">Software engineer · Sofia, Bulgaria</div>
        <h1 id="hero-title">
          <span>
            Tsvet<em>o</em>mir
          </span>
          <span>Uzunoff</span>
        </h1>
      </div>

      <div className="hero-orbit parallax" aria-hidden="true">
        <div className="orbit-label">frontend / mobile / full-stack</div>
      </div>

      <div className="hero-meta reveal">
        <p className="hero-intro">
          I build the whole surface of a product — <strong>calmly</strong>, from a sharp
          interaction to the infrastructure beneath it.
        </p>
        <div className="hero-location">
          <i aria-hidden="true" /> Remote-first · working from Sofia
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        Scroll to explore
      </a>
    </section>
  );
}
