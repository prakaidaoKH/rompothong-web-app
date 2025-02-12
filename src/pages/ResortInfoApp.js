import React from "react";

export default function ResortInfoApp() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rom Po Thong Resort</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#amenities" className="hover:underline">Amenities</a></li>
            <li><a href="#rooms" className="hover:underline">Rooms</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?resort,beach')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-4xl font-bold">Welcome to Rom Po Thong</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-2 text-gray-700">Experience the best luxury and comfort at Rom Po Thong Resort.</p>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold">Amenities</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-700">
          <li>Infinity Pool</li>
          <li>Spa & Wellness</li>
          <li>Fine Dining</li>
          <li>Beachfront Access</li>
        </ul>
      </section>
      
      {/* Rooms Section */}
      <section id="rooms" className="p-8">
        <h2 className="text-3xl font-bold">Rooms & Suites</h2>
        <p className="mt-2 text-gray-700">Choose from our premium selection of rooms with ocean views.</p>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://source.unsplash.com/200x200/?beach,resort" alt="Resort view" className="rounded-lg" />
          <img src="https://source.unsplash.com/200x200/?hotel,room" alt="Hotel room" className="rounded-lg" />
          <img src="https://source.unsplash.com/200x200/?pool,luxury" alt="Luxury pool" className="rounded-lg" />
          <img src="https://source.unsplash.com/200x200/?spa,relax" alt="Spa relaxation" className="rounded-lg" />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Name" className="block w-full p-2 border rounded mb-2" />
          <input type="email" placeholder="Your Email" className="block w-full p-2 border rounded mb-2" />
          <textarea placeholder="Message" className="block w-full p-2 border rounded mb-2" rows="4"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
        &copy; 2025 Rom Po Thong Resort. All rights reserved.
      </footer>
    </div>
  );
}
