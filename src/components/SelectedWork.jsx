import React from 'react';

export default function SelectedWork() {
  return (
<section id="work" className="work-section wrap" aria-labelledby="work-title">
<div className="section-top">
<div>
<p className="eyebrow">01 / Selected work</p>
<h2 id="work-title">Built with purpose.<br />Made to <span className="serif">stand out.</span>
</h2>
</div>
<p>A few website demos.<br />Different businesses. Distinct identities.</p>
</div>
<article className="project featured">
<a className="project-image motorcycle" href="https://kim1-ryan.github.io/Umpleby-Motorcycles/" target="_blank" rel="noopener noreferrer" aria-label="Explore Umpleby Motorcycles demo (opens in a new tab)">
<div className="image-topline">
<span>UMPLEBY MOTORCYCLES</span>
<span>Website demo / 01</span>
</div>
<img src="images/suzuki.webp" width="1600" height="791" alt="Umpleby Motorcycles website featuring its Suzuki motorcycle range" fetchPriority="high" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">Automotive Business</p>
<h3>
<a href="https://kim1-ryan.github.io/Umpleby-Motorcycles/" target="_blank" rel="noopener noreferrer">Umpleby Motorcycles <span aria-hidden="true">↗</span>
</a>
</h3>
</div>
<p>A bold online presence for a business built around the open road.</p>
</div>
</article>
<div className="project-grid">
<article className="project">
<a className="project-image laundry" href="https://kim1-ryan.github.io/LaundromatSibaya/" target="_blank" rel="noopener noreferrer" aria-label="Explore Laundromat Sibaya demo (opens in a new tab)">
<div className="image-topline">
<span>LAUNDROMAT SIBAYA</span>
<span>02</span>
</div>
<img src="images/laundry.webp" width="1600" height="788" alt="Laundromat Sibaya website preview" loading="lazy" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">Local Services</p>
<h3>
<a href="https://kim1-ryan.github.io/LaundromatSibaya/" target="_blank" rel="noopener noreferrer">Laundromat Sibaya <span aria-hidden="true">↗</span>
</a>
</h3>
</div>
<p>A fresh, approachable home for an everyday essential.</p>
</div>
</article>
<article className="project">
<a className="project-image creatures" href="https://kim1-ryan.github.io/NATS_CREATURES/" target="_blank" rel="noopener noreferrer" aria-label="Explore Nat’s Creatures demo (opens in a new tab)">
<div className="image-topline">
<span>NAT’S CREATURES</span>
<span>03</span>
</div>
<img src="images/nc.webp" width="1600" height="797" alt="Nat’s Creatures website preview" loading="lazy" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">Independent business</p>
<h3>
<a href="https://kim1-ryan.github.io/NATS_CREATURES/" target="_blank" rel="noopener noreferrer">Nat’s Creatures <span aria-hidden="true">↗</span>
</a>
</h3>
</div>
<p>A little personality. A memorable first impression.</p>
</div>
</article>
</div>
</section>
  );
}
