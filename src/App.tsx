const storefrontUrl = "https://myporch.app/blue-house-bounty";
const galleryPhotos = [
  "20230704_085722.jpg",
  "20260913_111711.jpg",
  "20260929_105525.jpg",
  "20261006_141318.jpg",
  "20261009_152944.jpg",
  "20261010_124753.jpg",
  "20261013_125916.jpg",
  "20261016_120941.jpg",
  "20261023_142120.jpg",
  "20261023_145110.jpg",
];

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.8 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.8V13h2.7v8h3.3Z" />
    </svg>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Blue House Bounty home">
          <img src="/bhb-logo-no-text.jpg" alt="" />
          <span>Blue House Bounty</span>
        </a>
        <div className="header-actions">
          <nav aria-label="Main navigation">
            <a href={storefrontUrl} target="_blank" rel="noreferrer">
              This week&apos;s bounty
            </a>
            <a href="#bakery">Bakery lines</a>
            <a href="#story">Our story</a>
          </nav>
          <div
            className="header-socials"
            aria-label="Blue House Bounty social media"
          >
            <a
              href="https://www.instagram.com/blue_house_bounty/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082288456271"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-inner section-wrap">
            <div className="hero-copy">
              <p className="eyebrow">
                Urban farm &amp; porch bakery · Orangevale, California
              </p>
              <h1 id="hero-heading">Fresh from the porch, made with care</h1>
              <p className="hero-description">
                Seasonal fruits and vegetables, dried herbs, tasty jams,
                sourdough loaves, delectable cookies, and more made and grown in
                the heart of Orangevale.
              </p>
              <div className="button-row">
                <a
                  className="button button-coral"
                  href={storefrontUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  This week&apos;s bounty
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="gingham" aria-hidden="true" />

        <section
          className="bounty-section"
          id="bakery"
          aria-labelledby="bakery-heading"
        >
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-light">
                  From our oven to your table
                </p>
                <h2 id="bakery-heading">Our bakery lines</h2>
              </div>
              <a
                className="light-link"
                href={storefrontUrl}
                target="_blank"
                rel="noreferrer"
              >
                Shop the porch <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="lines-grid">
              <article className="line-card classic">
                <p className="line-label">Classic line</p>
                <h3>Made with our starter</h3>
                <p>
                  Our homegrown sourdough starter supports a wide array of items
                  made with organic, unbleached Central Milling flour from
                  Costco. Better digestion, a lower glycemic index, and no
                  preservatives or additives make this a delicious choice.
                </p>
              </article>
              <article className="line-card hearty">
                <p className="line-label">Hearty line</p>
                <h3>A step up in nutrition</h3>
                <p>
                  A 50/50 blend of fresh-milled organic flour and organic Costco
                  flour. Wheat berries are ground right here as we bake,
                  boosting fiber and nutrients for families moving beyond
                  store-bought bread.
                </p>
              </article>
              <article className="line-card divine">
                <p className="line-label">Divine line</p>
                <h3>Fresh-milled goodness</h3>
                <p>
                  Our most nutrient-dense baked goods, made with 100% freshly
                  milled wheat berries. Every bite is packed with the deep,
                  wholesome goodness of fresh-milled flour.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="visit-story section-wrap" id="story">
          <div className="visit-card">
            <p className="eyebrow">Pre-order</p>
            <h2>Something sweet is waiting</h2>
            <div className="visit-copy">
              <p>
                Find the week&apos;s rotating selection of sourdough loaves,
                cookies, farm goods, and more on MyPorch. Pre-order online, then
                pick up your bounty at the stand.
              </p>
              <a
                className="button button-navy"
                href={storefrontUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit our storefront
              </a>
            </div>
          </div>
          <div className="about-story">
            <h2>Grown and baked in Orangevale</h2>
            <p>
              Blue House Bounty is a small urban farm and porch bakery in the
              heart of Orangevale, California. Look for seasonal fruits and
              vegetables, dried herbs, tasty jams, and bakery favorites at the
              porch stand each week.
            </p>
          </div>
          <div
            className="gallery-grid"
            aria-label="A look around Blue House Bounty"
          >
            {galleryPhotos.map((photo, index) => (
              <figure
                className={`gallery-photo gallery-photo-${index + 1}`}
                key={photo}
              >
                <img
                  src={`/${photo}`}
                  alt={`A Blue House Bounty farm or bakery moment, photo ${index + 1}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="footer-brand">Blue House Bounty</span>
        <span>Urban farm &amp; porch bakery · Orangevale, California</span>
      </footer>
    </div>
  );
}

export default App;
