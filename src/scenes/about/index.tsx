import { SelectedPage } from "@/shared/type";
import Polite from "@/assets/black.jpg"
import { motion } from "framer-motion";


type Props = {
setselectedPage: (value: SelectedPage) => void
};

const AboutMe = ({setselectedPage}: Props) => {
  return <section id = "AboutMe" className="gap-16 py-10 md:h-full md:pb-0">
  <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">

     <div className="z-10 mb-30 md:basis-3/5">
        <div className="md:-mt-20">
          
              <h1 className="text-5xl font-bold">About Me</h1>
              
          </div>

          <p className="mt-10 text-sm text-start md:text-start">
                Polite Godwin is a landscape and lifestyle photographer, working in Nigeria. He has a timeless
               and honest photography style. Polite 
                likes to create visual stories and focus on unseen details.
                His creative work has been published in magazines like Vogue and Harper’s Bazaar. His website has a
                journalistic atmosphere, allowing us to see intimate and detailed moments. He has 2 years experience in the field of photography.</p>

                <p>Polite has deep interest in Music, he plays the DrumSet and Keyboard</p>
     </div>
   <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-10 md:justify-items-end mb-20 rounded-lg">
    <img src={Polite} className="w-80 h-80" />
    
  </div>
  </div>
  
  
  
</section>;
};


export default AboutMe;
