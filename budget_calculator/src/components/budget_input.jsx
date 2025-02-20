/* import settings from "../assets/settings.svg"; */
import house from "../assets/house-outlined.png";
import giftbox from "../assets/giftbox-monocolor.png";
import savings from "../assets/savings-outlined.png";
import rupeesmall from "../assets/rupeesmall.svg";
import Budget_calculation from "./budget_calculation";
import Budget_output from "./budget_output";
import { useEffect, useState } from "react";

const Budget_input = (props) => {
  const [res, Setres] = useState(false); /* For Submit Button */

  const [housing, Sethousing] = useState(0);
  const [utility, Setutility] = useState(0);
  const [grocery, Setgrocery] = useState(0);
  const [transport, Settransport] = useState(0);
  const [childcare, Setchildcare] = useState(0);
  const [healthcare, Sethealthcare] = useState(0);
  const [studentloan, Setstudentloan] = useState(0);
  const [otherdebt, Setotherdebt] = useState(0);

  const calc_needs =
    housing +
    utility +
    grocery +
    transport +
    childcare +
    healthcare +
    studentloan +
    otherdebt;
  const needs_total = calc_needs;

  const [entertainment, Setentertainment] = useState(0);
  const [diningout, Setdiningout] = useState(0);
  const [hobbies, Sethobbies] = useState(0);
  const [splurges, Setsplurges] = useState(0);
  const [otherwants, Setotherwants] = useState(0);

  const calc_wants =
    entertainment + diningout + hobbies + splurges + otherwants;
  const wants_total = calc_wants;

  const [fund, Setfund] = useState(0);
  const [retirement, Setretirement] = useState(0);
  const [vacation, Setvacation] = useState(0);
  const [othersavings, Setothersavings] = useState(0);

  const calc_savings = fund + retirement + vacation + othersavings;
  const savings_total = calc_savings;

  /* const [showHelpInfo, setShowHelpInfo] = useState(false); */

  return (
    <>
      <section className="font-serif">
        {/* Budget input Header */}
        <section className="budget-head flex flex-col flex-grow py-2 xsm:py-3 sm:py-5 justify-between flex-wrap ">
          <div>
            <h2 className="text-orange-600 px-1 text-xs xsm:text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl 3xl:text-3xl  mb-2 font-semibold ">
              Personalize your monthly budget
            </h2>
          </div>
          <div className="flex items-center flex-grow justify-end text-[10px] sm:text-sm md:text-base 3xl:text-lg relative ">
            <span
              className="hover:cursor-pointer group px-5"
              /* onClick={() => setShowHelp(!showHelp)} */
            >
              Need Help?
              <div className="absolute bg-red-100 p-1 px-3 rounded-md justify-end items-center top-6 left-0 sm:left-5 md:left-[50%] lg:left-[60%] 3xl:left-[70%] flex-wrap hidden group-hover:flex">
                <div className="h-3 w-3 rounded-sm absolute bg-red-100 top-0 left-[50%] rotate-45 -translate-y-[6px] translate-x-8 "></div>
                <p className="text-justify">
                  Enter your Expenses according to the Input Box below. If any
                  other kind of expenses or savings other than the labels, input
                  the value in "Other debts or Savings". If no expenses for a label leave it blank
                </p>
              </div>
            </span>

            {/* <span className="px-1 hover:cursor-default">|</span>
            <span
              className="hover:cursor-pointer flex items-center"
              onClick={() => setShowHelpInfo(!showHelpInfo)}
            >
              <img src={settings} className="h-4 w-4 sm:h-6 sm:w-6 inline" />{" "}
              Add/Edit
            </span>

            {showHelpInfo && (
              <div className="z-10 absolute bg-red-500 p-1 px-3 rounded-md h-7 flex justify-end items-center top-6">
                <div className="h-2 w-2 absolute right-0 top-0 bg-red-500 rotate-45 -translate-y-[3px] -translate-x-7 rounded-sm"></div>
                <p className="">Not Available - On Built</p>
              </div>
            )} */}
          </div>
        </section>

        {/* Budget input Data */}
        <section className="md:grid md:grid-cols-3 flex flex-col xmd:flex-row flex-wrap gap-1 xsm:gap-2  sm:gap-5">
          {/* column-1 Needs */}
          <section className="flex flex-col flex-grow">
            <section className="flex justify-around items-center p-1 border-black border-b xsm:mb-2 sm:mb-3 md:mb-5 w-[100%]">
              {/* Needs */}
              <h2 className="font-bold text-xs xsm:text-sm sm:text-lg xl:text-lg">
                Needs
              </h2>
              <img
                src={house}
                className="h-4 w-4 xsm:h-5 xsm:w-5 sm:h-7 sm:w-7"
              />
            </section>
            {/* Needs Inputs */}
            {/* <div className="flex justify-center"> */}
            <div className="flex flex-col items-center">
              <section className="p-2 w-fit">
                {/* label-1 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* " xsm:grid flex flex-col flex-grow grid-cols-2 gap-2 items-center " */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Housing"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "w-full xsm:text-sm disabled:text-gray-700 bg-slate-300 text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item1 = Number(e.target.value);
                        Sethousing(item1);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {/* label-2 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center" */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Utilities"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "w-full xsm:text-sm disabled:text-gray-700 bg-slate-300 text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8" /* "h-6 w-6 xsm:h-8 xsm:w-8" */
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item2 = Number(e.target.value);
                        Setutility(item2);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {" "}
                {/* label-3 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center" */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Groceries"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item3 = Number(e.target.value);
                        Setgrocery(item3);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {/* label-4 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center " */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Transportation"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item4 = Number(e.target.value);
                        Settransport(item4);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {" "}
                {/* label-5 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center " */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Childcare"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "xsm:text-sm disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item5 = Number(e.target.value);
                        Setchildcare(item5);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {/* label-6 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center " */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Healthcare"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "xsm:text-sm disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item6 = Number(e.target.value);
                        Sethealthcare(item6);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {/* label-7 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center " */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Loan Payments"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "xsm:text-sm disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-4 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item7 = Number(e.target.value);
                        Setstudentloan(item7);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="p-2 w-fit">
                {/* label-8 */}
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:flex-row flex flex-col flex-grow grid-cols-2 gap-2 items-center " */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Other Debts"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "xsm:text-sm disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item8 = Number(e.target.value);
                        Setotherdebt(item8);
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>
            {/* </div> */}
          </section>

          {/* Column-2 Wants */}
          <section className="flex flex-col flex-grow">
            <div className="flex justify-center">
              <section className="flex justify-around items-center p-1 border-b border-black xsm:mb-2 sm:mb-3 md:mb-5 w-[100%]">
                <h2 className="font-bold text-xs xsm:text-sm sm:text-lg xl:text-lg">
                  Wants
                </h2>
                <img
                  src={giftbox}
                  className="h-4 w-4 xsm:h-5 xsm:w-5 sm:h-7 sm:w-7"
                />
              </section>
            </div>
            {/* <div className="flex justify-center text-base"> */}
            {/* Labels wrapper */}
            <div className="flex flex-col items-center">
              {/* <div className="flex flex-col items-center w-[100%] xmd:w-[375px] md:w-[100%] lg:w-[100%]"> */}
              {/* Wants label-1 */}
              <section className="p-2 w-fit">
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:grid flex flex-col flex-grow grid-cols-2 gap-2 items-center" */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Entertainment"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "text-center xsm:text-left disabled:text-gray-700 bg-slate-300 w-full" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8" /* "h-8 w-8" */
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans" /* "w-16 rounded-md p-1 no-arrows" */
                      onChange={(e) => {
                        const item1 = Number(e.target.value);
                        Setentertainment(item1);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/* Wants label-2 */}
              <section className="p-2 w-fit">
                <div
                  className="flex flex-col xsm:flex-row  gap-2 items-center" /* "xsm:grid flex flex-col flex-grow grid-cols-2 gap-2 items-center" */
                >
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Dining Out"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif" /* "text-center xsm:text-left disabled:text-gray-700 bg-slate-300 w-full" */
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8" /* "h-8 w-8" */
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans" /* "w-16 rounded-md p-1 no-arrows" */
                      onChange={(e) => {
                        const item2 = Number(e.target.value);
                        Setdiningout(item2);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/* Wants label-3 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Hobbies"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item3 = Number(e.target.value);
                        Sethobbies(item3);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/* Wants label-4 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Splurges"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item4 = Number(e.target.value);
                        Setsplurges(item4);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/* Wants label-5 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Other Debts"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item5 = Number(e.target.value);
                        Setotherwants(item5);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/* </div> */}
            </div>
            {/* </div> */}
          </section>

          {/* Column-3  Savings*/}
          <section className="flex flex-col flex-grow">
            {/* Savings header*/}
            <section className="flex justify-around items-center p-1 xsm:mb-2 sm:mb-3 md:mb-5 border-b border-black">
              <h2 className="font-bold text-xs xsm:text-sm sm:text-lg xl:text-lg">
                Savings
              </h2>
              <img
                src={savings}
                className="h-4 w-4 xsm:h-5 xsm:w-5 sm:h-7 sm:w-7"
              />
            </section>

            <div className="flex flex-col items-center">
              {/* Savings label-1 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Emergency Fund"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item1 = Number(e.target.value);
                        Setfund(item1);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/*Savings label-2 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Retirement"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item2 = Number(e.target.value);
                        Setretirement(item2);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/*Savings label-3 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Vacation / Travel"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item3 = Number(e.target.value);
                        Setvacation(item3);
                      }}
                    />
                  </div>
                </div>
              </section>
              {/*Savings label-4 */}
              <section className="p-2 w-fit">
                <div className="flex flex-col xsm:flex-row  gap-2 items-center">
                  <div className="flex xsm:basis-28 flex-shrink flex-grow">
                    <input
                      type="text"
                      disabled
                      value="Other Savings"
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg disabled:text-gray-700 bg-slate-300 w-full text-center xsm:text-left font-serif"
                    />
                  </div>
                  <div className="flex items-center justify-center xsm:justify-normal -ml-4 xsm:-ml-0">
                    <img
                      src={rupeesmall}
                      className="h-5 w-4 xsm:h-6 xsm:w-6 sm:h-8 sm:w-8"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      className="text-xs xsm:text-sm sm:text-base xl:text-lg w-[50%] xsm:w-16 h-5 xsm:h-8 rounded-md p-1 no-arrows font-sans"
                      onChange={(e) => {
                        const item4 = Number(e.target.value);
                        Setothersavings(item4);
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>

        {/* Button */}
        <section className="flex justify-center items-center p-5 border-b border-black">
          <button
            className="bg-slate-500 rounded-md sm:rounded-full text-white text-xs xsm:text-sm sm:text-base md:text-lg px-3 py-1 xsm:px-3 xsm:py-2 sm:px-4 md:px-8 md:py-3 hover:bg-slate-600"
            id="button"
            onClick={() => props.income <= 0 ? alert("Please Check the income and ensure it is greater than 0 ") : calc_needs+calc_wants+calc_savings <= 0 ? alert("Enter your Expenses!!!"): needs_total <= 0 || wants_total <= 0 || savings_total <= 0 ? alert(" Please check Your Needs, Wants and Savings Total. Which should be greater than 0.") :Setres(true)}
          >
            Submit
          </button>
        </section>
      </section>
      {res ? (
        <Budget_calculation
          needs_total={needs_total}
          wants_total={wants_total}
          savings_total={savings_total}
          monthly_income={props.monthly_income}
          fifty={props.fifty}
          thirty={props.thirty}
          twenty={props.twenty}
          studentloan={studentloan}
        />
      ) : (
        <Budget_output
          monthly_income={props.monthly_income}
          fifty={props.fifty}
          thirty={props.thirty}
          twenty={props.twenty}
        />
      )}
    </>
  );
};

export default Budget_input;
