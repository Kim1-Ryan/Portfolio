import React from 'react';

export default function About() {
  return (
<section id="about" className="about-section">
<div className="wrap about-grid">
<div>
<p className="eyebrow">02 / The person behind the pixels</p>
<h2>Hi, I’m Kim.<br />Your next<br />
<span className="serif">great decision.</span>
</h2>
</div>
<div className="about-copy">
<p className="large-copy">Your website should feel like your business at its best.</p>
<p>I build websites for businesses with something to offer — from established names to local favourites and independent ventures. My focus is simple: a clear message, a considered design, and an experience that feels easy to use.</p>
<div className="principles">
<span>01 <strong>Clarity comes first</strong>
</span>
<span>02 <strong>Details make the difference</strong>
</span>
<span>03 <strong>Personality belongs online</strong>
</span>
</div>
<a className="text-link" href="https://www.linkedin.com/in/kim-ryan-222a78342" target="_blank" rel="noopener noreferrer">More about me on LinkedIn ↗</a>
</div>
</div>
</section>
  );
}
