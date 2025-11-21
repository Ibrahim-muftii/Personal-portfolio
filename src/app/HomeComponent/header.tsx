import "./Home.css"
import { RiInstagramFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import TechOrbit from "./TechOribital";

const HomeHeader = () => {
  return (
    <div className="py-14 container max-w-6xl mx-auto flex flex-row items-center text-left gap-y-2">
      <div className="w-1/2">
        <p className="opacity-70 mb-2">Hi&apos; There I&apos;m</p>
        <h3 className="text-2xl font-bold mb-2 opacity-80"> Muhammad Ibrahim Mufti</h3>
        <h1 className="text-5xl grad-text mb-4 font-bold"> Full Stack Developer</h1>
        <div className="flex mb-4 flex-row gap-x-4 justify-start">
          <div className="p-3 rounded-full bg-black-subtle group hover:border border-purple-600 transition-all">
            <a target="_blank" href="https://www.instagram.com/ibrahim_muftii?igsh=MTRrcDJqY21iMTJqcA%3D%3D&utm_source=qr">
              <RiInstagramFill className="text-3xl fill-white/50 group-hover:fill-purple-600 transition-all" />
            </a>
          </div>
          <div className="p-3 rounded-full bg-black-subtle group hover:border border-purple-600 transition-all">
            <a target="_blank" href="https://github.com/Ibrahim-muftii">
              <SiGithub className="text-3xl fill-white/50 group-hover:fill-purple-600 transition-all" />
            </a>
          </div>
          <div className="p-3 rounded-full bg-black-subtle group hover:border border-purple-600 transition-all">
            <a target="_blank" href="https://www.linkedin.com/in/ibrahim-mufti-243218284/">
              <RiLinkedinFill className="text-3xl fill-white/50 group-hover:fill-purple-600 transition-all" />
            </a>
          </div>
          <div className="p-3 rounded-full bg-black-subtle group hover:border border-purple-600 transition-all">
            <a target="_blank" href="https://www.instagram.com/ibrahim_muftii?igsh=MTRrcDJqY21iMTJqcA%3D%3D&utm_source=qr">
              <BsFacebook className="text-3xl fill-white/50 group-hover:fill-purple-600 transition-all" />
            </a>
          </div>
        </div>
        <div className="flex flex-row mb-4 gap-x-2">
          <button className="bg-purple-500 hover:bg-purple-600 border-2 border-purple-800 px-16 py-2 rounded-lg transition-all duration-500 ease-linear uppercase font-semibold tracking-wider" >Hire me</button>
          <button className="border-2 border-white/50 text-white/50 px-16 py-2 rounded-lg transition-all duration-500 ease-linear uppercase font-semibold tracking-wider hover:text-white/100 hover:border-white/100">Download CV</button>
        </div>
        <div className="flex flex-row justify-content-between gap-x-4">
          <div className="bg-black-subtle p-5 flex flex-col flex-1 rounded-lg group border-2 border-transparent hover:border hover:border-purple-600 transition-all duration-700">
            <span className="text-2xl mb-4 font-bold outline-text tracking-wider"> 2+ </span>
            <h5 className="text-white/65 " >Experience</h5>
          </div>
          <div className="bg-black-subtle p-5 flex flex-col flex-1 rounded-lg group border-2 border-transparent hover:border hover:border-purple-600 transition-all duration-700">
            <span className="text-2xl mb-4 font-bold outline-text tracking-wider"> 15+ </span>
            <h5 className="text-white/65 " >Projects Done</h5>
          </div>
          <div className="bg-black-subtle p-5 flex flex-col flex-1 rounded-lg group border-2 border-transparent hover:border hover:border-purple-600 transition-all duration-700">
            <span className="text-2xl mb-4 font-bold outline-text tracking-wider"> 6+ </span>
            <h5 className="text-white/65 ">Total Clients</h5>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <TechOrbit />
      </div>
    </div>
  )
}

export default HomeHeader;