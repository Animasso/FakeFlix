import { useFetch } from "../hooks/useFetch";
import { CardMovie } from "../components";
import { useSearchParams } from "react-router-dom";

export const SearchPage = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  console.log("queryTerm:", queryTerm);
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section>
        {movies.length > 0 ? (
          <p className=" text-3xl text-gray-700 dark:text-white">
            Result for "{queryTerm}"
          </p>
        ) : (
          <p className=" text-3xl  text-gray-700 dark:text-white">
            No Result Found for "{queryTerm}"{" "}
          </p>
        )}
      </section>
      <section className=" max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies?.map((movies) => (
            <CardMovie key={movies.id} movies={movies} />
          ))}
        </div>
      </section>
    </main>
  );
};
