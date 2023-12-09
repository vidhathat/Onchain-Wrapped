import React from 'react';

const Card2 = () => {
    const percent = 10;
    return (
        <div>
        <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
          <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
            <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
              <div className="w-[267px] h-[149px] flex-col justify-start items-center gap-4 inline-flex">
                <p className="text-center text-white text-lg font-medium font-heading leading-tight">
                  Looking at your Txns..
                </p>
                <p className="text-center">
                  <span className="text-white text-[32px] font-bold font-heading leading-[38.40px]">
                    You’re in <br />
                    Top 
                  </span>
                  <span className="text-emerald-400 text-[32px] font-bold font-heading leading-[38.40px]">
                    &nbsp; ${percent} Users
                  </span>
                  <span className="text-white text-[32px] font-bold font-heading leading-[38.40px]">
                  &nbsp;of <br />
                    Arbitrum{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card2;
