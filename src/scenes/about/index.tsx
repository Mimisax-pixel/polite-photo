import { SelectedPage } from "@/shared/type";
import Polite from "@/assets/black.jpg"
import { motion } from "framer-motion";


type Props = {
setselectedPage: (value: SelectedPage) => void
};

const AboutMe = ({setselectedPage}: Props) => {
  return <section id = "AboutMe" className="gap-16 bg-slate-100 py-10 md:h-full md:pb-0">
  <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">

     <motion.div className="z-10 mt-32 md:basis-3/5" initial= "hidden" whileInView="visible" viewport={{once: true, amount: 0.5,}} transition={{duration: 2}} variants={{hidden:{opacity:0, x:-300}, visible:{opacity: 1, x:0}}}>
        <div className="md:-mt-20">
          
              <h1 className="text-5xl font-bold">About Me</h1>
              
          </div>

          <p className="mt-8 text-sm md:text-start">
                Polite Godwin is a landscape and lifestyle photographer, working in Nigeria. He has a timeless
               and honest photography style. Polite 
                likes to create visual stories and focus on unseen details.
                His creative work has been published in magazines like Vogue and Harper’s Bazaar. His website has a
                journalistic atmosphere, allowing us to see intimate and detailed moments. He has 2 years experi
                ience in the field of photography.</p>
     </motion.div>
   <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
    <img src={Polite} className="w-80 h-80 rounded-lg object-fit" />
    
  </div>
  </div>
  
  
  
</section>;
};


export default AboutMe;
