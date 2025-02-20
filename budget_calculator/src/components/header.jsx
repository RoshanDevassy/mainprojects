import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Header = () => {
  return (
    <>
      <div className="bg-slate-600 min-w-[185px]">
        <section className="flex justify-center">
          <h1
            className="text-red-400 text-center p-2 font-black sm:tracking-[.2rem] text-wrap text-xs xsm:text-base sm:text-lg md:text-3xl lg:text-4xl xl:pb-4 2xl:text-4xl 3xl:text-7xl 3xl:p-8"
          >
            Budget Calculator
          </h1>
        </section>
        <section className="">
          <Navbar />
        </section>
      </div>
      <div className="min-w-[185px]">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Header;
