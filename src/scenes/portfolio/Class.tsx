

type Props = {
    name: string;
    description?: string;
    image: string;
};

const Class = ({name, description, image}: Props) => {
  return (<li className="relative mx-3 inline-block h-[380px] w-[450px]">

  <div className=" m-5 p-5 text-2xl font-light">
  <img alt={`${image}`} src={image} className="h-96 w-96 object-fit shadow-xl shadow-yellow-200" />
    <h3>{name}</h3>
    <h3>{description}</h3>
  </div>
  </li>
  );
};

export default Class;
