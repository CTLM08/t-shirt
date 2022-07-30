import React ,{ useState }from "react";
import shirt from "./assets/shirtbg.png";
import { Icon } from "@iconify/react";
import black from "./assets/black.jfif";
import white from "./assets/white.webp";
const color=['xxs','xs','s','m']
const outline=['outline-black']
const color2=['l','xl','xxl','xxl']
export const App = () => {
  return (
    <div className="bg-gray-300 h-screen w-full flex items-center justify-center">
      <div className="bg-white w-auto h-64 md:h-96 rounded-md relative shadow-xl">

        <div className="flex">
          <img
            src={shirt}
            className="w-56 md:w-96 rounded-xl object-cover p-5"
          ></img>
          <div className="">
            <div className="p-2 md:p-5">
              <div className=" font-semibold text-sm  md:text-xl text-black">
                T-shirt(ORICON STORE)
              </div>
              <div className=" right-auto font-bold text-slate-600 text-xs md:text-base">
                $187
              </div>
              <div className="flex flex-row md:mt-2">
                {Array(5)
                  .fill(0)
                  .map(() => (
                    <Icon
                      icon="emojione:glowing-star"
                      className="h-4 w-2 md:h-5 md:w-5 "
                    />
                  ))}
                <span className="text-slate-600 font-bold text-xs md:text-sm">
                  (87)
                </span>
              </div>
              <div className="md:mt-3 font-mono text-xs md:text-base">
                choose the color
              </div>
              <div className="">
                <button type="button" className=" rounded-full  focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-600 ">
                  <Icon icon="emojione:black-circle" className="h-6 w-6 md:h-8 md:w-8" />
                </button>
                <span> </span>
                <button type="button " className=" rounded-full focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-600  ">
                  <Icon icon="twemoji:green-circle" className="h-6 w-6 md:h-8 md:w-8" />
                </button>
              </div>
              <div className="md:mt-3 font-mono text-xs md:text-base">
                <span>choose the size</span>
                <div className="flex flex-rows gap-1.5 md:gap-2.5 md:mt-3">{color.map((item)=>(
                  
                    <div className="hiddden:peer"><button type="button" className="hover:bg-slate-500 text-center rounded-md bg-slate-400 text-white w-6 h-5 md:w-12 md:h-8   text-xs md:text-base flex justify-center items-center  focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-600  " tabindex="0">{item}</button></div>
                ))}</div>
                <div className="mt-1 md:mt-2 flex flex-rows gap-1.5 md:gap-2.5 ">
                  {
                    color2.map((item)=>(
                      <div><button type="button" className="text-center rounded-md hover:bg-slate-500 bg-slate-400 text-white  w-6 h-5 md:w-12 md:h-8  text-xs md:text-base flex justify-center items-center focus:ring-2 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-600 ">{item}</button></div>
                    ))
                  }
                </div>

              </div>
              
              <div className=" ">
                <button className=" bg-slate-600 rounded-md text-white mt-3 md:mt-8 w-28 md:w-56 h-6 md:h-8 hover:animate-bounce text-xs md:text-base">
                  add to bag
                </button>
              </div>
              <div className="absolute top-0 right-1">
                <Icon
                  icon="iconoir:cancel"
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