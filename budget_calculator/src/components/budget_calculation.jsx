import piggy from "../assets/piggy-bank.png";
import house from "../assets/house-outlined.png";
import giftbox from "../assets/giftbox-monocolor.png";
import savings from "../assets/savings-outlined.png";

const Budget_calculation = (props) => {
  const calc_needsdiff = props.fifty - props.needs_total;
  const needs_diff =
    Math.ceil(props.fifty) > Math.ceil(props.needs_total)
      ? "+\u20B9" + Math.ceil(calc_needsdiff).toFixed(2)
      : Math.ceil(props.fifty) === Math.ceil(props.needs_total)
      ? "=\u20B9" + Math.ceil(calc_needsdiff).toFixed(2)
      : "-\u20B9" +
        Math.ceil(calc_needsdiff).toFixed(2).toString().replace(/\-/g, "");

  const calc_wantsdiff = props.thirty - props.wants_total;
  const wants_diff =
    Math.ceil(props.thirty) > Math.ceil(props.wants_total)
      ? "+\u20B9" + Math.ceil(calc_wantsdiff).toFixed(2)
      : Math.ceil(props.thirty) === Math.ceil(props.wants_total)
      ? "=\u20b9" + Math.ceil(calc_wantsdiff).toFixed(2)
      : "-\u20B9" +
        Math.ceil(calc_wantsdiff).toFixed(2).toString().replace(/\-/g, "");

  const calc_savingsdiff = props.twenty - props.savings_total;
  const savings_diff =
    Math.ceil(props.twenty) > Math.ceil(props.savings_total)
      ? "+\u20B9" + Math.ceil(calc_savingsdiff).toFixed(2)
      : Math.ceil(props.twenty) === Math.ceil(props.savings_total)
      ? "=\u20b9" + Math.ceil(calc_savingsdiff).toFixed(2)
      : "-\u20B9" +
        Math.ceil(calc_savingsdiff).toFixed(2).toString().replace(/\-/g, "");

  const calc_allocated =
    props.needs_total + props.wants_total + props.savings_total;
  const allocated = calc_allocated;

  let swap_alloc = allocated;
  const calc_remaining =
    props.monthly_income - (swap_alloc < 0 ? -allocated : allocated);
  const remaining = calc_remaining;

  return (
    <>
      <section className="font-sans">
        {/* Piggy Picture */}
        <section>
          <div className="py-1 sm:py-2 w-full flex flex-col items-center">
            <img
              src={piggy}
              alt="piggy bank"
              className="h-7 w-7 xsm:h-10 xsm:w-10 sm:h-12 sm:w-12 lg:h-24 lg:w-24 3xl:h-40 3xl:w-40" /* "h-12 w-12 xsm:h-24 xsm:w-24 md:h-48 md:w-48" */
            />
            <p className="text-orange-600 text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-extrabold font-serif text-center pt-2">
              {remaining > 0
                ? "Good Job !"
                : remaining < 0
                ? "You are in a deficit !!!!"
                : "No Savings !!"}
            </p>
          </div>
          <div className=" sm:px-5 md:px-10 lg:px-20">
            {Math.ceil(props.monthly_income) > Math.ceil(allocated) ? (
              <p className="text-center font-mono text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl">
                You have an extra
                <span> +&#8377;{Math.ceil(remaining).toFixed(2)}</span>.
                Consider saving or{" "}
                {props.studentloan > 0
                  ? "paying down any debt you have"
                  : "investing your surplus."}
              </p>
            ) : Math.ceil(props.monthly_income) === Math.ceil(allocated) ? (
              <p className="text-center font-mono text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl">
                Consider saving or investing any surplus in the future.
              </p>
            ) : (
              <p className="text-center font-mono text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl">
                Consider reducing your expenses or increasing your income{" "}
                <span>
                  -&#8377;
                  {Math.ceil(remaining)
                    .toFixed(2)
                    .toString()
                    .replace(/\-/g, "")}
                  .
                </span>
              </p>
            )}
          </div>
        </section>

        {/* Monthly Budget overall Wrapper */}
        <section className="">
          {/* Monthly Budget & Income,Allocated,Remaining Wrapper */}
          <section className="">
            {/* Monthly Budget */}
            <div className="py-1 border-b border-black mt-3 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10">
              <h1 className="text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl text-orange-600 font-semibold font-serif pl-0 xsm:pl-2  text-center sm:text-left">
                Monthly Budget
              </h1>
            </div>
            {/* Income,Allocated,Remaining */}
            <div className=" flex gap-2 sm:flex-row items-center justify-evenly flex-wrap text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl font-semibold sm:mt-3 3xl:mt-5">
              <div className="flex flex-col items-center">
                <h3 className="font-serif">Income</h3>
                <p>&#8377;{Math.ceil(props.monthly_income).toFixed(2)} </p>
              </div>
              <div className="flex flex-col items-center py-2 sm:py-0">
                <h3 className="font-serif">Allocated</h3>
                <p>&#8377; {Math.ceil(allocated).toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-serif">Remaining</h3>
                <p>
                  {Math.ceil(props.monthly_income) > Math.ceil(allocated)
                    ? allocated < 0
                      ? "-\u20b9" +
                        Math.ceil(remaining)
                          .toFixed(2)
                          .toString()
                          .replace(/\-/g, "")
                      : "+\u20B9" + Math.ceil(remaining).toFixed(2)
                    : Math.ceil(props.monthly_income) === Math.ceil(allocated)
                    ? "=\u20B9" + Math.ceil(remaining).toFixed(2)
                    : "-\u20b9" +
                      Math.ceil(remaining)
                        .toFixed(2)
                        .toString()
                        .replace(/\-/g, "")}
                </p>
              </div>
            </div>
          </section>

          {/*Needs, Wants & Savings wrapper */}
          <div
            className="flex  self-center flex-wrap  md:flex-row justify-evenly gap-2 w-full sm:gap-5 lg:gap-7  3xl:px-20 3xl:gap-20 mt-3 xsm:mt-4 sm:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 mb-3 xsm:mb-4 sm:mb-5 xl:mb-6 2xl:mb-8 px-5" /* " flex flex-col self-center flex-wrap  md:flex-row *:flex-grow gap-2 w-full sm:gap-5 lg:gap-7 mt-3 xsm:mt-4 sm:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10" */ /* "md:flex md:justify-around md:items-center" */
          >
            {/* Needs wrapper*/}
            <div className="flex flex-col border border-black rounded-md sm:self-center xl:flex-grow">
              <section
                className="flex mb-2 gap-3 p-1 items-center justify-center rounded-md border-black border-x-8 border-b text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl" /* "grid grid-cols-2 row-span-2 justify-self-center items-center gap-1 mb-1" */ /* "flex gap-3 items-center pb-2" */
              >
                <img
                  src={house}
                  alt="house"
                  className="h-4 w-4 xsm:h-5 xsm:w-5 sm:h-7 sm:w-7" /* "h-5 w-5 xsm:h-6 xsm:w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8" */
                />
                <p className="font-semibold font-serif text-sm xsm:text-base sm:text-lg lg:text-xl">
                  Needs
                </p>
              </section>
              <section
                className="flex gap-3 p-1 pb-2 sm:flex-col  flex-wrap sm:self-center text-xs xsm:text-sm sm:text-base lg:text-lg 3xl:text-xl font-mono font-semibold md:w-full  *:flex *:flex-col *:flex-grow *:items-center *:sm:flex-row *:sm:justify-between *:sm:items-center" /* "flex flex-col gap-1" */ /* "grid grid-rows-3 pb-5 gap-1" */ /* "grid grid-rows-3 pb-5 gap-1 md:flex flex-col" */
              >
                <div
                  className="" /* "grid grid-cols-2 gap-2 bg-slate-100" */ /*  "grid grid-cols-2 place-self-center gap-x-20" */
                >
                  <p>50/30/20</p>
                  <p>&#8377;{Math.ceil(props.fifty).toFixed(2)} </p>
                </div>
                <div
                  className="" /* "grid grid-cols-2 bg-slate-100" */ /* "flex justify-around items-center flex-wrap" */ /* "grid grid-cols-2 place-self-center " */ /* "flex justify-between items-center flex-wrap" */
                >
                  <p>My Budget</p>
                  <p>&#8377;{Math.ceil(props.needs_total).toFixed(2)}</p>
                </div>
                <div
                  className="md:flex md:gap-5" /* "grid grid-cols-2 " */ /* "flex justify-between items-center flex-wrap" */
                >
                  <p className="sm:mr-20 xmd:mr-24 md:mr-0">Difference</p>
                  <p className=" sm:border-t border-black">{needs_diff}</p>
                </div>
              </section>
            </div>
            {/* Wants Wrapper*/}
            <div className="flex flex-col border border-black rounded-md sm:self-center xl:flex-grow">
              <section className="flex mb-2 gap-3 p-1 items-center justify-center border-b border-black border-x-8 rounded-md text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl">
                <img
                  src={giftbox}
                  alt="house"
                  className="h-4 w-4 xsm:h-5 xsm:w-5 sm:h-7 sm:w-7"
                />
                <p className="font-serif font-semibold text-sm xsm:text-base sm:text-lg lg:text-xl">
                  Wants
                </p>
              </section>
              <section
                className="flex gap-3 p-1 pb-2 sm:flex-col  flex-wrap sm:self-center text-xs xsm:text-sm sm:text-base lg:text-lg 3xl:text-xl font-mono font-semibold md:w-full  *:flex *:flex-col *:flex-grow *:items-center *:sm:flex-row *:sm:justify-between *:sm:items-center" /* "flex flex-col gap-3 text-sm xsm:text-base lg:text-lg basis-16 flex-shrink p-1 *:flex *:flex-col *:items-center *:sm:flex-row *:sm:justify-between *:sm:items-center px-[2px] font-mono font-semibold" */ /* "flex flex-col gap-1" */ /* "grid grid-rows-3 pb-5 gap-1 " */
              >
                <div className="">
                  <p>50/30/20</p>
                  <p>&#8377;{Math.ceil(props.thirty).toFixed(2)}</p>
                </div>
                <div className="">
                  <p>My Budget</p>
                  <p>&#8377;{Math.ceil(props.wants_total).toFixed(2)}</p>
                </div>
                <div className="md:flex md:gap-5">
                  <p className="sm:mr-20 xmd:mr-24 md:mr-0">Difference</p>
                  <p className="sm:border-t border-black">{wants_diff} </p>
                </div>
              </section>
            </div>
            {/* Savings Wrapper*/}
            <div className="flex flex-col border border-black rounded-md xl:flex-grow">
              <section
                className="flex mb-2 gap-3 p-1 items-center justify-center border-b border-black border-x-8 rounded-md text-xs xsm:text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl" /* "flex gap-3 p-1 items-center justify-center mb-2 border-black border-b border-x-8 rounded-md" */
              >
                <img
                  src={savings}
                  alt="savings"
                  className="h-4 w-4 xsm:h-5 xsm:w-5 sm:h-7 sm:w-7"
                />
                <p className="font-serif font-semibold text-sm xsm:text-base sm:text-lg lg:text-xl">
                  Savings
                </p>
              </section>
              <section
                className="flex gap-3 p-1 pb-2 sm:flex-col  flex-wrap sm:self-center text-xs xsm:text-sm sm:text-base lg:text-lg 3xl:text-xl font-mono font-semibold md:w-full  *:flex *:flex-col *:flex-grow *:items-center *:sm:flex-row *:sm:justify-between *:sm:items-center" /* "flex flex-col gap-3 text-sm xsm:text-base lg:text-lg basis-16 flex-shrink p-1 *:flex *:flex-col *:items-center *:sm:flex-row *:sm:justify-between *:sm:items-center px-[2px] font-mono font-semibold" */ /* "grid grid-rows-3 gap-2" */
              >
                <div className="">
                  <p>50/30/20</p>
                  <p>&#8377;{Math.ceil(props.twenty).toFixed(2)}</p>
                </div>
                <div className="">
                  <p>My Budget</p>
                  <p>&#8377;{Math.ceil(props.savings_total).toFixed(2)} </p>
                </div>
                <div className="md:flex md:gap-5">
                  <p className="sm:mr-20 xmd:mr-24 md:mr-0">Difference</p>
                  <p className="sm:border-t border-black">{savings_diff} </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Budget_calculation;
