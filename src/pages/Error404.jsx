import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import notFound from "../assets/images/pagenotfound.png";
export const Error404 = ({ title }) => {
  useEffect(() => {
    document.title = `FakeFlix/${title}`;
  }, [title]);
  return (
    <main>
      <section className=" flex flex-col justify-center px-2">
        <div className=" flex flex-col items-center my-8">
          <p className=" text-7xl dark:text-slate-50 font-bold text-center">
            Error 404 Oups!
          </p>
          <div className="mt-5 max-w-lg">
            <img className="rounded" src={notFound} alt="page not found" />
          </div>
        </div>
        <Link to="/">
          <button className="flex justify-center text-slate-50 m-auto py-2 w-40 h-14 text-2xl mt-4 bg-blue-600 dark:bg-white dark:text-black rounded-lg">
            Home Page
          </button>
        </Link>
      </section>
    </main>
  );
};
