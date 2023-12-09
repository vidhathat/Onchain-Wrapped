import React from 'react';

const Card3 = () => {
    
    return (
        <div>
      <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
        <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
          <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
            <div className="w-[315px] h-64 flex-col justify-start items-center gap-12 inline-flex">
              <div className="text-center text-white text-lg font-medium font-heading leading-snug">
                We see that you love transacting <br />
                on Arbitrum
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-1 inline-flex">
                  <p className="text-center text-emerald-400 text-[32px] font-bold font-heading leading-9">
                    25%
                  </p>

                  <div className="w-6 h-6 relative">
                    <img src="../public/arrow.svg" alt="arrow" />
                  </div>
                </div>
                <p className="text-center text-white text-xl font-medium font-heading leading-snug">
                  You portfolio did well!
                </p>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-center gap-1 mr-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    100
                  </p>
                  <div className="text-center text-stone-300 text-xl font-normal font-heading">
                    ARB Spent
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    50
                  </p>
                  <div className="text-center text-stone-300 text-xl font-normal font-sans">
                    ARB Received
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    );
};

export default Card3;
