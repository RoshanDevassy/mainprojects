import { Link } from "react-router-dom";
import home from "../assets/house-outlined.png";
import giftbox from "../assets/giftbox-monocolor.png";
import savings from "../assets/savings-outlined.png";

const Home = () => {
  return (
    <>
      <section className="min-h-screen min-w-min p-3 font-serif bg-slate-200">
        <div className="mb-10">
          <h2 className="text-xl font-black text-orange-600 mt-10 md:text-2xl lg:text-3xl 2xl:text-4xl">
            Find the balance between your needs, wants and savings.
          </h2>
        </div>
        <div>
          <h1 className=" text-xl md:text-2xl 2xl:text-3xl font-semibold mb-5">
            Budget Calculator
          </h1>
          <div className="bg-white rounded-md p-2 2xl:p-10">
            <p className=" text-orange-600 mb-5 text-lg font-black tracking-wider lg:text-xl 2xl:text-2xl">
              Get your <span className="font-sans italic">50/30/20</span> budget
              and then personalize it to your priorities and situation
            </p>
            <p className="text-lg 2xl:text-xl text-justify ">
              The <b className="font-sans italic">50/30/20</b> approach can be a
              helpful way to get started with budgeting. It’s a simple rule of
              thumb that suggests you put up to{" "}
              <span className="font-sans">50%</span> of your after-tax income
              toward things you need, <span className="font-sans">30%</span>
              toward things you want, and <span className="font-sans">
                20%
              </span>{" "}
              toward savings.
            </p>
            <div className="flex flex-col gap-2 md:grid md:grid-cols-3  font-serif mt-5">
              <div className="flex flex-col gap-1 p-1 text-md 2xl:text-xl">
                <h1 className="text-orange-600 text-lg inline-flex items-center">
                  <img src={home} className="inline h-8 mb-2" />
                  <span className="pl-2 font-semibold">
                    <span className="font-sans">50%</span> Needs
                  </span>
                </h1>
                <p className="mb-1">
                  Things you must have or can't live without.
                </p>
                <p>
                  Examples: housing, groceries, utilities, transportation,
                  childcare, debt payments
                </p>
              </div>
              <div className="flex flex-col gap-1 p-1 text-md 2xl:text-xl">
                <h1 className="text-orange-600 text-lg inline-flex items-center">
                  <img src={giftbox} className="inline h-8 mb-2" />
                  <span className="pl-2 font-semibold">
                    <span className="font-sans">30%</span> Wants
                  </span>
                </h1>
                <p className="mb-1">
                  Things you can cut back on or do without.
                </p>
                <p>Examples: entertainment, dining out, clothing, splurges</p>
              </div>
              <div className="flex flex-col gap-1 p-1 text-md 2xl:text-xl">
                <h1 className="text-orange-600 text-lg inline-flex items-center">
                  <img src={savings} className="inline h-8 mb-2 " />
                  <span className="pl-2 font-semibold">
                    <span className="font-sans">20%</span> Savings
                  </span>
                </h1>
                <p className="mb-1">Money you save for future goals.</p>
                <p>
                  Examples: emergency fund, home, vacation, retirement,
                  financial freedom
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/app">
            <button className="bg-black rounded-md px-8 py-4 text-xl md:text-3xl text-orange-400 font-semibold">
              Let's get Budgeting!
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
