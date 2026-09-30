import React from 'react';
import EmailLink from './EmailLink.jsx';

export default function Playground() {
 return (
<main id="main" className="wrap">
<section className="play-hero">
<p className="eyebrow">
<span className="status-dot">
</span> Experiments / Interactive projects</p>
<h1>A little code.<br />A lot of <span className="serif">curiosity.</span>
</h1>
<p>A collection of games and playful experiments. Small ideas, brought to life in the browser. Pick one and have a play.</p>
<a className="text-link" href="https://github.com/Kim1-Ryan" target="_blank" rel="noopener noreferrer">Explore my code on GitHub ↗</a>
</section>
<div className="project-grid games">
<article className="project">
<a className="project-image dice" href="https://kim1-ryan.github.io/Dice-Game/" target="_blank" rel="noopener noreferrer" aria-label="Open Dice Game in a new tab">
<img src="images/Screenshot 2026-06-19 120916.webp" width="1600" height="900" alt="Dice Game preview" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">01 / Browser game</p>
<h2>Dice Game</h2>
</div>
<p>A roll of the dice. A little friendly competition.</p>
</div>
</article>
<article className="project">
<a className="project-image compatibility" href="https://kim1-ryan.github.io/Compatibility-Calculator/" target="_blank" rel="noopener noreferrer" aria-label="Open Compatibility Calculator in a new tab">
<img src="images/Screenshot 2026-06-19 120822.webp" width="1600" height="900" alt="Compatibility Calculator preview" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">02 / Just for fun</p>
<h2>Compatibility Calculator</h2>
</div>
<p>A playful experiment in finding your match.</p>
</div>
</article>
<article className="project">
<a className="project-image cleaner" href="https://kim1-ryan.github.io/Mortal-Cleaner/" target="_blank" rel="noopener noreferrer" aria-label="Open Mortal Cleaner in a new tab">
<img src="images/Screenshot 2026-06-19 120930.webp" width="1600" height="900" alt="Mortal Cleaner game preview" loading="lazy" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">03 / Browser game</p>
<h2>Mortal Cleaner</h2>
</div>
<p>Gamify your daily chores.</p>
</div>
</article>
<article className="project">
<a className="project-image drums" href="https://kim1-ryan.github.io/Drum-Kit/" target="_blank" rel="noopener noreferrer" aria-label="Open Drum Kit in a new tab">
<img src="images/Screenshot 2026-06-19 121010.webp" width="1600" height="900" alt="Interactive Drum Kit preview" loading="lazy" />
<span className="image-arrow" aria-hidden="true">↗</span>
</a>
<div className="project-info">
<div>
<p className="project-category">04 / Interactive music</p>
<h2>Drum Kit</h2>
</div>
<p>Find your rhythm. Make a little noise.</p>
</div>
</article>
</div>
<section className="play-contact">
<h2>Have an idea of <span className="serif">your own?</span>
</h2>
<EmailLink className="button dark-button">Let’s talk ↗</EmailLink>
</section>
</main>
 );
}
