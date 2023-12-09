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
      }

      //   find the highest value transaction
      let highestTransaction = data?.filter(
        (item) => item.value === Math.max(...data.map((item) => item.value))
      );

      let totalValue = data.reduce((a, b) => a + b.value, 0);

      res.status(200).json({ success: true, data: highestTransaction });
    } else {
      res.status(200).json({ success: true, data: [] });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
}
