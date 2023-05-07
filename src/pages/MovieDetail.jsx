import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Gender } from "../components";
import backup from "../assets/images/backup.png";
import { useTitleChange } from "../hooks/useTitleChange";
export const MovieDetail = ({ apiPath }) => {
  const [movie, setMovie] = useState([]);
  console.log("movie:", movie);
  const params = useParams();
  console.log("params:", params);
  const idMovie = params.id;
  console.log("id:", idMovie);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=d55b6b858797a6022d52b716cd209772&language=en-US`
      )
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [idMovie]);
  const {
    original_title,
    overview,
    poster_path,
    budget,
    runtime,
    revenue,
    release_date,
    imdb_id,
    vote_average,
    vote_count,
  } = movie;

  useTitleChange({ original_title: movie.original_title });
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : backup;
  // const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className=" flex justify-around flex-wrap py-5">
        <div className=" max-w-sm">
          <img className="rounded" src={image} alt="movie poster" />
        </div>
        {/* <div className=" flex ">
          {movie.title}
          {movie?.genres?.map((genre) => (
            <Gender key={genre.id} children={genre.name} />
          ))}
        </div> */}
        <div className=" max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className=" text-4xl font-bold my-3 text-center lg:text-left">
            {original_title}
          </h1>
          <p className="my-4">{overview} </p>
          <div className="flex flex-wrap gap-3">
            {" "}
            {movie?.genres?.map((genre) => (
              <Gender key={genre.id} children={genre.name} />
            ))}
          </div>
          <div className="flex items-center mt-4">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className=" ml-2  text-gray-900 dark:text-white">
              {vote_average}{" "}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className=" text-gray-900  dark:text-white">
              {" "}
              {vote_count}{" "}
            </span>
          </div>
          <div className="flex flex-col">
            <p className="my-2 font-bold text-lg dark:text-white">
              Runtime:{" "}
              <span className=" text-lg dark:text-white font-normal ">
                {runtime} min
              </span>
            </p>
            <p className="my-2 font-bold text-lg dark:text-white">
              Budget:{" "}
              <span className=" text-lg dark:text-white font-normal">
                {budget}{" "}
              </span>
            </p>
            <p className="my-2 font-bold text-lg dark:text-white">
              Revenue:{" "}
              <span className=" text-lg dark:text-white  font-normal">
                {revenue}{" "}
              </span>
            </p>
            <p className="my-2 font-bold text-lg dark:text-white ">
              Release Date:{" "}
              <span className=" text-lg dark:text-white font-normal">
                {release_date}{" "}
              </span>
            </p>
            <p className=" my-2 font-bold text-lg dark:text-white">
              IMDB Code:{" "}
              <span className=" text-lg dark:text-white font-normal ">
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {imdb_id}
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
