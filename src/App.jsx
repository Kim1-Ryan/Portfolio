import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import About from './components/About.jsx';
import PlaygroundTeaser from './components/PlaygroundTeaser.jsx';
import Contact from './components/Contact.jsx';
import Playground from './components/Playground.jsx';

export default function App() {
  const isPlayground = window.location.pathname.endsWith('/play.html');
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    {isPlayground ? <Playground /> : <main id="main"><Hero /><SelectedWork /><About /><PlaygroundTeaser /><Contact /></main>}
    <Footer />
  </>;
}
