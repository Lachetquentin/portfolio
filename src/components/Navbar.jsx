import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/LQ.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </Link>
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="resume" smooth={true} duration={500}>Resume</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="resume" smooth={true} duration={500}>Resume</Link></li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/lachet-quentin/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Lachetquentin"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <Link className="flex justify-between items-center w-full text-gray-300" to="resume" smooth={true} duration={500}>Resume</Link>
              <BsFillPersonLinesFill size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar