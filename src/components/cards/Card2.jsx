import React from 'react';

const Card2 = ({transactions}) => {
  // console.log('transactions are', transactions)
    const transactionDate = new Date(transactions.metadata.blockTimestamp);
const month = transactionDate.toLocaleString('default', { month: 'long' });
const day = transactionDate.getDate();

    return (
        <div>
        <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
          <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
            <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
              <div className="w-[267px] h-[149px] flex-col justify-start items-center gap-4 inline-flex">
                <p className="text-center text-white text-lg font-medium font-heading leading-tight">
                  Looking at your Txns..
                </p>
                <div className="flex-col justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-1 inline-flex">
                
                </div>
                <p className="text-center text-white text-xl font-medium font-heading leading-snug">
                <p>Wow! On {day} {month} You really splurged on <span className="text-emerald-400">{transactions.asset}</span> with a whopping purchase of</p>
                </p>
                <p className={`text-center text-emerald-400 text-[32px] font-bold font-heading leading-9`}>
                    {transactions.value.toFixed(0)} ARB
                  </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card2;
