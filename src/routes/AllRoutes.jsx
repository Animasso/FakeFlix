import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Error404, SearchPage } from "../pages";
import React from "react";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/MovieDetail" element={<MovieDetail />} />
        <Route path="/SearchResult" element={<SearchPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
