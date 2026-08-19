import { offTheClock } from '../data/content';

export function Approach() {
  return (
    <section className="split-section" aria-labelledby="approach-title">
      <div className="split-copy reveal">
        <div className="section-kicker">03 / The approach</div>
        <h2 className="section-title" id="approach-title">
          Built for
          <br />
          <span className="orange">the real</span>
          <br />
          <span className="outline">world.</span>
        </h2>
        <p className="lead-copy">
          The best work has room for both edge cases and elegance. I care about the system,
          but I never lose sight of the person using it.
        </p>
      </div>

      <aside className="split-aside reveal" aria-label="Personal interests">
        <div className="aside-giant" aria-hidden="true">
          +
        </div>
        <div className="aside-copy">
          <h3>
            Off the
            <br />
            clock.
          </h3>
          <p>
            Curiosity keeps the work honest. When I’m not deep in a product, I’m usually out
            finding a new angle on the world.
          </p>
          <div className="aside-list">
            {offTheClock.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
