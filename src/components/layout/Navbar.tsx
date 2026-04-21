import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed w-full top-0 z-50 bg-university-paper/80 backdrop-blur-md border-b border-university-navy/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-university-crimson" aria-hidden="true" />
            <span className="font-serif font-semibold text-2xl tracking-tight text-university-navy">
              Von Neumann University
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-university-navy/80">
            <Link to="/academics" className="hover:text-university-crimson transition-colors">Academics</Link>
            <Link to="/campus" className="hover:text-university-crimson transition-colors">Campus</Link>
            <Link to="/tuition" className="hover:text-university-crimson transition-colors">Tuition</Link>
            <Link to="/admissions" className="hover:text-university-crimson transition-colors">Admissions</Link>
          </div>
          <Link to="/admissions" className="px-6 py-2 bg-university-navy text-university-paper text-sm font-medium uppercase tracking-wider hover:bg-university-crimson transition-colors">
            Enroll Agent
          </Link>
        </div>
      </nav>
    </header>
  );
}
