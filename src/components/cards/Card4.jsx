import React from 'react';

const Card4 = () => {
    
    return (
        <div>
      <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
        <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
          <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
            <div className="w-[284px] h-64 flex-col justify-start items-center gap-12 inline-flex">
              <p className="text-center text-white text-lg font-medium font-heading leading-snug">
                You also love collecting some
                <br />
                collectibles..
              </p>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-1 inline-flex">
                  <p className="text-center text-rose-pink text-[32px] font-bold font-heading leading-9">
                    25%
                  </p>

                  <div className="w-6 h-6 relative">
                    <img src="../public/arrow2.svg" alt="arrow" />
                  </div>
                </div>
                <p className="text-center text-stone-300 text-lg font-medium font-heading leading-snug">
                  We all get you, anon.
                </p>
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="flex-col justify-center items-center gap-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    140
                  </p>
                  <p className="text-center text-stone-300 text-base font-normal font-['DM Sans']">
                    Collected
                  </p>
                </div>
                <div className="flex-col justify-center items-center gap-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    12
                  </p>
                  <p className="text-center text-stone-300 text-base font-normal font-heading">
                    Traded
                  </p>
                </div>
                <div className="flex-col justify-center items-center gap-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    02
                  </p>
                  <p className="text-center text-stone-300 text-base font-normal font-heading whitespace-nowrap">
                    Holding Long
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    );
};

export default Card4;
