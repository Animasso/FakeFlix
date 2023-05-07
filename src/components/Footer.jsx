// import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className=" w-full bg-white shadow  dark:bg-gray-800 relative bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="" className="hover:underline">
            FakeFlix™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              target="_blank"
              to="https://www.instagram.com/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://www.youtube.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              YouTube
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://twitter.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://www.linkedin.com/feed/"
              className="hover:underline"
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
