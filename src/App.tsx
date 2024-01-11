import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Portfolio from "@/scenes/portfolio";
import AboutMe from "@/scenes/about"
import ContactUs from "@/scenes/contactus"
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/type";





function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);

  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage (true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopofPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener ("scroll", handleScroll)
  }, []);
  

  return (
    <div className="app bg-gray-200">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      isTopOfPage={isTopofPage}/>
      <Home  setselectedPage={setSelectedPage}/>
      <Portfolio  setselectedPage={setSelectedPage}/>
      <AboutMe setselectedPage={setSelectedPage}/>
      <ContactUs setselectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
