import React from 'react';
import Image from 'next/image'

const Card5 = (nft) => {
  const { nft: { name } } = nft;
  const { nft: { image: { cachedUrl }}} = nft;
  const { nft: { floor_price}} = nft;


console.log(name);

    console.log('nft is', nft)
    return (
        <div>
      <div className=" flex  items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue  ">
        <div className=" flex  items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
          <div className="flex  items-center justify-center w-[370px] h-[370px] bg-light-blue">
            <div className="w-[315px] h-64 flex-col justify-center items-center gap-12 inline-flex">
              <p className="text-center text-white text-lg font-medium font-heading leading-snug gap-12">
                Top ones from the wallet..
              </p>

              <div className="w-[278px] h-[177px] justify-center items-start gap-12 inline-flex">
                <div className="flex-col justify-center items-center gap-4 inline-flex">
                  <div className="flex-col justify-center items-center gap-2 flex">
                    <Image
                    height={92} width={92}
                      className="w-[92px] h-[92px] rounded-xl"
                      src={cachedUrl}
                    />
                    <p className="text-center text-zinc-400 text-sm font-normal font-heading">
                      {name}
                    </p>
                  </div>
                  <div className="flex-col justify-center items-center gap-1 flex">
                    <p className="text-center text-white text-base font-bold font-heading leading-[17.60px]">
                    {floor_price} ARB
                    </p>
                    <p className="text-center text-zinc-400 text-base font-normal font-heading">
                      Your Highest Paid NFt
                    </p>
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
