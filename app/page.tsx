"use client";

import Navbar from "./components/Navbar";
import StarBackground from "./components/StarBackground";
import Hero from "./components/Hero";
import SkillsOrbit from "./components/SkillsOrbit";
import Projects from "./components/Projects";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zz6usug",
        "template_g1i82x5",
        form.current,
        "299HOCJiK3018wAyh"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <>
      <Navbar />

      <main className="relative bg-gradient-to-b from-[#050510] via-[#07071c] to-[#02020a] text-white overflow-hidden">
        
        <StarBackground />

        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <SkillsOrbit />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 min-h-screen flex items-center justify-center px-6"
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center space-y-6">

              <h2 className="text-4xl font-bold text-purple-400">
                Contact
              </h2>

              <p className="text-gray-400">
                Feel free to connect with me or send a message.
              </p>

              {/* 🔥 ALL BUTTONS (INCLUDING RESUME) */}
              <div className="flex flex-wrap gap-6 mt-4">

                {/* GITHUB */}
                <a
                  href="https://github.com/sruthiMukundhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-lg
                  text-purple-400 hover:bg-purple-600 hover:text-white
                  shadow-lg shadow-purple-500/30 hover:shadow-purple-500/70
                  transition"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/sruthi-m-p-3975a2263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-lg
                  text-purple-400 hover:bg-purple-600 hover:text-white
                  shadow-lg shadow-purple-500/30 hover:shadow-purple-500/70
                  transition"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>

                {/* 🔥 RESUME (SAME STYLE) */}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-lg
                  text-purple-400 hover:bg-purple-600 hover:text-white
                  shadow-lg shadow-purple-500/30 hover:shadow-purple-500/70
                  transition"
                >
                  <FaDownload size={18} />
                  Download CV
                </a>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white/5 backdrop-blur-lg border border-purple-500/20 
              p-8 rounded-2xl shadow-lg space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-transparent border border-purple-500/30
                text-white placeholder-gray-400 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-transparent border border-purple-500/30
                text-white placeholder-gray-400 focus:outline-none"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-transparent border border-purple-500/30
                text-white placeholder-gray-400 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700
                shadow-lg shadow-purple-500/50
                transition px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </button>

            </form>

          </div>
        </section>

      </main>
    </>
  );
}