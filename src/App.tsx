/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text scroll-smooth selection:bg-coral selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

