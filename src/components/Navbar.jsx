import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/LQ.png'
import { Link } from 'react-scroll'
import Pdf from '../assets/CV LACHET Quentin.pdf';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const flagemojiToPNG = (flag) => {
    return (<img className="flex" src={`https://flagcdn.com/24x18/${flag}.png`} alt='flag' />)
  }

  const options = [
    { value: 'fr', label: 'Français', flag: 'fr' },
    { value: 'en', label: 'English', flag: 'us' },
  ]

  const [t, i18n] = useTranslation();

  const changebySelectedLanguage = (e) => {
    i18n.changeLanguage(e.value);
  };

  const getLanguage = () => i18next.language;

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
          <Link to="home" smooth={true} duration={500}>{t('navbar.home')}</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="about" smooth={true} duration={500}>{t('navbar.about')}</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="skills" smooth={true} duration={500}>{t('navbar.skills')}</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <Link to="projects" smooth={true} duration={500}>{t('navbar.projects')}</Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 duration-250">
          <a href={Pdf} target="_blank" rel="noreferrer">{t('navbar.resume')}</a>
        </li>
        <li>
          <Select
          options={options} 
          defaultValue={
            options.filter(option =>
              option.value === getLanguage())
          } 
          onChange={changebySelectedLanguage} 
          formatOptionLabel={option => (
            <>
            <div className='flex'>   
                  {flagemojiToPNG(option.flag)}
                  <span className='ml-2'>{option.label}</span>
            </div>
            </>
            )} 
          />
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
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>{t('navbar.home')}</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>{t('navbar.about')}</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>{t('navbar.skills')}</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>{t('navbar.projects')}</Link></li>
        <li className="py-6 text-4xl"><a onClick={handleClick} href={Pdf} target="_blank" rel="noreferrer">{t('navbar.resume')}</a></li>
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
            <a href={Pdf} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300">{t('navbar.resume')}</a>
            <BsFillPersonLinesFill size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar