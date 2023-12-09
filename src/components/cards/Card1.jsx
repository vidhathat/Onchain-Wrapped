import React from 'react';

const Card1 = () => {
    return (
        <div>
      <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
        <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
          <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
            <div className="text-center">
              <span className="text-white text-[32px] font-semibold font-heading leading-[38.40px]">
                Your {""}
              </span>
              <span className="text-white text-[32px] font-semibold font-heading leading-[38.40px]">
                2023 in<br/>
              </span>
              <span className='text-[32px] text-emerald-400 font-semibold font-heading leading-[38.40px]'>Arbitrum Wrapped 👀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Card1;
