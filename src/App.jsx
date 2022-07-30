import React from "react";
import shirt from "./assets/shirtbg.png";
import { Icon } from "@iconify/react";
import black from "./assets/black.jfif";
import white from "./assets/white.webp";
const color=['xxs','xs','s','m']
const color2=['l','xl','xxl','xxl']
export const App = () => {
  return (
    <div className="bg-blue-300 h-screen w-full flex items-center justify-center">
      <div className="bg-white w-auto h-64 md:h-96 rounded-xl relative shadow-xl">
        <div className="flex">
          <img
            src={shirt}
            className="h-64 md:h-96 rounded-xl object-cover p-5"
          ></img>
          <div className="">
            <div className="p-2 md:p-5">
              <div className=" font-semibold text-sm md:text-xl text-black">
                T-shirt(ORICON STORE)
              </div>
              <div className=" right-auto font-bold text-slate-600 text-xs md:text-base">
                $187
              </div>
              <div className="flex flex-row mt-2">
                {Array(5)
                  .fill(0)
                  .map(() => (
                    <Icon
                      icon="emojione:glowing-star"
                      className="h-4 w-2 md:h-6 md:w-6 "
                    />
                  ))}
                <span className="text-slate-600 font-bold text-xs md:text-base">
                  (87)
                </span>
              </div>
              <div className="md:mt-3 font-mono text-xs md:text-base">
                choose the color
              </div>
              <div className="">
                <button className=" rounded-full w-8 h-8 hover:animate-bounce">
                  <Icon icon="emojione:black-circle" className="h-8 w-8" />
                </button>
                <span> </span>
                <button className="w-8 hover:animate-bounce">
                  <Icon icon="twemoji:green-circle" className="w-8 h-8" />
                </button>
              </div>
              <div className="md:mt-3 font-mono text-xs md:text-base">
                <span>choose the size</span>
                <div className="flex flex-rows gap-2 md:mt-3">{color.map((item)=>(
                  <div className="text-center rounded-md bg-blue-300 text-white w-6 h-6 md:w-12 md:h-8  hover:animate-bounce text-xs md:text-base">{item}</div>
                ))}</div>
                <div className="md:mt-2 flex flex-rows gap-2 ">
                  {
                    color2.map((item)=>(
                      <div className="text-center rounded-md bg-blue-300 text-white  w-6 h-6 md:w-12 md:h-8 hover:animate-bounce text-xs md:text-base">{item}</div>
                    ))
                  }
                </div>

              </div>
              
              <div className="mt-1  ">
                <button className=" bg-indigo-700 rounded-lg text-white md:mt-8 w-36 md:w-48 h-8 hover:animate-bounce">
                  add to bag
                </button>
              </div>
              <div className="absolute top-0 right-1">
                <Icon
                  icon="material-symbols:cancel-outline-rounded"
                  className="h-4 w-4 md:h-6 md:w-6"
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
