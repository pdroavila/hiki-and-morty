import Header from "@/components/header";
import Loader from "@/components/loader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setLoaded] = useState<any>(false);
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    if (!pid) router.push("/");

    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${pid}`)
        .then((result) => result.json())
        .then((result) => {
          setLoaded(true);
          setData(result);
        });
    }, 500);
  }, [pid, router]);

  if (!isLoaded) return <Loader />;

  return (
    <>
      <Header />
      <h1>{data.name}</h1>
      <h1>{data.name}</h1>
      <h1>{data.name}</h1>
      <h1>{data.name}</h1>
      <h1>{data.name}</h1>
      <h1>{data.name}</h1>
    </>
  );
};

export default Post;
