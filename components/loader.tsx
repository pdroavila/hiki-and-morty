import Image from "next/image";

const Loader = () => {
  return (
    <div className="absolute flex justify-center items-center  top-0 right-0 left-0 bottom-0">
      <Image src={"/../public/images/loading.gif"} alt={"loading"} width={300} height={300} priority className="image" />
    </div>
  );
};

export default Loader;
