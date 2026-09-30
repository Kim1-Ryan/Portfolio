import React from 'react';
import EmailLink from './EmailLink.jsx';

export default function Contact() {
  return (
<section id="contact" className="contact-section">
<div className="wrap">
<p className="eyebrow">03 / Let’s make something great</p>
<div className="contact-heading">
<h2>Your vision.<br /><span className="serif">Our</span> next project.
</h2>
<EmailLink className="contact-arrow" aria-label="Email Kim about your project">↗</EmailLink>
</div>
<div className="contact-bottom">
<p>Have a business, an idea, or a website that needs a fresh start?<br />I’d love to hear about it.</p>
<div className="contact-links">
<EmailLink>Email me ↗</EmailLink>
<a href="https://wa.me/27645138308">WhatsApp ↗</a>
<a href="https://www.linkedin.com/in/kim-ryan-222a78342">LinkedIn ↗</a>
</div>
</div>
</div>
</section>
  );
}
