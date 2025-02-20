import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-fit min-w-min flex flex-grow justify-center bg-slate-400">
        <nav className="bg-slate-400 p-0 xsm:p-1 3xl:p-4 flex flex-grow justify-center flex-wrap">
          <ul className="flex flex-col xsm:flex-row xsm:gap-5 items-center gap-0 text-black font-semibold flex-wrap justify-center 2xl:pb-1">
            <li className="hover:cursor-pointer hover:bg-slate-600 rounded-md px-2 py-1 hover:text-white">
              <Link
                to="/home"
                className="font-bold text-xs xsm:text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-[26px] 3xl:text-3xl"
              >
                Home
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:bg-slate-600 rounded-md px-2 py-1 hover:text-white">
              <Link
                to="/about"
                className="font-bold px-1 2xl:px-[6px] text-xs xsm:text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-[26px] 3xl:text-3xl"
              >
                About
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:bg-slate-600 rounded-md px-2 py-1 hover:text-white">
              <Link
                to="/app"
                className="font-bold text-xs xsm:text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-[26px] 3xl:text-3xl"
              >
                App
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
