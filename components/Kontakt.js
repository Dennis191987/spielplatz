"use client";

import Link from "next/link";
import { useState } from "react"; 

export default function Kontakt() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Formulardaten:", formData); 
    alert("Danke für deine Nachricht!"); 
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-[url('/world.jpg')] rounded-4xl shadow-md">

      <h1 className="text-4xl text-red-500 font-bold text-rust mb-6 font-accent">Kontakt</h1>

      <p className="text-lg text-heartBlack text-blue-300  mb-8 font-bold ">
       Mehr infos über unsere Arbeit? Meld dich!{" "}
        <Link href="mailto:futureINSIDEyou.de"
          className="underline text-yellow-600 hover:text-rust transition-all duration-300"
        >
          hallo@futureINSIDE you
        </Link>{" "}
        oder folge uns auf{" "}
        <Link href="https://instagram.com/dennis191987"
          target="_blank"
          className="underline text-yellow-600 hover:text-rust transition-all duration-300"
        >
          Instagram @futureINSIDEyou
        </Link>.
      </p>
      {}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-yellow-500 mb-2">Dein Name</label>
          <input
            type="text"
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full border border-mustard rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-mustard bg-white text-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-yellow-500 mb-2">E-Mail-Adresse</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-mustard rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-mustard bg-white text-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-yellow-500 mb-2">Nachricht</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-mustard rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-mustard bg-white text-red-500"
            placeholder="Schreib uns eine Nachricht"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-mustard hover:bg-rust text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
        >
          Nachricht senden
        </button>
      </form>
    </div>
  );
}