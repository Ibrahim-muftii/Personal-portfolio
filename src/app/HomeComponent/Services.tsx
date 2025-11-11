import { FaShoppingCart } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import {  HiOutlineLightBulb } from "react-icons/hi2";
import { RiBugLine } from "react-icons/ri";
import { TbCloudComputing, TbTopologyStar3 } from "react-icons/tb";
import "./Home.css"

const Services = () => {
  
  const serviceCards = [
    {
      name: 'E-Commerce Solutions',
      icon: <FaShoppingCart className="group-hover:opacity-100 opacity-75 transition-all group-hover:shake-animation text-4xl outline-text"/>,
      description: 'Build high-performance online stores with secure payments, product management, and seamless UX.'
    },
    {
      name: 'SaaS Development',
      icon: <TbCloudComputing className="group-hover:opacity-100 opacity-75 transition-all group-hover:shake-animation text-4xl outline-text"/>,
      description: 'Design and develop subscription-based platforms with scalable architecture and secure authentication.'
    },
    {
      name: 'MVP Development',
      icon: <HiOutlineLightBulb className="group-hover:opacity-100 opacity-75 transition-all group-hover:shake-animation text-4xl outline-text"/>,
      description: 'Rapidly prototype and launch your startup idea with a functional, market-ready MVP.'
    },
    {
      name: 'CMS Development',
      icon: <FaDatabase className="group-hover:opacity-100 opacity-75 transition-all group-hover:shake-animation text-4xl outline-text"/>,
      description: 'Create dynamic, easy-to-manage content systems tailored to your workflow and brand identity.'
    },
    {
      name: 'Problem Solving',
      icon: <RiBugLine className="group-hover:opacity-100 opacity-75 transition-all  group-hover:shake-animation text-4xl outline-text"/>,
      description: 'Debug, optimize, and refactor complex applications to improve performance and maintainability.'
    },
    {
      name: 'Scalable Architecture',
      icon: <TbTopologyStar3 className="group-hover:opacity-100 opacity-75 transition-all  group-hover:shake-animation text-4xl outline-text"/>,
      description: 'Engineer modular, API-driven systems designed for growth, high traffic, and long-term reliability.'
    }
  ];
  
  return (
    <section className="py-14 container max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-y-2">
      <h3 className="heading-text pb-3!">My Services</h3>
      <p className="paragraph-text pb-10">I deliver modern and scalable solutions tailored to your business needs, ensuring clean architecture, performance and long-term maintainability.</p>
      <div className="flex flex-wrap">
        {
          serviceCards.map((card,index) => (
            <div key={`card-${index}-${card.name}`} className="flex-1/3 p-2">
              <div className="p-6 bg-black-subtle rounded-2xl card-border group w-[calc(100%-10px)] h-[calc(100%-10px)]">
                <div className="flex items-start gap-y-3 flex-col">
                  {card.icon}
                  <h5 className="text-xl font-semibold">{card.name}</h5>
                  <p className="text-left text-base min-h-25 max-h-25">{card.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services;