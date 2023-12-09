import React from 'react';

const Card4 = ({nftCount}) => {

  const getNftMessage = (nftCount) => {
    if (nftCount < 50) {
      return "You're just getting started with your NFT collection!";
    } else if (nftCount > 50 && nftCount <= 100) {
      return "Nice! Your NFT collection is growing!";
    } else if (nftCount > 100 && nftCount <= 200) {
      return "Wow! You've collected over 100 NFTs!";
    } else if (nftCount > 200 && nftCount <= 500) {
      return "Impressive! Your NFT collection is over 200!";
    } else if (nftCount > 500) {
      return "Incredible! You've collected over 500 NFTs!";
    }
  };
  
  // Usage
  const nftMessage = getNftMessage(nftCount);
    
    return (
<div>
  <div className="flex items-center justify-center m-1 w-[530px] h-[500px] bg-dark-blue">
    <div className="flex items-center justify-center w-[466px] h-[436px] bg-neutral-blue">
      <div className="flex items-center justify-center w-[370px] h-[370px] bg-light-blue">
        <div className="w-[284px] h-64 flex-col justify-start items-center gap-12 inline-flex">
          <p className="text-center text-white text-lg font-medium font-heading leading-snug">
            You also love collecting some<br/> collectibles..
          </p>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="justify-center items-center gap-1 inline-flex">
              <p className="text-center text-emerald-400 text-[32px] font-bold font-heading leading-9">
                {nftCount} NFT's 
              </p>
            </div>
            <p className="text-center text-stone-300 text-lg font-medium font-heading leading-snug">
              {getNftMessage(nftCount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
    );
};

export default Card4;
