require('dotenv').config()
import "hardhat-deploy"
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"

import { HardhatUserConfig } from "hardhat/config"

console.log("MAINNET_FORKIN_URL", process.env.MAINNET_FORKIN_URL)
console.log("RINKEBY_URL", process.env.RINKEBY_URL)
console.log("MNEMONIC", process.env.RINKEY_MNEMONIC)

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4"
  },
  typechain: {
    outDir: "typechain"
  },
  namedAccounts: {
    deployer: 0
  },
  verify: {
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY || ""
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_FORKIN_URL || ""
      }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: {
        mnemonic: process.env.RINKEY_MNEMONIC || ""
      }
    }
  },
}

export default config;