import React, { useState } from "react";

/* ================= HERO ================= */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
        AI Solutions That <br /> Scale Your Business
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Transform your operations with AI consulting, automation, and
        data-driven strategies.
      </p>
      <a
        href="#ai-recommender"
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold hover:scale-105 transition"
      >
        Get My Recommendation
      </a>
    </div>
  </section>
);

/* ================= SERVICES ================= */
const ServicesSection = () => {
  const services = [
    { icon: "🎯", title: "AI Consulting", desc: "Strategic AI roadmaps aligned with business goals." },
    { icon: "⚡", title: "AI Automation", desc: "Reduce manual work and increase efficiency." },
    { icon: "🚀", title: "Custom AI Development", desc: "Tailored AI systems for unique needs." },
    { icon: "📊", title: "Data & Analytics", desc: "Turn data into actionable insights." },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400">End-to-end AI solutions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-purple-500/20">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================= WHY US ================= */
const WhyChooseUsSection = () => (
  <section className="py-24 bg-slate-900">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-gray-400">We build results, not just AI</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
      {[
        ["⚡", "Fast Delivery", "Launch AI solutions in weeks"],
        ["🎓", "Expert Team", "Deep AI + business expertise"],
        ["📈", "Proven ROI", "3–5x ROI within first year"],
        ["🤝", "Long-Term Partner", "We scale with your business"],
      ].map(([icon, title, desc], i) => (
        <div key={i} className="bg-slate-800/40 p-8 rounded-2xl border border-purple-500/20">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ================= PROCESS ================= */
const ProcessSection = () => (
  <section className="py-24 bg-slate-950">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">Our Process</h2>
      <p className="text-gray-400">Simple 3-step framework</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      {[
        ["01", "Discover", "Understand business & AI opportunities"],
        ["02", "Build", "Design and deploy AI solutions"],
        ["03", "Scale", "Optimize and expand systems"],
      ].map(([step, title, desc], i) => (
        <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-purple-500/20">
          <span className="text-purple-400 font-bold">{step}</span>
          <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ================= TESTIMONIALS ================= */
const TestimonialsSection = () => (
  <section className="py-24 bg-slate-900">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">Client Success Stories</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      {[
        ["Reduced costs by 65%.", "Sarah Chen", "CTO"],
        ["Response time dropped to seconds.", "Michael R.", "VP Ops"],
        ["Fully data-driven decisions.", "Emily T.", "CDO"],
      ].map(([quote, name, role], i) => (
        <div key={i} className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20">
          <p className="italic text-gray-300 mb-6">“{quote}”</p>
          <p className="font-bold">{name}</p>
          <p className="text-purple-400">{role}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ================= AI RECOMMENDER ================= */
const AIRecommender = () => {
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState("");

  const data = {
    "Startup-Automation": "AI workflow automation to save time and reduce costs.",
    "Startup-Growth": "AI marketing and analytics to scale faster.",
    "Startup-Cost Reduction": "Smart automation to minimize expenses.",
    "SME-Automation": "Department-wide AI automation.",
    "SME-Growth": "Predictive analytics and customer insights.",
    "SME-Cost Reduction": "Operational efficiency AI systems.",
    "Enterprise-Automation": "Enterprise-scale AI automation.",
    "Enterprise-Growth": "Advanced AI models for expansion.",
    "Enterprise-Cost Reduction": "AI-driven cost intelligence platform.",
  };

  const recommend = () => {
    setResult(data[`${business}-${goal}`]);
  };

  return (
    <section id="ai-recommender" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Find Your Perfect <span className="text-purple-400">AI Solution</span>
          </h2>
          <p className="text-gray-400">
            Answer two questions to get a recommendation
          </p>
        </div>

        <div className="bg-slate-900/60 p-8 rounded-2xl border border-purple-500/20 space-y-8">
          <div>
            <p className="mb-3 font-semibold">Business Type</p>
            <div className="grid md:grid-cols-3 gap-4">
              {["Startup", "SME", "Enterprise"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBusiness(b)}
                  className={`p-4 rounded-xl border ${
                    business === b
                      ? "border-purple-500 bg-purple-500/20"
                      : "border-slate-700"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-semibold">Primary Goal</p>
            <div className="grid md:grid-cols-3 gap-4">
              {["Automation", "Growth", "Cost Reduction"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`p-4 rounded-xl border ${
                    goal === g
                      ? "border-purple-500 bg-purple-500/20"
                      : "border-slate-700"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={recommend}
            disabled={!business || !goal}
            className={`w-full py-4 rounded-full font-semibold ${
              business && goal
                ? "bg-purple-600 hover:bg-purple-500"
                : "bg-slate-700 cursor-not-allowed"
            }`}
          >
            Get My Recommendation
          </button>

          {result && (
            <div className="bg-slate-800 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                Recommended Solution
              </h3>
              <p className="text-gray-300">{result}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ================= CONTACT ================= */


const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ stop page refresh
    setSent(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // hide success message after 3 seconds
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400">Start your AI journey today</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto px-6 space-y-4"
      >
        {sent && (
          <p className="text-green-400 text-center font-semibold">
            ✅ Message sent successfully!
          </p>
        )}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full p-3 rounded text-black"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-3 rounded text-black"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows="4"
          className="w-full p-3 rounded text-black"
        />

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 rounded text-white hover:bg-purple-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};




/* ================= FOOTER ================= */
const Footer = () => (
  <footer className="py-8 text-center text-gray-400 bg-slate-950 border-t border-purple-500/20">
    © 2026 AI Consulting Services. All rights reserved.
  </footer>
);

/* ================= MAIN APP ================= */
export default function App() {
  return (
    <div className="bg-slate-950 text-white">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <AIRecommender />
      <ContactSection />
      <Footer />
    </div>
  );
}
