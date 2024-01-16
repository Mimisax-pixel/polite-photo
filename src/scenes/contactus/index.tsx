
import { SelectedPage } from "@/shared/type";



type Props = {
    setselectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({setselectedPage}: Props) => {
  return  (
    <div id="Contact" className="w-full h-screen bg-yellow-500 p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pt-10">
          <p className="text-5xl md:text-4xl font-bold border-white">Let's connect <span role="img" aria-label="love">🫶</span></p>
          <p className="py-6 text-white">Send Me a Message</p>
        </div>
        <div className="flex justify-center items-center ">
          <form action="https://getform.io/f/572e5bf3-fb0e-4de6-bfa6-d94106b9b17a" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type=""
              name="name"
              placeholder="Enter Your Name Here"
              className="p-2  border-4
                rounded-md text-red-500 focus:outline-none"
                
            />

            <input
              type=""
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-2  border-4
                rounded-md text-red-500 focus:outline-none"
            />

            <textarea
              name="Message"
              placeholder="Write your Message"
              className="p-2 border-4 rounded-md text-red-500 focus:outline-none"
            />

            <button className="text-red-500 font-semibold bg-white px-6 py-3 my-8 mx-auto flex items-center rounded-md
            hover:scale-110 duration-300">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;
