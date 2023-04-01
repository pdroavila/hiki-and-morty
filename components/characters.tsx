import Image from "next/image";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "./loader";

const Characters = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setLoaded] = useState<any>(false);
  const [data, setData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then(
          (result) => {
            setLoaded(true);
            setData(result);
          },
          (error) => {
            setLoaded(true);
            setError(error);
          }
        );
    }, 500);
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!isLoaded) return <Loader />;

  return (
    <div className="w-full justify-center flex">
      <div className="w-[80vw] flex flex-wrap justify-center gap-1 h-[100vh] items-center tall:content-center mt-28 tall:mt-0 wrapper">
        {data.results.map((personagem: any) => (
          <div key={personagem.id} className="shadow-md container-image" onClick={(e) => router.push(`/character/${personagem.id}`)}>
            <Image src={personagem.image} width={200} height={200} alt={personagem.name} className="image"></Image>
            <div className="overlay absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 ease-out duration-500 bg-zinc-900 flex items-center justify-center font-bold text-white flex-col">
              <p>{personagem.name}</p>
              {personagem.status == "Alive" ? <p className="bg-green-900 p-1 rounded">Vivo</p> : <p className="bg-red-900 p-1 rounded">Morto</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
