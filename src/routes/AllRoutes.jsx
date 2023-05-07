import { Routes, Route, useLocation } from "react-router-dom";
import { MovieList, MovieDetail, Error404, SearchPage } from "../pages";
import React from "react";
import { useEffect } from "react";

export const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
          end
        />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="/movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiPath="/movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="/movie/upcoming" title="Upcoming" />}
        />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route
          path="/search"
          element={<SearchPage apiPath="/search/movie" />}
        />
        <Route path="*" element={<Error404 title="Error Page" />} />
      </Routes>
    </div>
  );
};
