import { experience, employerMeta } from '../data/content';

export function Experience() {
  return (
    <section className="forest-section" id="work" aria-labelledby="work-title">
      <div className="work-head reveal">
        <div>
          <div className="section-kicker orange">02 / The work</div>
          <h2 className="section-title" id="work-title">
            Things I’ve
            <br />
            <span className="outline">helped</span> make.
          </h2>
        </div>
        <p className="work-intro">
          A selection of teams and products from across the work. Different domains, same
          instinct: make the complicated feel composed.
        </p>
      </div>

      <div className="work-list">
        {experience.map((item, index) => (
          <div key={item.name}>
            {item.employer !== experience[index - 1]?.employer && (
              <div className="experience-group reveal">
                <span>{item.employer}</span>
                <span>{employerMeta[item.employer]}</span>
              </div>
            )}

            {/* The row already animates its arrow on hover, so where a
                product is publicly reachable the row itself is the link. */}
            {(() => {
              const body = (
                <>
                  <div className="work-index">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="work-name">{item.name}</div>
                    <div className="work-type">
                      {item.type}
                      {item.demoAvailable && (
                        <span className="work-badge">Demo available</span>
                      )}
                    </div>
                  </div>
                  <div className="work-description">{item.copy}</div>
                  {/* Only a row that actually goes somewhere gets the
                      affordance — the bare arrow used to sit on every row and
                      promise a link that wasn't there. */}
                  <div className="work-arrow">
                    {item.url && (
                      <span className="work-link">
                        <span className="work-link-label">Visit</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M8 7h9v9" />
                        </svg>
                      </span>
                    )}
                  </div>
                </>
              );

              return item.url ? (
                <a
                  className="work-item reveal"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.name} — open the live site in a new tab`}
                >
                  {body}
                </a>
              ) : (
                <article className="work-item reveal">{body}</article>
              );
            })()}
          </div>
        ))}
      </div>

      <div className="work-note">
        <span>CV / experience &amp; selected products</span>
        <span>One employer · many surfaces →</span>
      </div>
    </section>
  );
}
