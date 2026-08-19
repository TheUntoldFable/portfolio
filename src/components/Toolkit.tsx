import { toolkit } from '../data/content';

export function Toolkit() {
  return (
    <section className="paper-section toolkit" id="toolkit" aria-labelledby="toolkit-title">
      <div className="section-grid">
        <div className="section-kicker reveal">04 / The toolkit</div>
        <div className="reveal">
          <h2 className="section-title" id="toolkit-title">
            The right
            <br />
            <span className="outline">tool</span> for
            <br />
            <span className="orange">the job.</span>
          </h2>

          <div className="toolkit-grid">
            <div>
              <div className="toolkit-list">
                {toolkit.map((item, index) => (
                  <div className="toolkit-row" key={item}>
                    <span className="toolkit-num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="toolkit-name">{item}</span>
                  </div>
                ))}
              </div>
              <p className="toolkit-footnote">
                <span aria-hidden="true">*</span> A selection, not a complete list. Plenty
                more has come and gone across six years of client work — the rest gets
                picked up as the job needs it.
              </p>
            </div>
            <div className="toolkit-note">
              <strong>
                Wide lens.
                <br />
                Deep focus.
              </strong>
              I enjoy moving between product intent and implementation detail. The toolkit
              changes; the habit of learning does not.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
