"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", extra: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name || form.name.trim().length < 2) e.name = "Please enter your name.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) e.email = "Please enter a valid email.";
    if (!form.message || form.message.trim().length < 6) e.message = "Message should be at least 6 characters.";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (form.extra) {
      setStatus("error");
      return;
    }
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      try {
        setStatus("loading");
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const json = await res.json();
        if (res.ok && json.ok) {
          setStatus("success");
          setForm({ name: "", email: "", message: "", extra: "" });
          setErrors({});
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-8 bg-transparent text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        {status === "success" && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-green-600/20 border border-green-500/30 text-green-300">
            Message sent. I’ll get back to you shortly.
          </div>
        )}
        {status === "error" && Object.keys(errors).length > 0 && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-600/20 border border-red-500/30 text-red-300">
            Please fix the highlighted fields.
          </div>
        )}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`p-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} backdrop-blur-md rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
          />
          <input 
            type="email" 
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`p-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} backdrop-blur-md rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
          />
          <textarea 
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`p-3 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} backdrop-blur-md rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
          ></textarea>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.extra}
            onChange={(e) => setForm({ ...form, extra: e.target.value })}
            className="hidden"
          />
          <button 
            type="submit"
            disabled={status === "loading"}
            className={`bg-gradient-to-r from-cyan-600 to-lime-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:from-cyan-500 hover:to-lime-400 hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"}`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
