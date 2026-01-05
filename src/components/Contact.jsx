// Contact.jsx — FIXED EmailJS + dark + framed + glass style
// Receiver email: farjanajhn12@gmail.com

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setStatus("sending");

      const result = await emailjs.sendForm(
        "service_bnz4abr",
        "template_gov2hhi",
        form.current,
        "eWJVylKLCzGa6yoo1"
      );

      console.log("EmailJS success:", result.text);

      setStatus("success");
      setToast("Message sent successfully!");
      form.current.reset();

      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error("EmailJS error:", error?.text || error);

      setStatus("error");
      setToast(error?.text || "Failed to send message. Please try again.");

      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder:text-white/40 outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/20";
  const labelBase = "text-xs uppercase tracking-widest text-white/60";

  return (
    <section
      id="message"
      className="relative min-h-screen overflow-hidden bg-[#0b0f14]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-emerald-900/10" />

      {/* Frame */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-6 rounded-[28px] border-0 md:border md:border-white/15 md:inset-10 lg:inset-12" />

        {/* Center */}
        <div className="relative flex min-h-screen items-center justify-center py-24">
          <div className="w-full max-w-5xl">
            {/* Header */}
            <div className="text-center md:text-left">
              <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                Let’s build something{" "}
                <span className="text-emerald-300">amazing</span>
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Send a message about a job opportunity, project, internship, or collaboration.
              </p>
            </div>

            {/* Card */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl sm:p-8 md:p-10">
              {/* Toast */}
              {toast && (
                <div className="mb-6 rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    {status === "success" ? (
                      <FaCheckCircle className="text-emerald-300" />
                    ) : status === "error" ? (
                      <FaExclamationTriangle className="text-red-300" />
                    ) : (
                      <FaPaperPlane className="text-white/70" />
                    )}
                    {toast}
                  </div>
                </div>
              )}

              {/* ✅ FIXED FIELD NAMES */}
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelBase}>Name</label>
                    <input
                      className={inputBase}
                      type="text"
                      name="from_name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={labelBase}>Phone</label>
                    <input
                      className={inputBase}
                      type="text"
                      name="phone"
                      placeholder="+46 …"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={labelBase}>Email</label>
                    <input
                      className={inputBase}
                      type="email"
                      name="reply_to"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={labelBase}>Subject</label>
                    <input
                      className={inputBase}
                      type="text"
                      name="subject"
                      placeholder="What’s this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className={labelBase}>Message</label>
                    <textarea
                      className={`${inputBase} min-h-[160px]`}
                      name="message"
                      placeholder="Tell me about your idea…"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full rounded-xl px-6 py-3 font-semibold transition ${
                    status === "sending"
                      ? "bg-white/10 text-white/60"
                      : "bg-emerald-400 text-black hover:bg-emerald-300"
                  }`}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
