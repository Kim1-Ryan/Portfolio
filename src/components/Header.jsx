import React from 'react';

export default function Header() {
  return (
<header className="site-header wrap">
<a className="wordmark" href="index.html" aria-label="Kim Ryan home">Kim Ryan<span>.</span>
</a>
<nav aria-label="Main navigation">
<a href="index.html#work">Selected work</a>
<a href="index.html#about">About</a>
<a className="nav-playground" href="play.html">Playground</a>
</nav>
<a className="nav-contact" href="index.html#contact">Let’s talk <span aria-hidden="true">↗</span>
</a>
</header>
  );
}
