import React from 'react';

const Card6 = ({percentage, favToken,nftCount,nftData}) => {
console.log('nftData', nftData)
    return (
        <div className="w-[570px] h-[300px] relative">
      <div className="w-[570px] h-[300px] left-0 top-0 absolute bg-neutral-800" />
      <div className="w-[246px] h-[300px] left-0 top-0 absolute bg-gray-800" />
      <div className="w-[75px] h-[23px] left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
        <div className="w-[47.10px] h-[7px] relative">
          <div className="w-[47.10px] h-[7px] left-[-0px] top-[-0px] absolute">
            <div className="w-[46.98px] h-[7px] left-[0.13px] top-[-0px] absolute"></div>
          </div>
        </div>
        <div className="text-center text-white text-xs font-bold font-heading leading-3">
          Wrapped ‘23
        </div>
      </div>
      <div className="w-[117px] h-6 left-[24px] top-[252px] absolute justify-start items-center gap-1.5 inline-flex">
        <div className="w-6 h-6 bg-yellow-500 rounded-full" />
        <div className="text-white text-opacity-90 text-xs font-medium font-heading">
          FLiPgg...5weaZ7
        </div>
      </div>
      <div className="w-52 h-[236px] left-[299px] top-[32px] absolute flex-col justify-start items-start gap-8 inline-flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-8 h-8 bg-gray-800 rounded-full" />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-white text-sm font-bold font-heading leading-none">
              583
            </div>
            <div className="text-stone-300 text-xs font-normal font-heading">
              Transactions Done
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="w-8 h-8 bg-gray-800 rounded-full" />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-white text-sm font-bold font-heading leading-none">
              {nftCount}
            </div>
            <div className="text-stone-300 text-xs font-normal font-heading whitespace-nowrap">
              Total NFT's
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="w-8 h-8 bg-gray-800 rounded-full" />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-white text-sm font-bold font-heading leading-none">
              {favToken}
            </div>
            <div className="text-stone-300 text-xs font-normal font-heading whitespace-nowrap">
              Favourite Token
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="w-8 h-8 bg-gray-800 rounded-full" />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-white text-sm font-bold font-heading leading-none">
              {nftData.contract.name}
            </div>
            <div className="text-stone-300 text-xs font-normal font-heading">
              Most Priced NFT
            </div>
          </div>
        </div>
      </div>
      <div className="w-[174px] h-12 left-[24px] top-[126px] absolute justify-start items-start gap-3 inline-flex">
        <div className="w-12 h-12 bg-neutral-800 rounded-xl" />
        <div className="flex-col justify-center items-start gap-1 inline-flex">
          {/* <div className="justify-center items-center gap-1 inline-flex">
            <div className="text-center text-rose-500 text-2xl font-bold font-heading leading-relaxed">
              {percentage}%
            </div>
            <div className="w-6 h-6 relative origin-top-left rotate-180" />
          </div> */}
           <div className="justify-center items-center gap-1 inline-flex">
              <p className={`text-center ${percentage < 0 ? 'text-[#E25376]' : 'text-emerald-400'} text-[32px] font-bold font-heading leading-9`}>
                {percentage}
              </p>

              <div className="w-6 h-6 relative">
                <img src={percentage < 0 ? "./arrow2.svg" : "./arrow.svg"} alt="arrow" />
              </div>
            </div>
          <div className="text-center text-stone-300 text-sm font-normal font-heading whitespace-nowrap">
            Portfolio Changes
          </div>
        </div>
      </div>
    </div>   
     );
};

export default Card6;
