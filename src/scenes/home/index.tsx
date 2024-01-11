import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuerry";
import Miracle from "@/assets/photographer.png.jpg"
import { motion } from "framer-motion";


type Props = {
    setselectedPage: (value: SelectedPage) => void;
};

const Home = ({ setselectedPage }: Props) => {
    const isAboveMeduimScreens = useMediaQuery ("(min-width: 1060px)");
  return <section id = "Home" className="gap-16 bg-slate-100 py-10 md:h-full md:pb-0">
    <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={() => setselectedPage(SelectedPage.Home)}>

       <motion.div className="z-10 mt-32 md:basis-3/5" initial= "hidden" whileInView="visible" viewport={{once: true, amount: 0.5,}} transition={{duration: 2}} variants={{hidden:{opacity:0, x:-300}, visible:{opacity: 1, x:0}}}>
          <div className="md:-mt-20">
            
                <h1 className="text-5xl font-extrabold">Polite Photography</h1>
            </div>
  
            <p className="mt-8 text-2xl sm:text-2xl md:text-start">
                  Hello!! Welcome to my Photography World.</p>
       </motion.div>
     <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end h-96">
      <img src={Miracle} />
      
    </div>
    </motion.div>
  
    
    
    
  </section>;
};

export default Home;
