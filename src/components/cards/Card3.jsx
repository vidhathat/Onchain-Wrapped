import React from 'react';

const Card3 = ({percentage,sent,received}) => {
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
              <p className={`text-center ${percentage < 0 ? 'text-[#E25376]' : 'text-emerald-400'} text-[32px] font-bold font-heading leading-9`}>
                {percentage}
              </p>

              <div className="w-6 h-6 relative">
                <img src={percentage < 0 ? "./arrow2.svg" : "./arrow.svg"} alt="arrow" />
              </div>
            </div>
            <p className="text-center text-white text-xl font-medium font-heading leading-snug">
              {percentage < 0 
                ? 'Ouch! Your portfolio took a hit!'
                : percentage > 0
                  ? 'Woohoo! Your portfolio did well!'
                  : 'Your portfolio is enjoying a well-deserved nap.'}
            </p>
          </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-center gap-1 mr-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    {sent}
                  </p>
                  <div className="text-center text-stone-300 text-xl font-normal font-heading">
                    ARB Spent
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-1 inline-flex">
                  <p className="text-center text-white text-2xl font-bold font-heading leading-relaxed">
                    {parseFloat(parseFloat(received).toFixed(8))}
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
