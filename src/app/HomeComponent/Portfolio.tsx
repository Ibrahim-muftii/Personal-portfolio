"use client"

import { useState } from "react"
import { HiOutlineExternalLink } from "react-icons/hi";


type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Scribia | AI-Powered Productivity Suite",
    category: "Web Development | AI | Gesture Authentication",
    description: "Scribia is an AI-powered productivity platform that helps users summarize videos, convert code, and use gesture-based authentication with ease. Built with Next.js, it delivers fast performance, a clean interface, and a smooth user experience. The app simplifies complex workflows into practical, everyday tools for creators and developers. Explore the full project",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    id: 2,
    title: "ColdCraft | AI Powered Cold Email Personalizer",
    category: "Productivity | AI | SaaS",
    description: "ColdCraft is a Micro-SaaS platform that generates personalized cold emails using dynamic placeholders and AI-driven optimization. Built with the MERN stack, it features secure cookie-based authentication, campaign management, and lead handling through an intuitive, modal-based workflow. Users can create campaigns, upload leads, and send targeted emails seamlessly all in one streamlined dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 3,
    title: "Keystation | AI-Powered Workflow Assistant",
    category: "Agent Calling | AI | API | SaaS",
    description: "Keystation is an AI-powered assistant designed to make everyday tasks faster and smarter. It understands natural language, generates intelligent responses, and helps with research, reminders, content creation, and workflow management. Built with advanced algorithms, it adapts to user preferences, learns over time, and provides context-aware suggestions. With Keystation, productivity is enhanced, decision-making is simplified, and users can focus on what truly matters.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  }
];

const PortfolioCard = ({ project, index }: { project: Project, index: number }) => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [btnClick, setBtnClick] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (btnClick) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const spotlightSize = 180;

  return (
    <article className="w-full p-4 h-96 card-border rounded-2xl relative group">
      <div className="absolute p-4 inset-0 bg-[#262626] flex flex-col md:flex-row overflow-hidden rounded-2xl">
        <div
          className={`absolute inset-0 rounded-3xl md:relative md:w-1/3 h-full bg-cover bg-center transition-all duration-1000 ease-out transform ${btnClick ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        </div>

        <div className={`relative z-10 w-full md:w-3/5 p-8 flex flex-col justify-center text-left transition-all duration-1000 delay-300 ease-out transform ${btnClick ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <h4 className="text-3xl font-bold mb-4 text-transparent grad-text">
            {project.title}
          </h4>
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>
          <span className="text-sm text-purple-400 font-semibold tracking-wider uppercase">{project.category}</span>
        </div>
        <div
          onClick={() => console.log(`Button ${index}`)}
          className={`absolute group cursor-pointer p-2 text-purple-600/50 hover:text-purple-600/100 border border-purple-600 top-6 right-6 rounded-full transition-all duration-500 ${btnClick ? 'opacity-100 z-50' : 'opacity-0 z-0'}`}
        >
          <HiOutlineExternalLink className="text-2xl stroke-purple-600/50 group-hover:stroke-purple-600/100 " />
        </div>
      </div>

      <div
        className={`absolute inset-0 w-full h-full transition-colors duration-700 ease-in-out ${btnClick ? 'bg-transparent pointer-events-none' : 'bg-black rounded-2xl overflow-hidden'}`}
        onMouseMove={handleMove}
        onMouseEnter={handleMove}
        onMouseLeave={() => setPos({ x: -1000, y: -1000 })}
      >
        <div
          className={`pointer-events-none absolute w-44 h-44 rounded-full bg-purple-500 blur-[72px] opacity-40 transition-opacity duration-500 z-20 ${btnClick ? 'opacity-0' : ''}`}
          style={{
            transform: `translate(${pos.x - 88}px, ${pos.y - 88}px)`,
          }}
        />
        <div
          className="absolute inset-0 z-30"
          style={{
            maskImage: btnClick ? 'none' : `radial-gradient(
              ${spotlightSize}px at ${pos.x}px ${pos.y}px,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0) 60%
            )`,
            WebkitMaskImage: btnClick ? 'none' : `radial-gradient(
              ${spotlightSize}px at ${pos.x}px ${pos.y}px,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0) 60%
            )`,
            transition: "mask-image 0.3s ease-out, -webkit-mask-image 0.3s ease-out",
          }}
        >
          <div className={`absolute transition-all duration-1000 ease-in-out flex items-center justify-center ${btnClick ? 'top-6 right-6 z-50 opacity-0 w-40 h-[30px] translate-x-0 translate-y-0' : 'inset-0 w-full h-full opacity-100'}`}>
            <div
              onClick={() => {
                setBtnClick((prev) => !prev);
              }}
              className={`flex cursor-pointer text-purple-600 border-purple-600 border-2 rounded-full justify-center items-center transition-all duration-1000 ease-in-out bg-black/50 backdrop-blur-md ${btnClick ? 'w-40 h-[30px] border-opacity-50' : 'w-40 h-40 hover:scale-110'}`}
            >
              <button

                className={`btn font-bold transition-all duration-500 ${btnClick ? 'text-xs uppercase tracking-widest' : 'animate-pulse text-base'}`}
              >
                {btnClick ? 'Close' : 'Click to Reveal'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article >
  );
};

const Portfolios = () => {
  return (
    <section className="py-14 container max-w-6xl mx-auto flex flex-col justify-center  items-center text-center gap-y-2">
      <h3 className="heading-text pb-3!">My Portfolio</h3>
      <p className="paragraph-text pb-10">
        From concept to deployment, I bring your vision to life with modern design {" "}
        <span className="text-purple-600">Hover on the card to find the <strong>reveal button</strong>{" "}</span>
        and flawless execution. Here are some of my working
      </p>
      <div className="flex flex-col gap-12 w-full px-4">
        {projects.map((project, index) => (
          <PortfolioCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}



export default Portfolios;

