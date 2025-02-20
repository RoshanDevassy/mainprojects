import piggy from "../assets/piggybank.svg";
import house from "../assets/house-outlined.png";
import giftbox from "../assets/giftbox-monocolor.png";
import savings from "../assets/savings.svg";

const Budget_output = (props) => {
  return (
    <>
      <section className="font-serif text-lg 2xl:text-xl 3xl:text-2xl">
        {/* Budget Output Header */}
        <section className="p-1 xsm:p-5 flex flex-col sm:flex-row gap-1 xsm:gap-2 sm:gap-5 justify-center items-center border-black border-b flex-wrap sm:flex-nowrap flex-grow"/* "p-1 xsm:p-5 flex gap-1 xsm:gap-2 justify-center md:justify-start items-center border-black border-b flex-wrap sm:flex-nowrap flex-grow" */>
          <div className="">
            <img src={piggy} className="h-6 w-6 xsm:h-8 xsm:w-8 sm:h-12 sm:w-12 3xl:h-14 3xl:w-14"/* "h-8 w-8 sm:h-12 sm:w-12" */ />
          </div>
          <div className="">
            <h2 className="text-orange-600 font-semibold text-center md:text-left text-xs xsm:text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl 3xl:text-3xl">
              My <span className="font-sans font-semibold">50/30/20</span> Monthly Budget
            </h2>
          </div>
        </section>
        {/* Budget Output Images */}
        <section className="">
          <div className="pt-3 font-sans text-lg mb-1 xsm:mb-3 sm:mb-4 xmd:mb-5">
            <p className="text-xs xsm:text-sm sm:text-base xl:text-lg text-center"/* " text-center 2xl:text-xl 3xl:text-2xl" */>
              Your Monthly Income {Math.ceil(props.monthly_income).toFixed(2)}
              &#8377;
            </p>
          </div>
          <div className="flex flex-col xmd:flex-row items-center xmd:justify-around p-1 gap-2 xsm:gap-3 sm:gap-4 xmd:gap-5 flex-wrap">
            <div className="flex flex-col justify-center gap-1 xsm:gap-2">
              <img src={house} className="h-6 w-6 xsm:h-8 xsm:w-8 sm:h-12 sm:w-12 3xl:h-14 3xl:w-14 self-center"/* "h-16 w-16 self-center" */ />
              <p className="text-xs xsm:text-sm sm:text-base xl:text-lg text-center">
                Needs{" "}
                <span className="font-sans">
                  50% &#8377;{Math.ceil(props.fifty).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-1 xsm:gap-2">
              <img src={giftbox} className="h-6 w-6 xsm:h-8 xsm:w-8 sm:h-12 sm:w-12 3xl:h-14 3xl:w-14 self-center" />
              <p className="text-xs xsm:text-sm sm:text-base xl:text-lg text-center">
                Wants{" "}
                <span className="font-sans">
                  30% &#8377;{Math.ceil(props.thirty).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-1 xsm:gap-2">
              <img src={savings} className="h-6 w-6 xsm:h-8 xsm:w-8 sm:h-12 sm:w-12 3xl:h-14 3xl:w-14 self-center" />
              <p className="text-xs xsm:text-sm sm:text-base xl:text-lg text-center">
                Savings{" "}
                <span className="font-sans">
                  20% &#8377;{Math.ceil(props.twenty).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* Budget Output Content */}
        <section>
          <div className="flex justify-center mt-3 xsm:mt-4  sm:mt-6 md:mt-7 3xl:mt-10 sm:mb-2">
            <p className="text-slate-500 text-xs xsm:text-sm sm:text-base xl:text-lg text-center">
              Values are based on a monthly budget
            </p>
          </div>
          <div className="flex flex-col gap-2  flex-wrap text-justify p-2 text-xs xsm:text-sm sm:text-base xl:text-lg">
            <p>Congratulations, you're off to a great start!</p>
            <p>
              Your <span className="font-sans">50/30/20</span> budget is a
              simple rule of thumb that can be a helpful way to get started with
              budgeting.
            </p>
            <p>
              Take the next step and personalize your budget based on your
              priorities and financial situation.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Budget_output;
