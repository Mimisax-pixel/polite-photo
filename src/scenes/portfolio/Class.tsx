

type Props = {
    name: string;
    description?: string;
    image: string;
};


const Class = ({name, description, image}: Props) => {
  return (<li className="inline-block h-[400px] w-[280px]">

  <div className="text-2xl font-light">
  <img alt={`${image}`} src={image} className="h-60 w-60 object-fit shadow-xl shadow-yellow-200" />
    <h3>{name}</h3>
    <h3>{description}</h3>
  </div>
  </li>
  );
};




export default Class;
