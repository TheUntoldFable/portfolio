export function About() {
  return (
    <section className="paper-section" id="about" aria-labelledby="about-title">
      <div className="section-grid">
        <div>
          <div className="section-kicker reveal">01 / The person</div>
          <figure className="portrait reveal drift" data-depth="34">
            <img
              src="/portrait.jpg"
              alt="Tsvetomir Uzunoff"
              width="1200"
              height="1466"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Tsvetomir Uzunoff
              <br />
              Sofia, Bulgaria
            </figcaption>
          </figure>
        </div>
        <div className="statement reveal">
          <div className="statement-rule" />
          <h2 className="section-title" id="about-title">
            Quietly <span className="outline">serious</span>
            <br />
            about the <span className="orange">details.</span>
          </h2>
          <p className="lead-copy">
            I’m Tsvetomir — a senior software engineer who likes the space between
            disciplines. The moment a product stops being a mockup and starts becoming
            something real.
          </p>
          <p className="fine-copy">
            Based in Sofia, Bulgaria and working remote-first, I’m comfortable taking
            ownership wherever the work needs it: shaping a frontend, moving a mobile
            experience forward, or following a problem all the way through a full-stack
            build.
          </p>
        </div>
      </div>
    </section>
  );
}
