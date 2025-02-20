import { useState } from "react";
import Budget_input from "../components/budget_input";
import "./budget_income.css";

const Budget_income = () => {
  const [timely_income, Settimely_income] = useState("");
  const [income, setIncome] = useState(Number(0));

  const calc_weekly = (income * 52) / 12;
  const weekly_to_monthly = calc_weekly;

  const monthly = income;

  const calc_yearly = income / 12;
  const yearly_to_monthly = calc_yearly;

  const monthly_income =
    timely_income === "Weekly"
      ? weekly_to_monthly
      : timely_income === "Monthly"
      ? monthly
      : timely_income === "Yearly"
      ? yearly_to_monthly
      : income;

  const calc_fifty = monthly_income * (50 / 100);
  const fifty = calc_fifty;

  const calc_thirty = monthly_income * (30 / 100);
  const thirty = calc_thirty;

  const calc_twenty = monthly_income * (20 / 100);
  const twenty = calc_twenty;

  return (
    <>
      <section className="relative font-serif">
        <div className="mb-1 xsm:mb-2 sm:mb-3 text-xs xsm:text-sm sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl">
          <h2 className="text-orange-600 font-semibold p-1">
            Enter your income to get your
            <span className="font-sans"> 50/30/20</span> budget
          </h2>
        </div>
        <div className="flex flex-col gap-1 xsm:gap-3 sm:gap-5 px-2 3xl:px-5">
          <label className="text-center xsm:text-left text-xs xsm:text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl">
            How often do you receive your income?
          </label>
          <div className="3xl:flex justify-center mb-1">
            <div className="flex items-center gap-2 3xl:w-[75%]">
              <select
                className=" text-center sm:text-left sm:pl-3 h-5 xsm:h-7 sm:h-8 md:h-9 lg:h-10 flex-grow flex-shrink rounded-lg p-0 text-ellipsis text-xs xsm:text-sm sm:text-base md:text-lg"
                id="timely-income"
                onChange={(e) => Settimely_income(e.target.value)}
              >
                <option value=""></option>
                <option value="Weekly">Weekly</option>
                {/*  <option value="Every Other Week">Every Other Week</option>
              <option value="Twice a Month">Twice a Month</option> */}
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <span className="help">
                &#x2753;
                <div className="help-cont text-xs xsm:text-sm sm:text-base lg:text-lg 3xl:text-xl bg-red-100 w-full xsm:w-[90%] sm:w-[70%] md:w-[60%] z-10">
                  "If other payment period, convert to monthly and input to
                  income box below. leave this blank or can select monthly."
                </div>
              </span>
            </div>
          </div>

          <label className="text-center xsm:text-left text-xs xsm:text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl">
            What is your after-tax income?
          </label>
          <div className="3xl:flex justify-center">
            <div className="flex items-center gap-2 3xl:w-[75%]">
              <p className="font-semibold xsm:text-lg sm:text-3xl">&#8377;</p>
              <input
                type="number"
                id="after-income"
                onChange={(e) => {
                  const income_int = e.target.value;
                  income_int < 0 ? alert("Please check your Income. Income should be greater than 0.") : setIncome(Number(income_int)); 
                  
                }}
                className="h-5 xsm:h-7 sm:h-8 md:h-9 lg:h-10 w-full min-w-16 rounded-lg p-1 text-xs xsm:text-sm sm:text-base md:text-lg font-sans no-arrows text-ellipsis pl-1 sm:pl-3"
              />
              <span className="help">
                &#x2753;
                <span className="help-cont text-xs xsm:text-sm sm:text-base lg:text-lg 3xl:text-xl bg-red-100 w-full xsm:w-[90%] sm:w-[70%] md:w-[60%] h-14 xsm:h-32 overflow-y-auto z-10">
                  "Your after-tax income is the amount in your paycheck after
                  taxes and other deductions are taken out. If you save for
                  retirement by having money deducted from your paycheck, you
                  can include those savings in your budget below. <br></br>-
                  just remember to add the amount to your income."
                </span>
              </span>
            </div>
          </div>
        </div>
        <section>
          <Budget_input
          income = {income}
            monthly_income={monthly_income}
            fifty={fifty}
            thirty={thirty}
            twenty={twenty}
          />
        </section>
      </section>
    </>
  );
};

export default Budget_income;
