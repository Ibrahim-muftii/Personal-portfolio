'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuAperture } from "react-icons/lu";

interface NavbarItemsIT {
  title: string,
  link: string,
}

const Navbar = () => {
  const location = usePathname();
  const navbarItems: NavbarItemsIT[] = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/Portfolio" },
    { title: "About", link: "/About" },
    { title: "Resume", link: "/Resume" },
    { title: "Contact", link: '/Contact' }
  ]

  return (
    <div className="sticky text-sm top-0 z-50  py-2">
      <div className="container flex max-w-5xl mx-auto bg-[#1d1d1d] rounded-4xl p-4">
        <div className="flex items-center gap-x-2 w-36">
          <LuAperture className="text-2xl text-purple-600" />
          <h5 className="text-white/65">Next Proj</h5>
        </div>
        <div className="flex justify-center items-center flex-1">
          {
            navbarItems.map((item, idx) => (
              <Link
                key={`${item.title + idx}`}
                className={`${location === item.link ? 'text-purple-600 border-b-2 rounded-b-sm transition-all' : 'text-white/65'} px-3 py-1.5`}
                href={item.link}
              > {item.title} </Link>
            ))
          }
        </div>
        <div className="flex items-center justify-center w-36">
          <button className="px-3 py-1.5 rounded-2xl bg-purple-600" >Request a demo</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;