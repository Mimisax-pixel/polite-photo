import PolitePicture from "@/assets/ije4.jpg"
import Edwin from "@/assets/edwin 5.jpg"
import Esther from "@/assets/edwin-1.jpg"
import Edet from "@/assets/edet1.jpg"
import Lady from "@/assets/IMG_0196.jpg"
import useMediaQuery from "@/hooks/useMediaQuerry"
import { ClassPortfolio, SelectedPage } from "@/shared/type";
import Class from "./Class";

const classes: Array<ClassPortfolio> = [

  {
    image: PolitePicture,
    name: "Ebony",
    description: " ",
  },  


{
    name: "Fairytale",
    description: "",
    image: Edwin,
  }, 

  {
    name: "Fair people are beautiful",
    description: "",
    image: Esther,
  },
  
  {
    name: "Fresh guy",
    description: "",
    image: Edet,
  },
  
  {
    name: "Beautiful Model",
    description: "",
    image: Lady,
  }  
]


type Props = {
    setselectedPage: (value: SelectedPage) => void;
};

const Portfolio = ({setselectedPage}: Props) => {
    // const isAboveMeduimScreens = useMediaQuery ("(min-width: 1060px)");
  return <section id="Portfolio" className="mx-auto min-h-full w-5/6 py-20 text-5xl font-bold">Portfolio
   <div>
    <h1 className="basis-3/5 text-2xl font-light md:w-3/5">Take a look at these wonderful Pictures taken by Me</h1>
   </div>
   <div className="mt-10 h-[-353px] w-full overflow-x-auto overflow-y-hidden">
    <ul className=" whitespace-nowrap">
        {classes.map((item, ClassPortfolio, index) => (
           <Class
           key={`${item.name}-${index}`}
           image={item.image}
           name={item.name}
           description={item.description}
            
           />
        ))}

    </ul>

   </div>
  </section>;
};

export default Portfolio;
