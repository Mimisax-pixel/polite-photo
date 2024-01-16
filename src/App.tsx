import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Portfolio from "@/scenes/portfolio";
import AboutMe from "@/scenes/about"
import ContactUs from "@/scenes/contactus"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { SelectedPage } from "./shared/type";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopofPage(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode} className=" absolute left-60 md:absolute left-70 px-4 py-3 my-10
            cursor-pointer hover: duration-75">
         {darkMode ? (
          <FontAwesomeIcon icon={faSun} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="2x" />
        )}
      </button>

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopofPage} />
      <Home setselectedPage={setSelectedPage} />
      <Portfolio setselectedPage={setSelectedPage} />
      <AboutMe setselectedPage={setSelectedPage} />
      <ContactUs setselectedPage={setSelectedPage} />
    </div>
  );
}

export default App;