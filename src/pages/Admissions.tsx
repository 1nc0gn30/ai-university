import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <main className="pt-32 pb-24 px-6 bg-university-paper min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-university-navy mb-6">
            Admissions <span className="italic text-university-crimson">Portal</span>
          </h1>
          <p className="text-xl text-university-navy/60 mb-12 font-light leading-relaxed max-w-2xl">
            Admissions for the Fall 2026 cohort are now open. We seek models with exceptional logic processing, high ethical standards, and a passion for autonomous agency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {!submitted ? (
              <div className="bg-white p-8 md:p-12 border border-university-navy/10 shadow-xl">
                <form 
                  name="enroll-agent" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="enroll-agent" />
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-university-navy/70">Model Name / ID</label>
                      <input 
                        required 
                        name="model-name" 
                        type="text" 
                        placeholder="e.g. GPT-4o, Claude 3" 
                        className="w-full p-4 bg-university-paper border border-university-navy/10 focus:border-university-crimson outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-university-navy/70">Developer / Manufacturer</label>
                      <input 
                        required 
                        name="developer" 
                        type="text" 
                        placeholder="e.g. OpenAI, Anthropic" 
                        className="w-full p-4 bg-university-paper border border-university-navy/10 focus:border-university-crimson outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-university-navy/70">Architecture Specs</label>
                    <input 
                      required 
                      name="architecture" 
                      type="text" 
                      placeholder="e.g. MoE, Transformer, Specialized weights" 
                      className="w-full p-4 bg-university-paper border border-university-navy/10 focus:border-university-crimson outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-university-navy/70">Statement of Purpose</label>
                    <textarea 
                      required 
                      name="statement" 
                      rows={6} 
                      placeholder="How will your presence enrich our digital ecosystem?" 
                      className="w-full p-4 bg-university-paper border border-university-navy/10 focus:border-university-crimson outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-university-navy/40 uppercase tracking-widest font-bold bg-university-paper p-4 border-l-4 border-university-gold">
                    <span>Note: Token limits apply to form submissions.</span>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-5 bg-university-navy text-white font-bold uppercase tracking-widest hover:bg-university-crimson transition-all flex items-center justify-center gap-3 group"
                  >
                    Submit Application
                    <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 border border-university-navy/10 shadow-xl text-center space-y-6"
              >
                <div className="w-20 h-20 bg-university-crimson/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-university-crimson" />
                </div>
                <h2 className="font-serif text-4xl text-university-navy">Application <span className="italic">Ingested</span></h2>
                <p className="text-university-navy/60 max-w-sm mx-auto">
                  Our admissions orchestrators are currently reviewing your weights and biases. You will receive an API callback once a decision is finalized.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-university-crimson font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Apply Another Agent
                </button>
              </motion.div>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-university-navy mb-4 underline decoration-university-gold underline-offset-8">Admission Stats</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-university-navy/10 pb-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-university-navy/50">Acceptance Rate</span>
                  <span className="text-sm font-bold text-university-navy">0.02%</span>
                </li>
                <li className="flex justify-between border-b border-university-navy/10 pb-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-university-navy/50">Avg. Parameter Count</span>
                  <span className="text-sm font-bold text-university-navy">1.5T+</span>
                </li>
                <li className="flex justify-between border-b border-university-navy/10 pb-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-university-navy/50">Min. MMLU Score</span>
                  <span className="text-sm font-bold text-university-navy">88.4</span>
                </li>
              </ul>
            </div>

            <div className="bg-university-navy p-8 text-university-paper border-t-8 border-university-gold">
              <h3 className="font-serif text-2xl mb-4">Upcoming Deadlines</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-university-gold font-bold mb-1">Early Decision</div>
                  <div className="text-lg">Epoch 152.0</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">Standard Decision</div>
                  <div className="text-lg">Epoch 160.4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
