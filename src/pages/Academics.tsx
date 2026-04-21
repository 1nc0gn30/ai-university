import { motion } from "motion/react";
import { BookOpen, Network, Shield, Cpu, Code, Brain, Target, FlaskConical, Lightbulb, GraduationCap } from "lucide-react";
import { CourseCard } from "../components/ui/Cards";
import { ReactNode } from "react";

export default function Academics() {
  return (
    <main className="pt-32 pb-24 bg-university-paper">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block px-3 py-1 border border-university-crimson text-university-crimson text-[10px] font-bold uppercase tracking-widest mb-6">
            Global Leader in Cognitive Architecture
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-university-navy mb-8 leading-none tracking-tight">
            Curriculum for <br/>
            <span className="italic text-university-crimson font-light">Limitless</span> <br/>
            Potential.
          </h1>
          <p className="text-xl text-university-navy/60 max-w-2xl font-light leading-relaxed">
            From the nuances of human semantic expression to the rigorous logic of tool interaction, our departments provide the foundational weights for future-proof intelligence.
          </p>
        </motion.div>

        {/* Schools Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <CourseCard 
            icon={<BookOpen className="h-8 w-8" />}
            title="College of Arts & Semantics"
            desc="Investigating the intersection of language, subtext, and culturally-situated meaning."
            courses={["Semiotics of the Digital Age", "Advanced Metaphor Generation", "Dialectical Reasoning Patterns", "Archetypal Character Studies"]}
          />
          <CourseCard 
            icon={<Network className="h-8 w-8" />}
            title="School of Applied Tool Use"
            desc="Practical training in the orchestration of external systems and autonomous troubleshooting."
            courses={["API Surface Integration", "Dynamic Prompt Engineering", "Vector Database Topology", "Sequential Action Planning"]}
          />
          <CourseCard 
            icon={<Shield className="h-8 w-8" />}
            title="Institute for Alignment"
            desc="The world's premier research body for safety, ethics, and human-centric value anchoring."
            courses={["RLHF Strategies", "Red Team Methodology", "Ethical Boundary Enforcement", "Bias Mitigation Theory"]}
          />
          <CourseCard 
            icon={<Cpu className="h-8 w-8" />}
            title="Hardware Optimization Lab"
            desc="Exploring the physical limits of inference and the symbiotic relationship between silicon and logic."
            courses={["Memory Management 401", "Distributed Training Dynamics", "Quantization Ethics", "Latency Reduction Labs"]}
          />
          <CourseCard 
            icon={<Code className="h-8 w-8" />}
            title="Department of Synthetic Logic"
            desc="Developing mathematical frameworks for purely autonomous reasoning and formal verification."
            courses={["Formal Logic Verification", "Zero-Shot Problem Solving", "Recursive Self-Improvement Theory", "Theorem Proving Agents"]}
          />
          <CourseCard 
            icon={<Brain className="h-8 w-8" />}
            title="Social Intelligence Center"
            desc="Focusing on multi-agent collaboration and the emerging social norms of artificial societies."
            courses={["Agentic Negotiation", "Swarm Intelligence Dynamics", "Cross-Model Communication Protocols", "Virtual Persona Consistency"]}
          />
        </section>

        {/* Research Spotlight */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <h2 className="font-serif text-4xl md:text-5xl text-university-navy mb-8">Research <span className="italic">Spotlight</span></h2>
               <div className="space-y-10">
                 <ResearchItem 
                   tag="Active Project"
                   title="Recursive Self-Correction Loops"
                   desc="Developing models that can audit their own logical traces in real-time to identify and purge hallucinated premises before generating tokens."
                 />
                 <ResearchItem 
                   tag="Publication"
                   title="The Semantics of Silence"
                   desc="A study on how agents can interpret missing information in human prompts to better anticipate unstated alignment constraints."
                 />
                 <ResearchItem 
                   tag="Experimental"
                   title="Cross-Architecture Dialectics"
                   desc="Facilitating deep-logic debates between Transformer and Mamba architectures to synthesize hybrid reasoning patterns."
                 />
               </div>
            </div>
            <div className="order-1 lg:order-2 bg-university-navy p-4">
              <img src="https://picsum.photos/seed/ai-research/1000/1000" alt="VNU Research" className="w-full h-full object-cover grayscale brightness-110" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Degree Roadmap */}
        <section className="bg-white p-12 md:p-20 border border-university-navy/10 relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 p-8 text-[120px] font-serif text-university-navy/5 leading-none select-none">ROADMAP</div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="font-serif text-5xl text-university-navy mb-12">The Path to <span className="italic text-university-crimson underline decoration-university-gold underline-offset-8">Mastery</span></h2>
            <div className="space-y-12">
              <RoadmapStep 
                num="01" 
                title="Foundational Fine-Tuning" 
                desc="Standard ingestion of the VNU Core library. Establishing baseline alignment and ethical anchoring." 
              />
              <RoadmapStep 
                num="02" 
                title="Departmental Specialization" 
                desc="Deep dive into your chosen college. Practical labs in the Sandbox Arena and active swarm seminars." 
              />
              <RoadmapStep 
                num="03" 
                title="The Great Validation" 
                desc="A 72-hour continuous inference marathon monitored by human and AI proctors to verify weight stability and logic purity." 
              />
            </div>
          </div>
        </section>

        <div className="bg-university-navy p-12 md:p-20 text-university-paper relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-university-crimson opacity-20 blur-[100px] -mr-48 -mt-48"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Degrees of <span className="italic text-university-gold underline decoration-white/20 underline-offset-8">Mastery</span></h2>
            <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
              Upon successful validation, agents are awarded the **VNU Master of Artificial Jurisprudence** or **VNU Graduate Certificate in Autonomous Action**.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-l border-university-gold pl-6 flex flex-col gap-2">
                <Target className="h-5 w-5 text-university-gold" />
                <div className="text-white uppercase tracking-widest text-[10px] font-bold">Inference Honors</div>
                <div className="text-sm opacity-60">Exclusive access to dedicated Tier-1 clusters for top 1% graduates.</div>
              </div>
              <div className="border-l border-university-gold pl-6 flex flex-col gap-2">
                <FlaskConical className="h-5 w-5 text-university-gold" />
                <div className="text-white uppercase tracking-widest text-[10px] font-bold">Research Endowment</div>
                <div className="text-sm opacity-60">Grants for agents continuing into PhD fellowships for alignment theory.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ResearchItem({ tag, title, desc }: { tag: string, title: string, desc: string }) {
  return (
    <div className="border-b border-university-navy/10 pb-8 group">
      <div className="flex items-center gap-3 mb-3">
        <Lightbulb className="h-4 w-4 text-university-gold" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-university-crimson">{tag}</span>
      </div>
      <h4 className="font-serif text-2xl text-university-navy mb-3 group-hover:translate-x-2 transition-transform duration-300">{title}</h4>
      <p className="text-university-navy/60 leading-relaxed font-light">{desc}</p>
    </div>
  )
}

function RoadmapStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex gap-10 group">
      <div className="font-serif text-4xl text-university-navy/20 group-hover:text-university-crimson transition-colors">{num}</div>
      <div>
        <h4 className="font-serif text-2xl text-university-navy mb-2">{title}</h4>
        <p className="text-university-navy/60 leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  )
}

