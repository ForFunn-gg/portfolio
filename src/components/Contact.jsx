import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "./Fade";

const SERVICE_ID  = "service_v7oyaqk";
const TEMPLATE_ID = "template_5v7imre";
const PUBLIC_KEY  = "KhUseYLCt-4iEdT0j";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const templateParams = {
        from_name: formRef.current.from_name.value,
        from_email: formRef.current.from_email.value,
        message: formRef.current.message.value,
      }
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current.requestSubmit();
    }
  };

  return (
    <section id="contact" className="px-6 py-24 sm:py-32 bg-zinc-900/40">
      <div className="max-w-3xl mx-auto">

        <Fade>
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
            04 — Contact
          </p>
        </Fade>
        <Fade delay={0.1}>
          <h2 className="font-display text-5xl sm:text-6xl text-zinc-100 mb-4 leading-tight">
            Let's<br />
            <em className="text-zinc-500">Connect.</em>
          </h2>
        </Fade>
        <Fade delay={0.2}>
          <p className="text-zinc-500 leading-relaxed mb-12">
            Fill out the form and I'll get back to you as soon as possible.
          </p>
        </Fade>

        <Fade delay={0.3}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

        
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                onKeyDown={(e) => {
                  
                  if (e.key === "Enter") {
                    e.preventDefault();
                    document.querySelector("input[name='from_email']").focus();
                  }
                }}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 font-mono focus:outline-none focus:border-emerald-500 transition-colors duration-200"
              />
            </div>

           
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="your.email@example.com"
                onKeyDown={(e) => {
                 
                  if (e.key === "Enter") {
                    e.preventDefault();
                    document.querySelector("textarea[name='message']").focus();
                  }
                }}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 font-mono focus:outline-none focus:border-emerald-500 transition-colors duration-200"
              />
            </div>

           
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                Message
                <span className="ml-2 normal-case text-zinc-600">
                  (Enter to send · Shift+Enter for new line)
                </span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Hi Maron, I'd like to work with you..."
                onKeyDown={handleKeyDown}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 font-mono focus:outline-none focus:border-emerald-500 transition-colors duration-200 resize-none"
              />
            </div>

            
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-full bg-emerald-500 text-zinc-950 font-mono text-sm font-medium hover:bg-emerald-400 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <div className="text-center py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <p className="text-emerald-400 text-sm font-mono">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="text-center py-3 px-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <p className="text-red-400 text-sm font-mono">
                  ✗ Something went wrong. Please try again.
                </p>
              </div>
            )}

          </form>
        </Fade>

        <Fade delay={0.4}>
          <div className="border-t border-zinc-800 mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono text-xs text-white/50">
              © 2025 Maron Jake Dinopol — All rights reserved
            </span>
          </div>
        </Fade>

      </div>
    </section>
  );
};

export default Contact;