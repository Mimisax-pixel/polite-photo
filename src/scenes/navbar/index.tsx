import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "./link"
import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuerry";

type Props =
 {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-end";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMeduimScreens = useMediaQuery ("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-yellow-500 drop-shadow";
  
  return  <nav>
    <div className={`${navbarBackground} {flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className= {`${flexBetween} mx-auto w-5/6`}>
        <div className= {`${flexBetween} w-full gap-16`}>
          <h2>PolitePhotography</h2>

             {isAboveMeduimScreens ? ( <div className= {`${flexBetween} w-full`}>
             <div className= {`${flexBetween} gap-8 text-sm`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Portfolio" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="About Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> 

            </div>
          </div>
          )  : (
            <button className="rounded-full bg-red-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              
             <Bars3Icon className="h-6 w-6 text-white"/>
              
            </button>
                         )}
        </div>
        
      </div>


    </div>

    {/* MOBILE MENU */}

    {!isAboveMeduimScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-30 h-full w-[300px] bg-yellow-500 drop-shadow-xl">

        {/*CLOSE ICON */}

        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-red-500" />

          </button>
        </div>

        {/*MENU ITEM */}
        <div className="ml -[33%] flex flex-col gap-10 text-2xl">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Portfolio" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="About Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> 

            </div>

      </div>
    )}


  </nav>;
  
};

export default Navbar;