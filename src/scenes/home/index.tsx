import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuerry";
import Miracle from "@/assets/ij5.jpg"
import { motion } from "framer-motion";


type Props = {
    setselectedPage: (value: SelectedPage) => void;
};

const Home = ({ setselectedPage }: Props) => {
    const isAboveMeduimScreens = useMediaQuery ("(min-width: 1060px)");

    return <section id = "AboutMe" className="gap-16 py-10 md:h-full md:pb-0">
  <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">

     <div className="z-10 mt-32 md:basis-3/5" >
        <div className="md:-mt-20">
          
        
              
          </div>

          <h1 className="mt-8 text-2xl text-start md:text-start md:text-7xl font-bold">
                World of Polite Photography <span role="img" aria-label="love">❤️</span></h1>
     </div>
   <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
    <img src={Miracle} className=" h-80 object-fit" />
    
  </div>
  </div>
  
  
  
</section>;
  
};

export default Home;
