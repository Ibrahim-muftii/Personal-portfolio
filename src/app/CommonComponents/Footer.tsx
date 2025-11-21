import Link from "next/link";
import { LuAperture } from "react-icons/lu";
import { FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-[#1d1d1d] text-white/80 py-12 mt-20">
            <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-x-2">
                        <LuAperture className="text-3xl text-purple-600" />
                        <h5 className="text-xl font-bold text-white">Next Proj</h5>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                        Crafting digital experiences with passion and precision.
                        Let's build something amazing together.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a target="_blank" href="https://www.instagram.com/ibrahim_muftii?igsh=MTRrcDJqY21iMTJqcA%3D%3D&utm_source=qr" className="text-gray-400 hover:text-purple-500 transition-colors text-xl"><FaGithub /></a>
                        <a target="_blank" href="https://github.com/Ibrahim-muftii" className="text-gray-400 hover:text-purple-500 transition-colors text-xl"><FaGithubAlt /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/ibrahim-mufti-243218284/" className="text-gray-400 hover:text-purple-500 transition-colors text-xl"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h6 className="text-lg font-semibold text-purple-500">Quick Links</h6>
                    <ul className="flex flex-col gap-2 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                        <li><Link href="/Portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
                        <li><Link href="/About" className="hover:text-purple-400 transition-colors">About</Link></li>
                        <li><Link href="/Resume" className="hover:text-purple-400 transition-colors">Resume</Link></li>
                        <li><Link href="/Contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Section 3: Email / Contact */}
                <div className="flex flex-col gap-4">
                    <h6 className="text-lg font-semibold text-purple-500">Get in Touch</h6>
                    <p className="text-sm text-gray-400">
                        Have a project in mind? Reach out to me directly.
                    </p>
                    <a
                        href="mailto:hello@example.com"
                        className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg w-fit"
                    >
                        <HiOutlineMail className="text-xl" />
                        <span>hello@example.com</span>
                    </a>
                    <p className="text-xs text-gray-500 mt-4">
                        © {new Date().getFullYear()} Next Proj. All rights reserved.
                    </p>
                </div>

            </div>
        </footer >
    );
};

export default Footer;
