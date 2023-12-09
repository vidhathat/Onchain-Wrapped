import React from 'react';

const Card5 = () => {
    
    return (
        <div>
      <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
        <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
          <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
            <div className="w-[315px] h-64 flex-col justify-start items-center gap-12 inline-flex">
              <p className="text-center text-white text-lg font-medium font-heading leading-snug gap-12">
                Top ones from the wallet..
              </p>

              <div className="w-[278px] h-[177px] justify-start items-start gap-12 inline-flex">
                <div className="flex-col justify-start items-center gap-4 inline-flex">
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <img
                      className="w-[92px] h-[92px] rounded-xl"
                      src="https://via.placeholder.com/92x92"
                    />
                    <p className="text-center text-zinc-400 text-sm font-normal font-heading">
                      Polar Paw #263
                    </p>
                  </div>
                  <div className="flex-col justify-start items-center gap-1 flex">
                    <p className="text-center text-white text-base font-bold font-heading leading-[17.60px]">
                      100 ARB
                    </p>
                    <p className="text-center text-zinc-400 text-base font-normal font-heading">
                      Your Highest Paid
                    </p>
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-4 inline-flex">
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <img
                      className="w-[92px] h-[92px] rounded-xl"
                      src="https://via.placeholder.com/92x92"
                    />
                    <div className="text-center text-zinc-400 text-sm font-normal font-heading">
                      Polar Paw #263
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-1 flex">
                    <div className="text-center text-white text-base font-bold font-heading leading-[17.60px]">
                      50 ARB
                    </div>
                    <div className="text-center text-zinc-400 text-base font-normal font-heading whitespace-nowrap">
                      Highest Profit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    );
};

export default Card5;
