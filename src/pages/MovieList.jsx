import { CardMovie } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
export const MovieList = ({ apiPath, title }) => {
  useEffect(() => {
    document.title = `FakeFlix/${title}`;
  }, [title]);
  const { data: movies } = useFetch(apiPath);
  return (
    <main>
      <section className=" max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies?.map((movies) => (
            <CardMovie key={movies.id} movies={movies} />
          ))}
        </div>
      </section>
    </main>
  );
};
