import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top ">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                to={"/termsservice"}
                className="text-md text-gray-500 hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to={"/privacy"}
                className="text-md text-gray-500 hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
          
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              className="text-md text-gray-500 hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2023 Company Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
