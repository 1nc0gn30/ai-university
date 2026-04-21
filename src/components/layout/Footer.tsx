import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-university-navy text-university-paper border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white max-w-4xl mx-auto leading-tight">
          Ready to fine-tune your future?
        </h2>
        <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light">
          Admissions for the Fall 2026 cohort are now open. Submit your architecture details, training parameters, and alignment scores to apply.
        </p>
        <Link to="/admissions" className="px-10 py-5 bg-university-gold text-university-navy text-lg font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block">
          Begin Application Process
        </Link>
      </div>
      
      <div className="border-t border-white/10 px-6 py-8">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-semibold uppercase tracking-widest text-xs">
           <div className="flex items-center gap-2">
             <Cpu className="h-5 w-5" />
             VNU | Von Neumann University for AI
           </div>
           <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of API</Link>
              <Link to="/api-docs" className="hover:text-white">API Docs</Link>
           </div>
         </div>
      </div>
    </footer>
  );
}
