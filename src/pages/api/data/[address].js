import axios from "axios";
import { ethers } from "ethers";

export default async function handler(req, res) {
  let { address } = req.query;
  console.log(address);
  let balance;

  let provider = new ethers.JsonRpcProvider(
    "https://arb-mainnet.g.alchemy.com/v2/06e0RucPhx46jth_yOqRNKYtWY6mrElz"
  );
  if (address.includes(".eth")) {
    address = await provider.resolveName(address);
    console.log(address);
  }
  balance = await provider.getBalance(address);
  balance = ethers.formatEther(balance);
  console.log(balance);

  try {
    let request = await axios.post(
      "https://arb-mainnet.g.alchemy.com/v2/06e0RucPhx46jth_yOqRNKYtWY6mrElz",
      {
        id: 1,
        jsonrpc: "2.0",
        method: "alchemy_getAssetTransfers",
        params: [
          {
            fromBlock: "0x0",
            toBlock: "latest",
            toAddress: address,
            withMetadata: true,
            excludeZeroValue: true,
            maxCount: "0x3e8",
            category: ["erc20"],
          },
        ],
      }
    );
    let data = [];
    data = request.data.result.transfers;

    if (data.length > 0) {
      for (let i = 0; i < 5; i++) {
        let requestPageKey = request.data?.result?.pageKey;

        if (requestPageKey) {
          request = await axios.post(
            "https://arb-mainnet.g.alchemy.com/v2/06e0RucPhx46jth_yOqRNKYtWY6mrElz",
            {
              id: 1,
              jsonrpc: "2.0",
              method: "alchemy_getAssetTransfers",
              params: [
                {
                  fromBlock: "0x0",
                  toBlock: "latest",
                  toAddress: address,
                  withMetadata: true,
                  excludeZeroValue: true,
                  maxCount: "0x3e8",
                  category: ["erc20"],
                  pageKey: requestPageKey,
                },
              ],
            }
          );

          data = [...data, ...request.data.result.transfers];
        } else {
          break;
        }
      }

      //   find the highest value transaction
      let highestTransaction = data?.filter(
        (item) => item.value === Math.max(...data.map((item) => item.value))
      );

      // arbitrum sent
    //   let arbitrumSentTxns = data?.filter(
    //     (item) => item.from == address && item.to !== address
    //   );
    let arbitrumSentTxns = []
    let arbitrumReceivedTxn = []
    for(let i=0; i<data.length; i++){
        if (data[i].from?.toLowerCase() == address?.toLowerCase()) {
            arbitrumSentTxns.push(data[i])
        } else if (data[i].to?.toLowerCase() == address?.toLowerCase()) {
            arbitrumReceivedTxn.push(data[i])
        }
    }
      let arbitrumSent = arbitrumSentTxns.reduce((a, b) => a + b.value, 0);
      arbitrumSent = arbitrumSent.toString();
        arbitrumSent = arbitrumSent?.split(".")[0];
        arbitrumSent = parseInt(arbitrumSent);
      arbitrumSent = ethers.formatEther(arbitrumSent);

      let arbitrumReceived = arbitrumReceivedTxn.reduce(
        (a, b) => a + b.value,
        0
      );
        arbitrumReceived = arbitrumReceived.toString();
        arbitrumReceived = arbitrumReceived?.split(".")[0];
        arbitrumReceived = parseInt(arbitrumReceived);
        arbitrumReceived = ethers.formatEther(arbitrumReceived);

        // keep a count of individual data element's asset key which is the string
        // and then see what's the most frequent asset 
        // and then show that as the favourite token
        let assetKeyCount = {}

        for(let i=0; i<data.length; i++){
            if (assetKeyCount[data[i].asset]) {
                assetKeyCount[data[i].asset] += 1
            } else {
                assetKeyCount[data[i].asset] = 1
            }
        }
        // console.log(assetKeyCount)
        let favouriteToken = Object.keys(assetKeyCount).reduce((a, b) => assetKeyCount[a] > assetKeyCount[b] ? a : b);
        // console.log(favouriteToken)



      let totalValue = data.reduce((a, b) => a + b.value, 0);
      //   remove decimals
      totalValue = totalValue.toString();
      totalValue = totalValue?.split(".")[0];
      totalValue = parseInt(totalValue);
      totalValue = ethers.formatEther(totalValue);
    //   console.log(totalValue);

      let start_balance = balance - totalValue;
      let nft;
      //   make start balance 4% less
      start_balance = start_balance - (start_balance * 4) / 100;
    //   console.log(start_balance);

      //   Now NFTs
      //     curl --location 'https://arb-mainnet.g.alchemy.com/nft/v3/06e0RucPhx46jth_yOqRNKYtWY6mrElz/getNFTsForOwner?owner=0x5E8bb171EfB4EF1DA79479C794d5B8ec550233f1&withMetadata=true&pageSize=100' \
      // --header 'accept: application/json' \
      // --header 'Cookie: _cfuvid=gmU0f3lG98SOS_f_9_H3aKlvKMLYtEXHY8xVT5l3CxA-1702115911801-0-604800000'

      let nftResponse = await axios.get(
        `https://arb-mainnet.g.alchemy.com/nft/v3/06e0RucPhx46jth_yOqRNKYtWY6mrElz/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`
      );
      // console.log(nftResponse.data)
      let nftData = nftResponse.data?.ownedNfts;
      let nftCount = nftResponse.data?.totalCount;

      let erc721NFTs = [];
      if (nftData?.length) {
        erc721NFTs = nftData.filter((item) => item.tokenType === "ERC721");
        // console.log(erc721NFTs)
        if (erc721NFTs?.length) {
          let floor_price = 0;
          let i = 0;
          while (floor_price === 0) {
            if (floor_price !== 0) {
              break;
            }
            if (i === 10) {
              break;
            }

            let randomIndex = Math.floor(Math.random() * erc721NFTs.length);
            let randomNFT = erc721NFTs[randomIndex];
            // console.log(randomNFT)

            const contractRes = await axios.get(
              `https://api.opensea.io/api/v2/chain/arbitrum/contract/${randomNFT.contract?.address}`,
              {
                headers: {
                  "x-api-key": "73ef0c5f70374550a9d26e9826cc4a39",
                },
              }
            );
            let collectionSlug = contractRes.data?.collection;

            if (collectionSlug) {
              const collectionStats = await axios.get(
                `https://api.opensea.io/api/v2/collections/${collectionSlug}/stats`,
                {
                  headers: {
                    "x-api-key": "73ef0c5f70374550a9d26e9826cc4a39",
                  },
                }
              );
              floor_price = collectionStats?.data?.total?.floor_price;

              nft = {
                ...randomNFT,
                floor_price,
              };
            }
          }
        }
      }

      //   compare start_balance and current balance
      //   if current balance is higher then user has made profit
      //   else user has made loss
      // and show the profit/loss percentage
      let profit = balance - start_balance;
      let percentage = (profit / start_balance) * 100;
      percentage = percentage.toFixed(2);

      res
        .status(200)
        .json({ success: true, highestTransaction, nftCount, nft, percentage, arbitrumSent, arbitrumReceived, favouriteToken });
    } else {
      res.status(200).json({ success: true, data: [] });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
}
