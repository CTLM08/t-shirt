import React, { useState } from "react";
import shirt from "./assets/shirtbg.png";
import { Icon } from "@iconify/react";
import black from "./assets/black.jfif";
import green from "./assets/green.jpg";
const color = ["xxs", "xs", "s", "m"];
const outline = ["outline-black"];
const color2 = ["l", "xl", "xxl", "xxl"];
export const App = () => {
  return (
    <div className="bg-gray-300 h-screen w-full flex items-center justify-center  relative " id="bg">
      <div className="absolute top-2 right-3"><a href="https://react-learning-ochre-one.vercel.app/"><button><Icon icon="bi:apple" className="w-8 h-8 text-rose-300" /></button></a></div>

      <div className="bg-white   w-auto h-auoto  md:h-96 rounded-md relative shadow-xl">
        <div className="md:flex">
          <img
            src={shirt}
            className="w-56 md:w-96 rounded-xl object-cover p-5"
          ></img>
          <div className="">
            <div className="p-3 md:p-5">
              <div className=" font-bold text-xl  md:text-2xl text-black">
                T-shirt(ORICON STORE)
              </div>
              <div className=" right-auto font-bold text-slate-600 text-base md:text-xl">
                $187
              </div>
              <div className="flex flex-row md:mt-2">
                {Array(4)
                  .fill(0)
                  .map(() => (
                    <Icon
                      icon="eva:star-fill"
                      className="h-4 w-4 md:h-6 md:w-6 "
                    />
                  ))}
                <Icon icon="ep:star" className="h-4 w-4 md:h-6 md:w-6" />
                <span className="text-slate-600 font-bold text-xs md:text-sm">
                  (87)
                </span>
              </div>
              <div className="md:mt-3 font-mono ">
                choose the color
              </div>
              <div className="">
                <button
                  type="button"
                  className=" rounded-full  focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-500 "
                >
                  <img
                    src={black}
                    className="h-6 w-6 md:h-9 md:w-9 rounded-full"
                  />
                </button>
                <span> </span>
                <button
                  type="button "
                  className=" rounded-full focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-500  "
                >
                  <img
                    src={green}
                    className="h-6 w-6 md:h-9 md:w-9 rounded-full"
                  />
                </button>
              </div>
              <div className="md:mt-2 font-mono ">
                <div>choose the size</div>
                <div className="flex flex-rows gap-2.5 md:gap-2.5 md:mt-3">
                  {color.map((item) => (
                    <div className="hiddden:peer">
                      <button
                        type="button"
                        className="hover:bg-slate-500 text-center rounded-md bg-slate-400 text-white w-9 h-5 md:w-14 md:h-8   text-xs md:text-base flex justify-center items-center  focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-600  "
                        tabindex="0"
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-1 md:mt-2 flex flex-rows gap-2.5 md:gap-2.5 ">
                  {color2.map((item) => (
                    <div>
                      <button
                        type="button"
                        className="text-center rounded-md hover:bg-slate-500 bg-slate-400 text-white  w-9 h-5 md:w-14 md:h-8  text-xs md:text-base flex justify-center items-center focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-600 "
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" ">
                <button className=" bg-slate-600 rounded-md text-white mt-3 md:mt-8 w-44 md:w-64 h-6 md:h-8 hover:animate-bounce text-xs md:text-base">
                  add to bag
                </button>
              </div>
              <div className="absolute top-0 right-1">
                <Icon
                  icon="iconoir:cancel"
                  className="h-6 w-6"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
