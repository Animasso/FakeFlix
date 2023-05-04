import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Error404, SearchPage } from "../pages";
import React from "react";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} end />
        <Route path="/movies/popular" element={<MovieList />} />
        <Route path="/movies/top" element={<MovieList />} />
        <Route path="/movies/upcoming" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/SearchResult" element={<SearchPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
