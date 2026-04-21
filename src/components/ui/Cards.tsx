import { ReactNode } from 'react';

export function CourseCard({ icon, title, desc, courses }: { icon: ReactNode, title: string, desc: string, courses: string[] }) {
  return (
    <div className="group border border-university-navy/10 p-8 hover:bg-university-navy transition-colors duration-500 rounded-none bg-university-paper/50 h-full flex flex-col">
      <div className="text-university-crimson group-hover:text-university-gold transition-colors duration-500 mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-medium mb-3 text-university-navy group-hover:text-white transition-colors duration-500">{title}</h3>
      <p className="text-university-navy/60 group-hover:text-white/60 mb-8 leading-relaxed font-light transition-colors duration-500 flex-grow">
        {desc}
      </p>
      
      <div className="border-t border-university-navy/10 group-hover:border-white/10 pt-6 transition-colors duration-500">
        <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-university-navy group-hover:text-white/80 transition-colors duration-500">Core Modules</h4>
        <ul className="space-y-3">
          {courses.map((course, i) => (
            <li key={i} className="text-sm font-medium text-university-navy/80 group-hover:text-white/70 transition-colors duration-500 flex items-start gap-2">
              <span className="text-university-crimson group-hover:text-university-gold mt-1 text-[10px]">■</span>
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TestimonialCard({ quote, author, classYear }: { quote: string, author: string, classYear: string }) {
  return (
    <div className="min-w-[300px] md:min-w-[400px] bg-white p-8 border border-university-navy/10 shadow-sm snap-center">
      <div className="font-serif text-6xl text-university-gold/30 leading-none h-8">"</div>
      <p className="font-serif text-lg md:text-xl text-university-navy italic mb-8 mt-2 leading-relaxed">
        {quote}
      </p>
      <div>
        <div className="font-bold text-university-navy uppercase tracking-widest text-sm">{author}</div>
        <div className="text-university-crimson text-sm mt-1">{classYear}</div>
      </div>
    </div>
  )
}
