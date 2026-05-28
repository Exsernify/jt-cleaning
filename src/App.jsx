import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function JTCleaningWebsite() {
  const services = [
    {
      icon: '💦',
      title: 'Pressure Washing',
      desc: 'Deep exterior cleaning for driveways, patios, sidewalks, and siding.'
    },
    {
      icon: '🌱',
      title: 'Lawn Care',
      desc: 'Professional mowing, trimming, edging, and yard maintenance services.'
    },
    {
      icon: '🧹',
      title: 'Gutter Cleaning',
      desc: 'Safe and reliable gutter cleaning to help protect your home.'
    },
    {
      icon: '🪟',
      title: 'Window Cleaning',
      desc: 'Streak-free window cleaning for homes and small businesses.'
    },
    {
      icon: '🚗',
      title: 'Car Detailing',
      desc: 'Interior and exterior detailing to keep your vehicle spotless.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-sky-500">JT</span>{' '}
            <span className="text-yellow-500">Cleaning</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-sky-500 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-sky-500 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-yellow-50 py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 mb-6">
              Professional Exterior Cleaning Services
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight text-slate-900 mb-6">
              Keeping Homes and Vehicles Looking Their Best
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              JT Cleaning delivers reliable and affordable cleaning services with professional results you can trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                Get a Free Quote
              </button>

              <button className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-white px-7 py-4 rounded-2xl font-semibold transition-all duration-300">
                View Services
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-100 shadow-2xl rounded-[2rem] p-8">
            <div className="grid grid-cols-2 gap-5">
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-gradient-to-br from-sky-50 to-yellow-50 p-6 text-center border border-slate-100"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-bold uppercase tracking-widest mb-3">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
              Quality Cleaning Solutions
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide dependable residential and vehicle cleaning services designed to keep everything looking clean and professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] border border-slate-100 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-yellow-300 text-3xl mb-6 shadow-md">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sky-500 font-bold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Reliable Service With Professional Results
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              JT Cleaning focuses on quality work, dependable service, and customer satisfaction. We take pride in making homes, yards, and vehicles look their absolute best.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-2xl">
                  ✔️
                </div>
                <div>
                  <h3 className="font-bold text-lg">Affordable Pricing</h3>
                  <p className="text-slate-600">Competitive pricing with free estimates available.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <div>
                  <h3 className="font-bold text-lg">High Quality Work</h3>
                  <p className="text-slate-600">Attention to detail on every project we complete.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-2xl">
                  🚚
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dependable Service</h3>
                  <p className="text-slate-600">Reliable scheduling and friendly customer service.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-100 to-yellow-100 rounded-[2rem] p-10 shadow-xl border border-white">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg">
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                JT Cleaning
              </h3>

              <div className="space-y-5 text-lg">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="font-semibold">Pressure Washing</span>
                  <span>✓</span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="font-semibold">Lawn Care</span>
                  <span>✓</span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="font-semibold">Gutter Cleaning</span>
                  <span>✓</span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="font-semibold">Window Cleaning</span>
                  <span>✓</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Car Detailing</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-500 font-bold uppercase tracking-widest mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Request a Free Quote
          </h2>

          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Contact JT Cleaning today to schedule a service or get a free estimate.
          </p>

          <div className="bg-gradient-to-r from-sky-500 to-sky-400 rounded-[2rem] p-10 shadow-2xl text-white">
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              <div>
                <p className="text-sky-100 mb-2">Phone</p>
                <p className="text-xl font-bold">(555) 123-4567</p>
              </div>

              <div>
                <p className="text-sky-100 mb-2">Email</p>
                <p className="text-xl font-bold">jtcleaning@email.com</p>
              </div>

              <div>
                <p className="text-sky-100 mb-2">Hours</p>
                <p className="text-xl font-bold">Mon - Sat • 8AM - 6PM</p>
              </div>
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Book a Service
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-3xl font-black mb-2">
              <span className="text-sky-400">JT</span>{' '}
              <span className="text-yellow-400">Cleaning</span>
            </h3>

            <p className="text-slate-400">
              Professional cleaning and detailing services.
            </p>
          </div>

          <div className="text-slate-400 text-center md:text-right">
            <p>Pressure Washing • Lawn Care • Gutter Cleaning</p>
            <p>Window Cleaning • Car Detailing</p>
            <p className="mt-2 text-sm">© 2026 JT Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
